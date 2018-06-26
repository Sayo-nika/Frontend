<template>
  <v-app :dark="darkTheme">
    <app-navbar/>

    <v-content>
      <div class="content-container">
        <nuxt/>
      </div>
    </v-content>

    <app-footer/>
  </v-app>
</template>

<script>
import UserMenu from '~/components/UserMenu';
import AppFooter from '~/components/Footer';
import AppNavbar from '~/components/Navbar';

export default {
  components: {
    UserMenu,
    AppFooter,
    AppNavbar
  },
  computed: {
    darkTheme() {
      return this.$store.state.user.darkTheme;
    }
  }
};
</script>

<style>
</style>
