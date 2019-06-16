<template>
  <transition name="height" @enter="enter" @after-enter="afterEnter" @leave="leave">
    <slot/>
  </transition>
</template>

<script>
export default {
  methods: {
    enter(el) {
      const width = getComputedStyle(el).width;

      el.style.width = width;
      el.style.position = 'absolute';
      el.style.visibility = 'hidden';
      el.style.height = 'auto';

      const height = getComputedStyle(el).height;

      el.style.width = null;
      el.style.position = null;
      el.style.visibility = null;
      el.style.height = 0;

      // Force repaint to make sure the animation is triggered correctly.
      getComputedStyle(el).height;

      // Trigger the animation.
      // Use `setTimeout` to make sure that the above paint has finished correctly.
      setTimeout(() => el.style.height = height);
    },
    afterEnter(el) {
      el.style.height = 'auto';
    },
    leave(el) {
      const height = getComputedStyle(el).height;

      el.style.height = height;

      // Force repaint
      getComputedStyle(el).height;
      setTimeout(() => el.style.height = 0);
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '~vuetify/src/stylus/settings/_variables'

.height
  &-enter-active, &-leave-active
    transition: $primary-transition
    overflow: hidden;

  &-enter, &-leave-to
    height: 0;
    margin: 0;
    opacity: 0;

// Force optimisation of animation
*
  will-change: height;
  transform: translateZ(0);
  backface-visibility: hidden;
  perspective: 1000px;
</style>
