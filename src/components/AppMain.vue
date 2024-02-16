<script>
import ProjectCard from './ProjectCard.vue';

export default {
  name: 'Main',
  props: ['projects'],
  components: {
    ProjectCard,
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

<style lang="scss" scoped></style>
