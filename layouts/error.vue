<template>
  <div>
    <h2>worlds ending i guess</h2>
    <h1><pre><code>{{ stringError }}</code></pre></h1>
  </div>
</template>

<script>
export default {
  props: ['error'], // eslint-disable-line vue/require-prop-types
  data() {
    return {
      stringError: JSON.stringify(this.error)
    };
  },
  mounted() {
    console.error(this.error);
  }
};
</script>

<style>
</style>
