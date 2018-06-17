<template>
  <v-app :dark="darkTheme">
    <v-toolbar v-scroll="navScroll" key="navbar" :height="navHeight" :scroll-threshold="96" app flat scroll-off-screen>
      <v-toolbar-title class="title-text primary--text">Sayonika</v-toolbar-title>
      <v-toolbar-items>
        <div class="vertical-center ml-4">
          <v-btn class="mr-2" style="height: 36px" to="/" flat nuxt round>Home</v-btn>
          <v-btn class="mr-2" style="height: 36px" to="/editors-pick" flat nuxt round>Editors' Picks</v-btn>
          <v-btn class="mr-2" style="height: 36px" to="/mods" flat nuxt round>Mod List</v-btn>
          <v-btn class="mr-2" style="height: 36px" to="/about" flat nuxt round>About</v-btn>
        </div>
      </v-toolbar-items>

      <v-spacer/>

      <v-toolbar-items>
        <div class="vertical-center">
          <v-text-field v-model="search" class="mr-4" label="Search" prepend-icon="search" hide-details single-line/>

          <v-badge class="mr-4" color="primary" overlap>
            <span slot="badge">5</span>
            <v-btn flat icon>
              <v-icon large>notifications</v-icon>
            </v-btn>
          </v-badge>

          <user-menu/>
        </div>
      </v-toolbar-items>
    </v-toolbar>

    <v-content>
      <div class="content-container">
        <nuxt/>
      </div>
    </v-content>

    <!-- <v-footer height="auto" class="primary darken-1" app absolute>
      <v-layout row wrap justify-center>
        <v-btn color="white" flat>Home</v-btn>
        <v-btn color="white" flat>Mod List</v-btn>
        <v-btn color="white" flat>About Us</v-btn>

        <v-flex xs12 py-3 text-xs-center white--text>
          &copy;2018 - <b>Sayonika</b>
        </v-flex>
      </v-layout>
    </v-footer> -->
  </v-app>
</template>

<script>
import UserMenu from '~/components/UserMenu';

export default {
  components: {UserMenu},
  data() {
    return {
      search: '',
      navHeight: 96
    };
  },
  computed: {
    darkTheme() {
      return this.$store.state.user.darkTheme;
    }
  },
  methods: {
    navScroll() {
      let height = 96 - window.pageYOffset;
      this.navHeight = height < 64 ? 64 : height;
    }
  }
};
</script>

<style>
.toolbar__content {
  width: 70%;
  margin: 0 auto;
}

.toolbar {
  transition: height 0.2s ease-out;
}
</style>
