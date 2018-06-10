<template>
  <div class="user-header ratio-16-9">
    <div class="user-header__inner">
      <md-avatar class="md-large">
        <img v-if="img" :src="img" alt="Avatar">
        <span v-else>{{ initialise(name) }}</span>
      </md-avatar>
      <div class="md-title user-header__primary">{{ name }}</div>
      <div class="md-subheading user-header__secondary">{{ extra }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    img: {
      type: String,
      required: false,
      default: ''
    },
    name: {
      type: String,
      required: true
    },
    extra: {
      type: String,
      required: true
    }
  },
  methods: {
    initialise(txt) {
      return txt.match(/(\b.+?\B)+/g).map(v => v.trim()).join('').toUpperCase();
    }
  }
};
</script>

<style lang="scss">
@import '~vue-material/dist/theme/variables';
@import '~vue-material/dist/theme/mixins';

.user-header__inner {
  padding: 2rem 2rem 0;
  width: 100%;
}

.user-header__primary {
  margin-top: 1rem;
}

.user-header__secondary {
  margin-top: 0.25rem;
}

.user-header {
  @include md-theme-property(color, text-primary, primary);
  @include md-theme-property(background-color, primary);
}
</style>
