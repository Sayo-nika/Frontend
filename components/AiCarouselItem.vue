<template>
  <v-carousel-item class="ai-carousel__item" v-bind="bind">
    <div class="ai-carousel__item-content pa-3">
      <div class="ai-carousel__item-top">
        <v-chip :color="color">
          <slot name="badge"/>
        </v-chip>
      </div>

      <v-spacer/>

      <div class="ai-carousel__item-bottom">
        <div class="ai-carousel__item-body white--text">
          <h1 class="ai-carousel__item-body__title display-2">
            <slot name="title"/>
          </h1>

          <p class="ai-carousel__item-body__text body-1">
            <slot name="body"/>
          </p>
        </div>

        <v-btn :color="color" v-bind="{[to_.startsWith('http') ? 'href' : 'to']: to_}" depressed large nuxt round>
          <slot name="button">View</slot>
        </v-btn>
      </div>
    </div>
  </v-carousel-item>
</template>

<script>
export default {
  props: {
    background: {
      type: String,
      default: null
    },
    color: {
      type: String,
      default: 'primary'
    },
    to: {
      type: String,
      default: null
    }
  },
  data() {
    const data = {
      to_: this.to || '',
      bind: {}
    };

    if (this.background) data.bind = {src: this.background};

    return data;
  }
};
</script>

<style lang="stylus">
.ai-carousel__item
  &-content
    height: 100%;
    display: flex;
    flex-direction: column;
    background: rgba(0, 0, 0, 0.21);
    box-shadow: inset 0 -250px 80px -125px rgba(0, 0, 0, 0.5);

  &-bottom
    display: flex;
    align-items: center;

  &-body
    padding: 0;
    flex: 1;

    &__text
      max-width: 50%;
</style>
