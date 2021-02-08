<template>
  <div class="home container-fluid">
    <div class="row">
      <recipe v-for="recipe in state.recipes" :key="recipe.id" :recipe="recipe" />
    </div>
  </div>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import { recipeService } from '../services/RecipeService.js'
import { AppState } from '../AppState.js'
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
    Recipe
  }

}
</script>

<style lang="scss">
</style>
