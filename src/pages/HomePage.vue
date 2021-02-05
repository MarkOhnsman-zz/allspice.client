<template>
  <div class="home">
    <recipe-form v-if="state.showForm" />
    {{ state.recipes }}
  </div>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import { recipeService } from '../services/RecipeService.js'
import { AppState } from '../AppState.js'
import RecipeForm from '../components/NewRecipeForm'

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
    RecipeForm
  }

}
</script>

<style >

</style>
