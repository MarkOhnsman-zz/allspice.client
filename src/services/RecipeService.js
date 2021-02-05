import { AppState } from '../AppState'
import { api } from './AxiosService'

class RecipeService {
  async getAll() {
    const res = await api.get('/recipes')
    AppState.recipes = res.data
  }
}

export const recipeService = new RecipeService()
