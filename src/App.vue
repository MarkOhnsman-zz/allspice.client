<template>
  <header>
    <!-- <navbar /> -->
    <button class="btn btn-info">
      Click me
    </button>
  </header>
  <main>
    <router-view />
  </main>
  <footer class="container-fluid">
    <div class="row">
      <div class="col bg-primary text-center p-2 text-light">
        <p>Made with <img class="text-img" src="./assets/img/logo.png" /> by Codeworks</p>
      </div>
    </div>
  </footer>
</template>

<style lang="scss">
@import './assets/scss/main.scss';

.text-img {
  height: 1em;
}

</style>
