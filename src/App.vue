<template>
  <header>
    <navbar />
  </header>
  <main>
    <router-view />
  </main>
  <footer class="container-fluid">
    <div class="row">
      <div class="col bg-primary text-center p-2 text-secondary">
        <p>Made with <img class="text-img" src="./assets/img/logo.png" /> by Codeworks</p>
      </div>
    </div>
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

.text-img {
  height: 1em;
}

</style>
