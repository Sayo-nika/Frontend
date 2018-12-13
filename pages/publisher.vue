<template>
  <v-layout>
    <mod-category title="Approved">
      <mod-card background="https://placeimg.com/1000/1000/arch" icon="https://placeimg.com/128/128/people" title="DDLC Mod"/>
      <mod-card background="https://placeimg.com/1000/1000/arch" icon="https://placeimg.com/128/128/people" title="DDLC Mod with a really really long name"/>
      <mod-card background="https://placeimg.com/1000/1000/arch" icon="https://placeimg.com/128/128/people" title="DDLC Mod"/>
      <mod-card background="https://placeimg.com/1000/1000/arch" icon="https://placeimg.com/128/128/people" title="DDLC Mod with a really really long name"/>
      <mod-card background="https://placeimg.com/1000/1000/arch" icon="https://placeimg.com/128/128/people" title="DDLC Mod"/>
    </mod-category>
    <mod-category title="Pending">
      <mod-card background="https://placeimg.com/1000/1000/arch" icon="https://placeimg.com/128/128/people" title="DDLC Mod"/>
      <mod-card background="https://placeimg.com/1000/1000/arch" icon="https://placeimg.com/128/128/people" title="DDLC Mod with a really really long name"/>
      <mod-card background="https://placeimg.com/1000/1000/arch" icon="https://placeimg.com/128/128/people" title="DDLC Mod"/>
      <mod-card background="https://placeimg.com/1000/1000/arch" icon="https://placeimg.com/128/128/people" title="DDLC Mod with a really really long name"/>
      <mod-card background="https://placeimg.com/1000/1000/arch" icon="https://placeimg.com/128/128/people" title="DDLC Mod"/>
    </mod-category>
    <mod-category title="Drafts">
      <mod-card background="https://placeimg.com/1000/1000/arch" icon="https://placeimg.com/128/128/people" title="DDLC Mod"/>
      <mod-card background="https://placeimg.com/1000/1000/arch" icon="https://placeimg.com/128/128/people" title="DDLC Mod with a really really long name"/>
      <mod-card background="https://placeimg.com/1000/1000/arch" icon="https://placeimg.com/128/128/people" title="DDLC Mod"/>
      <mod-card background="https://placeimg.com/1000/1000/arch" icon="https://placeimg.com/128/128/people" title="DDLC Mod with a really really long name"/>
      <mod-card background="https://placeimg.com/1000/1000/arch" icon="https://placeimg.com/128/128/people" title="DDLC Mod"/>
    </mod-category>
  </v-layout>
</template>

<script>
import ModCategory from '~/components/ModCategory.vue';
import ModCard from '~/components/ModCard.vue';

export default {
  components: {
    ModCategory,
    ModCard
  }
};
</script>
