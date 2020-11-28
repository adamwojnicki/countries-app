<template>
  <div class="searchbar">
    <input
      class="searchbar__input"
      type="text"
      placeholder="Search for countries"
      v-model="searchInput"
    />
  </div>
</template>

<script>
export default {
  name: "SearchBar",
  data() {
    return {
      searchInput: ""
    };
  }
};
</script>

<style lang="scss">
.searchbar {
  width: 90%;
  max-width: 1440px;
  margin: auto;
  text-align: center;
  &__input {
    font-size: 1.7rem;
    padding: 1rem 1.5rem;
    border: none;
    margin: 2rem auto;
    background: transparent;
    border-bottom: 2px solid #cacaca;
  }
}
</style>