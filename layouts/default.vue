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
