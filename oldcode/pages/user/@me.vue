<template>
  <v-container class="pa-0" style="height: 100%" fluid>
    <v-layout style="height: 100%" row wrap>
      <v-flex lg2 md12>
        <div class="profile__side">
          <v-layout class="pa-3" column>
            <img class="profile__avatar" :src="profile.avatar" alt="user icon">

            <h1 class="profile__name headline font-weight-medium text-xs-center mt-2">{{ profile.username }}</h1>

            <v-layout class="mt-2" justify-center>
              <v-tooltip top>
                <v-avatar slot="activator" class="ma-1" color="red" size="32">
                  <v-icon size="20" dark>mdi-heart</v-icon>
                </v-avatar>

                <span>Supporter</span>
              </v-tooltip>

              <v-tooltip v-if="profile.editor" top>
                <v-avatar slot="activator" class="ma-1" color="indigo" size="32">
                  <v-icon size="20" dark>mdi-pencil</v-icon>
                </v-avatar>

                <span>Editor</span>
              </v-tooltip>

              <v-tooltip v-if="profile.developer" top>
                <v-avatar slot="activator" class="ma-1" color="orange" size="32">
                  <v-icon size="20" dark>mdi-wrench</v-icon>
                </v-avatar>

                <span>Sayonika Developer</span>
              </v-tooltip>
            </v-layout>

            <section class="profile__bio subheading font-weight-light mt-2">
              {{ profile.bio }}
            </section>
          </v-layout>
        </div>
      </v-flex>

      <v-flex lg10 md12>
        <v-container fluid>
          <mod-category v-if="authoredMods.length" title="Authored Mods" class="mb-2">
            <h2 v-if="!authoredMods.length" class="display-1 font-italic category__empty text-xs-center">
              You don't have any submitted mods. Try submitting one!
            </h2>
          </mod-category>
          <mod-category v-if="userFavorites.length" title="Favorited" class="mb-2">
            <h2 v-if="!userFavorites.length" class="display-1 font-italic category__empty text-xs-center">
              You seem to have no favorite mods, why not try adding one?
            </h2>
          </mod-category>
          <mod-category title="Collaborated Mods" class="mb-2">
            <h2 class="display-1 font-italic category__empty text-xs-center">
              Coming really soon!
            </h2>
          </mod-category>
        </v-container>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import ModCategory from '~/components/ModCategory.vue';
// import ModCard from '~/components/ModCard.vue';

export default {
  components: {
    ModCategory
    // ModCard
  },
  async asyncData({$axios}) {
    const [
      {result: profile},
      {result: {results: authoredMods}},
      {result: {results: userFavorites}}
    ] = await Promise.all([
      $axios.get('/users/@me'),
      $axios.get('/users/@me/mods'),
      $axios.get('/users/@me/favorites')
    ]);

    return {
      profile,
      authoredMods,
      userFavorites
    };
  }
};
</script>

<style lang="stylus">
.profile
  &__side
    height: 100%;
    border-right: solid 1px rgba(0, 0, 0, 0.12);

  &__avatar
    width: 100%;
    height: 100%;
    border-radius: 50%;

  &__name
    word-wrap: break-word;

  &__bio
    text-align: center;

.category__empty
  opacity: 0.67;
</style>
