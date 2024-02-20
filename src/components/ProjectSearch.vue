<script>
import store from '../store';

export default {
  name: 'ProjectSearch',

  data() {
    return {
      store,
    };
  },

  emits: ['searchProject'],

  methods: {
    search() {
      this.store.projects.currentPage = 1;
      // Per mettere l`uri in alto ?page=n&key=*prova*
      this.$router.push({
        name: 'projects',
        query: { page: 1, key: this.store.projects.searchKey },
      });
      this.$emit('searchProject');
    },
  },
};
</script>

<template>
  <section id="project-search">
    <form action="" @submit.prevent="search">
      <div class="mb-3">
        <input
          type="text"
          class="form-control"
          id="search-key "
          placeholder="Search a Project"
          v-model="store.projects.searchKey"
        />
      </div>
      <button class="btn btn-secondary">Cerca</button>
    </form>
  </section>
</template>
