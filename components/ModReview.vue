<template>
  <div class="ma-2 mod__review">
    <nuxt-link class="mod__review-author mr-4" to="/">
      <v-avatar color="grey" size="64">
        <!--  -->
      </v-avatar>
      <span class="mt-2">Review Author</span>
    </nuxt-link>

    <div class="mod__review-body">
      <h1 class="mod__review-title headline mb-1">Obama is cool</h1>

      <v-rating v-model="rating" class="mod__review-rating" color="accent" readonly/>

      <p class="mod__review-content mt-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tellus erat, sodales non accumsan eu, placerat vitae urna. Quisque suscipit mollis vestibulum. Maecenas et dui nec elit lobortis placerat eu ac ipsum. Aliquam sed fringilla sapien, a viverra neque. Mauris aliquet dolor ac mauris condimentum, vel consequat lorem mollis. Duis efficitur gravida placerat. Curabitur tristique congue diam ut venenatis. Curabitur luctus fringilla aliquam. Maecenas ac pharetra metus, nec tristique neque. Ut nisl lectus, tempor eget suscipit eu, dictum ac nisl. Donec facilisis, tortor nec blandit auctor, justo nisi tincidunt lacus, nec luctus lectus nibh ut nunc. Phasellus dictum elit vitae velit aliquam, a bibendum ex facilisis. Aenean et lacinia arcu.
      </p>

      <div class="mod__review-votes">
        <v-tooltip top>
          <template #activator="{on}">
            <div class="mod__review-votes__button mr-3" v-on="on" @click="vote('upvote')">
              <v-btn ref="ok" class="ma-0 mr-1" icon>
                <v-icon>{{ !upvoted ? 'mdi-thumb-up-outline' : 'mdi-thumb-up' }}</v-icon>
              </v-btn>

              {{ calcUpvotes }}
            </div>
          </template>

          <span>Upvote</span>
        </v-tooltip>

        <v-tooltip top>
          <template #activator="{on}">
            <div class="mod__review-votes__button mr-5" v-on="on" @click="vote('downvote')">
              <v-btn class="ma-0 mr-1" icon>
                <v-icon>{{ !downvoted ? 'mdi-thumb-down-outline' : 'mdi-thumb-down' }}</v-icon>
              </v-btn>

              {{ calcDownvotes }}
            </div>
          </template>

          <span>Downvote</span>
        </v-tooltip>

        <v-tooltip top>
          <template #activator="{on}">
            <div class="mod__review-votes__button" v-on="on" @click="funny">
              <v-btn class="ma-0 mr-1" icon>
                <v-icon>{{ !foundFunny ? 'mdi-emoticon-excited-outline' : 'mdi-emoticon-excited' }}</v-icon>
              </v-btn>

              {{ calcFunnyCount }}
            </div>
          </template>

          <span>Found Funny</span>
        </v-tooltip>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      upvoted: false,
      downvoted: false,
      foundFunny: true,
      upvotes: 127,
      downvotes: 256,
      funnyCount: 420,
      rating: 4
    };
  },
  computed: {
    calcUpvotes() {
      return this.upvotes + (this.upvoted ? 1 : 0);
    },
    calcDownvotes() {
      return this.downvotes + (this.downvoted ? 1 : 0);
    },
    calcFunnyCount() {
      return this.funnyCount + (this.foundFunny ? 1 : 0);
    }
  },
  methods: {
    vote(type) {
      if (type === 'upvote') {
        this.upvoted = !this.upvoted;

        if (this.upvoted) {
          this.downvoted = false;
          // do thing
        }
      } else if (type === 'downvote') {
        this.downvoted = !this.downvoted;

        if (this.downvoted) {
          this.upvoted = false;
          // do thing
        }
      }
    },
    funny() {
      this.foundFunny = !this.foundFunny;
    }
  }
};
</script>

<style lang="stylus">
.mod__review
  display: flex;
  width: 85%;

  &-author
    display: flex;
    flex: 0;
    flex-direction: column;
    align-items: center;
    text-align: center;
    text-decoration: none;
    color: inherit;

  &-body
    display: flex;
    flex-direction: column;

  &-rating
    .v-icon
      padding: 0;

  &-votes
    display: flex;

    &__button
      display: flex;
      align-items: center;
      cursor: pointer;
</style>
