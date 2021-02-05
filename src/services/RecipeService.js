import { AppState } from '../AppState'
import { api } from './AxiosService'

class RecipeService {
  async getAll() {
    const res = await api.get('/recipes')
    AppState.recipes = res.data
  }

  async create(recipe) {
    const res = await api.post('/recipes', recipe)
    AppState.recipes.push(res.data)
  }
}

export const recipeService = new RecipeService()
