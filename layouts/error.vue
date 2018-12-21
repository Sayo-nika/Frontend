<template>
  <div>
    <h2>Whoops!</h2>
    <br>
    <p> A team of highly trained dokis has been sent to your location. </p>
    <p> If you see them, show them this error. </p>
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
