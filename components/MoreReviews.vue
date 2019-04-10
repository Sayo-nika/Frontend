<template>
  <v-card class="more-reviews">
    <v-container>
      <v-card-title>
        <h1 class="title">Reviews</h1>
      </v-card-title>

      <v-card-text>
        <v-layout align-center mb-4>
          <v-menu>
            <template #activator="{on}">
              <v-btn outline v-on="on">
                {{ sort }}
                <v-icon right>
                  mdi-chevron-down
                </v-icon>
              </v-btn>
            </template>

            <v-list>
              <v-list-tile v-for="option in sorts" :key="option" ripple @click="sort = option">
                <v-list-tile-title>
                  {{ option }}
                </v-list-tile-title>
              </v-list-tile>
            </v-list>
          </v-menu>

          <v-menu>
            <template #activator="{on}">
              <v-btn outline v-on="on">
                {{ filter }}
                <v-icon right>
                  mdi-chevron-down
                </v-icon>
              </v-btn>
            </template>

            <v-list>
              <v-list-tile v-for="option in filters" :key="option" ripple @click="filter = option">
                <v-list-tile-title>
                  {{ option }}
                </v-list-tile-title>
              </v-list-tile>
            </v-list>
          </v-menu>
        </v-layout>

        <v-layout align-center column>
          <mod-review v-for="i in 5" :key="`i${i}`"/>
        </v-layout>
      </v-card-text>

      <v-card-actions>
        <v-layout justify-center>
          <v-btn class="px-5" color="secondary" flat round>More</v-btn>
        </v-layout>
      </v-card-actions>
    </v-container>
  </v-card>
</template>

<script>
import ModReview from './ModReview.vue';

export default {
  components: {ModReview},
  data() {
    return {
      sort: 'Newest',
      sorts: [
        'Newest',
        'Oldest',
        'Best',
        'Highest',
        'Lowest',
        'Funniest'
      ],

      filter: 'All',
      filters: [
        'All',
        '5 stars',
        '4 stars',
        '3 stars',
        '2 stars',
        '1 star'
      ]
    };
  },
  async asyncData() {
    await new Promise(r => setTimeout(r, 2500));
  }
};
</script>

<style lang="stylus">
.more-reviews
  //
</style>
