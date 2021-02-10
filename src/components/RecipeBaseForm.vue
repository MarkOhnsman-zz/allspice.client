<template>
  <form @submit.prevent="edit">
    <div class="form-group mx-2">
      <label for="name m-0">Title</label>
      <input type="text"
             class="form-control ml-2"
             aria-describedby="helpId"
             placeholder="Title..."
             v-model="state.recipe.title"
             required
      >
    </div>
    <div class="form-group mx-2">
      <label for="name m-0">Image Url</label>
      <input type="text"
             class="form-control ml-2"
             aria-describedby="helpId"
             placeholder="Image Url..."
             v-model="state.recipe.imgUrl"
             required
      >
    </div>
    <div class="form-group mx-2">
      <label for="name m-0">Description</label>
      <textarea
        class="form-control ml-2"
        aria-describedby="helpId"
        placeholder="Description..."
        v-model="state.recipe.description"
        rows="4"
        cols="50"
        maxlength="500"
        required
      >
      </textarea>
      <small class="form-text ml-2" :class="{'text-muted': !state.maxLength,'text-danger': state.maxLength}">Keep it short, no blogs here ({{ state.recipe.description.length }}/500)</small>
    </div>
    <div class="text-right mx-2">
      <button type="submit" class="btn btn-outline-success">
        save
      </button>
    </div>
  </form>
</template>

<script>
import { computed, reactive } from 'vue'
import { recipeService } from '../services/RecipeService'
import { AppState } from '../AppState'

export default {
  setup(props, { emit }) {
    const state = reactive({
      recipe: computed(() => AppState.activeRecipe),
      maxLength: computed(() => state.recipe.description.length > 475)
    })

    return {
      state,
      async edit() {
        await recipeService.edit(state.recipe)
        emit('close')
      }
    }
  }
}
</script>

<style>

</style>
