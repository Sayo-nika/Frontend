<template>
  <v-menu :close-on-content-click="false" :nudge-right="size" :nudge-bottom="size / 2" v-model="userMenu" offset-y offset-x left>
    <a slot="activator">
      <v-avatar :size="size" color="accent">
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
</template>

<script>
export default {
  props: {
    size: {
      type: Number,
      required: false,
      default: 48
    }
  },
  data() {
    return {
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
</style>
