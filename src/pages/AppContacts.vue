<script>
import axios from 'axios';
import ProjectCard from '../components/ProjectCard.vue';
import ProjectSearch from '../components/ProjectSearch.vue';
import store from '../store';

export default {
  name: 'ProjectList',

  data() {
    return {
      store,
      lastPage: null,
      projects: [],
      props: ['projects'],
    };
  },

  components: {
    ProjectCard,
    ProjectSearch,
  },

  methods: {
    getProjects() {
      axios
        .get(this.store.api.baseUrl + this.store.api.apiUrls.projects, {
          params: {
            page: this.store.projects.currentPage,
            key: this.store.projects.searchKey,
          },
        })
        .then((response) => {
          this.projects = response.data.results.data;
          this.lastPage = response.data.results.last_page;
          this.store.projects.currentPage = response.data.results.current_page;
          console.log('risposta server');
          console.log(response);
          console.log('risposta server');
        })
        .catch((error) => {
          console.log(error);
        });
    },

    nextPage() {
      if (this.store.projects.currentPage < this.lastPage) {
        this.store.projects.currentPage++;
        // Per mettere l`uri in alto ?page=n
        this.$router.push({
          name: 'projects',
          query: {
            page: this.store.projects.currentPage,
            key: this.store.projects.searchKey,
          },
        });
        this.getProjects();
      }
    },

    prevPage() {
      // if (this.projects.currentPage > 1)
      if (this.store.projects.currentPage > 1) {
        this.store.projects.currentPage--;
        // Per mettere l`uri in alto ?page=n
        this.$router.push({
          name: 'projects',
          query: {
            page: this.store.projects.currentPage,
            key: this.store.projects.searchKey,
          },
        });
        this.getProjects();
      }
    },
  },
  created() {
    // ricerca in base all'url
    this.store.projects.currentPage = this.$route.query.page ?? 1;
    this.store.projects.searchKey = this.$route.query.key ?? null;

    this.getProjects();
  },
};
</script>

<template>
  <main>
    <h1 class="text-center mt-5">Projects</h1>
    <div class="container">
      <ProjectSearch @search-project="getProjects" />
    </div>
    <div class="container py-5 d-flex flex-wrap justify-content-between gap-5">
      <div
        class="col-sm-12 col-md-4 col-lg-3 g-4"
        v-for="project in projects"
        :key="project.id"
      >
        <ProjectCard :project="project" />
      </div>
    </div>
    <ul class="container d-flex justify-content-around list-unstyled">
      <li>
        <button
          class="btn btn-primary"
          :class="{ disabled: store.projects.currentPage === 1 }"
          @click="prevPage"
        >
          &lt
        </button>
      </li>
      <li>{{ this.store.projects.currentPage }}</li>
      <li>
        <button
          class="btn btn-primary"
          :class="{ disabled: store.projects.currentPage === lastPage }"
          @click="nextPage"
        >
          >
        </button>
      </li>
    </ul>
  </main>
</template>
