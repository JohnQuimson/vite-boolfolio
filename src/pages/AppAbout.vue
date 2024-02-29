<script>
export default {
  name: 'About',
};
</script>

<template>
  <main>
    <div class="container">
      <div class="cont-img">foto</div>
      <div class="info">info</div>
    </div>
  </main>
</template>

<style scoped lang="scss">
@use '../assets/scss/style.scss' as *;

.container {
  display: flex;

  .cont-img {
    width: 40%;
    border: 1px solid red;
  }

  .info {
    width: 60%;
    border: 1px solid yellow;
  }
}
</style>
