<template>
  <v-layout>
    <mod-card title="Lorem Ipsum" :description="description" :background="background" color="#A4086A"
              icon="https://avatars1.githubusercontent.com/u/14976516"/>
  </v-layout>
</template>

<script>
import ModCategory from '~/components/ModCategory.vue';
import ModCard from '~/components/ModCard.vue';

export default {
  components: {
    ModCard
  },
  layout: 'index',
  data() {
    return {
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mattis luctus mi, sed cursus posuere.',
      background: 'https://material.io/design/assets/1BkDOHzEJX_10xKlv9KmPixbghY4lIYzl/image-list-thumbnail-2x1.png'
    };
  }
};
</script>
