<template>
  <div class="country-list">
    <CountryCard
      v-for="country in countries"
      :key="country"
      :country="country"
    />
  </div>
</template>

<script>
import CountryCard from "./CountryCard";
export default {
  name: "CountryList",
  props: ["countries"],
  components: {
    CountryCard
  }
};
</script>

<style>
.country-list {
  max-width: 1440px;
  width: 90%;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}
</style>
