<template>
  <div>
    <div class="md-layout md-gutter">
      <div class="md-layout-item md-xlarge-size-33 md-large-size-33 md-medium-size-50 md-small-size-50 md-xsmall-size-100">
        <md-card md-with-hover>
          <md-card-area>
            <md-ripple>
              <a class="no-deco" @click.prevent="cardModal = true">
                <md-card-media md-ratio="16:9">
                  <img src="https://material.io/design/assets/1kVVLIES2HDnnmqXgAvglbAK8a-oVEEh0/intro-illo-motion.png" alt="Placeholder">
                </md-card-media>

                <md-card-header>
                  <div class="md-title">Foo</div>
                  <div class="md-subhead">by Bar</div>
                </md-card-header>
              </a>
            </md-ripple>
          </md-card-area>

          <md-card-expand>
            <md-card-actions md-alignment="space-between">
              <div>
                <md-button class="md-accent">Download</md-button>
              </div>

              <md-card-expand-trigger>
                <md-button>More</md-button>
              </md-card-expand-trigger>
            </md-card-actions>

            <md-card-expand-content>
              <md-card-content>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                In faucibus pellentesque consectetur. Aenean pretium tortor eros, vitae iaculis orci vehicula eget.
                Nunc commodo lorem id est suscipit iaculis.
                Ut finibus nisi et pellentesque porttitor.
              </md-card-content>
            </md-card-expand-content>
          </md-card-expand>
        </md-card>
      </div>
    </div>

    <md-dialog-alert :md-active.sync="cardModal" md-content="Haha u pressed the card butan"/>
  </div>
</template>

<script>
export default {
  layout: 'mod-views',
  data() {
    return {
      cardModal: false
    };
  }
};
</script>

<style>
</style>
