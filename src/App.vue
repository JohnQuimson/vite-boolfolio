<script>
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
// import { store } from './store.js';

export default {
  name: 'App',

  components: {
    AppHeader,
    AppFooter,
  },
};
</script>

<template>
  <AppHeader />
  <!-- <AppMain :projects="projects" /> -->
  <router-view></router-view>
  <AppFooter />
</template>

<style lang="scss">
@use './assets/scss/style.scss' as *;
</style>
