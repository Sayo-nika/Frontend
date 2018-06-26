<template>
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
        <v-btn color="white" href="https://github.com/Sayo-nika/Press" outline round>Press</v-btn>
        <v-btn color="white" to="/about" nuxt outline round>About</v-btn>

        <v-flex xs12 mt-3 text-xs-center white--text>
          &copy; 2018 &mdash; <b>Sayonika</b>
        </v-flex>
      </v-layout>
    </v-container>
  </v-footer>
</template>

<script>
export default {
};
</script>

<style>
</style>
