<template>
  <v-card class="create-review">
    <v-container>
      <v-card-title>
        <span class="headline ma-1">Write Review</span>
      </v-card-title>

      <v-card-text>
        <v-container fluid grid-list-md>
          <v-form ref="form" v-model="formValid" lazy-validation>
            <v-layout wrap>
              <v-flex class="mb-3" xs12>
                <div class="mb-2"><v-label>Rating</v-label></div>
                <v-rating v-model="rating" :readonly="loading" class="create-review__rating" color="accent"
                          half-increments hover large/>
              </v-flex>

              <v-flex xs12>
                <v-text-field v-model="title" :disabled="loading" :rules="titleRules" counter="32" label="Title" required/>
              </v-flex>

              <v-flex xs12>
                <v-textarea v-model="body" :disabled="loading" :rules="bodyRules" counter="2000" label="Review" required/>
              </v-flex>
            </v-layout>
          </v-form>
        </v-container>
      </v-card-text>

      <v-card-actions class="justify-end">
        <v-btn flat @click="close">Cancel</v-btn>
        <v-btn :disabled="loading || submitDisabled" :loading="loading" color="primary" depressed @click="submit">Submit</v-btn>
      </v-card-actions>
    </v-container>
  </v-card>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      rating: 0,
      title: '',
      body: '',

      loading: false,
      formValid: false,

      titleRules: [
        v => !!v || 'Title is required',
        v => v.length <= 32 || 'Title must be 32 characters or less'
      ],
      bodyRules: [
        v => !!v || 'Review is required',
        v => v.length <= 2000 || 'Review must be 2000 characters or less'
      ]
    };
  },
  computed: {
    submitDisabled() {
      return !(
        this.rating &&
        this.title &&
        this.body &&
        this.formValid
      );
    }
  },
  methods: {
    async submit() {
      if (this.$refs.form.validate()) {
        this.loading = true;

        try {
          var {review} = await this.$axios.$post(`/mods/${this.id}/reviews`, {
            rating: this.rating,
            title: this.title,
            content: this.body
          });
        } catch (err) {
          let msg = err.mesage;

          if (err.response) msg = err.response.data.error;

          this.loading = false;
          this.$emit('error', msg);
          return;
        }

        this.loading = false;
        this.close(review);
      }
    },
    close(review) {
      this.$emit('close', review);

      // Reset data to so we can reuse for later
      this.rating = 0;
      this.title = '';
      this.body = '';
    }
  }
};
</script>

<style lang="stylus">
.create-review
  &__rating
    .v-icon
      padding: 0;
</style>
