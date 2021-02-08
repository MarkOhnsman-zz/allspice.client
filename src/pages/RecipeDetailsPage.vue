<template>
  <div class="container-fluid recipe-details">
    <div class="row">
      <div class="d-flex px-3 z-1">
        <div class="bg-light pr-2 p-3 mt-3 recipe-title">
          <h1>{{ state.recipe.title }}</h1>
        </div>
      </div>
    </div>
    <div class="row ">
      <div class="col-12">
        <div class="recipe-card d-flex flex-wrap p-3 bg-light shadow">
          <div class="col-md-6">
            <div class="sticky-top py-2">
              <img class="img-fluid rounded mb-4" :src="state.recipe.imgUrl">

              <p class="border-top border-primary pt-3 border-3">
                {{ state.recipe.description }}
              </p>
            </div>
          </div>
          <div class="col-md-6 ">
            <div class="ingredients">
              <div class="bg-primary rounded-top p-2 pl-3 text-uppercase">
                <h4>Ingredients</h4>
              </div>
              <ul class="border rounded-bottom py-3">
                <li>Test Ingredients</li>
                <li>Test Ingredients</li>
                <li>Test Ingredients</li>
              </ul>
            </div>
            <div class="ingredients">
              <div class="bg-primary rounded-top p-2 pl-3 text-uppercase">
                <h4>Steps</h4>
              </div>
              <ol class="border rounded-bottom py-3">
                <li>Test Ingredients</li>
                <li>Test Ingredients</li>
                <li>Test Ingredients</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
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
.recipe-title {
 box-shadow: 4px -1px 5px -4px rgba(0, 0, 0, 0.15), -4px -1px 5px -4px rgba(0, 0, 0, 0.15);
}

</style>
