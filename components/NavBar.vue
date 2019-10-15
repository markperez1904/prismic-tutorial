<template>
  <div class="container">
    <section class="navbar">
      <nav class="container">
        <div class="navbar-brand">
          <n-link class="navbar-item" to="/">
            <img class="logo" src="~assets/images/nuxt_prismic.png" alt="Nuxt and Prismic" />
          </n-link>

          <!-- Navbar Burger -->
          <span class="navbar-burger" @click="showNav = !showNav" data-target="navMenu">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>

        <!-- Navbar Menu -->
        <div id="navMenu" class="navbar-menu" :class="{ 'is-active': showNav }">
          <div @click="showNav = !showNav" class="navbar-end">
            <n-link class="navbar-item" to="/blog/">Blog</n-link>
          </div>
        </div>
      </nav>
    </section>

    <hr />
  </div>
</template>


<script>
export default {
  data() {
    return {
      showNav: false
    }
  }
}
</script>

<style scoped>
a:hover,
a:active,
a:focus {
  color: #00c58e;
  background-color: transparent;
}

.logo {
  max-height: 3rem;
}

.navbar {
  padding: 0 1rem;
  padding-top: 1rem;
  height: 4rem;
}

.navbar-item {
  font-size: 18px;
  padding-right: 2rem;
}

.navbar-brand {
  font-size: 22px;
}
</style>
