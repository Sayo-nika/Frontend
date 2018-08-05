<template>
  <div>
    <div class="full-width profile-header" style="background-image: url('/img/club.png')"/>
    <div class="full-width primary profile-items">
      <div class="content-container">
        <v-container fluid>
          <v-layout>
            <v-flex xs2>
              <div style="position: relative; top: -24px;">
                <img class="circle user-avatar" src="https://cdn.discordapp.com/attachments/387194001326997504/462817207915642882/IMG_20180701_041011.jpg" alt="user avatar">
              </div>
            </v-flex>

            <v-flex xs10>
              <v-layout>
                <v-flex>
                  <h2 class="title uppercase font-weight-light">Mods</h2>
                  <h3 class="display-1">10</h3>
                </v-flex>

                <v-flex>
                  <h2 class="title uppercase font-weight-light">Reviews</h2>
                  <h3 class="display-1">10.3k</h3>
                </v-flex>

                <v-flex>
                  <h2 class="title uppercase font-weight-light">Favourites</h2>
                  <h3 class="display-1">1</h3>
                </v-flex>

                <v-flex>
                  <h2 class="title uppercase font-weight-light">Supporters</h2>
                  <h3 class="display-1">100k</h3>
                </v-flex>

                <v-flex>
                  <div class="vertical-center" style="height: 100%">
                    <v-tooltip bottom>
                      <v-avatar slot="activator" class="mx-2" color="grey lighten-3">
                        <v-icon color="primary">developer_board</v-icon>
                      </v-avatar>

                      <span>Developer</span>
                    </v-tooltip>

                    <v-tooltip bottom>
                      <v-avatar slot="activator" class="mx-2" color="grey lighten-3">
                        <v-icon color="deep-orange darken-1">gavel</v-icon>
                      </v-avatar>

                      <span>Moderator</span>
                    </v-tooltip>

                    <v-tooltip bottom>
                      <v-avatar slot="activator" class="mx-2" color="grey lighten-3">
                        <v-icon color="blue">create</v-icon>
                      </v-avatar>

                      <span>Mod Author</span>
                    </v-tooltip>

                    <v-tooltip bottom>
                      <v-avatar slot="activator" class="mx-2" color="grey lighten-3">
                        <v-icon color="purple">attach_money</v-icon>
                      </v-avatar>

                      <span>Donator</span>
                    </v-tooltip>
                  </div>
                </v-flex>
              </v-layout>
            </v-flex>
          </v-layout>
        </v-container>
      </div>
    </div>

    <v-container>
      <v-layout>
        <v-flex offset-xs2 xs10>
          <h1 class="display-3 font-weight-light">John Doe</h1>
          <h2 class="title font-weight-light"><i>Joined 2018-420-69</i></h2>

          <v-divider class="my-4"/>
        </v-flex>
      </v-layout>

      <v-layout>
        <v-flex xs12>
          <v-layout>
            <v-flex xs2>
              <ul>
                <li>Canada, America</li>
              </ul>
              <ul>
                <a href="#"><li>@johndoe</li></a>
              </ul>
              <ul>
                <a href="#"><li>/u/john_doe1234</li></a>
              </ul>
              <ul>
                <li>JohnDoe#1234</li>
              </ul>
            </v-flex>
            <v-flex xs12>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sapien ante, ornare ut pharetra nec, pulvinar id sapien. Fusce vitae consequat tortor, at auctor ligula. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Phasellus dictum arcu orci, vel tristique quam luctus quis. Cras hendrerit ullamcorper nibh, eu ultrices metus consectetur nec. Duis quis pellentesque tortor. Phasellus sit amet orci quis orci ultrices bibendum. Etiam dictum id odio quis molestie. Aliquam tempor porttitor odio sit amet dapibus. Sed eget mattis magna. Mauris convallis ipsum vitae interdum auctor. Fusce eget diam justo. Phasellus gravida odio leo, vel bibendum ipsum mattis et. Cras sagittis malesuada augue.
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>

      <v-layout class="mt-5">
        <v-flex xs12>
          <h1 class="display-2">Favourited Mods</h1>
          <v-layout class="mt-2">
            <v-flex xs4>
              <v-card>
                <v-card-media src="/img/club.png" height="200px">
                  <v-container fill-height fluid>
                    <v-layout fill-height>
                      <v-flex xs12 align-end flexbox>
                        <span class="headline">Despacito Mod</span>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-card-media>

                <v-card-actions>
                  <v-btn flat color="accent">View</v-btn>
                  <v-btn flat color="accent">Download</v-btn>
                </v-card-actions>
              </v-card>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
};
</script>

<style>
.full-width {
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
}

.profile-header {
  height: 250px;
  background: transparent no-repeat center center;
  background-size: cover;
}

.circle {
  border-radius: 50px;
}

.user-avatar {
  width: calc(100% - 24px);
  position: absolute;
  border: solid 16px #E84444;
  background-color: #E84444;
}
</style>
