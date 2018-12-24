<template>
  <v-layout column>
    <v-list class="admin__recent elevation-3 mb-3" two-line>
      <v-subheader class="primary--text">
        <v-icon class="mr-1" color="primary">mdi-library-books</v-icon> Pending Mods
      </v-subheader>

      <v-list-tile v-for="i in 5" :key="`user-${i}`" avatar @click="void 0">
        <v-list-tile-avatar>
          <img src="https://placeimg.com/128/128/people" alt="icon">
        </v-list-tile-avatar>

        <v-list-tile-content>
          <v-list-tile-title>Title</v-list-tile-title>
          <v-list-tile-sub-title>*screams*</v-list-tile-sub-title>
        </v-list-tile-content>

        <v-list-tile-action>
          <v-btn color="primary" depressed ripple>View</v-btn>
        </v-list-tile-action>
      </v-list-tile>

      <div class="mx-3 mb-2">
        <v-btn color="accent" to="/admin/mods" block flat nuxt>View all pending mods</v-btn>
      </div>
    </v-list>

    <v-list class="admin__recent elevation-3 mb-2" two-line>
      <v-subheader class="primary--text">
        <v-icon class="mr-1" color="primary">mdi-account-circle</v-icon> Recent User Reports
      </v-subheader>

      <v-list-tile v-for="i in 5" :key="`user-${i}`" avatar @click="void 0">
        <v-list-tile-avatar>
          <img src="https://placeimg.com/128/128/people" alt="icon">
        </v-list-tile-avatar>

        <v-list-tile-content>
          <v-list-tile-title>Title</v-list-tile-title>
          <v-list-tile-sub-title>*screams*</v-list-tile-sub-title>
        </v-list-tile-content>

        <v-list-tile-action>
          <v-btn color="primary" depressed ripple>View</v-btn>
        </v-list-tile-action>
      </v-list-tile>

      <div class="mx-3 mb-2">
        <v-btn color="accent" to="/admin/user-reports" block flat nuxt>View all reports</v-btn>
      </div>
    </v-list>

    <v-list class="admin__recent elevation-3 mb-2" two-line>
      <v-subheader class="primary--text">
        <v-icon class="mr-1" color="primary">mdi-flag</v-icon> Recent Mod Reports
      </v-subheader>

      <v-list-tile v-for="i in 5" :key="`user-${i}`" avatar @click="void 0">
        <v-list-tile-avatar>
          <img src="https://placeimg.com/128/128/people" alt="icon">
        </v-list-tile-avatar>

        <v-list-tile-content>
          <v-list-tile-title>Title</v-list-tile-title>
          <v-list-tile-sub-title>*screams*</v-list-tile-sub-title>
        </v-list-tile-content>

        <v-list-tile-action>
          <v-btn color="primary" depressed ripple>View</v-btn>
        </v-list-tile-action>
      </v-list-tile>

      <div class="mx-3 mb-2">
        <v-btn color="accent" to="/admin/mod-reports" block flat nuxt>View all reports</v-btn>
      </div>
    </v-list>
  </v-layout>
</template>

<script>
export default {
  layout: 'admin'
};
</script>

<style lang="stylus">
</style>
