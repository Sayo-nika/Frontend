<template>
  <v-toolbar color="primary" app clipped-left>
    <v-toolbar-side-icon class="hidden-md-and-up" dark/>
    <v-toolbar-title class="white--text">Title</v-toolbar-title>

    <v-spacer/>

    <nav-search/>

    <v-spacer/>

    <v-toolbar-items v-if="!$store.state.auth.loggedIn">
      <v-btn color="primary--text" to="/login" depressed nuxt>Log In</v-btn>
      <v-btn color="primary--text" to="/register" depressed nuxt>Sign Up</v-btn>
    </v-toolbar-items>
    <v-toolbar-items v-else class="navbar__user white--text">
      <div class="navbar__user-details">
        <div class="navbar__user-name">Obama</div>
        <div class="navbar__user-roles">
          <v-tooltip bottom>
            <v-icon slot="activator" size="16" dark>mdi-heart</v-icon>
            Supporter
          </v-tooltip>
          <v-tooltip bottom>
            <v-icon slot="activator" size="16" dark>mdi-wrench</v-icon>
            Developer
          </v-tooltip>
          <v-tooltip bottom>
            <v-icon slot="activator" size="16" dark>mdi-gavel</v-icon>
            Moderator
          </v-tooltip>
          <v-tooltip bottom>
            <v-icon slot="activator" size="16" dark>mdi-pencil</v-icon>
            Mod Author
          </v-tooltip>
        </div>
      </div>

      <v-menu min-width="150" nudge-bottom="8" origin="bottom right" offset-y>
        <a slot="activator" class="navbar__user-menu" href="#">
          <img src="https://avatars2.githubusercontent.com/u/18654005" alt="user icon" class="navbar__user-icon" width="48" height="48">
          <v-icon size="32" dark>mdi-chevron-down</v-icon>
        </a>

        <v-list>
          <v-list-tile to="/profile" nuxt ripple>
            <v-list-tile-content>Profile</v-list-tile-content>
          </v-list-tile>
          <v-list-tile to="/settings" nuxt ripple>
            <v-list-tile-content>Settings</v-list-tile-content>
          </v-list-tile>
          <v-divider/>
          <v-list-tile ripple @click="$store.commit('auth/logout')">
            <v-list-tile-content>Log Out</v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-menu>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
import NavSearch from '~/components/NavSearch.vue';

export default {
  components: {NavSearch}
};
</script>

<style>
.drawer-search-container {
  display: flex;
  flex-direction: column;
  margin: 0 16px;
}

.drawer-search-container .v-input {
  padding: 0;
  margin: 0;
}

.drawer-search-container .v-input__slot {
  margin-bottom: 0;
}

.v-toolbar__items .v-btn:not(.v-btn--floating):not(.v-btn--icon) {
  height: 36px;
}

.v-toolbar__items .v-btn + .v-btn {
  margin-left: 24px !important;
}

.navbar__user {
  display: flex;
  height: 48px;
}

.navbar__user-menu {
  display: flex;
  align-content: center;
}

.navbar__user-details {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
}

.navbar__user-roles > * {
  margin-left: 0.25rem;
}

.navbar__user-name {
  font-size: 1.25rem;
}

.navbar__user-icon {
  border-radius: 50%;
  margin-left: 1rem;
}
</style>
