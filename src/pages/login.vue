<template>
  <v-app class="login-app">
    <div class="vertical-center" style="height: 100%">
      <v-content>
        <v-card class="login-card mx-auto elevation-4">
          <v-card-title class="pb-0" primary-title>
            <div class="mx-auto">
              <img src="/img/SayonikaLogo.svg" alt="Sayonika" height="125">
            </div>
          </v-card-title>
          <v-card-text>
            <v-slide-transition>
              <v-container v-if="!altLogin" class="text-xs-center pb-0 pt-0">
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

                  <v-btn class="mx-auto" color="primary" large round @click="login">Login</v-btn>
                  <div>or <nuxt-link to="/register">sign up</nuxt-link></div>
                </v-form>

                <v-divider class="mt-2 mb-3"/>

                <v-btn color="accent" depressed round @click="altLogin = true">Login with another service</v-btn>
                <!-- <v-speed-dial direction="right" transition="scale-transition">

                  <v-btn v-for="prov in providers" :key="prov.name.toLowerCase()" :color="prov.colour" class="elevation-4" depressed fab small>
                    <v-icon>{{ prov.icon }}</v-icon>
                  </v-btn>
                </v-speed-dial> -->
              </v-container>
              <v-container v-else class="text-xs-center pb-0 pt-0">
                <div class="headline pb-2">
                  Log in with Another Service
                </div>

                <div class="pb-2">
                  <v-btn color="primary" block flat large round @click="altLogin = false">
                    <v-icon left>arrow_back</v-icon>
                    Go back
                  </v-btn>
                </div>

                <v-card raised>
                  <v-list class="pa-0">
                    <v-list-tile v-for="prov in providers" :key="prov.name.toLowerCase()" :class="prov.colour" avatar ripple @click="void 0">
                      <v-list-tile-avatar>
                        <v-icon>{{ prov.icon }}</v-icon>
                      </v-list-tile-avatar>
                      <v-list-tile-content>
                        {{ prov.name }}
                      </v-list-tile-content>
                    </v-list-tile>
                  </v-list>
                </v-card>
              </v-container>
            </v-slide-transition>
          </v-card-text>
        </v-card>
      </v-content>
    </div>
  </v-app>
</template>

<script>
export default {
  layout: 'blank',
  data() {
    return {
      name: '',
      password: '',
      rememberMe: false,
      altLogin: false,

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
          colour: 'grey lighten-4'
        },
        {
          name: 'GitLab',
          icon: 'fab fa-gitlab',
          url: '#',
          colour: 'orange darken-2 white--text'
        },
        {
          name: 'Reddit',
          icon: 'fab fa-reddit-alien',
          url: '#',
          colour: 'deep-orange white--text'
        },
        {
          name: 'Discord',
          icon: 'fab fa-discord',
          url: '#',
          colour: 'blue lighten-1 white--text'
        }
      ]
    };
  },
  methods: {
    login() {
      if (this.$refs.form.validate()) {
        this.$store.commit('auth/auth');
        this.$router.push(this.$route.query.redir ? decodeURIComponent(this.$route.query.redir) : '/');
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

<style>
.login-app {
  background-color: transparent !important;
  background-image: url('/img/login-bg.jpg') !important;
  background-repeat: no-repeat !important;
  background-position: center center !important;
  background-size: cover !important;
}

.login-card {
  width: 450px;
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
