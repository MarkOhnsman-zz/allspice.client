<template>
  <div class="recipe col-3 my-3">
    <div class="card shadow">
      <!-- ANCHOR Add Props -->
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
</style>
