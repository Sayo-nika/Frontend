<template>
  <v-app>
    <v-navigation-drawer v-model="drawerIsOpen" app clipped>
      <v-list>
        <v-list-tile to="/" nuxt ripple>
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>Home</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile to="/" nuxt ripple>
          <v-list-tile-action>
            <v-icon>trending_up</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>Trending</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile to="/" nuxt ripple>
          <v-list-tile-action>
            <v-icon>drafts</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>Editors' Choice</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile to="/" nuxt ripple>
          <v-list-tile-action>
            <v-icon>favorite</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>Loved</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>

      <v-form ref="search">
        <v-subheader>Mod State</v-subheader>
        <div class="drawer-search-container">
          <v-checkbox v-model="filters.released" label="Released"/>
          <v-checkbox v-model="filters.playtesting" label="Playtesting"/>
          <v-checkbox v-model="filters.inDevelopment" label="In Development"/>
        </div>

        <v-subheader>Rating</v-subheader>
        <div class="drawer-search-container">
          <v-radio-group v-model="filters.radio" :mandatory="false">
            <v-radio label="4.5 - 5" value="4.5 - 5"/>
            <v-radio label="3.5 - 4" value="3.5 - 4"/>
            <v-radio label=">= 3" value=">= 3.5"/>
          </v-radio-group>
        </div>

        <v-subheader>By Category</v-subheader>
        <v-select v-model="filters.category" :items="categories" label="Select a Category" box/>
      </v-form>
    </v-navigation-drawer>

    <v-toolbar color="primary" app clipped-left>
      <v-toolbar-side-icon class="hidden-md-and-up" @click="drawer = !drawer"/>
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

    <v-content>
      <v-container fluid>
        <v-btn @click="solo = !solo">lol</v-btn>
        <nuxt/>
      </v-container>
    </v-content>

    <!-- <v-footer app/> -->
  </v-app>
</template>

<script>
import NavSearch from '~/components/NavSearch.vue';

export default {
  components: {NavSearch},
  data() {
    return {
      filters: {
        released: false,
        playtesting: false,
        inDevelopment: false,
        rating: null,
        category: null
      },
      drawer: false,
      solo: false,
      categories: ['All', 'Dating', 'Miscellaneous']
    };
  },
  computed: {
    drawerIsOpen() {
      return this.$vuetify.breakpoint.mdAndUp || this.drawer;
    }
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
