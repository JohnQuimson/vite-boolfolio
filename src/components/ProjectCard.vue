<script>
export default {
  name: 'ProjectCard',
  props: ['projects'],
  components: {},
};
</script>

<template>
  <div class="card" style="width: 18rem" v-for="project in projects">
    <!-- <img src="..." class="card-img-top" alt="..." /> -->
    <div class="card-body">
      <h5 class="card-title">{{ project.title }}</h5>
      <p class="card-text">last update: {{ project.last_updated }}</p>
      <span>main language: {{ project.main_language }}</span>
    </div>
  </div>
</template>

<style lang="scss"></style>
