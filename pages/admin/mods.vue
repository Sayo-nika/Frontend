<template>
  <div>
    <header class="mb-4">
      <h1 class="display-2">Mods</h1>
      <h2 class="headline grey--text text--darken-1">There are <strong>{{ total }}</strong> mods in the queue.</h2>

      <v-layout align-center mt-2>
        <v-menu>
          <template #activator="{on}">
            <v-btn outline v-on="on">
              {{ sort }}
              <v-icon right>
                mdi-chevron-down
              </v-icon>
            </v-btn>
          </template>

          <v-list>
            <v-list-tile ripple @click="sort = 'Submitted'">
              <v-list-tile-title>
                Submitted
              </v-list-tile-title>
            </v-list-tile>

            <v-list-tile ripple @click="sort = 'Name'">
              <v-list-tile-title>
                Name
              </v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-menu>

        <v-checkbox class="ml-2" label="Ascending"/>
      </v-layout>
    </header>

    <v-list v-if="pendingMods.length" class="transparent" avatar three-line>
      <v-card v-for="mod in pendingMods" :key="`pendingMod-${mod.id}`" class="mb-3 verify-entry__card" :style="`background-image: url(${mod.banner});`">
        <v-list-tile class="verify-entry">
          <v-list-tile-avatar color="primary">
            <img v-if="mod.icon" :src="mod.icon">
            <template v-else>{{ initial(mod.title) }}</template>
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title>
              {{ mod.title }}
            </v-list-tile-title>

            <v-list-tile-sub-title>
              Submitted by {{ mod.owner.username }}
              <br>
              On {{ formatDate(mod.created_at) }}
            </v-list-tile-sub-title>
          </v-list-tile-content>

          <v-spacer/>

          <v-list-tile-action>
            <v-btn color="primary" depressed @click="selection = mod">View</v-btn>
          </v-list-tile-action>
        </v-list-tile>
      </v-card>
    </v-list>
    <v-layout v-else align-center justify-center my-5>
      <i class="headline grey--text text--darken-1">No mods to verify!</i>
    </v-layout>

    <v-dialog v-if="selection" v-model="dialogOpen" max-width="1000">
      <v-card>
        <v-card-text>-*
          <header class="align-center pa-5" style="display: flex;">
            <v-avatar class="elevation-4 mr-4" color="primary" size="192">
              <img :src="selection.icon">
            </v-avatar>

            <div>
              <h1 class="display-1">{{ selection.title }}</h1>

              <div class="align-center mt-3" style="flex-wrap: wrap; display: flex;">
                <h2 class="headline mr-2">By</h2>

                <v-chip>
                  <v-avatar color="primary">
                    <img :src="selection.owner.avatar">
                  </v-avatar>
                  {{ selection.owner.username }}
                </v-chip>

                <v-chip v-for="u in selection.authors" :key="u.id">
                  <v-avatar color="primary">
                    <img :src="u.avatar">
                  </v-avatar>
                  {{ u.username }}
                </v-chip>
              </div>
            </div>
          </header>
        </v-card-text>

        <v-card-text class="px-5 py-2">
          <v-layout column>
            <h2 class="headline mb-2">Description</h2>
            <height-transition>
              <p v-if="!expandedDescription">
                {{ selection.tagline }}
              </p>
            </height-transition>

            <v-btn class="px-5 align-self-center" color="secondary" flat round @click="expandedDescription = !expandedDescription">
              Read {{ !expandedDescription ? 'More' : 'Less' }}
            </v-btn>

            <height-transition>
              <p v-if="expandedDescription" style="white-space: pre-line;">
                {{ selection.description.trim() }}
              </p>
            </height-transition>
          </v-layout>
        </v-card-text>

        <v-responsive :aspect-ratio="21/9">
          <ai-carousel tile>
            <v-carousel-item :src="selection.banner || ''"/>
          </ai-carousel>
        </v-responsive>

        <v-card-actions class="py-4">
          <v-spacer/>
          <v-btn :disabled="loading" :loading="loading" color="accent" block depressed @click="verify">Approve</v-btn>
          <v-btn :disabled="loading" :loading="loading" color="secondary" block depressed @click="decline">Deny</v-btn>
          <v-spacer/>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import {format} from 'date-fns';
import {without} from 'rambda';
import AiCarousel from '~/components/AiCarousel.vue';
import HeightTransition from '~/components/HeightTransition.vue';

export default {
  components: {
    AiCarousel,
    HeightTransition
  },
  layout: 'admin',
  middleware: 'admin',
  data() {
    return {
      sort: 'Submitted',

      loading: false,

      expandedDescription_: false,
      selection_: null,
      dialogOpen_: false
    };
  },
  computed: {
    expandedDescription: {
      set(value) {
        this.expandedDescription_ = value;
      },
      get() {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        if (!this.selection) return (this.expandedDescription_ = false);
        else return this.expandedDescription_;
      }
    },
    selection: {
      set(value) {
        this.selection_ = value;
        this.dialogOpen_ = true;
      },
      get() {
        return this.selection_;
      }
    },
    dialogOpen: {
      set(value) {
        if (this.loading) return;

        if (!value) this.selection_ = null;
        this.dialogOpen_ = value;
      },
      get() {
        return this.dialogOpen_;
      }
    }
  },
  async asyncData({$axios}) {
    const {result: {
      results: pendingMods,
      total,
      page,
      limit
    }} = await $axios.$get('/mods/verify_queue?limit=100&get_all_authors=true');

    return {pendingMods, total, page, limit};
  },
  methods: {
    initial(value) {
      return value ? value[0].toUpperCase() : '';
    },
    formatDate(date) {
      return format(date, 'MMMM D, YYYY');
    },
    async verify() {
      this.loading = true;

      try {
        await this.$axios.$post(`/mods/${this.selection.id}/verify`);
      } catch (err) {
        console.error(err);
        this.loading = false;
        return;
      }

      this.dialogOpen = false;
      this.loading = false;
      this.pendingMods = without([this.selection], this.pendingMods);
      this.selection = null;
    },
    async decline() {
      this.loading = true;

      try {
        await this.$axios.$delete(`/mods/${this.selection.id}`);
      } catch (err) {
        console.error(err);
        this.loading = false;
        return;
      }

      this.dialogOpen = false;
      this.loading = false;
      this.pendingMods = without([this.selection], this.pendingMods);
      this.selection = null;
    }
  }
};
</script>

<style lang="stylus">
@import '~vuetify/src/stylus/settings/_elevations'

.verify-entry
  position: relative;
  background-image: url('~assets/img/login-bg.jpg');
  background-position: left center;

  &::before
    content: "";
    background-image: linear-gradient(to right, rgba(255, 255, 255, 0.5), #FFF 50%);
    position: absolute;
    height: 100%;
    width: 100%;
    border-radius: 8px;

.verify-entry__card:hover
  elevation(10, true);
</style>
