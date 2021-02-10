<template>
  <div class="border rounded-bottom p-3">
    <div class="" v-for="ingredient in state.ingredients" :key="ingredient.id">
      <div class="d-flex align-items-center">
        <p>
          {{ ingredient.quantity }} {{ ingredient.name }}
        </p>
        <i title="edit" class="fas  fa-pencil-alt edit ml-3" @click="state.baseEdit = true"></i>
        <i title="delete" class="fas fa-trash delete ml-3" @click="state.baseEdit = false"></i>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, reactive } from 'vue'
import { AppState } from '../AppState'
export default {
  setup(props, { emit }) {
    const state = reactive({
      ingredients: computed(() => AppState.activeRecipe.ingredients)
    })

    return {
      state
    }
  }
}
</script>

<style>

</style>
