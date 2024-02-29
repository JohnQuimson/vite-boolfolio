<script>
export default {
  name: 'About',
};
</script>

<template>
  <main>
    <div class="container">
      <div class="left">
        <div class="cont-img">
          <img src="../../public/img/me.png" alt="" />
        </div>
      </div>
      <div class="right">
        <div class="cont-info">info</div>
      </div>
    </div>
  </main>
</template>

<style scoped lang="scss">
@use '../assets/scss/style.scss' as *;

main {
  background-color: #0a1930;
  height: calc(100vh - 80px);
  color: white;
  .container {
    display: flex;
    margin: 0 auto;
    padding-top: 100px;

    .left {
      width: 40%;
      border: 1px solid red;

      .cont-img {
        width: 60%;
        margin: 0 auto;

        img {
          width: 100%;
          height: 100%;
        }
      }
    }

    .right {
      width: 60%;
      border: 1px solid yellow;

      .cont-info {
      }
    }
  }
}
</style>
