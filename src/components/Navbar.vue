<template>
  <nav class="navbar navbar-expand navbar-light bg-primary">
    <div class="nav navbar-nav">
      <router-link class="nav-item nav-link active d-flex align-items-center title-font" :to="{name: 'Home'}">
        <h4>
          <img class="mb-1 mr-1" src="../assets/img/soup.svg"> AllSpice <span class="sr-only">(current)</span>
        </h4>
      </router-link>
    </div>
  </nav>
</template>

<script>
export default {

}
</script>

<style scoped>
  img {
    height: 1em;
  }
</style>
