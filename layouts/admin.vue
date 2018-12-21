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

        <v-list-tile to="/admin/pending-mods" nuxt ripple>
          <v-list-tile-action>
            <v-icon>mdi-library-books</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>Pending Mods</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile to="/admin/user-reports" nuxt ripple>
          <v-list-tile-action>
            <v-icon>mdi-email-open</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>Flags and Reports</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <navbar no-search drawer-btn/>

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
