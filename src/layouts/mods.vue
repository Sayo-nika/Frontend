<template>
  <v-app :dark="darkTheme">
    <v-toolbar key="navbar" :scroll-threshold="96" color="primary" height="64px" app flat scroll-off-screen>
      <v-toolbar-title class="title-text white--text">Sayonika</v-toolbar-title>
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
          <v-badge class="mr-4" color="accent" overlap>
            <span slot="badge">5</span>
            <v-btn flat icon>
              <v-icon color="white">notifications</v-icon>
            </v-btn>
          </v-badge>

          <user-menu :size="36"/>
        </div>
      </v-toolbar-items>
    </v-toolbar>

    <v-content>
      <v-container fluid>
        <v-layout row wrap>
          <v-flex xs2>
            <v-card class="mt-2">
              <v-list>
                <v-list-tile @click="void 0">
                  <v-list-tile-content>
                    <v-list-tile-title>Released</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>

                <v-list-tile @click="void 0">
                  <v-list-tile-content>
                    <v-list-tile-title>Playtesting</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>

                <v-list-tile @click="void 0">
                  <v-list-tile-content>
                    <v-list-tile-title>In Development</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>

                <v-list-tile @click="void 0">
                  <v-list-tile-content>
                    <v-list-tile-title>Planning</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
              </v-list>
            </v-card>
          </v-flex>

          <v-flex xs10>
            <div class="content-container">
              <nuxt/>
            </div>
          </v-flex>
        </v-layout>
      </v-container>
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
  computed: {
    darkTheme() {
      return this.$store.state.user.darkTheme;
    }
  }
};
</script>

<style>
.toolbar__content {
  width: 70%;
  margin: 0 auto;
}
</style>
