<script>
export default {
  name: 'Header',
  data() {
    return {};
  },
};
</script>

<template>
  <header>
    <div class="cont-logo">
      <router-link :to="{ name: 'home' }">
        <img
          src="../../public/img/John_Quimson-removebg-preview.png"
          alt="logo"
      /></router-link>
    </div>
    <nav>
      <ul class="list-unstyled m-0 p-0 gap-4 d-flex">
        <li>
          <router-link :to="{ name: 'projects' }">Projects</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'about' }">About Me</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'contacts' }">Contacts</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped lang="scss">
@use '../assets/scss/style.scss' as *;

header {
  background-color: #0a1930;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;

  .router-link-active,
  .router-link-exact-active,
  a {
    color: #74c6cc;
    text-decoration: none;
  }

  .router-link-exact-active {
    color: #ffc107;
  }
}
</style>
