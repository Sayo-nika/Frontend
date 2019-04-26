<template>
  <div>
    <v-card class="mb-3">
      <v-list class="admin__recent" two-line>
        <v-subheader class="primary--text">
          <v-icon class="mr-1" color="primary">mdi-library-books</v-icon> Pending Mods
        </v-subheader>

        <template v-if="pendingMods.length">
          <v-list-tile v-for="mod in pendingMods" :key="`mod-${mod.id}`" avatar @click="void 0">
            <v-list-tile-avatar>
              <img :src="mod.icon_url" alt="icon">
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title>{{ mod.title }}</v-list-tile-title>
              <v-list-tile-sub-title>Submitted by {{ mod.author.username }}</v-list-tile-sub-title>
            </v-list-tile-content>

            <!---TODO: Make this spawn the Mod overview that has approve and deny buttons. --->
            <v-list-tile-action>
              <v-btn color="primary" depressed ripple>View</v-btn>
            </v-list-tile-action>
          </v-list-tile>

          <div class="mx-3 mb-2">
            <v-btn color="accent" to="/admin/mods" block flat nuxt>View all pending mods</v-btn>
          </div>
        </template>
        <v-container v-else fluid>
          <h2 class="display-1 font-italic admin__empty text-xs-center">
            All done here!
          </h2>
        </v-container>
      </v-list>
    </v-card>

    <v-card class="mb-3">
      <v-list class="admin__recent" two-line>
        <v-subheader class="primary--text">
          <v-icon class="mr-1" color="primary">mdi-flag</v-icon> Recent Mod Reports
        </v-subheader>

        <template v-if="modReports.length">
          <v-list-tile v-for="mod in modReports" :key="`m_report-${mod}`" avatar @click="void 0">
            <v-list-tile-avatar>
              <img :src="mod.icon_url" alt="icon">
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title>{{ mod.title }}</v-list-tile-title>
              <v-list-tile-sub-title>Reported by {{ mod.author_id }} for {{ mod.report_type }}</v-list-tile-sub-title>
            </v-list-tile-content>

            <!--- TODO: this should show a dialog containing all the info from the report object --->
            <v-list-tile-action>
              <v-btn color="primary" depressed ripple>View</v-btn>
            </v-list-tile-action>
          </v-list-tile>

          <div class="mx-3 mb-2">
            <v-btn color="accent" to="/admin/mod-reports" block flat nuxt>View all reports</v-btn>
          </div>
        </template>
        <v-container v-else fluid>
          <h2 class="display-1 font-italic admin__empty text-xs-center">
            All done here!
          </h2>
        </v-container>
      </v-list>
    </v-card>

    <v-card>
      <v-list class="admin__recent" two-line>
        <v-subheader class="primary--text">
          <v-icon class="mr-1" color="primary">mdi-account-alert</v-icon> Recent User Reports
        </v-subheader>

        <v-list-tile v-for="i in 5" :key="`user-${i}`" avatar @click="void 0">
          <v-list-tile-avatar>
            <img src="https://placeimg.com/128/128/people" alt="icon">
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title>Title</v-list-tile-title>
            <v-list-tile-sub-title>*screams*</v-list-tile-sub-title>
          </v-list-tile-content>

          <v-list-tile-action>
            <v-btn color="primary" depressed ripple>View</v-btn>
          </v-list-tile-action>
        </v-list-tile>

        <div class="mx-3 mb-2">
          <v-btn color="accent" to="/admin/user-reports" block flat nuxt>View all reports</v-btn>
        </div>
      </v-list>
    </v-card>
  </div>
</template>

<script>

export default {
  layout: 'admin',
  middleware: 'admin',
  async asyncData({$axios}) {
    const [
      {result: pendingMods},
      {result: modReports}
    ] = await Promise.all([
      $axios.$get('/mods/verify_queue'),
      $axios.$get('/mods/report_queue')
    ]);

    return {pendingMods, modReports};
  }
};
</script>

<style lang="stylus">
.admin__empty
  opacity: 0.67;
</style>
