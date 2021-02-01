<template>
  <div class="home">
  </div>
</template>

<script>
import { onMounted } from 'vue'
import { recipeService } from '../services/RecipeService.js'

export default {
  name: 'Home',
  setup() {
    onMounted(() => {
      recipeService.getAll()
    })
  }

}
</script>

<style lang="scss">

</style>
