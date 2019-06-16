<template>
  <div class="navsearch__wrapper mx-4">
    <div ref="container" :class="['navsearch__container', {'is-focused': focused}]" @click="focused = true">
      <div class="v-input navsearch theme--light">
        <!-- <div class="v-input__prepend-outer">
          <label class="v-input__icon v-input__icon--prepend" for="navsearch">
          </label>
        </div> -->

        <div class="v-input__control">
          <div class="v-input__slot">
            <input id="navsearch" ref="input" v-model="text" :class="!focused ? 'is-inactive' : 'primary--text'" aria-label="Search" type="text"
                   placeholder="Search" @focus="focused = true" @keyup.enter="goToSearch">
          </div>
        </div>

        <div class="v-input__append-outer">
          <div class="v-input__icon v-input__icon--append">
            <transition name="fade-abs">
              <v-icon v-if="!focused">mdi-magnify</v-icon>
              <v-btn v-else :disabled="!text" class="primary--text" flat icon @click="text = ''">
                <v-icon>mdi-close</v-icon>
              </v-btn>
            </transition>
          </div>
        </div>
      </div>

      <v-fade-transition>
        <div v-if="focused" class="navsearch__results">
          <v-subheader v-if="!text" class="navsearch__results-meta">
            Type to start searching...
          </v-subheader>

          <template v-if="text">
            <v-list class="navsearch__results-list" two-line>
              <v-subheader class="primary--text">
                Mods

                <v-spacer/>

                <v-btn :to="`/search/mods?q=${text}`" color="primary" flat icon nuxt>
                  <v-icon>mdi-arrow-right</v-icon>
                </v-btn>
              </v-subheader>

              <v-list-tile avatar @click="void 0">
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

              <v-divider/>
              <v-subheader class="primary--text">
                Users

                <v-spacer/>

                <v-btn :to="`/search/users?q=${text}`" color="primary" flat icon nuxt>
                  <v-icon>mdi-arrow-right</v-icon>
                </v-btn>
              </v-subheader>

              <v-list-tile avatar @click="void 0">
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
            </v-list>
          </template>
        </div>
      </v-fade-transition>
    </div>

    <v-fade-transition>
      <div v-if="focused" class="navsearch__scrim"/>
    </v-fade-transition>
  </div>
</template>

<script>
function getParentList(el) {
  let ref = el;
  const list = [];

  while (ref.parentElement) list.push(ref = ref.parentElement);

  return list;
}

export default {
  data() {
    return {
      focusedVal: false,
      text: '',
      results: []
    };
  },
  computed: {
    focused: {
      get() {
        return this.focusedVal;
      },
      set(val) {
        if (val) this.$refs.input.focus();

        this.focusedVal = val;
      }
    }
  },
  mounted() {
    const cb = ev => {
      const targetParents = getParentList(ev.target);

      if (this.focused && !targetParents.includes(this.$refs.container)) this.focused = false;
    };

    document.addEventListener('click', cb);
    this.$_click = cb;
  },
  beforeDestroy() {
    document.removeEventListener('click', this.$_click);
    delete this.$_click;
  },
  methods: {
    goToSearch() {
      this.focused = false;
      this.$router.push(`/search?q=${this.text}`);
    }
  }
};
</script>

<style lang="stylus">
@import '~vuetify/src/stylus/settings/_variables'
@import '~vuetify/src/stylus/settings/_elevations'

.display-none
  display: none !important;

.fade-abs
  &-leave-active, &-enter-active
    position: absolute;
    margin: 0 !important;

  &-enter-active, &-leave, &-leave-to
    transition: opacity $primary-transition;

  &-enter, &-leave-to
    opacity: 0;

.is-inactive
  color: $material-light.text.secondary !important;

.navsearch
  align-items: center;
  background: rgba(0, 0, 0, 0.12);
  padding: 8px 16px;
  border-radius: 24px;
  transition: $primary-transition;
  z-index: 10;

  &__wrapper
    flex: 3 1 auto;
    max-width: 100%;
    position: relative;

  &__container
    position: relative;
    z-index: 5;
    transition: $primary-transition;

    &.is-focused
      elevation(4);

      .navsearch
        background: #FFF;
        border-radius: 24px 24px 0 0;

        .v-input__slot > input::placeholder
          color: $material-light.text.disabled;

      .navsearch__results
        elevation(4);

  .v-input__slot
    margin-bottom: 0;

    > input
      width: 100%;
      text-align: center;

    > input::placeholder
      text-align: center;
      color: $material-light.text.disabled;
      transition: $primary-transition;

  &__results
    position: absolute;
    background: #FFF;
    width: 100%;
    border-radius: 0 0 24px 24px;
    z-index: 9001;

  &__results-meta
    background: #eee;

    &:only-child
      border-radius: 0 0 24px 24px;

  &__results-expand
    border-radius: 0;
    height: 40px;
    padding: 0;
    margin: 0;

  &__results-list
    border-radius: 0 0 24px 24px !important;

    .v-list__tile
      padding: 0 5%;

  &__scrim
    position: fixed;
    background: rgba(0, 0, 0, 0.25);
    top: 0;
    left: 0;
    width: 100vw;
    height: calc(100vh);
    z-index: 4;
</style>
