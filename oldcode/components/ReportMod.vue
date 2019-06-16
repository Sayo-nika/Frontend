<template>
  <v-card class="report-mod">
    <v-container>
      <v-card-title>
        <h1 class="title">Report Mod</h1>
      </v-card-title>

      <v-card-text>
        <v-layout align-center column>
          <v-form ref="form" v-model="formValid" style="width: 100%;" lazy-validation>
            <v-radio-group v-model="type" label="Reason" mandatory>
              <v-radio value="ipg_violation">
                <template slot="label">
                  This mod is violating the&nbsp;<a href="http://teamsalvato.com/ip-guidelines/" target="_blank">Team Salvato IP Guidelines</a>.
                </template>
              </v-radio>
              <v-radio value="conduction_violation">
                <template slot="label">
                  This mod does not comply to the&nbsp;<a href="https://docs.sayonika.moe/guidelines/good-mod-entry-guidelines/" target="_blank">Good Mod Entry Guidelines</a>.
                </template>
              </v-radio>
              <v-radio label="This mod is using copyrighted material" value="dmca"/>
            </v-radio-group>

            <v-textarea v-model="content" :rules="contentRules" counter="1000"
                        hint="Additional information for the report, such as links to proof." label="Information"
                        minlength="100"/>
          </v-form>

          <recaptcha ref="recaptcha" :sitekey="captchaKey" class="mt-3" @verify="v => captcha = v" @expired="captcha = null"/>
        </v-layout>

        <p class="caption mt-4" style="opacity: 0.5">
          N.B. Abuse of the reporting system may lead to consequences such as temporary, or permanent, account suspension.
        </p>
      </v-card-text>

      <v-card-actions class="justify-end">
        <v-btn flat @click="close()">Cancel</v-btn>
        <v-btn :disabled="loading || submitDisabled" :loading="loading" color="primary" depressed @click="submit">Submit</v-btn>
      </v-card-actions>
    </v-container>
  </v-card>
</template>

<script>
import Recaptcha from 'vue-recaptcha';

export default {
  components: {Recaptcha},
  data() {
    return {
      type: null,
      content: '',
      captcha: null,

      loading: false,
      formValid: false,
      contentRules: [
        v => !!v || 'Information is required',
        v => v.length >= 100 || 'Information must be at least 100 characters',
        v => v.length <= 1000 || 'Information must be 1000 characters or less'
      ]
    };
  },
  computed: {
    captchaKey() {
      return this.$env.recaptchaCheckboxKey;
    },
    submitDisabled() {
      return !(
        this.type &&
        this.content &&
        this.captcha &&
        this.formValid
      );
    }
  },
  methods: {
    close(clearProps) {
      if (clearProps) {
        this.type = null;
        this.content = '';
        this.$refs.recaptcha.reset();
      }

      this.$emit('close');
    },
    async submit() {
      this.loading = true;
      await new Promise(r => setTimeout(r, 1500));
      this.loading = false;
      this.close(true);
    }
  }
};
</script>

<style lang="stylus">

</style>
