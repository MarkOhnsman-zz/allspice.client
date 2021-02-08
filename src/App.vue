<template>
  <header>
    <navbar />
  </header>
  <main>
    <recipe-form v-if="state.showForm" />
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
import { computed, reactive } from 'vue'
import Navbar from './components/Navbar'
import RecipeForm from './components/NewRecipeForm'
import { AppState } from './AppState'
export default {
  setup() {
    const state = reactive({
      showForm: computed(() => AppState.showForm)
    })
    return {
      state
    }
  },
  components: {
    Navbar,
    RecipeForm
  }
}
</script>

<style lang="scss">
@import './assets/scss/main.scss';

.text-img {
  height: 1em;
}

</style>
