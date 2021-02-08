<template>
  <div class="recipe col-3 my-3">
    <router-link :to="{name: 'RecipeDetails'}">
      <div class="card shadow">
        <img class="card-img-top" :src="recipe.imgUrl" alt="">
        <div class="card-body">
          <h4 class="card-title">
            {{ recipe.title }}
          </h4>
          <p class="card-text">
            {{ recipe.creatorName }}
          </p>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  props: ['recipe']
}
</script>

<style lang="scss">
.recipe {
  cursor: pointer;
  transition: .25s ease;
  &:hover {
    transform: scale(1.02);
  }
}
a {
  color: black;
}
</style>
