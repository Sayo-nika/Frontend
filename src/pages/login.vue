<template>
  <v-app class="login-app">
    <div class="vertical-center" style="height: 100%">
      <v-content>
        <v-card class="login-card mx-auto elevation-4">
          <v-card-title primary-title>
            <div class="mx-auto">
              <h3 class="display-3 title-text primary--text mb-2"><img src="/img/SayonikaLogo.svg" rel="image/svg+xml" alt="Sayonika"></h3>
              <div class="text-xs-center">
                Lorem Ipsum doret Nyan
              </div>
            </div>
          </v-card-title>
          <v-card-text>
            <v-container class="text-xs-center">
              <v-form ref="form" class="mb-4" lazy-validation>
                <v-text-field v-model="name" :rules="nameRules" label="Username or Email" required @keyup.enter="login"/>
                <v-text-field v-model="password" :rules="passwordRules" label="Password" type="password" required @keyup.enter="login"/>
                <nuxt-link to="/recover-password" class="xs-left">Forgot password?</nuxt-link><br><br>

                <v-btn class="mx-auto" color="primary" large round @click="login">Login</v-btn>
              </v-form>

              Or log in with another service

              <div class="mt-3">
                <v-btn v-for="prov in providers" :key="prov.name.toLowerCase()" :color="prov.colour" class="elevation-4" depressed fab>
                  <v-icon>{{ prov.icon }}</v-icon>
                </v-btn>
                <div class="text-xs-center">
                  <br>
                  <div class="text-xs-center">Don't have an account?</div>
                  <nuxt-link to="/register"><v-btn class="mx-auto" color="secondary" medium round>Sign up</v-btn></nuxt-link>
                </div>
              </div>
            </v-container>
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
</style>
