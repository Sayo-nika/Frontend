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

    <md-app-drawer :md-active.sync="drawerOpen" class="md-light" md-permanent="clipped">
      <!-- <md-toolbar class="md-transparent" md-elevation="0">
        <span class="md-title">Banana</span>
      </md-toolbar> -->

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
export default {
  data() {
    return {
      drawerOpen: false
    };
  }
};
</script>


<style>
*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}

html {
  font-family: Roboto -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  height: 100%;
}

body {
  height: 100%;
}

.__nuxt,
.__layout,
.md-app {
  min-height: 100%;
}

.md-content {
  padding-top: 4rem;
}

/* .md-drawer {
  width: 230px;
  max-width: calc(100vw - 125px);
} */

.container {
  width: 70%;
  margin: 0 auto;
}

@media screen and (max-width: 960px) {
  .container {
    width: 100%;
  }
}

@media screen and (min-width: 600px) {
  .md-drawer {
    width: 230px;
    max-width: calc(100vw - 125px);
  }
}
</style>
