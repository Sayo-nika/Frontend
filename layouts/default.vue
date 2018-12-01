<template>
  <v-app>
    <drawer/>
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
import Drawer from '~/components/Drawer.vue';
import Navbar from '~/components/Navbar.vue';

export default {
  components: {
    Drawer,
    Navbar
  }
};
</script>

<style>
body {
  background: #FAFAFA;
}
</style>
