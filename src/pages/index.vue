<template>
  <div>
    <v-carousel class="mb-5">
      <v-carousel-item v-for="n in 10" :key="n" src="/club.png" gradient="to bottom, transparent, rgba(0, 0, 0, 0.5)">
        <v-container style="height: 100%" grid-list-md>
          <v-layout style="height: 100%" row wrap>
            <v-flex xs6>
              <div class="mod-carousel-section">
                <div class="mod-carousel-section__inner">
                  <div class="white--text">
                    <h1 class="display-1">Not Oki Doki Aaaa Club</h1>
                    <span class="body-2">
                      Girls die and stuff happens. Glorious.
                    </span>
                  </div>
                </div>
              </div>
            </v-flex>

            <v-flex xs6>
              <div class="mod-carousel-section">
                <div class="mod-carousel-section__inner">
                  <img src="/club.png" alt="aaa" class="elevation-4" width="75%">
                </div>
              </div>
            </v-flex>
          </v-layout>
        </v-container>
      </v-carousel-item>
    </v-carousel>

    <section class="mb-5">
      <h1 class="headline">Just Released</h1>
      <v-container grid-list-md fluid>
        <v-layout row wrap>
          <v-flex v-for="n in 6" :key="n" xs2>
            <v-card class="pt-4" raised ripple>
              <v-card-media src="https://is4-ssl.mzstatic.com/image/thumb/Music118/v4/fa/05/b5/fa05b5ed-6564-d0f9-d963-28629995c21e/Monstercat_-_Uncaged_Vol_4_Art.png/100000x100000.jpg" class="circle mx-auto" style="width: 125px;height: 125px" contain/>
              <v-card-title primary-title>
                <div class="mx-auto">
                  <h3 class="title">Banana</h3>
                  <div class="mt-1">
                    <v-icon>star</v-icon> 420
                  </div>
                </div>
              </v-card-title>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </section>

    <section class="mb-5">
      <h1 class="headline">Top Rated</h1>
      <v-container grid-list-md fluid>
        <v-layout row wrap>
          <v-flex v-for="n in 6" :key="n" xs2>
            <v-card class="pt-4" raised ripple>
              <v-card-media src="https://is4-ssl.mzstatic.com/image/thumb/Music118/v4/fa/05/b5/fa05b5ed-6564-d0f9-d963-28629995c21e/Monstercat_-_Uncaged_Vol_4_Art.png/100000x100000.jpg" class="circle mx-auto" style="width: 125px;height: 125px" contain/>
              <v-card-title primary-title>
                <div class="mx-auto">
                  <h3 class="title">Banana</h3>
                  <div class="mt-1">
                    <v-icon>star</v-icon> 420
                  </div>
                </div>
              </v-card-title>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </section>

    <section class="mb-5">
      <h1 class="headline">Upcoming</h1>
      <v-container grid-list-md fluid>
        <v-layout row wrap>
          <v-flex v-for="n in 6" :key="n" xs2>
            <v-card class="pt-4" raised ripple>
              <v-card-media src="https://is4-ssl.mzstatic.com/image/thumb/Music118/v4/fa/05/b5/fa05b5ed-6564-d0f9-d963-28629995c21e/Monstercat_-_Uncaged_Vol_4_Art.png/100000x100000.jpg" class="circle mx-auto" style="width: 125px;height: 125px" contain/>
              <v-card-title primary-title>
                <div class="mx-auto">
                  <h3 class="title">Banana</h3>
                  <div class="mt-1">
                    <v-icon>star</v-icon> 420
                  </div>
                </div>
              </v-card-title>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </section>
  </div>
</template>

<script>
export default {
};
</script>

<style>
.jumbotron__image {
  filter: blur(10px);
  width: 105%;
}

.mod-carousel-section {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
}

.mod-carousel-section__inner {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.mod-carousel-section__inner > img {
  border-radius: 2px;
}

.circle {
  border-radius: 50% !important;
}
</style>
