<template>
  <v-container class="pa-0" style="height: 100%" fluid>
    <v-layout style="height: 100%" row wrap>
      <v-flex lg2 md12>
        <div class="profile__side">
          <v-layout class="pa-3" column>
            <img class="profile__avatar" src="https://avatars2.githubusercontent.com/u/18654005" alt="user icon">

            <v-layout class="mt-3" justify-center>
              <v-tooltip top>
                <v-avatar slot="activator" class="ma-1" color="red" size="32">
                  <v-icon size="20" dark>mdi-heart</v-icon>
                </v-avatar>

                <span>Supporter</span>
              </v-tooltip>

              <v-tooltip top>
                <v-avatar slot="activator" class="ma-1" color="indigo" size="32">
                  <v-icon size="20" dark>mdi-pencil</v-icon>
                </v-avatar>

                <span>Mod Author</span>
              </v-tooltip>

              <v-tooltip top>
                <v-avatar slot="activator" class="ma-1" color="orange" size="32">
                  <v-icon size="20" dark>mdi-wrench</v-icon>
                </v-avatar>

                <span>Sayonika Developer</span>
              </v-tooltip>

              <v-tooltip top>
                <v-avatar slot="activator" class="ma-1" color="light-blue" size="32">
                  <v-icon size="20" dark>mdi-gavel</v-icon>
                </v-avatar>

                <span>Moderator</span>
              </v-tooltip>
            </v-layout>

            <section class="profile__bio subheading font-weight-light mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Curabitur auctor hendrerit consectetur.
              Proin magna lorem, vehicula vel facilisis ut, fringilla ut mauris.
              Donec porttitor metus in diam maximus rhoncus.
            </section>
          </v-layout>
        </div>
      </v-flex>

      <v-flex lg10 md12>
        <v-container fluid>
          <mod-category title="Category">
            <mod-card background="https://placeimg.com/1000/1000/arch" icon="https://placeimg.com/128/128/people" title="DDLC Mod"/>
            <mod-card background="https://placeimg.com/1000/1000/arch" icon="https://placeimg.com/128/128/people" title="DDLC Mod with a really really long name"/>
            <mod-card background="https://placeimg.com/1000/1000/arch" icon="https://placeimg.com/128/128/people" title="DDLC Mod"/>
            <mod-card background="https://placeimg.com/1000/1000/arch" icon="https://placeimg.com/128/128/people" title="DDLC Mod with a really really long name"/>
            <mod-card background="https://placeimg.com/1000/1000/arch" icon="https://placeimg.com/128/128/people" title="DDLC Mod"/>
          </mod-category>
        </v-container>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import ModCategory from '~/components/ModCategory.vue';
import ModCard from '~/components/ModCard.vue';

export default {
  layout: 'default-no-container',
  components: {
    ModCategory,
    ModCard
  }
};
</script>

<style lang="stylus">
.profile__side {
  height: 100%;
  border-right: solid 1px rgba(0, 0, 0, 0.12);
}

.profile__avatar {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}

.profile__bio {
  text-align: center;
}
</style>
