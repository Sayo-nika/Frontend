<template>
  <v-app class="login-app">
    <v-content>
      <v-card class="login-card elevation-4">
        <v-card-title class="pb-0" primary-title>
          <v-layout align-center column justify-center>
            <img src="/img/SayonikaLogo.svg" alt="Sayonika" height="125">
            <h2 class="headline primary--text mb-2">Create an Account</h2>
          </v-layout>
        </v-card-title>

        <v-window v-model="section">
          <v-window-item :value="1">
            <v-card-text>
              <v-container class="text-xs-center pb-0 pt-0">
                <v-form ref="form" class="mb-2" lazy-validation>
                  <v-text-field v-model="name" :rules="nameRules" label="Username" autofocus required @keyup.enter="register"/>

                  <v-layout>
                    <div style="width: 50%; padding-right: 9px;">
                      <v-text-field v-model="password" :append-icon="showPassword ? 'visibility_off' : 'visibility'" :loading="passwordFocused"
                                    :rules="passwordRules" :type="showPassword ? 'text' : 'password'" label="Password" required
                                    @keyup.enter="register" @click:append="showPassword = !showPassword" @focus="passwordFocused = true" @blur="passwordFocused = false">
                        <v-fade-transition slot="progress">
                          <v-progress-linear v-if="passwordFocused" v-model="passwordStrength" :color="passwordStrengthColour" height="4"/>
                        </v-fade-transition>
                      </v-text-field>

                      <v-text-field v-model="passwordConfirm" :append-icon="showPasswordConfirm ? 'visibility_off' : 'visibility'" :rules="passwordConfirmRules"
                                    :type="showPasswordConfirm ? 'text' : 'password'" label="Confirm Password" required @keyup.enter="register" @click:append="showPasswordConfirm = !showPasswordConfirm"/>
                    </div>

                    <div style="width: 50%; padding-left: 9px;">
                      <v-text-field v-model="email" :rules="emailRules" label="Email" type="email" required @keyup.enter="register"/>
                      <v-text-field v-model="emailConfirm" :rules="emailConfirmRules" label="Confirm Email" type="email" required @keyup.enter="register"/>
                    </div>
                  </v-layout>

                  <v-btn :disabled="loading" :loading="loading" class="mx-auto" color="primary" large @click="register">Register</v-btn>
                  <div>Got an account? <nuxt-link to="/login">Log in</nuxt-link></div>
                </v-form>

                <v-divider class="mt-2 mb-3"/>

                <v-btn color="accent" depressed @click="section = 2">Register using another service</v-btn>
              </v-container>
            </v-card-text>
          </v-window-item>

          <v-window-item :value="2">
            <v-card-text>
              <v-container class="text-xs-center pb-0 pt-0">
                <v-list class="pa-0">
                  <v-list-tile v-for="prov in providers" :key="prov.name.toLowerCase()" :ripple="{class: prov.textColour}" class="login-provider" avatar @click="void 0">
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
                  <v-icon left>arrow_back</v-icon>
                  Go back
                </v-btn>
              </v-container>
            </v-card-text>
          </v-window-item>
        </v-window>
      </v-card>
    </v-content>
  </v-app>
</template>

<script>
import zxcvbn from 'zxcvbn';

export default {
  layout: 'blank',
  middleware: 'notLoggedIn',
  data() {
    return {
      name: '',
      password: '',
      passwordConfirm: '',
      email: '',
      emailConfirm: '',

      loading: false,
      section: 1,
      showPassword: false,
      showPasswordConfirm: false,
      passwordFocused: false,

      nameRules: [
        v => !!v || 'Username is required'
      ],
      passwordRules: [
        v => !!v || 'Password is required',
        v => v.length >= 8 || 'Password must be at least 8 characters long'
      ],
      passwordConfirmRules: [
        v => !!v || 'Required',
        v => v === this.password || 'Passwords do not match'
      ],
      emailRules: [
        v => !!v || 'Email is required',
        v => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(v) || 'Email must be valid'
      ],
      emailConfirmRules: [
        v => !!v || 'Required',
        v => v === this.email || 'Emails do not match'
      ],

      providers: [
        {
          name: 'GitHub',
          icon: 'mdi-github-circle',
          url: '#',
          colour: 'grey darken-3',
          textColour: 'grey--text text--darken-3'
        },
        {
          name: 'GitLab',
          icon: 'mdi-gitlab',
          url: '#',
          colour: 'orange darken-2',
          textColour: 'orange--text text--darken-2'
        },
        {
          name: 'Reddit',
          icon: 'mdi-reddit',
          url: '#',
          colour: 'deep-orange',
          textColour: 'deep-orange--text'
        },
        {
          name: 'Discord',
          icon: 'mdi-discord',
          url: '#',
          colour: 'blue lighten-1',
          textColour: 'blue--text text--lighten-1'
        }
      ]
    };
  },
  computed: {
    passwordStrength() {
      return zxcvbn(this.password.slice(0, 100)).score / 4 * 100;
    },
    passwordStrengthColour() {
      return ['error', 'error', 'warning', 'success', 'success'][this.passwordStrength / 100 * 4];
    }
  },
  methods: {
    register() {
      if (this.$refs.form.validate()) {
        this.loading = true;

        setTimeout(() => {
          this.loading = false;
          this.$router.push('/');
          this.$store.commit('auth/login');
        }, 2500);
      }
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
.application--wrap {
  min-height: 0;
}

.v-content__wrap {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.login-app {
  background-color: transparent !important;
  background-image: url('/img/login-bg.jpg') !important;
  background-repeat: no-repeat !important;
  background-position: center center !important;
  background-size: cover !important;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.login-card {
  width: 650px;
  border-radius: 8px;
}

.login-provider > .v-list__tile {
  justify-content: center;

  & > .v-list__tile__content {
    flex: initial;
  }

  & > .v-list__tile__avatar {
    min-width: 40px;
  }
}

.v-card__text {
  padding-top: 0;
}

@media screen and (max-width: 600px) {
  .login-card {
    width: 100%;
  }
}
</style>
