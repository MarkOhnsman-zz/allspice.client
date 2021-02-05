<template>
  <div class="home">
    {{ state.recipes }}
  </div>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import { recipeService } from '../services/RecipeService.js'
import { AppState } from '../AppState.js'

export default {
  name: 'Home',
  setup() {
    const state = reactive({
      recipes: computed(() => AppState.recipes)
    })
    onMounted(() => {
      recipeService.getAll()
    })

    return {
      state
    }
  }
}
</script>
