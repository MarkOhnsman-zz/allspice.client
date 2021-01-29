import { reactive } from 'vue'
// eslint-disable-next-line no-unused-vars
import Recipe from './models/Recipe'

export const AppState = reactive({
  /** @type {Recipe[]} */
  recipes: []
})
