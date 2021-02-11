<template>
  <div class="border rounded-bottom p-3 mb-3">
    <div class="" v-for="ingredient in state.ingredients" :key="ingredient.id">
      <div class="d-flex align-items-center" v-if="state.editing.id != ingredient.id">
        <p>
          {{ ingredient.quantity }} {{ ingredient.name }}
        </p>
        <i title="edit" class="fas  fa-pencil-alt edit ml-3" @click="setEdit(ingredient)"></i>
        <i title="delete" class="fas fa-trash delete ml-3" @click="deleteIngredient(ingredient)"></i>
      </div>
      <form @submit.prevent="editIngredient" v-else>
        <div class="d-md-flex align-items-center">
          <label class="sr-only" for="quantity">Quantity</label>
          <input type="text"
                 class="form-control col-12 col-md-3 mr-3 mb-1"
                 placeholder="Quantity..."
                 v-model="state.editing.quantity"
                 id="quantity"
          />
          <label class="sr-only" for="name">Name</label>
          <input type="text"
                 class="form-control mb-1"
                 placeholder="Name..."
                 v-model="state.editing.name"
                 id="name"
          />
          <i class="fas fa-save fa-lg mx-2 add" @click="editIngredient"></i>
          <i class="fas fa-ban fa-lg delete" @click="state.editing = {}"></i>
        </div>
      </form>
    </div>
    <div class="d-flex justify-content-end">
      <i title="Add Ingredient" class="fas fa-plus icon-theme icon-primary" v-if="!state.addIng" @click="state.addIng = true"></i>
    </div>
    <form @submit.prevent="addIngredient" class="my-3" v-if="state.addIng">
      <div class="form-group d-md-flex">
        <label class="sr-only" for="quantity">Quantity</label>
        <input type="text"
               class="form-control col-12 col-md-3 mr-3 mb-1"
               placeholder="Quantity..."
               v-model="state.newIngredient.quantity"
               id="quantity"
        />
        <label class="sr-only" for="name">Name</label>
        <input type="text"
               class="form-control mb-1"
               placeholder="Name..."
               v-model="state.newIngredient.name"
               id="name"
        />
      </div>
      <div class="d-flex justify-content-between">
        <button type="button" class="btn btn-outline-danger" @click="state.addIng = false">
          Cancel
        </button>
        <button type="submit" class="btn btn-outline-success">
          Save
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { computed, reactive } from 'vue'
import { AppState } from '../AppState'
import { recipeService } from '../services/RecipeService'
export default {
  setup(props, { emit }) {
    const state = reactive({
      ingredients: computed(() => AppState.activeRecipe.ingredients),
      addIng: false,
      editing: {
        id: '',
        quantity: '',
        name: ''
      },
      newIngredient: {
        quantity: '',
        name: ''
      }
    })

    return {
      state,
      async addIngredient() {
        await recipeService.addIngredient(state.newIngredient)
        state.newIngredient.quantity = ''
        state.newIngredient.name = ''
      },
      setEdit(ing) {
        state.editing.id = ing.id
        state.editing.name = ing.name
        state.editing.quantity = ing.quantity
      },
      async editIngredient() {
        await recipeService.editIngredient(state.editing)
        state.editing = {
          id: '',
          quantity: '',
          name: ''
        }
      },
      deleteIngredient(ingredient) {
        recipeService.deleteIngredient(ingredient)
      }
    }
  }
}
</script>

<style>

</style>
