<script>
import axios from 'axios';
import ProjectCard from '../components/ProjectCard.vue';

export default {
  name: 'AppList',

  data() {
    return {
      projects: [],
      baseUrl: 'http://127.0.0.1:8000',
      apiUrls: {
        projects: '/api/projects',
      },
    };
  },

  components: {
    ProjectCard,
  },

  methods: {
    getProjects() {
      axios
        .get(this.baseUrl + this.apiUrls.projects)
        .then((response) => {
          this.projects = response.data.data;
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  created() {
    this.getProjects();
  },
};
</script>

<template>
  <main>
    <h1 class="text-center mt-5">Projects</h1>
    <div class="container py-5 d-flex flex-wrap justify-content-between gap-5">
      <ProjectCard :projects="projects" />
    </div>
  </main>
</template>
