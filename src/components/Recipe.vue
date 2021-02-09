<template>
  <div class="recipe col-3 my-3">
    <router-link :to="{name: 'RecipeDetails', params: {id: recipe.id}}">
      <div class="card shadow bg-secondary">
        <img class="card-img-top" :src="recipe.imgUrl" alt="">
        <div class="card-body">
          <h4 class="card-title">
            {{ recipe.title }}
          </h4>
          <p class="card-text text-primary">
            {{ recipe.creatorName }}
          </p>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    recipe: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss">
.recipe {
  cursor: pointer;
  transition: .25s ease;
  &:hover {
    transform: translateY(-4px);
  }
}
a {
  color: black;
}

.card-title {
  text-shadow: 1px 1px black;
}
</style>
