<template>
  <div>
    <!-- Really stupidly hacky way of displaying previous route ala Twitter dialogs. -->
    <!-- vue pls make it better kthx -->
    <component :is="parentComponent" v-if="!gone && parentComponent"/>

    <permanent-dialog max-width="1200" @exit="goBack">
      <v-card :class="['mod', {'is-editors-choice': editorsChoice}]">
        <v-card-title class="mod__title-bar">
          <v-btn class="ma-0" :dark="editorsChoice" icon @click="goBack">
            <v-icon>mdi-arrow-left</v-icon>
          </v-btn>

          <v-spacer/>

          <v-tooltip v-if="user" z-index="300" bottom>
            <template #activator="{on}">
              <v-btn class="my-0 mx-2" :dark="editorsChoice" icon v-on="on" @click="report = true">
                <v-icon>mdi-flag</v-icon>
              </v-btn>
            </template>

            <span>Report Abuse</span>
          </v-tooltip>

          <v-menu z-index="300" left>
            <template #activator="{on: menu}">
              <v-tooltip z-index="300" bottom>
                <template #activator="{on: tooltip}">
                  <v-btn class="ma-0" :dark="editorsChoice" icon v-on="{...tooltip, ...menu}">
                    <v-icon>mdi-share</v-icon>
                  </v-btn>
                </template>

                <span>Share</span>
              </v-tooltip>
            </template>

            <v-list>
              <social-sharing :url="href" title="moddy" description="super cool modd owo" quote="Check out this super cool mod!" hashtags="mod,sayonika,ddlc" network-tag="v-list-tile" inline-template>
                <div>
                  <network network="facebook">
                    <v-list-tile-avatar>
                      <v-avatar>
                        <v-icon>mdi-facebook</v-icon>
                      </v-avatar>
                    </v-list-tile-avatar>

                    <v-list-tile-title>Facebook</v-list-tile-title>
                  </network>

                  <network network="twitter">
                    <v-list-tile-avatar>
                      <v-avatar>
                        <v-icon>mdi-twitter</v-icon>
                      </v-avatar>
                    </v-list-tile-avatar>

                    <v-list-tile-title>Twitter</v-list-tile-title>
                  </network>

                  <network network="reddit">
                    <v-list-tile-avatar>
                      <v-avatar>
                        <v-icon>mdi-reddit</v-icon>
                      </v-avatar>
                    </v-list-tile-avatar>

                    <v-list-tile-title>Reddit</v-list-tile-title>
                  </network>
                </div>
              </social-sharing>

              <v-list-tile @click="copyLink">
                <v-list-tile-avatar>
                  <v-avatar>
                    <v-icon>mdi-content-copy</v-icon>
                  </v-avatar>
                </v-list-tile-avatar>

                <v-list-tile-title>Copy Link</v-list-tile-title>
              </v-list-tile>
            </v-list>
          </v-menu>

          <v-tooltip z-index="300" bottom>
            <template #activator="{on}">
              <v-btn class="my-0 mx-2" :dark="editorsChoice" icon v-on="on" @click="faved = !faved">
                <v-icon>{{ faved ? 'mdi-heart' : 'mdi-heart-outline' }}</v-icon>
              </v-btn>
            </template>

            <span>Favourite</span>
          </v-tooltip>

          <v-tooltip z-index="300" bottom>
            <template #activator="{on}">
              <v-btn class="ma-0" :dark="editorsChoice" icon v-on="on">
                <v-icon>mdi-download</v-icon>
              </v-btn>
            </template>

            <span>Download</span>
          </v-tooltip>
        </v-card-title>

        <v-card-text v-if="!editorsChoice" class="mod__header">
          <div class="mod__header-title">
            <v-avatar class="elevation-4" color="primary" size="192">
              <!--  -->
            </v-avatar>

            <div class="mod__header-title__block">
              <h1 class="display-1">
                {{ modData.title }}
              </h1>

              <div class="mod__header-authors">
                <h2 class="headline mr-2">By</h2>

                <v-chip v-for="author in modData.authors" :key="author">
                  <v-avatar>
                    <img :src="author.avatar">
                  </v-avatar>
                  {{ author.username }}
                </v-chip>
              </div>
            </div>
          </div>
        </v-card-text>
        <template v-else>
          <v-responsive :aspect-ratio="21/9">
            <v-card-text class="mod__header" :style="`background-image: url(${modData.banner})`"/>
          </v-responsive>

          <div v-if="modData.editors_choice" class="mod__editors-choice">
            <div class="mod__editors-choice__seam">
              <v-chip color="purple white--text">
                <v-avatar>
                  <v-icon dark small>mdi-thumb-up</v-icon>
                </v-avatar>

                Editors' Choice
              </v-chip>
            </div>

            <div class="mod__editors-choice__content px-5 pt-5 pb-2">
              <p class="mod__editors-choice__body mb-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin posuere mi ipsum, vel efficitur sapien convallis ac. Pellentesque et fermentum urna. Proin id faucibus mi. Phasellus ullamcorper dignissim facilisis. Fusce vestibulum elit condimentum enim ultricies suscipit. Suspendisse potenti. Proin nibh orci, vestibulum vel vulputate at, malesuada fermentum ligula. Aliquam eu bibendum risus. Sed sapien felis, interdum et malesuada maximus, accumsan eget dolor.
              </p>

              <nuxt-link class="mod__editors-choice__author mb-3" to="/">
                <v-avatar class="mr-2" color="primary"/>
                <span class="subheading">- Obama</span>
              </nuxt-link>
            </div>
          </div>

          <v-divider/>
        </template>

        <v-card-text class="mod__description">
          <v-layout align-center column>
            <height-transition>
              <p v-if="!expandedDescription" class="mod__tagline">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dapibus lorem at posuere volutpat. Sed in neque quam. Etiam semper libero nec risus feugiat consequat in eu est. Nam vitae elementum velit, quis vestibulum ante. Praesent sed leo ac sem luctus malesuada ac quis est. Praesent quis fermentum libero.
              </p>
            </height-transition>

            <v-btn class="px-5" color="secondary" flat round @click="expandedDescription = !expandedDescription">
              Read {{ !expandedDescription ? 'More' : 'Less' }}
            </v-btn>

            <height-transition>
              <p v-if="expandedDescription">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In congue neque ultricies leo maximus euismod. Suspendisse id tempus metus, sed aliquam tortor. Nulla facilisi. Nunc accumsan facilisis enim, id pharetra ligula. Nunc tincidunt diam vitae imperdiet hendrerit. Ut non imperdiet leo. Sed facilisis justo et egestas tristique. Integer quam mi, maximus ac commodo quis, efficitur ac tortor. Suspendisse eu sapien vel massa dictum vestibulum.<br><br>

                Quisque quis odio sed justo fermentum sagittis. Nunc in luctus orci. Praesent et mauris sit amet purus pharetra aliquet ac in odio. Pellentesque at feugiat nisl. In at faucibus ipsum. Donec vel turpis ipsum. In maximus est eget tristique pretium. In ipsum ipsum, ultrices vel tortor vel, molestie mollis nisi. Donec blandit ex ullamcorper ante bibendum, sed ullamcorper tortor pellentesque. Sed at nunc mattis, consequat augue sed, efficitur odio. Praesent facilisis velit eleifend, rhoncus urna eu, lacinia elit. Maecenas sed nulla auctor, imperdiet turpis non, facilisis purus. Nunc porttitor risus ut vulputate malesuada.<br><br>

                In magna quam, euismod sit amet purus scelerisque, venenatis pellentesque nisl. Cras quis orci ultricies dui elementum malesuada. Morbi eget pharetra arcu. Nulla eleifend ultricies malesuada. Suspendisse laoreet luctus scelerisque. Suspendisse sit amet augue ultricies, ultrices purus vitae, eleifend velit. Fusce feugiat lacinia purus non commodo. Integer erat libero, aliquam eget egestas ac, accumsan venenatis purus. Maecenas posuere vulputate libero at egestas. Aliquam convallis velit sapien, at mollis nunc bibendum ut. Suspendisse congue augue ex, eu ornare justo molestie at. Pellentesque egestas ante ac elit congue, eget consequat nunc dignissim. Phasellus ac risus in dui commodo consequat. Proin nec accumsan elit. Vivamus est lorem, aliquet et ornare sed, tristique quis purus.<br><br>

                Cras interdum, ante ac dapibus posuere, ipsum metus luctus velit, eget sodales dolor lacus vel diam. Donec pellentesque eu justo ac maximus. Sed in mi mi. In molestie est posuere, interdum augue ut, vehicula neque. Sed non consectetur erat, sed ultrices est. Curabitur mollis tempus ullamcorper. Fusce faucibus ut tellus sed vehicula. Sed maximus tellus at tincidunt dapibus. Vestibulum ut orci ligula. Duis sit amet pharetra ligula.<br><br>

                Vivamus congue metus non cursus porta. Sed sollicitudin massa at interdum varius. Praesent placerat, est eget eleifend gravida, erat mauris viverra dolor, eu maximus erat ligula ac ex. Fusce vulputate, ante vel tempus volutpat, augue urna pulvinar nunc, a convallis massa augue non dui. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam quis nulla elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In hac habitasse platea dictumst. Cras ut molestie nisi. Donec viverra rhoncus tellus ac tempus.
              </p>
            </height-transition>
          </v-layout>
        </v-card-text>

        <div class="mod__tags">
          <div class="mod__tags-row">
            <v-chip v-if="modData.trending" color="deep-orange white--text">
              <v-avatar>
                <v-icon dark>mdi-fire</v-icon>
              </v-avatar>

              Trending
            </v-chip>

            <v-chip v-if="modData.nsfw" color="red white--text">
              <v-avatar>
                <v-icon dark>mdi-alert-circle</v-icon>
              </v-avatar>

              NSFW
            </v-chip>

            <v-chip color="purple white--text">
              <v-avatar>
                <v-icon dark>mdi-emoticon-outline</v-icon>
              </v-avatar>
              {{ modData.category }}
            </v-chip>
          </div>
        </div>

        <v-responsive :aspect-ratio="21/9">
          <ai-carousel tile>
            <v-list v-for="media in modData.media" :key="media">
              <v-carousel-item :src="media.url"/>
            </v-list>
          </ai-carousel>
        </v-responsive>

        <v-card-text class="mod__reviews px-5">
          <div class="mod__reviews-top">
            <h2 class="title">Reviews</h2>
            <v-spacer/>
            <v-btn color="primary" outline round @click="createReview = true">
              <v-icon left>mdi-message-outline</v-icon>
              Write Review
            </v-btn>
          </div>

          <v-layout class="my-3" align-center column>
            <mod-review/>
            <mod-review/>

            <v-btn class="px-5" color="secondary" flat round @click="moreReviews = true">
              Read More
            </v-btn>
          </v-layout>
        </v-card-text>
      </v-card>
    </permanent-dialog>

    <v-dialog v-model="createReview" max-width="750" no-click-animation persistent>
      <create-review id="420" @close="createReviewClose" @error="createReviewError"/>
    </v-dialog>

    <v-dialog v-model="moreReviews" max-width="1000">
      <more-reviews/>
    </v-dialog>

    <v-snackbar v-model="copied" :timeout="2000" right>
      <v-icon dark>mdi-check</v-icon>
      Link copied to clipboard
    </v-snackbar>

    <v-snackbar v-model="snackbarOpen" :timeout="5000" right>
      {{ snackbarText }}
    </v-snackbar>

    <v-dialog v-model="report" max-width="750">
      <report-mod @close="report = false"/>
    </v-dialog>
  </div>
</template>

<script>
import AiCarousel from '~/components/AiCarousel.vue';
import CreateReview from '~/components/CreateReview.vue';
import HeightTransition from '~/components/HeightTransition.vue';
import ModReview from '~/components/ModReview.vue';
import MoreReviews from '~/components/MoreReviews.vue';
import PermanentDialog from '~/components/PermanentDialog.vue';
import ReportMod from '~/components/ReportMod.vue';

import copy from 'clipboard-copy';

export default {
  components: {
    AiCarousel,
    CreateReview,
    HeightTransition,
    ModReview,
    MoreReviews,
    PermanentDialog,
    ReportMod
  },
  computed: {
    parentComponent() {
      return this.$store.state.parentRoute;
    },
    href() {
      return process.browser ? window.location.href : 'null';
    },
    user() {
      return this.$store.state.auth.user;
    }
  },
  async asyncData({$axios, params}) {
    const [
      {result: modData}
    ] = Promise.all([
      $axios.get(`/mod/${params.id}`)
    ]);

    return {
      modData
    };
  },
  methods: {
    async copyLink() {
      await copy(location.href);
      this.copied = true;
    },
    createReviewClose(val) {
      this.createReview = false;
    },
    createReviewError(msg) {
      this.snackbarText = msg;
      this.snackbarOpen = true;
    },
    goBack() {
      if (this.gone) return;

      if (window.history.length === 1) this.$router.push('/');
      else this.$router.back();

      this.gone = true;
    }
  }
};
</script>

<style lang="stylus">
.mod
  &__title-bar
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 10;

  &__header
    padding: calc(68px + 4rem) 4rem;

    &-title
      display: flex;
      align-items: center;

      &__block
        margin-left: 2rem;

        h1
          margin-bottom: 1rem;

    &-authors
      display: flex;
      align-items: center;
      flex-wrap: wrap;

  &__description
    padding: 2rem 12.5%;
    display: flex;
    flex-direction: column;
    align-items: center;

  &__tagline
    text-align: center;

  &__tags
    position: relative;

    &-row
      position: absolute;
      right: 0;
      top: -20px;
      margin-right: 2rem;
      z-index: 10;

  &__media
    width: 100%;
    height: 100%;

  &__reviews
    &-top
      display: flex;
      align-items: center;

  &__editors-choice
    position: relative;

    &__seam
      display: flex;
      position: absolute;
      flex-direction: column;
      align-items: center;
      left: 0;
      right: 0;
      top: -20px;

    &__content
      display: flex;
      flex-direction: column;
      align-items: center;

    &__body
      text-align: center;
      width: 75%;

    &__author
      display: flex;
      align-items: center;
      color: inherit;
      text-decoration: none;

  &.is-editors-choice
    & ^[0]
      &__title-bar
        box-shadow: inset 0 80px 35px -50px rgba(0, 0, 0, 0.5);

      &__header
        height: 100%;
        padding: 0;
        background-position: center;
        background-size: cover;
</style>
