<template>
  <form @submit.prevent="createRecipe" class="d-flex flex-column align-items-end col">
    <div class="card bg-white p-3 m-2 shadow">
      <div class="form-group mx-2">
        <label for="name m-0">Your Name</label>
        <input type="text"
               class="form-control ml-2"
               aria-describedby="helpId"
               placeholder="Name..."
               v-model="state.newRecipe.creatorName"
               required
        >
      </div>
      <div class="form-group mx-2">
        <label for="name m-0">Title</label>
        <input type="text"
               class="form-control ml-2"
               aria-describedby="helpId"
               placeholder="Title..."
               v-model="state.newRecipe.title"
               required
        >
      </div>
      <div class="form-group mx-2">
        <label for="name m-0">Description</label>
        <input type="text"
               class="form-control ml-2"
               aria-describedby="helpId"
               placeholder="Description..."
               v-model="state.newRecipe.description"
               required
        >
      </div>
      <div class="form-group mx-2">
        <label for="name m-0">Image Url</label>
        <input type="text"
               class="form-control ml-2"
               aria-describedby="helpId"
               placeholder="Image Url..."
               v-model="state.newRecipe.imgUrl"
               required
        >
      </div>
      <div class="d-flex justify-content-between">
        <button type="button" class="btn btn-danger" @click="cancelForm">
          Cancel
        </button>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </div>
    </div>
  </form>
</template>

<script>
import { reactive } from 'vue'
import { AppState } from '../AppState'
import { recipeService } from '../services/RecipeService'
export default {
  name: 'RecipeForm',
  setup() {
    const state = reactive({
      newRecipe: {
        creatorName: '',
        title: '',
        description: ''
      }
    })

    return {
      state,
      cancelForm() {
        AppState.showForm = false
        state.newRecipe = {
          creatorName: '',
          title: '',
          description: '',
          imgUrl: ''
        }
      },
      async createRecipe() {
        try {
          await recipeService.create(state.newRecipe)
          this.cancelForm()
        } catch (error) {
          console.error('Something went wrong', error)
        }
      }
    }
  }
}
</script>

<style scoped>
form {
  position: absolute;
  z-index: 10
}
</style>
