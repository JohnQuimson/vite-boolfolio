<script>
import axios from 'axios';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';
// import { store } from './store.js';

export default {
  name: 'App',

  data() {
    return {
      projects: [],
      baseUrl: 'http://127.0.0.1:8000',
      apiUris: {
        projects: '/api/projects',
      },
      params: {
        page: {
          prefix: '?page=',
          currentPage: 1,
        },
      },
    };
  },

  components: {
    AppHeader,
    AppMain,
    AppFooter,
  },

  methods: {
    getProjects() {
      axios
        .get(
          this.baseUrl +
            this.apiUris.projects +
            this.params.page.prefix +
            this.params.page.currentPage
        )
        .then((response) => {
          this.projects = response.data.data;
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    prevPage() {},
    nextPage() {},
  },
  created() {
    this.getProjects();
  },
};
</script>

<template>
  <AppHeader />
  <AppMain :projects="projects" />
  <AppFooter />
</template>

<style lang="scss">
@use './assets/scss/style.scss' as *;
</style>
