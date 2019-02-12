<template>
  <v-toolbar class="navbar" app clipped-left flat>
    <div class="navbar__part">
      <v-toolbar-side-icon v-if="drawerBtn" class="hidden-md-and-up"/>
      <nuxt-link class="mr-4 navbar__logo" to="/">
        <img src="~/assets/img/logo.svg" alt="Sayonika logo" :height="$vuetify.breakpoint.mdAndUp ? 58 : 48">
      </nuxt-link>
    </div>

    <nav-search v-if="!noSearch" v-show="$vuetify.breakpoint.mdAndUp"/>

    <div class="navbar__part is-end">
      <v-toolbar-items v-if="!user">
        <nuxt-link :to="`/login?redir=${encodeURIComponent($route.fullPath)}`" class="navbar__login primary--text">
          <v-icon color="primary" large left>mdi-login</v-icon>
          Log In
        </nuxt-link>
      </v-toolbar-items>

      <v-toolbar-items v-else class="navbar__user">
        <v-tooltip class="tooltip-fix-span" bottom>
          <v-btn slot="activator" to="/submit-mod" flat icon large nuxt>
            <v-icon color="primary" size="36">mdi-plus</v-icon>
          </v-btn>
          <span>Add a Mod</span>
        </v-tooltip>

        <div style="height: 48px; display: flex;">
          <v-menu nudge-bottom="8px" left offset-y full-width>
            <a slot="activator" class="navbar__user-menu">
              <img src="https://avatars2.githubusercontent.com/u/18654005" alt="user icon" class="navbar__user-icon" width="48" height="48">
              <v-icon class="ml-2" color="primary" size="32">mdi-chevron-down</v-icon>
            </a>

            <v-list class="navbar__user-menu__header" two-line>
              <v-list-tile>
                <v-list-tile-avatar>
                  <img src="https://avatars2.githubusercontent.com/u/18654005" alt="user icon">
                </v-list-tile-avatar>

                <v-list-tile-content>
                  <v-list-tile-title>{{ user.username }}</v-list-tile-title>
                  <v-list-tile-sub-title>{{ user.email }}</v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
            </v-list>

            <v-list>
              <v-list-tile to="/profile" nuxt ripple>
                <v-list-tile-content>Profile</v-list-tile-content>
              </v-list-tile>
              <v-list-tile to="/settings" nuxt ripple>
                <v-list-tile-content>Settings</v-list-tile-content>
              </v-list-tile>
              <v-list-tile v-if="user.moderator || user.developer" to="/admin" nuxt ripple>
                <v-list-tile-content>Admin Dashboard</v-list-tile-content>
              </v-list-tile>

              <v-divider/>

              <v-list-tile ripple @click="logout">
                <v-list-tile-content>Log Out</v-list-tile-content>
              </v-list-tile>
            </v-list>
          </v-menu>
        </div>
      </v-toolbar-items>
    </div>

    <v-dialog v-model="dialog" max-width="500">
      <v-card>
        <v-card-text>
          You are now logged out.
        </v-card-text>

        <v-card-actions>
          <v-spacer/>
          <v-btn color="primary" depressed @click="dialog = false">Ok</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-toolbar>
</template>

<script>
import NavSearch from '~/components/NavSearch.vue';

export default {
  components: {NavSearch},
  props: {
    drawerBtn: {
      type: Boolean,
      default: false
    },
    noSearch: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      dialog: false
    };
  },
  computed: {
    user() {
      return this.$store.state.auth.user;
    }
  },
  methods: {
    logout() {
      this.$store.commit('auth/setToken', null);
      this.$store.commit('auth/setUser', null);

      if (this.$cookies.get('token')) this.$cookies.remove('token');

      this.dialog = true;
    }
  }
};
</script>

<style lang="stylus">

.tooltip-fix-span > span
  display: flex;

.navbar
  // > .v-toolbar__content
  //   padding: 0 2rem;

  &__logo
    display: flex;
    align-items: center;
    position: relative;
    top: 4px;

  .v-toolbar__items .v-btn + .v-btn
    margin-left: 24px !important;

  &__part
    display: flex;
    flex: 1 0 auto;

    &.is-end
      justify-content: flex-end;

  &__login
    display: flex;
    align-items: center;
    text-decoration: none;
    font-size: 1.35rem;
    text-transform: uppercase;
    font-weight: 300;

  &__user
    display: flex;
    height: 48px;

    &-icon
      border-radius: 50%;
      margin-left: 1rem;

    &-menu
      display: flex;
      align-content: center;

      &__header
        background: #E0E0E0 !important;
</style>
