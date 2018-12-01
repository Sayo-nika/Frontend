<template>
  <v-app class="login-app">
    <v-content>
      <v-card class="login-card elevation-4">
        <v-card-title class="pb-0" primary-title>
          <div class="mx-auto">
            <img src="/img/SayonikaLogo.svg" alt="Sayonika" height="125">
          </div>
        </v-card-title>

        <v-window v-model="section">
          <v-window-item :value="1">
            <v-card-text>
              <v-container class="text-xs-center pb-0 pt-0">
                <v-form ref="form" class="mb-2" lazy-validation>
                  <v-text-field v-model="name" :rules="nameRules" label="Username or Email" required @keyup.enter="login"/>
                  <v-text-field v-model="password" :rules="passwordRules" label="Password" type="password" required @keyup.enter="login"/>

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

                  <v-btn :disabled="loading" :loading="loading" class="mx-auto" color="primary" large @click="login">Login</v-btn>
                  <div>or <nuxt-link to="/register">sign up</nuxt-link></div>
                </v-form>

                <v-divider class="mt-2 mb-3"/>

                <v-btn color="accent" depressed @click="section = 2">Login with another service</v-btn>
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
export default {
  layout: 'blank',
  middleware: 'notLoggedIn',
  data() {
    return {
      name: '',
      password: '',
      rememberMe: false,
      loading: false,
      section: 1,

      nameRules: [
        v => !!v || 'Username or email is required'
      ],
      passwordRules: [
        v => !!v || 'Password is required'
      ],

      providers: [
        {
          name: 'GitHub',
          icon: 'fab fa-github',
          url: '#',
          colour: 'grey darken-3',
          textColour: 'grey--text text--darken-3'
        },
        {
          name: 'GitLab',
          icon: 'fab fa-gitlab',
          url: '#',
          colour: 'orange darken-2',
          textColour: 'orange--text text--darken-2'
        },
        {
          name: 'Reddit',
          icon: 'fab fa-reddit-alien',
          url: '#',
          colour: 'deep-orange',
          textColour: 'deep-orange--text'
        },
        {
          name: 'Discord',
          icon: 'fab fa-discord',
          url: '#',
          colour: 'blue lighten-1',
          textColour: 'blue--text text--lighten-1'
        }
      ]
    };
  },
  computed: {
    to() {
      return this.$route.query.redir ? decodeURIComponent(this.$route.query.redir) : '/';
    }
  },
  /*mounted() {
    if (this.$store.state.auth.loggedIn) this.$router.replace(this.to);
  },*/
  methods: {
    login() {
      if (this.$refs.form.validate()) {
        this.loading = true;

        setTimeout(() => {
          this.loading = false;
          this.$router.push(this.to);
          this.$store.commit('auth/login');
        }, 2500);
      }
    }
  },
  head() {
    return {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://use.fontawesome.com/releases/v5.0.13/css/all.css',
          integrity: 'sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp',
          crossorigin: 'anonymous'
        }
      ],
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
  width: 450px;
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
