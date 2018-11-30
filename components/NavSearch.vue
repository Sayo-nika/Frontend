<template>
  <div class="search-wrapper" @click="$refs.input.focus()">
    <div :class="classes">
      <div class="v-input__prepend-outer">
        <label class="v-input__icon v-input__icon--prepend" for="search">
          <v-icon :class="focused ? 'primary--text' : 'white--text'">mdi-magnify</v-icon>
        </label>
      </div>
      <div class="v-input__control">
        <div class="v-input__slot">
          <input id="search" ref="input" :class="focused ? 'primary--text' : 'white--text'" v-model="text" aria-label="search" type="text"
                 placeholder="Search" @focus="focused = true" @blur="focused = false">
        </div>
      </div>
      <div class="v-input__append-outer">
        <div class="v-input__icon v-input__icon--append">
          <v-btn :disabled="!text" :class="[focused ? 'primary--text' : 'white--text' ,{'display-none': !focused}]" flat icon @click="text = ''">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </div>
      </div>
    </div>

    <div class="search__results">
      <v-subheader class="search__results-meta">
        {{ resultsMeta }}
      </v-subheader>
      <v-list class="search__results-list" two-line>

        <!-- <v-divider/> -->
        <v-subheader class="primary--text">
          Mods
        </v-subheader>

        <v-list-tile avatar @click="void 0">
          <v-list-tile-avatar>
            <img src="https://placeimg.com/128/128/people" alt="icon">
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title>Title</v-list-tile-title>
            <v-list-tile-sub-title>*screams*</v-list-tile-sub-title>
          </v-list-tile-content>

          <v-list-tile-action>
            <v-btn color="primary" depressed ripple>View</v-btn>
          </v-list-tile-action>
        </v-list-tile>

        <v-divider/>
        <v-subheader class="primary--text">
          Users
        </v-subheader>

        <v-list-tile avatar @click="void 0">
          <v-list-tile-avatar>
            <img src="https://placeimg.com/128/128/people" alt="icon">
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title>Title</v-list-tile-title>
            <v-list-tile-sub-title>*screams*</v-list-tile-sub-title>
          </v-list-tile-content>

          <v-list-tile-action>
            <v-btn color="primary" depressed ripple>View</v-btn>
          </v-list-tile-action>
        </v-list-tile>
      </v-list>
    </div>
    <!-- <div class="search-scrim"/> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      focused: false,
      text: '',
      results: []
    };
  },
  computed: {
    classes() {
      return [
        'v-input',
        'search',
        'theme--light',
        {
          'search--focused': this.focused
          // 'primary--text': this.focused
        }
      ];
    },
    resultsMeta() {
      return this.text ? `Showing ${this.results.length} results` : 'Type to start searching...';
    }
  }
};
</script>

<style>
.display-none {
  display: none !important;
}

.search-scrim {
  position: fixed;
  background: #000;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 9000;
}

.search-wrapper {
  flex: 2 1 auto;
  max-width: 750px;
  position: relative;
}

.v-input.search {
  align-items: center;
  background: rgba(255, 255, 255, 0.12);
  padding: 8px 16px;
  border-radius: 8px;
  transition: background-color 0.2s ease;
  z-index: 10;
}

.v-input.search--focused {
  background: #FFF;
}

/* .search--focused {
  background: #eee !important;
} */

.v-input.search .v-input__slot {
  margin-bottom: 0;
}

.v-input.search input {
  width: 100%;
}

.search__results {
  position: absolute;
  /* background: #000; */
  background: #FFF;
  width: 100%;
  border-radius: 0 0 8px 8px;
  z-index: 9001;
}

.search__results::after {
  content: "";
  position: absolute;
  top: -8px;
  left: 0;
  background: #FFF;
  width: 100%;
  height: 8px;
  z-index: -1;
}

.search__results-meta {
  /* padding: 1rem; */
  background: #eee;
}

.search__results-list {
  border-radius: 0 0 8px 8px;
}
</style>
