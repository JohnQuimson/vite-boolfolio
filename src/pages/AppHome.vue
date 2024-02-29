<script>
export default {
  name: 'AppHome',
};
</script>

<template>
  <main>
    <div class="container py-5">
      <span class="salute">Hi, my name is</span>

      <h1 class="display-5 fw-bold">John Henric Quimson</h1>

      <p class="col-md-8 my-job">Jr. Full-Stack Web Developer</p>

      <div class="cont-btn d-flex gap-5">
        <router-link :to="{ name: 'projects' }" class="work-btn"
          >Take a look to my work list</router-link
        >

        <a
          href="https://github.com/JohnQuimson"
          class="github-btn"
          target="_blank"
        >
          my github
        </a>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
main {
  background-color: #0a1930;
  height: calc(100vh - 80px);
  padding-top: 100px;

  .salute {
    color: #74c6cc;
    font-weight: 600;
  }

  h1 {
    color: #cbd7f3;
    text-transform: uppercase;
    font-size: 70px;
  }

  .my-job {
    color: #8995b5;
    font-size: 50px;
    font-weight: 600;
  }

  .github-btn {
    border: 1px solid #74c6cc;
    color: #74c6cc;
    padding: 10px 30px;
    border-radius: 5px;

    &:hover {
      background-color: #74c6cc;
      color: #0a1930;
      box-shadow: 0 0 5px #74c6cc, 0 0 25px #74c6cc, 0 0 50px #74c6cc;
      border: 1px solid white;
    }
  }
  .work-btn {
    border: 1px solid #ffc107;
    color: #ffc107;
    padding: 10px 30px;
    border-radius: 5px;

    &:hover {
      background-color: #ffc107;
      color: #0a1930;
      box-shadow: 0 0 5px #ffc107, 0 0 25px #ffc107, 0 0 50px #ffc107;
      border: 1px solid white;
    }
  }
}

a {
  text-decoration: none;
}
</style>
