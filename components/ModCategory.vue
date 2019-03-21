<template>
  <div class="mod-category">
    <h1 class="mod-category__title mb-2">{{ title }}</h1>
    <div class="mod-category__grid">
      <mod-card v-for="({description, background, title: _title, color, icon}, i) in gridContent" :key="`mod-${title}-${i}`"
                :description="description" :background="background" :title="title" :color="color" :icon="icon"/>
      <mod-category-expander :expanded="expanded" @click="expanded = !expanded"/>
    </div>
  </div>
</template>

<script>
import ModCategoryExpander from './ModCategoryExpander.vue';
import ModCard from './ModCard.vue';

export default {
  components: {
    ModCategoryExpander,
    ModCard
  },
  props: {
    mods: {
      type: Array,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      expanded: false
    };
  },
  computed: {
    gridContent() {
      return this.expanded ? this.mods : this.mods.slice(0, 5);
    }
  }
};
</script>

<style lang="stylus">
@import '~vuetify/src/stylus/settings/_variables'

.mod-category
  width: 100%;

  &__title
    font-size: 2rem;

  &__grid
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
    gap: 10px;

    @media only screen and (max-width: $grid-breakpoints.sm)
      grid-template-columns: 1fr;

</style>
