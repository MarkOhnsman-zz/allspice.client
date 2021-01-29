<template>
  <navbar />
  <main>
    <router-view />
  </main>
  <footer class="bg-primary text-center text-light p-2">
    <p class="m-0">
      Made with <img alt="Vue logo" id="vue-logo" src="./assets/img/logo.png"> by Codeworks
    </p>
  </footer>
</template>

<script>
import Navbar from './components/Navbar'
export default {
  components: {
    Navbar
  }
}
</script>

<style lang="scss">
@import './assets/scss/main.scss';

#app {
    background-image: url('./assets/img/bread.jpg');
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
  }
#vue-logo {
  height: 1em
}
</style>
