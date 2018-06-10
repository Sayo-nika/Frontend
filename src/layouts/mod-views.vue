<template>
  <md-app>
    <md-app-toolbar class="md-primary">
      <div class="md-toolbar-row">
        <div class="md-toolbar-section-start">
          <md-button class="md-icon-button md-hide-small-and-up" @click="drawerOpen = !drawerOpen">
            <md-icon>menu</md-icon>
          </md-button>
          <span class="md-title">Sayonika</span>
        </div>
      </div>
    </md-app-toolbar>

    <md-app-drawer :md-active.sync="drawerOpen" class="md-light" md-permanent="card">
      <user-header class="md-primary" img="https://vuematerial.io/assets/examples/avatar.png" name="John Smith" extra="john-smith@example.com"/>

      <md-list>
        <md-list-item @click="void 0">
          <md-icon>check</md-icon>
          <span class="md-list-item-text">Released</span>
        </md-list-item>
        <md-list-item @click="void 0">
          <md-icon>feedback</md-icon>
          <span class="md-list-item-text">Playtesting</span>
        </md-list-item>
        <md-list-item @click="void 0">
          <md-icon>build</md-icon>
          <span class="md-list-item-text">In Development</span>
        </md-list-item>
        <md-list-item @click="void 0">
          <md-icon>lightbulb</md-icon>
          <span class="md-list-item-text">Planning</span>
        </md-list-item>

        <md-divider/>

        <md-list-item @click="void 0">
          <span class="md-list-item-text">Home</span>
        </md-list-item>
        <md-list-item @click="void 0">
          <span class="md-list-item-text">About</span>
        </md-list-item>
        <md-list-item @click="void 0">
          <span class="md-list-item-text">Login</span>
        </md-list-item>
        <md-list-item @click="void 0">
          <span class="md-list-item-text">Source</span>
        </md-list-item>
      </md-list>
    </md-app-drawer>

    <md-app-content>
      <div class="container">
        <nuxt/>
      </div>
    </md-app-content>
  </md-app>
</template>

<script>
import UserHeader from '~/components/UserHeader.vue';

export default {
  components: {UserHeader},
  data() {
    return {
      drawerOpen: false
    };
  }
};
</script>


<style>
</style>
