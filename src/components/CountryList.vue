<template>
  <div class="country-list">
    <CountryCard />
    <CountryCard />
  </div>
</template>

<script>
import CountryCard from "./CountryCard";
export default {
  name: "CountryList",
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
