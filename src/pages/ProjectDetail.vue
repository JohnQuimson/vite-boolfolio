<script>
import axios from 'axios';

export default {
  name: 'ProjectDetail',

  data() {
    return {
      project: {},
      baseUrl: 'http://127.0.0.1:8000',
      apiUrls: {
        projects: '/api/projects',
      },
    };
  },

  methods: {
    getProject() {
      axios
        .get(
          this.baseUrl + this.apiUrls.projects + '/' + this.$route.params.slug
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
  },
};
</script>

<template>
  <div class="container border d-flex align-items-center flex-column py-3">
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
