import { reactive } from 'vue'

export const AppState = reactive({
  recipes: [],
  activeRecipe: {},
  showForm: false
})
