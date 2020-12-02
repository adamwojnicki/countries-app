<template>
  <div class="country-list">
    <CountryCard
      v-for="country in this.filteredCountries"
      :key="country"
      :country="country"
    />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import CountryCard from "./CountryCard";
export default {
  name: "CountryList",
  methods: { ...mapActions(["fetchCountries"]) },
  components: {
    CountryCard
  },
  computed: {
    ...mapGetters(["allCountries", "selectedRegion", "searchInput"]),
    filteredCountries() {
      if (this.searchInput === "" && this.selectedRegion === "All") {
        return this.allCountries;
      } else {
        return this.allCountries.filter(
          country =>
            country.name
              .toLowerCase()
              .includes(this.searchInput.toLowerCase()) &&
            (country.region === this.selectedRegion ||
              this.selectedRegion === "All")
        );
      }
    }
  },
  created() {
    this.fetchCountries();
  }
};
</script>

<style lang="scss">
.country-list {
  max-width: 1440px;
  width: 90%;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  @media screen and (max-width: 850px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 490px) {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
