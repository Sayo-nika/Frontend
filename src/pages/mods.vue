<template>
  <div>
    <v-text-field id="search-box" v-model="search" :class="{'elevation-6': searchInFocus}"
                  label="Search" prepend-icon="search" solo
                  @blur="searchInFocus = false" @focus="searchInFocus = true"/>
  </div>
</template>

<script>
export default {
  layout: 'mods',
  data() {
    return {
      search: '',
      searchInFocus: false,
      categoryFilter: null,
      categories: {
        released: 'Released',
        playtesting: 'Playtesting',
        inDevelopment: 'In Development',
        planning: 'Planning'
      }
    };
  }
};
</script>

<style>
</style>
