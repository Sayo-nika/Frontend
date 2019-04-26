<template>
  <v-app>
    <navbar @drawer-click="drawer = !drawer"/>

    <v-navigation-drawer v-model="drawer" app clipped temporary>
      <v-list>
        <v-list-tile to="/admin" exact nuxt ripple>
          <v-list-tile-action>
            <v-icon>mdi-home</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>Home</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile to="/admin/mods" nuxt ripple>
          <v-list-tile-action>
            <v-badge color="accent">
              <span slot="badge">50+</span>

              <v-icon>mdi-library-books</v-icon>
            </v-badge>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>Pending Mods</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile to="/admin/user-reports" nuxt ripple>
          <v-list-tile-action>
            <v-badge color="accent">
              <span slot="badge">12</span>

              <v-icon>mdi-account-circle</v-icon>
            </v-badge>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>User Reports</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile to="/admin/mod-reports" nuxt ripple>
          <v-list-tile-action>
            <v-badge color="accent">
              <span slot="badge">69</span>

              <v-icon>mdi-flag</v-icon>
            </v-badge>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>Mod Reports</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile to="/admin/user-control" nuxt ripple>
          <v-list-tile-action>
            <v-badge color="accent">
              <span slot="badge">50+</span>

              <v-icon>mdi-library-books</v-icon>
            </v-badge>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>User Access Control</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-content>
      <v-container grid-list-lg fluid>
        <v-layout row wrap>
          <v-flex v-if="$breakpoint.is('mdAndUp')" lg2 md3>
            <nav-card>
              <v-list>
                <v-list-tile to="/admin" exact nuxt ripple>
                  <v-list-tile-action>
                    <v-icon>mdi-home</v-icon>
                  </v-list-tile-action>

                  <v-list-tile-content>
                    <v-list-tile-title>Home</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>

                <v-list-tile to="/admin/mods" nuxt ripple>
                  <v-list-tile-action>
                    <v-badge color="accent">
                      <span slot="badge">50+</span>

                      <v-icon>mdi-library-books</v-icon>
                    </v-badge>
                  </v-list-tile-action>

                  <v-list-tile-content>
                    <v-list-tile-title>Pending Mods</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>

                <v-list-tile to="/admin/user-reports" nuxt ripple>
                  <v-list-tile-action>
                    <v-badge color="accent">
                      <span slot="badge">12</span>

                      <v-icon>mdi-account-circle</v-icon>
                    </v-badge>
                  </v-list-tile-action>

                  <v-list-tile-content>
                    <v-list-tile-title>User Reports</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>

                <v-list-tile to="/admin/mod-reports" nuxt ripple>
                  <v-list-tile-action>
                    <v-badge color="accent">
                      <span slot="badge">69</span>

                      <v-icon>mdi-flag</v-icon>
                    </v-badge>
                  </v-list-tile-action>

                  <v-list-tile-content>
                    <v-list-tile-title>Mod Reports</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>

                <v-list-tile to="/admin/user-control" nuxt ripple>
                  <v-list-tile-action>
                    <v-badge color="accent">
                      <span slot="badge">50+</span>

                      <v-icon>mdi-library-books</v-icon>
                    </v-badge>
                  </v-list-tile-action>

                  <v-list-tile-content>
                    <v-list-tile-title>User Access Control</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
              </v-list>
            </nav-card>
          </v-flex>


          <v-flex md9 lg10 xs12>
            <v-container>
              <nuxt/>
            </v-container>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>

    <!-- <v-footer app/> -->
  </v-app>
</template>

<script>
import Navbar from '~/components/Navbar.vue';
import NavCard from '~/components/NavCard.vue';

export default {
  components: {
    Navbar,
    NavCard
  },
  data() {
    return {
      drawer: false
    };
  }
};
</script>

<style lang="stylus">
body
  background: #FAFAFA;
</style>
