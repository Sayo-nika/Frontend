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

    <v-footer class="py-3 px-3" color="grey darken-3" height="auto" absolute app>
      <v-container>
        <v-layout row wrap justify-center>
          <v-flex class="text-xs-center mb-3" xs12 white--text>
            Doki Doki Literature Club (DDLC), logo, and artworks are properties of Team Salvato, All Rights Reserved.<br>
            Sayonika, the Sayonika chibi artwork, and the Sayonika logo are licensed under Creative Commons-3.0 Non-Commercial.<br>
            Sayonika's source code is released under the BSD-3 Clause License.<br>
            All Doki Doki Literature Club mods listed on this site complies to the Team Salvato guidelines stated therein.
          </v-flex>

          <v-btn color="white" to="/dmca" nuxt outline round>DMCA</v-btn>
          <v-btn color="white" href="https://github.com/Sayo-nika" outline round>Open Source</v-btn>
          <v-btn color="white" to="/about" nuxt outline round>About</v-btn>

          <v-flex xs12 mt-3 text-xs-center white--text>
            &copy; 2018 &mdash; <b>Sayonika</b>
          </v-flex>
        </v-layout>
      </v-container>
    </v-footer>
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
