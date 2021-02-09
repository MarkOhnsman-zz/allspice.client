import { AppState } from '../AppState'
import { api } from './AxiosService'

class RecipeService {
  async getAll() {
    const res = await api.get('/recipes')
    AppState.recipes = res.data
  }

  async getOne(id) {
    const res = await api.get('/recipes/' + id)
    AppState.activeRecipe = res.data
  }

  async create(recipe) {
    const res = await api.post('/recipes', recipe)
    AppState.recipes.push(res.data)
  }

  async edit(recipe) {
    const res = await api.put('/recipes/' + recipe.id, recipe)
    AppState.activeRecipe = res.data
  }
}

export const recipeService = new RecipeService()
