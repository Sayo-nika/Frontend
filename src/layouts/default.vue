<template>
  <v-app :dark="darkTheme">
    <v-toolbar :scroll-threshold="96" height="96px" app flat scroll-off-screen>
      <v-toolbar-title class="title-text primary--text">Sayonika</v-toolbar-title>
      <v-toolbar-items>
        <div class="vertical-center ml-4">
          <v-btn class="mr-2" style="height: 36px" to="/" flat nuxt>Home</v-btn>
          <v-btn class="mr-2" style="height: 36px" to="/editors-pick" flat nuxt>Editors' Picks</v-btn>
          <v-btn class="mr-2" style="height: 36px" to="/mods" flat nuxt>Mod List</v-btn>
          <v-btn class="mr-2" style="height: 36px" to="/about" flat nuxt>About</v-btn>
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

          <v-menu :close-on-content-click="false" :nudge-right="48" :nudge-bottom="24" v-model="userMenu" offset-y offset-x left>
            <a slot="activator">
              <v-avatar size="48" color="accent">
                <img src="https://vuematerial.io/assets/examples/avatar.png" alt="Avatar">
              </v-avatar>
            </a>

            <v-list>
              <v-list-tile avatar>
                <v-list-tile-avatar>
                  <img src="https://vuematerial.io/assets/examples/avatar.png" alt="Avatar">
                </v-list-tile-avatar>
                <v-list-tile-content>
                  <v-list-tile-title>John Doe</v-list-tile-title>
                  <v-list-tile-sub-title>john.doe@gmail.com</v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
            </v-list>

            <v-divider/>

            <v-list>
              <v-list-tile>
                <v-list-tile-action>
                  <v-switch v-model="darkTheme" @click="setDarkTheme"/>
                </v-list-tile-action>
                <v-list-tile-title>Dark theme</v-list-tile-title>
              </v-list-tile>

              <v-list-tile ripple @click="void 0">
                My mods
              </v-list-tile>

              <v-list-tile ripple @click="void 0">
                Sign out
              </v-list-tile>
            </v-list>
          </v-menu>
        </div>
      </v-toolbar-items>
    </v-toolbar>

    <v-content>
      <div class="content-container">
        <nuxt/>
      </div>
    </v-content>

    <v-footer height="auto" class="primary darken-1" app absolute>
      <v-layout row wrap justify-center>
        <v-btn color="white" flat>Home</v-btn>
        <v-btn color="white" flat>Mod List</v-btn>
        <v-btn color="white" flat>About Us</v-btn>

        <v-flex xs12 py-3 text-xs-center white--text>
          &copy;2018 - <b>Sayonika</b>
        </v-flex>
      </v-layout>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      search: '',
      userMenu: false,
      darkTheme: this.$store.state.user.darkTheme
    };
  },
  methods: {
    setDarkTheme() {
      this.darkTheme = !this.darkTheme;

      if (this.darkTheme) this.$store.commit('user/enableDarkTheme');
      else this.$store.commit('user/disableDarkTheme');
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
