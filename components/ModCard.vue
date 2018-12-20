<template>
  <div class="mod-card">
    <!--nuxt-link v-ripple class="mod-card__link black--text" to="/"/-->
    <div :style="{backgroundImage: `url(${background})`}" class="mod-card__img"/>

    <div class="mod-card__content">
      <div class="mod-card__info">
        <div class="mod-card__icon">
          <img :src="icon" class="mod-card__icon-img" alt="mod icon">
        </div>
        <div class="mod-card__info-inner">
          <div class="mod-card__title">
            <v-tooltip class="mod-card__title-meta" top>
              <v-icon slot="activator">mdi-star</v-icon>
              <span>Editors' Choice</span>
            </v-tooltip>
            <div class="mod-card__title-content text-truncate">
              {{ title }}
            </div>
          </div>
          <div class="mod-card__content-community">
            <div class="mod-card__content-community-item">
              <v-icon>mdi-heart</v-icon>
              <span class="ml-1 mr-3">2.3k</span>
            </div>
            <div class="mod-card__content-community-item">
              <v-icon>mdi-cloud-download</v-icon>
              <span class="ml-1">300k</span>
            </div>
          </div>
        </div>
      </div>

      <div class="mod-card__actions">
        <div class="combined-button">
          <v-btn color="primary" depressed>Download</v-btn>
          <v-btn color="accent" depressed><v-icon>mdi-heart</v-icon></v-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    background: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="stylus">
.mod-card {
  background: #DDD;
  height: 290px;
  border-radius: 8px;
  position: relative;
  z-index: 2;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
}

.mod-card + .mod-card {
  margin-left: 2rem;
}

.mod-card__link {
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /*z-index: 3;*/
}

.mod-card__img {
  background-size: cover;
  background-position: center;
  height: 150px;
  border-radius: 8px 8px 0 0;
}

.mod-card__content {
  min-width: 300px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
}

.mod-card__info {
  display: inline-flex;
}

.mod-card__icon {
  background: #E84444;
  height: 64px;
  width: 64px;
  border-radius: 50%;
  margin-right: 9px;
  /* position: relative; */
}

.mod-card__icon-img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  /* z-index: 2; */
}

.mod-card__info-inner {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.mod-card__title {
  margin: 0;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
}

.mod-card__title > .material-icons {
    color: rgba(0, 0, 0, 0.75);
    margin-right: 0.25rem;
    cursor: default;
    position: relative;
}

.mod-card__title-content {
  max-width: 12ch;
}

.mod-card__title-meta {
  &,
  & > span {
    display: flex;
  }
}

.mod-card__content-community {
  display: flex;
  font-size: 1rem;
  opacity: 0.75;
}

.mod-card__content-community-item {
  display: flex;
  justify-content: center;
  text-transform: uppercase;
}

.mod-card__actions {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 0.5rem;
}

.combined-button {
  display: flex;
  /* z-index: 4; */
}

.combined-button .v-btn {
  margin-left: 0;
  margin-right: 0;
}

.combined-button .v-btn:nth-child(1) {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

.combined-button .v-btn:nth-child(2) {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  padding: 0 8px;
  min-width: 0;
}


</style>
