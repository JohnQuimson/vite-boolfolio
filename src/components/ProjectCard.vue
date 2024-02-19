<script>
export default {
  name: 'ProjectCard',
  props: ['project'],
};
</script>

<template>
  <div class="card" style="width: 18rem">
    <!-- <img src="..." class="card-img-top" alt="..." /> -->
    <div class="card-body">
      <h5 class="card-title">{{ project.title }}</h5>
      <p class="card-text">last update: {{ project.last_updated }}</p>
      <span>main language: {{ project.main_language }}</span>
    </div>

    <router-link
      :to="{ name: 'single-project', params: { slug: project.slug } }"
      class="btn btn-primary"
    >
      info
    </router-link>
  </div>
</template>

<style lang="scss"></style>
