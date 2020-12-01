<template>
  <header class="header">
    <div class="header-container">
      <h1 class="header__brand">Country App</h1>
      <nav class="header__nav">
        <div class="header__mode-switch">ModeSwitch(TBD)</div>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header"
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
