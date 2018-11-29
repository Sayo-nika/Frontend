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

</style>
