<template>
  <header class="header">
    <div class="header-container">
      <h1 class="header__brand">
        <router-link :to="{ name: 'Home' }">Country App</router-link>
      </h1>
      <nav class="header__nav">
        <ThemeToggle />
      </nav>
    </div>
  </header>
</template>

<script>
import ThemeToggle from "./ThemeToggle";
export default {
  name: "Header",
  components: { ThemeToggle }
};
</script>

<style lang="scss">
.header {
  padding: 15px;
  box-shadow: 5px 0 15px rgba(0, 0, 0, 0.15);
  &-container {
    max-width: 1440px;
    width: 90%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__brand {
    font-size: 2.4rem;
  }
  &__nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
