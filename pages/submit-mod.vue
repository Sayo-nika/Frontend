<template>
  <div>
    <component :is="parentComponent" v-if="!gone && parentComponent"/>

    <permanent-dialog max-width="1200">
      <v-card>
        <v-card-title>
          <v-btn class="mr-3" style="margin: 0;" icon @click="(gone = true) && goBack()">
            <v-icon>mdi-arrow-left</v-icon>
          </v-btn>
          Upload Mod
        </v-card-title>

        <v-form ref="form" v-model="formValid" lazy-validation>
          <v-card class="upload-mod__header px-5 py-5" color="primary white--text" :img="bannerPath" flat tile>
            <input id="inputA" ref="iconSelect" type="file" accept=".png,.jpeg,.jpg" style="display: none;" @change="() => icon = this.$refs.iconSelect.files[0]">
            <input id="inputB" ref="bannerSelect" type="file" accept=".png,.jpeg,.jpg" style="display: none;" @change="() => banner = this.$refs.bannerSelect.files[0]">

            <div class="upload-mod__header__banner-upload">
              <v-tooltip bottom>
                <template #activator="data">
                  <v-btn color="white--text" fab icon large v-on="data.on" @click="$refs.bannerSelect.click()">
                    <v-icon large>mdi-camera</v-icon>
                  </v-btn>
                </template>

                <span>Upload Banner</span>
              </v-tooltip>
            </div>

            <v-tooltip bottom>
              <template #activator="data">
                <div class="upload-mod__icon mt-4" v-on="data.on" @click="$refs.iconSelect.click()">
                  <v-icon dark large>mdi-camera</v-icon>

                  <div class="upload-mod__icon-preview">
                    <img :src="iconPath">
                  </div>
                </div>
              </template>

              <span>Upload Icon</span>
            </v-tooltip>

            <div class="upload-mod__title-wrapper mt-3">
              <v-text-field v-model="title" :rules="titleRules" class="upload-mod__title-input mt-3" color="white" name="mod-title"
                            label="Mod Title" hint="The name of your mod." maxlength="32" counter="32" autofocus dark solo/>
            </div>
          </v-card>

          <div class="pa-3">
            <v-card color="grey lighten-4">
              <v-card-title>
                <span class="title text-uppercase">Collaborators</span>

                <v-subheader style="height: inherit;">Other people who helped make the mod</v-subheader>
              </v-card-title>

              <v-divider/>

              <v-card-text>
                <div class="upload-mod__collaborators">
                  <upload-collaborator v-for="({index}) in collaborators" :key="`collab${index}`" avatar="https://erisaaa.is-a-good-waifu.com/51e789.png"
                                       :name="index && index % 2 ? 'Obama' : 'Obamacare'" @change="v => collaboratorRoleChange(v, index)"
                                       @delete="removeCollaborator(index)"/>

                  <div>
                    <v-card v-if="collaborators.length < 10" style="cursor: pointer;" color="transparent" flat ripple
                            @click="addCollaborator">
                      <v-layout style="padding: 18px 0;" align-center column>
                        <v-avatar color="grey lighten-2" size="64">
                          <v-icon large>mdi-account-multiple-plus</v-icon>
                        </v-avatar>

                        <div class="mt-2 subheading text-truncate font-weight-thin">Add More</div>
                      </v-layout>
                    </v-card>

                    <v-card v-else color="transparent" flat>
                      <v-layout style="padding: 18px 0;" align-center column>
                        <v-avatar color="grey lighten-2" size="64">
                          <v-icon large>mdi-close</v-icon>
                        </v-avatar>

                        <div class="mt-2 subheading text-truncate font-weight-thin">Limit Reached</div>
                      </v-layout>
                    </v-card>
                  </div>
                </div>
              </v-card-text>
            </v-card>
          </div>

          <div class="pa-3">
            <v-card color="grey lighten-4">
              <v-card-title>
                <span class="title text-uppercase">About</span>

                <v-subheader style="height: inherit;">Information about your mod</v-subheader>
              </v-card-title>

              <v-divider/>

              <v-container grid-list-md>
                <v-layout wrap>
                  <v-flex class="upload-mod__column" s12 m6>
                    <v-text-field v-model="tagline" :rules="taglineRules" name="mod-tagline" label="Tagline" counter="100"
                                  maxlength="100" hint="A short, one sentence description of your mod."/>

                    <v-text-field v-model="website" :rules="websiteRules" name="mod-website" label="Website"
                                  hint="Your mod's website. Can also link to any relevant resource if you don't have one."/>

                    <!-- TODO: perhaps expand this into a basic editor with preview + toolbar for bold etc? -->
                    <v-textarea v-model="description" :rules="descriptionRules" name="mod-description" label="Description"
                                counter="10000" minlength="100" maxlength="10000"
                                hint="Details about your mod. Description, plot overview, etc. Can use <a href='#'>Markdown</a> for formatting."/>
                  </v-flex>
                  <v-flex class="upload-mod__column" s12 m6>
                    <v-select v-model="category" :items="categories" label="Category" hint="The genre or category your mod falls under." persistent-hint/>

                    <v-select v-model="status" :items="statuses" label="Mod Status" hint="The mod's deveopment status." persistent-hint/>

                    <v-radio-group v-model="betaState" label="Playtesting Beta Type">
                      <v-radio label="Closed" :value="true" hint="obama"/>
                      <v-radio label="Open" :value="false" hint="obamaaa"/>

                      <div class="caption hint">
                        If set to closed, you'll have the ability to invite users to your beta program.<br>
                        Beta invites for your mod are limited to Sayonika users only.
                      </div>
                    </v-radio-group>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card>
          </div>
        </v-form>

        <!-- <v-fade-transition>
          <div v-if="betaState === true" class="pa-3">
            <v-card color="grey lighten-4">
              <v-card-title>
                <span class="title text-uppercase">Playtesters</span>

                <v-subheader style="height: inherit;">I want die</v-subheader>
              </v-card-title>

              <v-divider/>
            </v-card>
          </div>
        </v-fade-transition> -->

        <p class="caption text-xs-center pt-2 hint">
          Clicking submit means you agree to our Terms and Conditions, and that you follow the Sayonika Good Mod Entry Guidelines.<br>
          You cannot edit your mod until it's verified, or requested by a moderator to do so.<br><br>
          This site is protected by reCAPTCHA and the Google
          <a href="https://policies.google.com/privacy">Privacy Policy</a> and
          <a href="https://policies.google.com/terms">Terms of Service</a> apply.
        </p>

        <v-layout pt-1 pb-4 align-center column>
          <v-btn :disabled="submitDisabled || loading" :loading="loading" class="px-5" color="primary" large round @click="submit">Submit</v-btn>
        </v-layout>
      </v-card>
    </permanent-dialog>

    <v-dialog v-model="fileDialogOpen" width="300">
      <v-card color="grey darken-4 white--text">
        <v-card-text>
          {{ fileDialogText }}
        </v-card-text>
        <v-card-actions>
          <v-spacer/>

          <v-btn color="accent" flat @click="fileDialogOpen = false">
            OK
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-snackbar v-model="snackbarOpen" :timeout="5000" right>
      {{ snackbarText }}
    </v-snackbar>
  </div>
</template>

<script>
import PermanentDialog from '~/components/PermanentDialog.vue';
import UploadCollaborator from '~/components/UploadCollaborator.vue';
import {categories, statuses} from '~/utils/constants';

// URL regex taken from Marshmallow to be consistent with backend.
const URL_RE = new RegExp('^'
  + '(?:https?://)' // scheme
  + '(?:[^:@]+?(:[^:@]*?)?@|)' // basic auth
  + '(?:(?:[A-Z0-9](?:[A-Z0-9-]{0,61}[A-Z0-9])?\\.)+'
  + '(?:[A-Z]{2,6}\\.?|[A-Z0-9-]{2,\.?)|' // domain...
  + 'localhost|' // localhost...
  + '\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}|' // ...or ipv4
  + '\\[[A-F0-9]*:[A-F0-9:]+\\])' // ...or ipv6
  + '(?::\\d+)?' // optional port
  + '(?:/?|[/?]\\S+)$', 'i'
);

export default {
  components: {
    UploadCollaborator,
    PermanentDialog
  },
  middleware: 'loggedIn',
  data() {
    return {
      icon_: null,
      banner_: null,
      betaState: false,
      collaborators: [],
      title: '',
      tagline: '',
      website: '',
      description: '',
      category: null,
      status: null,

      snackbarText: '',
      snackbarOpen: false,
      fileDialogText: '',
      fileDialogOpen: false,

      formValid: false,
      gone: false,
      loading: false,
      categories,
      statuses,

      titleRules: [
        v => !!v || 'Mod title is required',
        v => v.length <= 32 || 'Mod title must not be longer than 32 characters.'
      ],
      taglineRules: [
        v => !!v || 'Tagline is required',
        v => v.length <= 100 || 'Tagline must not be longer than 100 characters.'
      ],
      websiteRules: [
        v => !!v || 'Website is required',
        v => URL_RE.test(v) || 'Website must be a valid URL.'
      ],
      descriptionRules: [
        v => !!v || 'Description is required',
        v => v.length >= 100 || 'Description must not be less than 100 characters.',
        v => v.length <= 10000 || 'Description must not be longer than 10000 characters.'
      ]
    };
  },
  computed: {
    icon: {
      get() {
        return this.icon_;
      },
      set(val) {
        if (val.size > 5 * 1000 * 1000) {
          this.fileDialogText = 'That image was too large. Max file size for icons is 5MB.';
          this.fileDialogOpen = true;
          return;
        }

        this.icon_ = val;
      }
    },
    banner: {
      get() {
        return this.banner_;
      },
      set(val) {
        if (val.size > 5 * 1000 * 1000) {
          this.fileDialogText = 'That image was too large. Max file size for banners is 5MB.';
          this.fileDialogOpen = true;
          return;
        }

        this.banner_ = val;
      }
    },
    parentComponent() {
      return this.$store.state.parentRoute;
    },
    submitDisabled() {
      return !(
        this.title &&
        this.tagline &&
        this.website &&
        this.description &&
        this.category &&
        this.status &&
        this.iconPath &&
        this.bannerPath &&
        this.formValid
      );
    }
  },
  asyncComputed: {
    iconPath() {
      if (!this.icon) return Promise.resolve(null);

      return this.getImgURI(this.icon);
    },
    bannerPath() {
      if (!this.banner) return Promise.resolve(null);

      return this.getImgURI(this.banner);
    }
  },
  methods: {
    addCollaborator() {
      if (this.collaborators.length >= 10) return;

      this.collaborators.push({index: this.collaborators.length, role: 'Unassigned'});
    },
    removeCollaborator(index) {
      this.collaborators = this.collaborators.filter(col => col.index !== index).map((col, i) => {
        col.index = i;
        return col;
      });
    },
    collaboratorRoleChange(role, index) {
      this.collaborators[index].role = role;
    },
    getImgURI(image) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();

        reader.addEventListener('error', () => {
          reader.abort();
          reject(new DOMException('Failed to read file'));
        });

        reader.addEventListener('load', () => resolve(reader.result));

        reader.readAsDataURL(image);
      });
    },
    async submit() {
      if (this.$refs.form.validate()) {
        this.loading = true;

        const recaptchaToken = await this.$recaptcha('create_mod');

        try {
          await this.$axios.$post('/mods', {
            title: this.title,
            tagline: this.tagline,
            description: this.description,
            website: this.website,
            is_private_beta: this.betaState,
            authors: this.collaborators.map(co => ({id: co.id, role: co.role})).concat(),
            banner: this.bannerPath,
            icon: this.iconPath,
            status: this.status,
            category: this.category,
            recaptcha: recaptchaToken
          });
        } catch (err) {
          let msg = err.message;

          if (err.response && err.response.data && err.response.data.error) msg = err.response.data.error;
          console.error(msg);

          this.snackbarText = `Error: ${msg}`;
          this.snackbarOpen = true;
          this.loading = false;

          return;
        }

        this.loading = false;
        this.$router.push('/'); // TODO: go to mod page when they exist
      }
    },
    goBack() {
      if (window.history.length === 1) this.$router.push('/');
      else this.$router.back();
    }
  }
};
</script>

<style lang="stylus">
@import '~vuetify/src/stylus/settings/_variables';

img:not([src])
  visibility: hidden;

.upload-mod
  &__header
    display: flex;
    flex-direction: column;
    align-items: center;

    &__banner-upload
      align-self: flex-end;

  &__icon
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    width: 128px;
    height: 128px;
    border: dotted 4px white;
    border-radius: 50%;
    cursor: pointer;

    &-preview
      width: 100%;
      height: 100%;
      position: absolute;

      > img
        border-radius: 50%;
        object-fit: cover;
        width: 100%;
        height: 100%;
        border: none;

  &__title-wrapper
    min-width: 100%;

  &__title-input
    .v-input__slot
      box-shadow: none !important;
      background: transparent !important;

      .v-text-field__slot
        height: 100%;
        font-size: 32px;

        .v-label
          font-size: 32px;
          height: 100%;

        input
          max-height: 40px;
          line-height: 32px;
          overflow: visible !important;

    .v-messages.error--text,
    &.error--text .v-input__slot input
      color: #FFEBEE !important;
      caret-color: #FFEBEE !important;

  &__collaborators
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
    grid-gap: 1rem;

  &__column
    width: 50%;

    @media $display-breakpoints.sm-and-down
      width: 100%;
</style>
