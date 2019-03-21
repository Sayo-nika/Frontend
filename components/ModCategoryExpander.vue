<template>
  <v-card class="mod-category-expander" color="grey lighten-2" flat ripple @click="e => $emit('click', e)">
    <div class="mod-category-expander__inner">
      <v-avatar color="grey lighten-1" size="56">
        <v-icon large>
          {{ !expanded ? 'mdi-expand-all' : 'mdi-collapse-all' }}
        </v-icon>
      </v-avatar>
      <h3 class="title mt-3 font-weight-regular">Show {{ !expanded ? 'More' : 'Less' }}</h3>
    </div>
  </v-card>
</template>

<script>
export default {
  props: {
    expanded: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="stylus">
.mod-category-expander
  border-radius: 8px;
  cursor: pointer;

  &__inner
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

</style>
