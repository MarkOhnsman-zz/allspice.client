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

  async addIngredient(ingredient) {
    const res = await api.post(`/recipes/${AppState.activeRecipe.id}/ingredients/`, ingredient)
    AppState.activeRecipe = res.data
  }

  async editIngredient(ingredient) {
    const res = await api.put(`/recipes/${AppState.activeRecipe.id}/ingredients/${ingredient.id}`, ingredient)
    AppState.activeRecipe = res.data
  }

  async deleteIngredient(ingredient) {
    await api.delete(`/recipes/${AppState.activeRecipe.id}/ingredients/${ingredient.id}`)
    // @ts-ignore
    AppState.activeRecipe.ingredients = AppState.activeRecipe.ingredients.filter(i => i.id !== ingredient.id)
  }
}

export const recipeService = new RecipeService()
