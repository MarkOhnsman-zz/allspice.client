<template>
  <div class="home container-fluid">
    <div class="row">
      <recipe-form v-if="state.showForm" />
    </div>

    <div class="row">
      <recipe />
    </div>
  </div>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import { recipeService } from '../services/RecipeService.js'
import { AppState } from '../AppState.js'
import RecipeForm from '../components/NewRecipeForm'
import Recipe from '../components/Recipe'

export default {
  name: 'Home',
  setup() {
    const state = reactive({
      recipes: computed(() => AppState.recipes),
      showForm: computed(() => AppState.showForm)
    })
    onMounted(() => {
      recipeService.getAll()
    })

    return {
      state
    }
  },
  components: {
    RecipeForm,
    Recipe
  }

}
</script>

<style lang="scss">
</style>
