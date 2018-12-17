<template>
  <v-app>
    <v-navigation-drawer app clipped>
      <v-list>
        <v-list-tile to="/" nuxt ripple>
          <v-list-tile-action>
            <v-icon>mdi-home</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>Home</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile to="/trending" nuxt ripple>
          <v-list-tile-action>
            <v-icon>mdi-trending-up</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>Trending</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile to="/editors-choice" nuxt ripple>
          <v-list-tile-action>
            <v-icon>mdi-email-open</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>Editors' Choice</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile to="/loved" nuxt ripple>
          <v-list-tile-action>
            <v-icon>mdi-heart</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>Loved</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <navbar drawer-btn/>

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
  components: {Navbar}
};
</script>

<style>
body {
  background: #FAFAFA;
}
</style>
