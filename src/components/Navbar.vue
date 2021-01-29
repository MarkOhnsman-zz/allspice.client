<template>
  <nav class="navbar navbar-expand navbar-light bg-primary sticky-top shadow">
    <div class="nav navbar-nav">
      <router-link class="nav-item nav-link app-font text-light" :to="{name: 'Home'}">
        <h1>
          <i class="fas fa-utensils"></i>
          AllSpice<span class="sr-only">(current)</span>
        </h1>
      </router-link>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
h1 {
  font-weight: 100;
}
</style>
