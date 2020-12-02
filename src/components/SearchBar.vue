<template>
  <div class="searchbar">
    <input
      class="searchbar__input"
      type="text"
      placeholder="Search for countries"
      @keyup="evt => this.changeSearchInput(evt.target.value)"
    />

    <select
      @change="evt => this.changeSelectedRegion(evt.target.value)"
      class="searchbar__filter"
    >
      <option value="All">All</option>
      <option v-for="(region, idx) in allRegions" :key="idx" :value="region">
        {{ region }}
      </option>
    </select>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "SearchBar",
  methods: { ...mapActions(["changeSelectedRegion", "changeSearchInput"]) },
  computed: mapGetters(["allRegions"])
};
</script>

<style lang="scss">
.searchbar {
  width: 90%;
  max-width: 1440px;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  &__input,
  &__filter {
    font-size: 1.7rem;
    padding: 1rem 1.5rem;
    border: none;
    background: transparent;
    border-bottom: 2px solid #cacaca;
    outline: none;
  }
  &__input {
    margin-right: 12px;
  }
  &__filter {
    -moz-appearance: none;
    text-indent: 0.01px;
    text-overflow: "";
  }
}
</style>
