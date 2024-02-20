<script>
import axios from 'axios';
import store from '../store';

export default {
  name: 'ProjectDetail',

  data() {
    return {
      store,
      project: {},
    };
  },

  methods: {
    getProject() {
      axios
        .get(
          this.store.api.baseUrl +
            this.store.api.apiUrls.projects +
            '/' +
            this.$route.params.slug
        )
        .then((response) => {
          this.project = response.data.result;
        })
        .catch((error) => {
          console.log(error);
          this.getProject();
        });
    },
  },

  created() {
    this.getProject();

    this.$watch(
      () => this.$route.params,
      (toParams, previousParams) => {
        this.getProject();
      }
    );
  },
};
</script>

<template>
  <div class="container d-flex align-items-center flex-column py-3">
    <h1 class="mb-5">Project Details</h1>
    <div v-if="project">
      <div class="card" style="width: 18rem">
        <div class="card-body">
          <h5 class="card-title">{{ project.title }}</h5>
          <p class="card-text">Last updated: {{ project.last_updated }}</p>
          <p class="card-text">Main language: {{ project.main_language }}</p>
          <span>Used technologies: </span>
          <ul>
            <li v-for="technology in project.technologies" :key="technology.id">
              {{ technology.title }}
            </li>
          </ul>
        </div>
        <p>
          <router-link
            :to="{
              name: 'projects',
              query: {
                page: store.projects.currentPage,
                key: store.projects.searchKey,
              },
            }"
            >Torna alla lista</router-link
          >
        </p>
      </div>
    </div>
    <div v-else>
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss"></style>
