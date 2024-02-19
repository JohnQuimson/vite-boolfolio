<script>
import axios from 'axios';
import ProjectCard from '../components/ProjectCard.vue';

export default {
  name: 'AppList',

  data() {
    return {
      currentPage: 1,
      lastPage: null,
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
        .get(this.baseUrl + this.apiUrls.projects, {
          params: {
            page: this.currentPage,
          },
        })
        .then((response) => {
          this.projects = response.data.results.data;
          this.lastPage = response.data.results.last_page;
          this.currentPage = response.data.results.current_page;
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    nextPage() {
      if (this.currentPage < this.lastPage) {
        this.currentPage++;
        this.getProjects();
      }
    },

    prevPage() {
      // if (this.currentPage > 1)
      if (this.currentPage > 1) {
        this.currentPage--;
        this.getProjects();
      }
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
    <div class="container py-5 d-flex flex-wrap justify-content-center gap-5">
      <ProjectCard :projects="projects" />
    </div>
    <ul class="container d-flex justify-content-around list-unstyled">
      <li>
        <button
          class="btn btn-primary"
          :class="{ disabled: currentPage === 1 }"
          @click="prevPage"
        >
          &lt
        </button>
      </li>
      <li>{{ this.currentPage }}</li>
      <li>
        <button
          class="btn btn-primary"
          :class="{ disabled: currentPage === lastPage }"
          @click="nextPage"
        >
          >
        </button>
      </li>
    </ul>
  </main>
</template>
