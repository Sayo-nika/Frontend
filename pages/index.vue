<template>
  <v-layout row wrap>
    <v-flex v-if="$vuetify.breakpoint.mdAndUp" lg2 md3>
      <index-nav-card/>
    </v-flex>

    <v-flex md9 lg10 xs12>
      <ai-carousel class="mb-4">
        <ai-carousel-item background="https://storage.googleapis.com/spec-host-backup/mio-material%2Fassets%2F12Fkh25mfiYNsuNC49MUv6FKnJG1hJnba%2Fcollections-brand-2x1-large.png"
                          color="accent" to="/test">
          <template #badge>
            <v-avatar>
              <v-icon small>mdi-alert-decagram</v-icon>
            </v-avatar>
            Recently Released
          </template>

          <template #title>
            Doki Doki Obama Club
          </template>

          <template #body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ex erat, pulvinar id pretium non, sollicitudin in metus. Ut a sapien nisl. Interdum et malesuada fames ac ante ipsum primis in faucibus.
          </template>
        </ai-carousel-item>

        <ai-carousel-item background="https://www.microsoft.com/design/images/engaging_1600x800_vp_5.jpg?_sw-precache=090fd62d869916a59bd4495cc52da669"
                          color="purple" to="/test">
          <template #badge>
            <v-avatar>
              <v-icon small>mdi-book</v-icon>
            </v-avatar>
            From the Blog
          </template>

          <template #title>
            Why Elon Musk Should Invest In Catgirls
          </template>

          <template #body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ex erat, pulvinar id pretium non, sollicitudin in metus. Ut a sapien nisl. Interdum et malesuada fames ac ante ipsum primis in faucibus.
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
      })
    };
  }
};
</script>
