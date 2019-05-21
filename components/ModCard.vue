<template>
  <div :style="`--color: ${color}; --bg: url(${background})`" class="mod-card" @mouseenter="hovered = true" @mouseleave="hovered = false">
    <v-avatar class="mod-card__icon" size="128">
      <img :src="icon">
    </v-avatar>

    <div class="mod-card__hover">
      <div class="mod-card__hover-content">
        <h1 class="mod-card__hover-title">
          {{ modData.title }}
        </h1>
        <p class="mod-card__hover-description">
          {{ modData.description }}
        </p>
      </div>
    </div>

    <div class="mod-card__actions">
      <div class="mod-card__actions-left">
        <v-btn class="ma-0" icon @click="faved = !faved">
          <v-icon :color="iconColor">{{ faved ? 'mdi-heart' : 'mdi-heart-outline' }}</v-icon>
        </v-btn>
        <v-tooltip top>
          <template #activator="{on}">
            <v-icon v-if="modData.editors_choice" :color="iconColor" v-on="on">mdi-star</v-icon>
          </template>

          <span>Editor's Choice</span>
        </v-tooltip>
      </div>

      <v-btn :color="color" class="mod-card__actions-open" to="/mod" depressed nuxt round>View Mod</v-btn>

      <v-spacer/>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    background: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: true
    },
    color: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      faved: false,
      hovered: false
    };
  },
  computed: {
    iconColor() {
      return this.hovered ? modData.color : 'white';
    }
  },
  async asyncData({$axios, params}) {
    const [
      {result: modData}
    ] = Promise.all([
      $axios.get(`/mod/${params.id}`)
    ]);

    return {
      modData
    };
  }
};
</script>

<style lang="stylus">
@import '~vuetify/src/stylus/settings/_variables'
@import '~vuetify/src/stylus/settings/_elevations'

.mod-card
  position: relative;
  display: flex;
  background: var(--color);
  height: 200px;
  border-radius: 8px;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  transition: $primary-transition;

  elevation(2);

  &__hover
    background-image: var(--bg);
    background-color: var(--color);
    background-size: cover;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    color: #FFF;
    opacity: 0;
    transition: $primary-transition;

    @supports (backdrop-filter: blur(5px)) or (-webkit-backdrop-filter: blur(5px))
      &, &::before
        backdrop-filter: blur(5px);
        -webkit-backdrop-filter: blur(5px);

    &::before
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.35);

    &-content
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 3.5rem 3rem calc(2rem + 48px);
      width: 100%;
      height: 100%;
      transform: translateY(48px);
      transition: $primary-transition;

    &-title
      line-height: 1;
      margin-bottom: 1rem;

  &__actions
    position: absolute;
    bottom: 0;
    width: 100%;
    display: flex;
    align-items: center;

    &-left
      display: flex;
      align-items: center;
      flex: 1;
      padding: 8px;

    &-open
      color: #FFF !important;
      position: relative;
      bottom: 8px;
      transform: translateY(calc(100% + 18px));
      transition: $primary-transition;

  &:hover
    elevation(8);

    & ^[0]
      &__actions-open
        transform: translateY(0);

      &__hover
        opacity: 1;

        &-content
          transform: translateY(0);
</style>
