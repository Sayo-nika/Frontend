<template>
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

    <v-list-tile v-if="$store.state.auth.user" to="/loved" nuxt ripple>
      <v-list-tile-action>
        <v-icon>mdi-heart</v-icon>
      </v-list-tile-action>

      <v-list-tile-content>
        <v-list-tile-title>Loved</v-list-tile-title>
      </v-list-tile-content>
    </v-list-tile>
  </v-list>
</template>

<script>
export default {};
</script>
