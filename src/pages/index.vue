<template>
  <div>
    <v-carousel class="main-carousel mb-5">
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
            <v-card class="pt-4" raised ripple @click.native="modModalOpen = true">
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
            <v-card class="pt-4" raised ripple @click.native="modModalOpen = true">
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
            <v-card class="pt-4" raised ripple @click.native="modModalOpen = true">
              <v-card-media :src="img" class="circle mx-auto" style="width: 125px;height: 125px" contain/>
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

    <v-dialog v-model="modModalOpen" max-width="70%" lazy>
      <v-card>
        <v-card-title>
          <v-avatar size="96px"><img :src="img" alt="mod icon"></v-avatar>
          <div class="mod-card-title ml-4">
            <div>
              <div class="headline">Doki Doki aoije3wiknrrjn Club</div>
              <div class="title mt-1">
                <v-avatar size="32px"><img src="https://vuematerial.io/assets/examples/avatar.png" alt="mod author"></v-avatar>
                <i class="ml-2">That Guy</i>
              </div>
            </div>
          </div>
        </v-card-title>

        <v-card-text>
          <v-container>
            <v-layout row>
              <v-flex v-for="i in 3" :key="i" xs1/>
              <v-flex class="red" xs2>
                <div class="display-1">Rating</div>
                <div>
                  4.5 Stars<br>
                  <v-icon v-for="i in 4" :key="i">star</v-icon>
                </div>
              </v-flex>
              <v-flex class="red" xs2>
                g
              </v-flex>
              <v-flex class="red" xs2>
                g
              </v-flex>
            </v-layout>

            <div class="mod-description horizontal-center">
              Girls dying for the second time and shit, idk.
              <v-btn class="d-block mt-3" color="accent" outline round>Read More</v-btn>
            </div>

            <v-carousel class="my-5">
              <v-carousel-item v-for="n in 5" :key="n" src="/club.png"/>
            </v-carousel>

            <div class="mod-reviews">
              <h1 class="display-1 text-xs-center mb-4">Reviews</h1>

              <v-container fluid grid-list-xl>
                <v-layout row wrap>
                  <v-flex v-for="i in 4" :key="i" class="review" xs6>
                    <v-avatar size="96px"><img :src="img" alt="reviewer"></v-avatar>
                    <div class="review__content">
                      <div class="title">Lorem ipsum delor sit amet.</div>
                      <blockquote class="body-1 mt-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.Donec erat ex, fermentum non fermentum vitae, suscipit ut urna.
                        Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                      </blockquote>
                      <v-btn color="accent" flat round>Read More</v-btn>
                    </div>
                  </v-flex>
                </v-layout>
              </v-container>
            </div>
          </v-container>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      modModalOpen: false,
      img: 'https://is4-ssl.mzstatic.com/image/thumb/Music118/v4/fa/05/b5/fa05b5ed-6564-d0f9-d963-28629995c21e/Monstercat_-_Uncaged_Vol_4_Art.png/100000x100000.jpg'
    };
  }
};
</script>

<style>
.main-carousel .jumbotron__image {
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

.mod-card-title {
  height: 96px;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.mod-description {
  margin-top: 2rem;
}

.review {
  display: flex;
}

.review__content {
  display: inline-block;
  max-width: calc(100% - 96px - 1rem);
  margin-left: 1rem;
}
</style>
