<template>
  <v-layout>
    <mod-category title="Category" :mods="mods"/>
  </v-layout>
</template>

<script>
import ModCategory from '~/components/ModCategory.vue';

export default {
  components: {
    ModCategory
  },
  layout: 'index',
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
