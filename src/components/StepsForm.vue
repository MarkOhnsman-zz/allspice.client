<template>
  <form @submit.prevent="edit" class="border rounded-bottom py-3 px-5">
    <div class="form-group mx-2" v-for="(step, index) in state.steps" :key="index">
      <label for="name m-0" class="d-flex justify-content-between">
        <span>{{ index + 1 }}.</span>
        <i class="fa fa-trash delete" aria-hidden="true" title="Delete" @click="deleteStep(index)"></i>
      </label>
      <textarea
        class="form-control ml-2"
        v-model="state.steps[index]"
        rows="4"
        cols="50"
        required
      >
        </textarea>
    </div>
    <div class="text-right mx-2">
      <i class="fas fa-plus mr-5 add" aria-hidden="true" @click="addStep"></i>
      <button type="submit" class="btn btn-outline-success">
        save
      </button>
    </div>
  </form>
</template>

<script>
import { computed, reactive } from 'vue'
import { AppState } from '../AppState'
import { recipeService } from '../services/RecipeService'
export default {
  setup(props, { emit }) {
    const state = reactive({
      steps: computed(() => AppState.activeRecipe.steps)
    })

    return {
      state,
      async edit() {
        await recipeService.edit(AppState.activeRecipe)
        emit('close')
      },
      async deleteStep(index) {
        state.steps.splice(index, 1)
        await recipeService.edit(AppState.activeRecipe)
      },
      addStep() {
        state.steps.push('')
      }
    }
  }
}
</script>

<style>

</style>
