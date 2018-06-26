<template>
  <v-toolbar :color="color" :height="height" :scroll-threshold="96" app flat scroll-off-screen>
    <v-toolbar-title :class="['title-text', likeDark ? 'white--text' : 'primary--text']">Sayonika</v-toolbar-title>
    <v-toolbar-items>
      <div class="vertical-center ml-4">
        <v-btn :dark="likeDark" class="mr-2" style="height: 36px" to="/" flat nuxt round>Home</v-btn>
        <v-btn :dark="likeDark" class="mr-2" style="height: 36px" to="/editors-pick" flat nuxt round>Editors' Picks</v-btn>
        <v-btn :dark="likeDark" class="mr-2" style="height: 36px" to="/mods" flat nuxt round>Mod List</v-btn>
        <v-btn :dark="likeDark" class="mr-2" style="height: 36px" to="/about" flat nuxt round>About</v-btn>
      </div>
    </v-toolbar-items>

    <v-spacer/>

    <v-toolbar-items>
      <div class="vertical-center">
        <v-text-field v-if="search" v-model="searchText" :dark="likeDark" class="mr-4" label="Search" prepend-icon="search" hide-details single-line/>

        <v-badge class="mr-4" color="primary" overlap>
          <span slot="badge">5</span>
          <v-btn flat icon>
            <v-icon :dark="likeDark" large>notifications</v-icon>
          </v-btn>
        </v-badge>

        <user-menu/>
      </div>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
import UserMenu from './UserMenu';

export default {
  components: {UserMenu},
  props: {
    color: {
      type: String,
      required: false,
      default: ''
    },
    height: {
      type: Number,
      required: false,
      default: 96
    },
    likeDark: {
      type: Boolean,
      required: false,
      default: false
    },
    search: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  data() {
    return {
      searchText: ''
    };
  }
};
</script>

<style>
.toolbar__content {
  width: 70%;
  margin: 0 auto;
}
</style>
