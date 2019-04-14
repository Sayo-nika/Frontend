<template>
  <v-app>
    <navbar @drawer-click="drawer = !drawer"/>

    <v-navigation-drawer v-model="drawer" app clipped temporary>
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

      <template v-if="$store.state.auth.user">
        <v-list-tile to="/loved" nuxt ripple>
          <v-list-tile-action>
            <v-icon>mdi-heart</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>Loved</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile to="/submit-mod" nuxt ripple>
          <v-list-tile-action>
            <v-icon>mdi-plus</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>Add a Mod</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </template>
    </v-navigation-drawer>

    <v-content>
      <v-container grid-list-lg fluid>
        <nuxt/>
      </v-container>

      <v-tooltip left>
        <template #activator="{on}">
          <v-btn color="secondary" href="https://discord.gg/sGUkGc8" bottom fab fixed right v-on="on">
            <v-icon>mdi-message-alert</v-icon>
          </v-btn>
        </template>

        <span>Feedback and Support</span>
      </v-tooltip>
    </v-content>

    <!-- <v-footer app/> -->
  </v-app>
</template>

<script>
import Navbar from '~/components/Navbar.vue';

export default {
  components: {
    Navbar
  },
  data() {
    return {
      drawer: false
    };
  }
};
</script>

<style lang="stylus">
body
  background: #FAFAFA;
</style>
