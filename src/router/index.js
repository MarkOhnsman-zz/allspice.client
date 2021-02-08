import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../pages/HomePage.vue'
import RecipeDetails from '../pages/RecipeDetailsPage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }, {
    path: '/recipes/:id',
    name: 'RecipeDetails',
    component: RecipeDetails
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
