<template>
  <v-app>
    <navbar/>

    <v-content>
      <v-container fluid>
        <nuxt/>
      </v-container>
    </v-content>

    <!-- <v-footer app/> -->
  </v-app>
</template>

<script>
import Navbar from '~/components/Navbar.vue';

export default {
  components: {
    Navbar
  }
};
</script>

<style lang="stylus">
body
  background: #FAFAFA;
</style>
