<template>
  <div class="mod-category">
    <h3 class="mod-category__title mb-2">{{ title }}</h3>
    <div class="mod-category__scroller">
      <slot/>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    }
  }
};
</script>

<style>
.mod-category {
  position: relative;
  width: calc(100% + 2rem);
}

.mod-category__title {
  font-size: 2rem;
}

.mod-category__scroller {
  /*height: 308px;*/
  padding: 0 1rem 1rem;
  position: relative;
  /* background: #000; */
  display: flex;
  flex-wrap: nowrap;
  overflow-y: hidden;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}
</style>
