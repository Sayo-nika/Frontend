<template>
  <v-layout row wrap>
    <v-flex v-if="$breakpoint.is('mdAndUp')" lg2 md3>
      <index-nav-card/>
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

      <mod-category title="Category" :mods="mods"/>
    </v-flex>
  </v-layout>
</template>

<script>
import AiCarousel from '~/components/AiCarousel.vue';
import AiCarouselItem from '~/components/AiCarouselItem.vue';
import IndexNavCard from '~/components/IndexNavCard.vue';
import ModCategory from '~/components/ModCategory.vue';

export default {
  components: {
    AiCarousel,
    AiCarouselItem,
    IndexNavCard,
    ModCategory
  },
  // layout: 'index',
  data() {
    return {
      mods: new Array(10).fill({
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mattis luctus mi, sed cursus posuere.',
        background: 'https://material.io/design/assets/1BkDOHzEJX_10xKlv9KmPixbghY4lIYzl/image-list-thumbnail-2x1.png',
        title: 'Lorem Ipsum',
        color: '#A4086A',
        icon: 'https://avatars1.githubusercontent.com/u/14976516'
      }),
      newsColours: ['accent', 'secondary', 'purple'],
      newsIcons: ['mdi-alert-decagram', 'mdi-star-circle', 'mdi-book'],
      newsTitles: ['Recently Released', 'Featured', 'From the Blog']
    };
  },
  async asyncData({app: {$axios}}) {
    const {result: news} = await $axios.$get('/news');

    return {news};
  }
};
</script>
