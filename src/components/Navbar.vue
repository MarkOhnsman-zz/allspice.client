<template>
  <nav class="navbar navbar-light bg-primary justify-content-between">
    <router-link class="navbar-brand text-dark d-flex align-items-center title-font" :to="{name: 'Home'}">
      <h4>
        <img class="mb-1 mr-1" src="../assets/img/soup.svg"> AllSpice
      </h4>
    </router-link>
    <button class="btn btn-outline-secondary" @click="toggleRecipe">
      <i v-if="state.showForm" class="fa fa-minus" aria-hidden="true"></i>
      <i v-else class="fa fa-plus" aria-hidden="true"></i>
    </button>
  </nav>
</template>

<script>
import { reactive, computed } from 'vue'
import { AppState } from '../AppState'

export default {
  setup() {
    const state = reactive({
      showForm: computed(() => AppState.showForm)
    })
    return {
      state,
      toggleRecipe() {
        AppState.showForm = !AppState.showForm
      }
    }
  }
}
</script>

<style scoped>
  img {
    height: 1.5em;
  }
</style>
