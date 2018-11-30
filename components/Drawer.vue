<template>
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
</template>

<script>
export default {
  data() {
    return {
      filters: {
        released: false,
        playtesting: false,
        inDevelopment: false,
        rating: null,
        category: null
      },
      categories: ['All', 'Dating', 'Miscellaneous']
    };
  }
};
</script>

<style>

</style>
