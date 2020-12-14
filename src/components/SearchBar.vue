<template>
  <div class="searchbar">
    <input
      class="searchbar__input"
      type="text"
      placeholder="Search for countries"
      @keyup="evt => this.changeSearchInput(evt.target.value)"
      :value="this.searchInput"
      aria-label="Search for countries"
    />
    <select
      @change="evt => this.changeSelectedRegion(evt.target.value)"
      :value="this.selectedRegion"
      class="searchbar__filter"
      aria-label="Select region"
    >
      <option value="All" aria-label="All">All</option>
      <option
        v-for="(region, idx) in this.allRegions"
        :key="idx"
        :value="region"
        :aria-label="region"
      >
        {{ region }}
      </option>
    </select>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "SearchBar",
  methods: mapActions(["changeSelectedRegion", "changeSearchInput"]),
  computed: mapGetters(["allRegions", "searchInput", "selectedRegion"])
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
