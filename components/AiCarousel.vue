<template>
  <div class="ai-carousel">
    <div class="ai-carousel__btn-wrap is-left">
      <v-btn class="ai-carousel__btn" color="white primary--text" fab @click="$refs.carousel.prev()">
        <v-icon large>mdi-chevron-left</v-icon>
      </v-btn>
    </div>

    <v-carousel ref="carousel" class="ai-carousel__items" hide-controls hide-delimiters>
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
export default {};
</script>

<style lang="stylus">
@import '~vuetify/src/stylus/settings/_variables'

.ai-carousel
  position: relative;
  padding: 0 5rem;

  &__btn
    opacity: 0;
    transition: $primary-transition;

    &-wrap
      position: absolute;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      z-index: 999;
      top: 0;
      bottom: 0;

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
