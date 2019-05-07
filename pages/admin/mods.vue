<template>
  <div>
    <header class="mb-4">
      <h1 class="display-2">Mods</h1>
      <h2 class="headline grey--text text--darken-1">There are <strong>420</strong> mods in the queue.</h2>

      <v-layout align-center mt-2>
        <v-menu>
          <template #activator="{on}">
            <v-btn outline v-on="on">
              {{ sort }}
              <v-icon right>
                mdi-chevron-down
              </v-icon>
            </v-btn>
          </template>

          <v-list>
            <v-list-tile ripple @click="sort = 'Submitted'">
              <v-list-tile-title>
                Submitted
              </v-list-tile-title>
            </v-list-tile>

            <v-list-tile ripple @click="sort = 'Name'">
              <v-list-tile-title>
                Name
              </v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-menu>

        <v-checkbox class="ml-2" label="Ascending"/>
      </v-layout>
    </header>

    <v-list class="transparent" avatar three-line>
      <v-card v-for="i in 10" :key="`z${i}`" class="mb-3 zoop">
        <v-list-tile class="verify-entry">
          <v-list-tile-avatar color="primary">
            Z
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title>
              Obamas Sexy time club
            </v-list-tile-title>

            <v-list-tile-sub-title>
              Submitted by God
              <br>
              20 March, 20219
            </v-list-tile-sub-title>
          </v-list-tile-content>

          <v-spacer/>

          <v-list-tile-action>
            <v-btn color="primary" depressed @click="dialogOpen = true">View</v-btn>
          </v-list-tile-action>
        </v-list-tile>
      </v-card>
    </v-list>

    <v-dialog v-model="dialogOpen" max-width="1000">
      <v-card>
        <v-card-text>
          <header class="align-center pa-5" style="display: flex;">
            <v-avatar class="elevation-4 mr-4" color="primary" size="192">
              <!--  -->
            </v-avatar>

            <div>
              <h1 class="display-1">Dededemon fucking kills kirby</h1>

              <div class="align-center mt-3" style="flex-wrap: wrap; display: flex;">
                <h2 class="headline mr-2">By</h2>

                <v-chip v-for="i in 10" :key="i">
                  <v-avatar color="primary"/>
                  Obama
                </v-chip>
              </div>
            </div>
          </header>
        </v-card-text>

        <v-card-text class="px-5 py-2">
          <v-layout column>
            <h2 class="headline mb-2">Description</h2>
            <height-transition>
              <p v-if="!expandedDescription">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dapibus lorem at posuere volutpat. Sed in neque quam. Etiam semper libero nec risus feugiat consequat in eu est. Nam vitae elementum velit, quis vestibulum ante. Praesent sed leo ac sem luctus malesuada ac quis est. Praesent quis fermentum libero.
              </p>
            </height-transition>

            <v-btn class="px-5 align-self-center" color="secondary" flat round @click="expandedDescription = !expandedDescription">
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

        <v-responsive :aspect-ratio="21/9">
          <ai-carousel tile>
            <v-carousel-item/>
          </ai-carousel>
        </v-responsive>

        <v-card-actions class="py-4">
          <v-spacer/>
          <v-btn color="accent" block depressed>Approve</v-btn>
          <v-btn color="secondary" block depressed>Deny</v-btn>
          <v-spacer/>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import AiCarousel from '~/components/AiCarousel.vue';
import HeightTransition from '~/components/HeightTransition.vue';

export default {
  components: {
    AiCarousel,
    HeightTransition
  },
  layout: 'admin',
  middleware: 'admin',
  data() {
    return {
      sort: 'Submitted',
      dialogOpen: false,
      expandedDescription: false
    };
  }
};
</script>

<style lang="stylus">
@import '~vuetify/src/stylus/settings/_elevations'

.verify-entry
  position: relative;
  // background-image: url('~assets/img/login-bg.jpg');
  background-image: linear-gradient(to right,#7c75ee,#e767eb 75%);
  background-position: left center;

  &::before
    content: "";
    background-image: linear-gradient(to right, rgba(255, 255, 255, 0.5), #FFF 50%);
    position: absolute;
    height: 100%;
    width: 100%;
    border-radius: 8px;

.zoop:hover
  elevation(10, true);
</style>
