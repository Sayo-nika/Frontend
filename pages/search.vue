<template>
  <v-app>
    <v-navigation-drawer app clipped>
      <v-form ref="search">
        <!-- <v-subheader>Results</v-subheader>
        <div class="search__drawer-container">
          <v-checkbox v-model="active.users" label="Users"/>
          <v-checkbox v-model="active.mods" label="Mods"/>
        </div>

        <v-divider/> -->

        <!-- <h3 class="search__drawer-container titles primary--text mt-3">Mods</h3> -->

        <v-subheader>Mod State</v-subheader>
        <div class="search__drawer-container">
          <v-checkbox v-model="filters.released" label="Released"/>
          <v-checkbox v-model="filters.playtesting" label="Playtesting"/>
          <v-checkbox v-model="filters.inDevelopment" label="In Development"/>
        </div>

        <v-subheader>Mod Rating</v-subheader>
        <div class="search__drawer-container">
          <v-radio-group v-model="filters.radio" :mandatory="false">
            <v-radio label="4.5 - 5" value="4.5 - 5"/>
            <v-radio label="3.5 - 4" value="3.5 - 4"/>
            <v-radio label=">= 3" value=">= 3.5"/>
          </v-radio-group>
        </div>

        <v-subheader>Mod Category</v-subheader>
        <div class="search__drawer-container is-fullwidth">
          <v-select v-model="filters.category" :items="categories" label="Select a Category" box/>
        </div>

        <v-subheader>Mod Sorting</v-subheader>
        <div class="search__drawer-container is-fullwidth">
          <v-select v-model="sorting.mods" :items="sorting.modsItems" label="Sorting" box/>
        </div>

        <v-divider/>

        <!-- <h3 class="search__drawer-container titles primary--text mt-3">Users</h3> -->

        <v-subheader>User Sorting</v-subheader>
        <div class="search__drawer-container is-fullwidth">
          <v-select v-model="sorting.users" :items="sorting.usersItems" label="Sorting" box/>
        </div>
      </v-form>
    </v-navigation-drawer>

    <navbar no-search drawer-btn/>

    <v-content>
      <v-container fluid>
        <v-layout class="search" column fill-height>
          <v-text-field v-model="search" class="search" label="Search" prepend-inner-icon="mdi-magnify" outline @blur="focused = false" @focus="focused = true">
            <v-tooltip slot="append" bottom>
              <v-btn slot="activator" :disabled="!focused || !search" class="search__close" color="primary" flat icon @click="clear">
                <v-icon>mdi-close</v-icon>
              </v-btn>

              <span>Clear</span>
            </v-tooltip>
          </v-text-field>

          <v-list class="search__results mb-4 elevation-3" two-line>
            <v-subheader class="primary--text">
              Mods
            </v-subheader>

            <v-list-tile v-for="i in 5" :key="`mod-${i}`" avatar @click="void 0">
              <v-list-tile-avatar>
                <img src="https://placeimg.com/128/128/people" alt="icon">
              </v-list-tile-avatar>

              <v-list-tile-content>
                <v-list-tile-title>Title</v-list-tile-title>
                <v-list-tile-sub-title>*screams*</v-list-tile-sub-title>
              </v-list-tile-content>

              <v-list-tile-action>
                <v-btn color="primary" depressed ripple>View</v-btn>
              </v-list-tile-action>
            </v-list-tile>

            <v-layout class="mt-2" justify-center>
              <v-pagination v-model="modPage" :length="10" :total-visible="paginationVisible"/>
            </v-layout>
          </v-list>

          <v-list class="search__results elevation-3" two-line>
            <v-subheader class="primary--text">
              Users
            </v-subheader>

            <v-list-tile v-for="i in 5" :key="`user-${i}`" avatar @click="void 0">
              <v-list-tile-avatar>
                <img src="https://placeimg.com/128/128/people" alt="icon">
              </v-list-tile-avatar>

              <v-list-tile-content>
                <v-list-tile-title>Title</v-list-tile-title>
                <v-list-tile-sub-title>*screams*</v-list-tile-sub-title>
              </v-list-tile-content>

              <v-list-tile-action>
                <v-btn color="primary" depressed ripple>View</v-btn>
              </v-list-tile-action>
            </v-list-tile>

            <v-layout class="mt-2" justify-center>
              <v-pagination v-model="userPage" :length="10" :total-visible="paginationVisible"/>
            </v-layout>
          </v-list>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Navbar from '~/components/Navbar.vue';

export default {
  layout: 'blank',
  components: {Navbar},
  watchQuery: true,
  data() {
    const query = this.$route.query;

    return {
      focused: false,
      modPage: 1,
      userPage: 1,

      search: query.q || '',

      // TODO: put other query string variables into here
      active: {
        users: true,
        mods: true
      },
      filters: {
        released: false,
        playtesting: false,
        inDevelopment: false,
        rating: null,
        category: null
      },
      sorting: {
        mods: null,
        modsItems: [],
        uses: null,
        usersItems: []
      },
      categories: ['All', 'Dating', 'Miscellaneous']
    };
  },
  computed: {
    paginationVisible() {
      return this.$vuetify.breakpoint.mdAndDown
        ? 5
        : this.$vuetify.breakpoint.xs
          ? 3
          : 7;
    }
  },
  methods: {
    clear() {
      this.search = '';
    }
  }
};
</script>

<style lang="stylus">
.search .v-input__append-inner {
  margin-top: 9px !important;
}

.search__close {
  margin: 0;
}

.search__drawer-container {
  display: flex;
  flex-direction: column;
  margin: 0 16px;

  &.is-fullwidth {
    margin: 0;
  }

  & .v-input {
    padding: 0;
    margin: 0;
  }

  & .v-input__slot,
  & .v-text-field__details {
    margin-bottom: 0 !important;
  }
}
</style>
