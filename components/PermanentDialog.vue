<template>
  <div class="v-overlay v-overlay--active" style="z-index: 201" @click="scrimClick">
    <div class="v-dialog__content v-dialog__content--active" tabindex="-1" style="z-index: 202;">
      <div :style="maxWidth ? `max-width: ${maxWidth}px` : null" class="v-dialog v-dialog--active v-dialog--persistent">
        <slot/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    maxWidth: {
      type: [String, Number],
      default: null
    }
  },
  methods: {
    scrimClick() {
      this.$emit('exit');
    }
  }
};
</script>
