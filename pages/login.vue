<template>
  <v-app class="login">
    <v-content>
      <v-card class="login__card elevation-4">
        <v-card-title class="pb-0" primary-title>
          <div class="mx-auto">
            <img src="~/assets/img/logo.svg" alt="Sayonika" height="125">
          </div>
        </v-card-title>

        <v-window v-model="section">
          <v-window-item :value="1">
            <v-card-text>
              <v-container class="text-xs-center pb-0 pt-0">
                <v-form ref="form" v-model="formValid" class="mb-2" lazy-validation>
                  <v-text-field v-model="name" :disabled="loading" :rules="nameRules" label="Username or Email" autofocus required
                                @keyup.enter="login"/>
                  <v-text-field v-model="password" :append-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'" :disabled="loading"
                                :rules="passwordRules" :type="showPassword ? 'text' : 'password'" label="Password" required
                                @click:append="showPassword = !showPassword" @keyup.enter="login"/>

                  <p class="caption hint">
                    This site is protected by reCAPTCHA and the Google
                    <a href="https://policies.google.com/privacy">Privacy Policy</a> and
                    <a href="https://policies.google.com/terms">Terms of Service</a> apply.
                  </p>

                  <v-container class="pa-0 pt-2" fluid>
                    <v-layout row>
                      <v-flex sm6 xs12>
                        <v-checkbox v-model="rememberMe" class="mt-0" label="Remember me"/>
                      </v-flex>
                      <v-flex class="text-sm-right" sm6 xs12>
                        <nuxt-link to="/recover-password" class="xs-left">Forgot password?</nuxt-link><br><br>
                      </v-flex>
                    </v-layout>
                  </v-container>

                  <v-btn :disabled="submitDisabled || loading" :loading="loading" class="mx-auto" color="primary" large @click="login">Login</v-btn>
                  <div>or <nuxt-link to="/register">sign up</nuxt-link></div>
                </v-form>

                <!-- <v-divider class="mt-2 mb-3"/>

                <v-btn color="accent" depressed @click="section = 2">Login with another service</v-btn> -->
              </v-container>
            </v-card-text>
          </v-window-item>

          <!-- <v-window-item :value="2">
            <v-card-text>
              <v-container class="text-xs-center pb-0 pt-0">
                <v-list class="pa-0">
                  <v-list-tile v-for="prov in providers" :href="prov.url" :key="prov.name.toLowerCase()" :ripple="{class: prov.textColour}" class="login-provider" avatar>
                    <v-list-tile-avatar class="mr-2">
                      <v-icon :color="prov.colour">{{ prov.icon }}</v-icon>
                    </v-list-tile-avatar>
                    <v-list-tile-content :class="prov.textColour">
                      {{ prov.name }}
                    </v-list-tile-content>
                  </v-list-tile>
                </v-list>

                <v-divider class="mt-3 mb-3"/>

                <v-btn color="primary" flat large @click="section = 1">
                  <v-icon left>mdi-arrow-left</v-icon>
                  Go back
                </v-btn>
              </v-container>
            </v-card-text>
          </v-window-item> -->
        </v-window>
      </v-card>

      <v-snackbar v-model="snackbarOpen" :timeout="5000" right>
        {{ snackbarText }}
      </v-snackbar>
    </v-content>
  </v-app>
</template>

<script>
import providers from '~/utils/oauth';

export default {
  layout: 'blank',
  middleware: 'notLoggedIn',
  data() {
    return {
      name: '',
      password: '',
      rememberMe: false,

      showPassword: false,
      formValid: false,
      loading: false,
      section: 1,
      snackbarOpen: false,
      snackbarText: '',

      nameRules: [
        v => !!v || 'Username or email is required'
      ],
      passwordRules: [
        v => !!v || 'Password is required'
      ],

      providers
    };
  },
  computed: {
    to() {
      return this.$route.query.redir ? decodeURIComponent(this.$route.query.redir) : '/';
    },
    submitDisabled() {
      return !(this.name && this.password && this.formValid);
    }
  },
  methods: {
    async login() {
      if (this.$refs.form.validate()) {
        this.loading = true;

        const recaptchaToken = await this.$recaptcha('login');

        let tokenResp, userResp;

        try {
          tokenResp = await this.$axios.$post('/login', {
            username: this.name,
            password: this.password,
            recaptcha: recaptchaToken
          });
        } catch (err) {
          let msg = err.mesage;

          if (err.response) msg = err.response.data.error;
          console.error(msg);

          this.snackbarText = `Error: ${msg}`;
          this.snackbarOpen = true;
          this.loading = false;

          return;
        }

        const token = tokenResp.result.token;

        this.$axios.setToken(token);
        this.$store.commit('auth/setToken', token);

        if (this.rememberMe)
          this.$cookies.set('token', token, {
            expires: new Date('2038-01-01') // Roughly the 32-bit int limit. Should be ok for an infinite cookie.
          });

        try {
          userResp = await this.$axios.$get('/users/@me');
        } catch (err) {
          let msg = err.mesage;

          if (err.response) msg = err.response.data.error;
          console.error(msg);

          this.snackbarText = `Error: ${msg}`;
          this.snackbarOpen = true;
          this.loading = false;

          return;
        }

        const user = userResp.result;

        this.$store.commit('auth/setUser', user);

        this.loading = false;
        this.$router.push(this.to);
      }
    },
    storeCaptcha(val) {
      this.captcha = val;
    }
  },
  head() {
    return {
      htmlAttrs: {
        style: 'overflow: hidden'
      }
    };
  }
};
</script>

<style lang="stylus">
.login
  background-color: transparent !important;
  background-image: url('~assets/img/login-bg.jpg') !important;
  background-repeat: no-repeat !important;
  background-position: center center !important;
  background-size: cover !important;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > .application--wrap
    min-height: 0;

  & .v-content__wrap
    display: flex;
    flex-direction: column;
    justify-content: center;

  &__card
    width: 450px;
    border-radius: 8px;

    & .v-card__text
      padding-top: 0;

    @media screen and (max-width: 600px)
      width: 100%;

  &-provider > .v-list__tile
    justify-content: center;

    & > .v-list__tile__content
      flex: initial;

    & > .v-list__tile__avatar
      min-width: 40px;
</style>
