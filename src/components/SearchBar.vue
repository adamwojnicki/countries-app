<template>
  <div class="searchbar">
    <input
      class="searchbar__input"
      type="text"
      placeholder="Search for countries"
      v-model="this.searchInput"
      @keyup="this.onSearch"
    />

    <select
      @change="onFilterChange"
      v-model="this.filter"
      class="searchbar__filter"
    >
      <option value="All">All</option>
      <option
        v-for="(region, idx) in clearedRegions"
        :key="idx"
        :value="region"
      >
        {{ region }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: "SearchBar",
  data() {
    return {
      searchInput: "",
      filter: "All"
    };
  },
  props: ["regions"],
  methods: {
    onSearch() {
      this.$emit("on-search", this.searchInput);
    },
    onFilterChange() {
      this.$emit("on-filter-change", this.filter);
    }
  },
  computed: {
    clearedRegions() {
      return this.regions.filter(reg => reg !== "");
    }
  }
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
}
</style>
