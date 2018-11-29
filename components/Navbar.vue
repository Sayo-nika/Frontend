<template>
  <v-toolbar color="primary" app clipped-left>
    <v-toolbar-side-icon class="hidden-md-and-up" dark/>
    <v-toolbar-title class="white--text">Title</v-toolbar-title>

    <v-spacer/>

    <!-- <nav-search/> -->

    <v-spacer/>

    <v-toolbar-items v-if="!$store.state.auth.loggedIn">
      <v-btn color="primary--text" to="/login" depressed nuxt>Log In</v-btn>
      <v-btn color="primary--text" depressed>Sign Up</v-btn>
    </v-toolbar-items>
    <v-toolbar-items v-else class="white--text">
      lol u logged in boi
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
</style>
