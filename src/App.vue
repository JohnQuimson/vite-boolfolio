<script>
import AppHeader from './components/AppHeader.vue';
// import { store } from './store.js';

export default {
  name: 'App',

  components: {
    AppHeader,
  },
};
</script>

<template>
  <AppHeader />
  <!-- <AppMain :projects="projects" /> -->
  <router-view></router-view>
</template>

<style lang="scss">
@use './assets/scss/style.scss' as *;
</style>
