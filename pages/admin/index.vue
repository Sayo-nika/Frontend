<template>
  <v-layout column>
    <v-list class="search__results elevation-3 mb-2" two-line>
      <v-subheader class="primary--text">
        Recent Pending Mods
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

      <v-layout class="mt-2" justify-center>
        <v-pagination v-model="userPage" :length="10" :total-visible="paginationVisible"/>
      </v-layout>
    </v-list>
    <v-list class="search__results elevation-3 mb-2" two-line>
      <v-subheader class="primary--text">
        Recent User Reports
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

      <v-layout class="mt-2" justify-center>
        <v-pagination v-model="userPage" :length="10" :total-visible="paginationVisible"/>
      </v-layout>
    </v-list>
  </v-layout>
</template>

<script>
export default {
  layout: 'admin'
};
</script>
