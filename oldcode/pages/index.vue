<template>
  <v-layout row wrap>
    <v-flex v-if="$breakpoint.is('mdAndUp')" lg2 md3>
      <nav-card>
        <index-nav/>
      </nav-card>
    </v-flex>

    <v-flex md9 lg10 xs12>
      <ai-carousel class="mb-4">
        <ai-carousel-item v-for="({title, body, type, url, banner}, index) in news" :key="`news-carousel-${index}`"
                          :color="newsColours[type]" :background="banner" :to="url">
          <template #badge>
            <v-avatar>
              <v-icon small>{{ newsIcons[type] }}</v-icon>
            </v-avatar>
            {{ newsTitles[type] }}
          </template>

          <template #title>
            {{ title }}
          </template>

          <template #body>
            {{ body }}
          </template>
        </ai-carousel-item>
      </ai-carousel>

      <mod-category v-if="recentReleases.length" class="mb-4" title="Recently Released" :mods="recentReleases"/>
      <mod-category v-if="mostLoved.length" class="mb-4" title="Most Loved" :mods="mostLoved"/>
      <mod-category v-if="mostDownloads.length" class="mb-4" title="Most Downloaded" :mods="mostDownloads"/>
    </v-flex>
  </v-layout>
</template>

<script>
import AiCarousel from '~/components/AiCarousel.vue';
import AiCarouselItem from '~/components/AiCarouselItem.vue';
import IndexNav from '~/components/IndexNav.vue';
import NavCard from '~/components/NavCard.vue';
import ModCategory from '~/components/ModCategory.vue';

export default {
  components: {
    AiCarousel,
    AiCarouselItem,
    IndexNav,
    NavCard,
    ModCategory
  },
  data() {
    return {
      newsColours: ['accent', 'secondary', 'purple'],
      newsIcons: ['mdi-alert-decagram', 'mdi-star-circle', 'mdi-book'],
      newsTitles: ['Recently Released', 'Featured', 'From the Blog']
    };
  },
  async asyncData({$axios}) {
    const [
      {result: news},
      {result: recentReleases},
      {result: mostLoved},
      {result: mostDownloads}
    ] = await Promise.all([
      $axios.$get('/news'),
      $axios.$get('/mods/recent_releases'),
      $axios.$get('/mods/most_loved'),
      $axios.$get('/mods/most_downloads')
    ]);

    return {
      news,
      recentReleases,
      mostLoved,
      mostDownloads
    };
  }
};
</script>
