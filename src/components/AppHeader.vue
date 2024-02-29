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
    <div class="container d-flex justify-content-between py-2">
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
    </div>
  </header>
</template>

<style scoped lang="scss">
@use '../assets/scss/style.scss' as *;

header {
  background-color: #0a1930;
  height: 80px;
}
</style>
