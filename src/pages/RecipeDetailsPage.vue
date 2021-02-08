<template>
  <div class="container-fluid recipe-details">
    <h1>Welcome to the Recipe Page</h1>
    {{ state.recipe }}
  </div>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import { useRoute } from 'vue-router'
import { recipeService } from '../services/RecipeService'
import { AppState } from '../AppState'

export default {
  setup() {
    const route = useRoute()
    const state = reactive({
      recipe: computed(() => AppState.activeRecipe)
    })

    onMounted(() => {
      recipeService.getOne(route.params.id)
    })

    return {
      state
    }
  }
}
</script>

<style>

</style>
