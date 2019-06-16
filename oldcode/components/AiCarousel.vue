<template>
  <div :class="['ai-carousel', {'is-tile': tile}]">
    <div class="ai-carousel__btn-wrap is-left">
      <v-btn class="ai-carousel__btn" color="white primary--text" fab @click="$refs.carousel.prev()">
        <v-icon large>mdi-chevron-left</v-icon>
      </v-btn>
    </div>

    <v-carousel ref="carousel" :class="`ai-carousel__items ${color}`" hide-controls hide-delimiters>
      <slot/>
    </v-carousel>

    <div class="ai-carousel__btn-wrap is-right">
      <v-btn class="ai-carousel__btn" color="white primary--text" fab @click="$refs.carousel.next()">
        <v-icon large>mdi-chevron-right</v-icon>
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tile: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: 'primary'
    }
  }
};
</script>

<style lang="stylus">
@import '~vuetify/src/stylus/settings/_variables'

.ai-carousel
  position: relative;

  &.is-tile
    & ^[0]__items
      border-radius: 0;
      box-shadow: none;

  &__btn
    opacity: 0;
    z-index: 999;
    pointer-events: auto;
    transition: $primary-transition;

    &-wrap
      position: absolute;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      top: 0;
      bottom: 0;
      z-index: 1;
      pointer-events: none;

      &.is-left
        left: 5rem;
        transform: translateX(-50%);

      &.is-right
        right: 5rem;
        transform: translateX(50%);

  &__items
    border-radius: 8px;

  &:hover
    & ^[0]
      &__btn
        opacity: 1;
</style>
