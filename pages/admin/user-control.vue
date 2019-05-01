<template>
  <div>
    <header class="mb-4">
      <h1 class="display-2">User Access Control</h1>
      <h2 class="headline grey--text text--darken-1">Delete and update users. Abuse will not be tolerated.</h2>
    </header>

    <v-autocomplete v-model="selection" :items="items" :loading="loading" :search-input.sync="search" label="Search Users"
                    autofocus auto-select-first clearable return-object solo>
      <template #no-data>
        <v-list-tile>
          <v-list-tile-title>No users found.</v-list-tile-title>
        </v-list-tile>
      </template>

      <template #item="{item: {avatar, username}}">
        <v-list-tile-avatar color="primary">
          {{ avatar || initial(username) }}
        </v-list-tile-avatar>
        <v-list-tile-title>{{ username }}</v-list-tile-title>
      </template>

      <template #selection="{item: {avatar, username}}">
        <v-chip>
          <v-avatar color="primary">
            {{ avatar || initial(username) }}
          </v-avatar>
          {{ username }}
        </v-chip>
      </template>
    </v-autocomplete>

    <v-card v-if="selection" class="pa-3">
      <v-card-title class="mb-2">
        <v-avatar class="mr-3" color="primary" size="64">
          {{ selection.avatar || initial(selection.username) }}
        </v-avatar>
        <div>
          <div>{{ selection.username }}</div>
          <div class="grey--text text--darken-1">{{ selection.email || 'email@example.com' }}</div>
        </div>

        <v-spacer/>

        <v-btn :disabled="formLoading" color="secondary" outline @click="deleteDialog = true">
          Delete
        </v-btn>
      </v-card-title>

      <v-card-text>
        <h2 class="title mb-3">Roles</h2>

        <v-checkbox v-model="supporter" :disabled="!user.developer || formLoading" class="ma-0 mb-1" label="Supporter" hide-details/>
        <v-checkbox v-model="editor" :disabled="!user.developer || formLoading" class="ma-0 mb-1" label="Editor" hide-details/>
        <v-checkbox v-model="moderator" :disabled="!user.developer || formLoading" class="ma-0 mb-1" label="Moderator" hide-details/>
        <v-checkbox v-model="developer" :disabled="!user.developer || formLoading" class="ma-0" label="Developer" hide-details/>
      </v-card-text>

      <v-card-actions>
        <v-btn color="success" depressed @click="passwordConfirmDialog = true">
          Save
        </v-btn>
        <v-btn color="accent" outline @click="reset">
          Reset
        </v-btn>
      </v-card-actions>
    </v-card>

    <v-dialog v-model="deleteDialog" :persistent="deleteLoading" max-width="500" no-click-animation>
      <v-card>
        <v-card-title primary-title>
          Delete User
        </v-card-title>
        <v-card-text>
          Are you sure you want to delete <span class="body-2">{{ selection && selection.username }}</span>?
          <br>
          Doing so without a proper reason may result in consequences.

          <v-text-field v-model="password" class="mt-3" label="Confirm Password" type="password"/>

          <!-- <s-todo reason="audit logs w/ reason input here"/> -->
        </v-card-text>
        <v-card-actions class="justify-end">
          <v-btn :disabled="deleteLoading" color="primary" depressed @click="deleteDialog = false">
            Cancel
          </v-btn>
          <v-btn :disabled="!password || deleteLoading" :loading="deleteLoading" outline @click="delete_">
            Delete
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog v-model="moderatorDialog" max-width="500" persistent>
      <v-card>
        <v-card-title>
          Are You Sure?
        </v-card-title>
        <v-card-text>
          Are you sure you wish to mark <span class="body-2">{{ selection && selection.username }}</span> as a moderator?
          <br>
          They will be able to access this admin panel, deal with reports and mods, and delete users.
        </v-card-text>
        <v-card-actions class="justify-end">
          <v-btn color="primary" depressed @click="resetModerator">
            Cancel
          </v-btn>
          <v-btn outline @click="moderatorDialog = false">
            Continue
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog v-model="developerDialog" max-width="500" persistent>
      <v-card>
        <v-card-title>
          Are You Sure?
        </v-card-title>
        <v-card-text>
          Are you sure you wish to mark <span class="body-2">{{ selection && selection.username }}</span> as a developer?
          <br>
          They will be able to do anything that you are able to.
        </v-card-text>
        <v-card-actions class="justify-end">
          <v-btn color="primary" depressed @click="resetDeveloper">
            Cancel
          </v-btn>
          <v-btn outline @click="developerDialog = false">
            Continue
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog v-model="passwordConfirmDialog" max-width="500">
      <v-card>
        <v-card-title>
          Confirm Password
        </v-card-title>
        <v-card-text>
          <v-text-field v-model="password" label="Confirm Password" type="password"/>
        </v-card-text>
        <v-card-actions class="justify-end">
          <v-btn :disabled="formLoading" color="primary" depressed @click="passwordConfirmDialog = false">
            Cancel
          </v-btn>
          <v-btn :disabled="!password || formLoading" :loading="formLoading" outline @click="updateRoles">
            Continue
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-snackbar v-model="snackbarOpen" :timeout="5000" right>
      {{ snackbarText }}
    </v-snackbar>
  </div>
</template>

<script>
import debounce from '~/utils/debounce';

export default {
  layout: 'admin',
  middleware: 'admin',
  data() {
    return {
      selection: null,
      search: '',
      loading: false,
      items: [],

      password: '',

      passwordConfirmDialog: false,
      deleteDialog: false,
      deleteLoading: false,
      moderatorDialog: false,
      developerDialog: false,
      snackbarOpen: false,
      snackbarText: '',
      formLoading: false,

      supporter: false,
      editor: false,
      moderator: false,
      developer: false
    };
  },
  computed: {
    user() {
      return this.$store.state.auth.user;
    }
  },
  watch: {
    search(value) {
      if (!value) return;

      this.loading = true;
      this._debouncedSearch(value);
    },
    selection(value) {
      if (!value) return;

      this.supporter = value.supporter;
      this.editor = value.editor;
      this.moderator = value.moderator;
      this.developer = value.developer;
    },
    moderator(value) {
      if (!value || !this.selection) return;

      this.moderatorDialog = true;
    },
    developer(value) {
      if (!value || !this.selection) return;

      this.developerDialog = true;
    },
    deleteDialog(value) {
      if (!value) this.password = '';
    },
    passwordConfirmDialog(value) {
      if (!value) this.password = '';
    }
  },
  created() {
    // Only run search after 500ms delay.
    this._debouncedSearch = debounce(this.search_, 500);
  },
  methods: {
    async search_(value) {
      try {
        var {result: {results: users}} = await this.$axios.$get(`/users?q=${this.search}&limit=5&ignore=${this.user.id}`);
      } catch (err) {
        console.error(err);
        this.loading = false;
        return;
      }

      this.items = users;
      this.loading = false;
    },
    async delete_() {
      this.deleteLoading = true;

      try {
        await this.$axios.$delete(`/admin/users/${this.selection.id}`, {
          data: {
            password: this.password
          }
        });
      } catch (err) {
        let msg = err.mesage;

        if (err.response) msg = err.response.data.error;
        console.error(msg);

        this.snackbarText = `Error: ${msg}`;
        this.snackbarOpen = true;
        this.deleteLoading = false;

        return;
      }

      this.deleteLoading = false;
      this.deleteDialog = false;

      this.snackbarText = `Deleted ${this.selection.username}`;
      this.snackbarOpen = true;

      this.password = '';
      this.selection = null;
      this.items = [];
    },
    async updateRoles() {
      this.formLoading = true;

      try {
        await this.$axios.$patch(`/admin/users/${this.selection.id}`, {
          supporter: this.supporter,
          editor: this.editor,
          moderator: this.moderator,
          developer: this.developer,
          password: this.password
        });
      } catch (err) {
        let msg = err.mesage;

        if (err.response) msg = err.response.data.error;
        console.error(msg);

        this.snackbarText = `Error: ${msg}`;
        this.snackbarOpen = true;
        this.formLoading = false;

        return;
      }

      this.snackbarText = `Updated roles for ${this.selection.username}`;
      this.snackbarOpen = true;

      this.passwordConfirmDialog = false;
      this.formLoading = false;

      this.password = '';
    },
    resetModerator() {
      this.moderator = false;
      this.moderatorDialog = false;
    },
    resetDeveloper() {
      this.developer = false;
      this.developerDialog = false;
    },
    reset() {
      this.supporter = this.selection.supporter;
      this.editor = this.selection.editor;
      this.moderator = this.selection.moderator;
      this.developer = this.selection.developer;
    },
    initial(value) {
      return value ? value[0].toUpperCase() : '';
    }
  }
};
</script>
