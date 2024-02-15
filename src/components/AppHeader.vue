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
          <li>home</li>
          <li>accedi</li>
          <li>registrati</li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style scoped lang="scss">
@use '../assets/scss/style.scss' as *;
</style>
