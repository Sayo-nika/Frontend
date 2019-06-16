<template>
  <v-card color="transparent" flat>
    <v-layout style="padding: 18px 0;" align-center column>
      <v-avatar class="upload-collaborator__avatar" size="64">
        <img :src="avatar" alt="avatar">
        <div class="upload-collaborator__deleter" @click="$emit('delete')">
          <v-icon dark>mdi-close</v-icon>
        </div>
      </v-avatar>

      <div class="mt-2 subheading text-truncate font-weight-thin">{{ name }}</div>
      <v-menu>
        <template #activator="data">
          <v-btn color="grey lighten-2 py-1" block small v-on="data.on">{{ selectedText }}</v-btn>
        </template>

        <v-list>
          <v-list-tile v-for="({text, value}) in roles" :key="value" ripple @click="changeSelected(text, value)">
            {{ text }}
          </v-list-tile>
        </v-list>
      </v-menu>
    </v-layout>
  </v-card>
</template>

<script>
import {roles} from '~/utils/constants';

export default {
  props: {
    avatar: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      selectedText: roles[0].text,
      selected: roles[0].value,
      roles: roles
    };
  },
  methods: {
    changeSelected(text, value) {
      this.selectedText = text;
      this.selected = value;

      this.$emit('change', value);
    }
  }
};
</script>

<style lang="stylus">
@import '~vuetify/src/stylus/settings/_variables'

.upload-collaborator
  &__avatar
    position: relative;

  &__deleter
    position: absolute;
    border-radius: 50%;
    background: rgba(0, 0, 0, 0.54);
    width: 100%;
    height: 100%;
    cursor: pointer;
    opacity: 0;
    transition: $secondary-transition

    &:hover
      opacity: 1;
</style>
