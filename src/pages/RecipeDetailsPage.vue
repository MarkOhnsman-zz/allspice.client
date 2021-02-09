<template>
  <div class="container-fluid recipe-details">
    <div class="row">
      <div class="d-flex px-3 z-1">
        <div class="bg-light pr-2 p-3 mt-3 recipe-title d-flex align-items-center">
          <h1>{{ state.recipe.title }}</h1>
          <i title="edit" class="fas fa-pencil-alt ml-5 mr-2 fa-lg icon-theme icon-primary icon-lg" v-if="!state.baseEdit" @click="state.baseEdit = true"></i>
          <i title="cancel" class="fas fa-times ml-5 mr-2 fa-lg icon-theme icon-primary icon-lg" @click="state.baseEdit = false" v-else></i>
        </div>
      </div>
    </div>
    <div class="row ">
      <div class="col-12">
        <div class="recipe-card d-flex flex-wrap p-3 bg-light shadow">
          <div class="col-md-6">
            <div class="sticky-top py-2" v-if="!state.baseEdit">
              <img class="img-fluid rounded mb-4" :src="state.recipe.imgUrl">

              <p class="border-top border-primary pt-3 border-3">
                {{ state.recipe.description }}
              </p>
            </div>
            <recipe-base-form v-else @close="state.baseEdit = false" />
          </div>
          <div class="col-md-6 ">
            <div class="ingredients">
              <div class="bg-primary rounded-top p-2 pl-3 text-uppercase d-flex align-items-center justify-content-between">
                <h4>Ingredients</h4>
                <i title="edit" class="fas fa-pencil-alt ml-5 mr-2 icon-theme icon-secondary m-2"></i>
              </div>
              <ul class="border rounded-bottom py-3">
                <li v-for="ingredient in state.recipe.ingredients" :key="ingredient.key">
                  {{ ingredient.quantity }} {{ ingredient.name }}
                </li>
              </ul>
            </div>
            <div class="steps">
              <div class="bg-primary rounded-top p-2 pl-3 text-uppercase d-flex align-items-center justify-content-between">
                <h4>Steps</h4>
                <i title="edit" class="fas fa-pencil-alt icon-theme icon-secondary m-2" @click="state.stepEdit = true" v-if="!state.stepEdit"></i>
                <i title="cancel" class="fas fa-times icon-theme icon-secondary m-2" @click="state.stepEdit = false" v-else></i>
              </div>
              <ol class="border rounded-bottom py-3 px-5" v-if="!state.stepEdit">
                <li class="mb-3" v-for="step in state.recipe.steps" :key="step">
                  {{ step }}
                </li>
              </ol>
              <steps-form v-else @close="state.stepEdit = false" />
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
import RecipeBaseForm from '../components/RecipeBaseForm'
import StepsForm from '../components/StepsForm'

export default {
  setup() {
    const route = useRoute()
    const state = reactive({
      recipe: computed(() => AppState.activeRecipe),
      baseEdit: false,
      stepEdit: false
    })

    onMounted(() => {
      recipeService.getOne(route.params.id)
    })

    return {
      state
    }
  },
  components: {
    RecipeBaseForm,
    StepsForm
  }
}
</script>

<style>
.recipe-title {
 box-shadow: 4px -1px 5px -4px rgba(0, 0, 0, 0.15), -4px -1px 5px -4px rgba(0, 0, 0, 0.15);
}

</style>
