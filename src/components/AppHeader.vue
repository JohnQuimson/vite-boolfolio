<script>
export default {
  name: 'Header',
  data() {
    return {};
  },
};
</script>

<template>
  <header class="bg-warning">
    <div class="container d-flex justify-content-between py-2">
      <div>Logo</div>
      <nav>
        <ul class="list-unstyled m-0 p-0 gap-4 d-flex">
          <li>
            <router-link :to="{ name: 'home' }">Home</router-link>
          </li>
          <li>
            <router-link :to="{ name: 'projects' }">Projects</router-link>
          </li>
          <li>
            <router-link :to="{ name: 'details' }">Details</router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style scoped lang="scss">
@use '../assets/scss/style.scss' as *;
</style>
