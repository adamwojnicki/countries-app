<template>
  <div class="country-card">
    <figure class="country-card__flag">
      <img src="https://restcountries.eu/data/ita.svg" alt="Italy" />
    </figure>
    <div class="country-card__info">
      <h3 class="country-card__headline">Italy</h3>
      <p class="coutry-card__detail"><strong>Population:</strong> 60,665,551</p>
      <p class="coutry-card__detail"><strong>Region:</strong> Europe</p>
      <p class="coutry-card__detail"><strong>Capital:</strong>Rome</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "CountryCard",
};
</script>

<style lang="scss">
.country-card {
  max-width: 200px;
  &__flag {
    width: 100%;
    img {
      width: 100%;
    }
  }
}
</style>