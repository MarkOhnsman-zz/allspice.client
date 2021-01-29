import { AppState } from '../AppState'
import Recipe from '../models/Recipe'
import { api } from './AxiosService'

class RecipeSerivce {
  async getAll() {
    const res = await api.get('recipes')
    AppState.recipes = res.data.map(r => new Recipe(r))
  }
}

export const recipeService = new RecipeSerivce()
