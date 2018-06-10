<template>
  <md-app>
    <md-app-toolbar class="md-medium" md-elevation="0">
      <div class="md-toolbar-row container">
        <div class="md-toolbar-section-start">
          <md-button class="md-icon-button md-hide-small-and-up" @click="drawerOpen = !drawerOpen">
            <md-icon>menu</md-icon>
          </md-button>
          <span class="md-title title-text" style="margin-left: 0; color: #E78A00">Sayonika</span>

          <md-tabs>
            <md-tab id="home" md-label="Home"/>
            <md-tab id="editors-picks" md-label="Editors' Picks"/>
            <md-tab id="mod" md-label="Mod List"/>
            <md-tab id="about" md-label="About"/>
          </md-tabs>
        </div>

        <div class="md-toolbar-section-end">
          <a href="#">
            <md-avatar style="margin: 0">
              <img src="https://vuematerial.io/assets/examples/avatar.png" alt="Avatar">
            </md-avatar>
          </a>
        </div>
      </div>
    </md-app-toolbar>

    <md-app-content>
      <div class="container">
        <nuxt/>
      </div>
    </md-app-content>
  </md-app>
</template>

<script>
export default {
};
</script>

<style>
</style>
