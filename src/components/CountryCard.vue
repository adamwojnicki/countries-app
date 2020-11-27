<template>
  <div class="country-card">
    <figure class="country-card__flag">
      <img src="https://restcountries.eu/data/ita.svg" alt="Italy" />
    </figure>
    <div class="country-card__info">
      <h3 class="country-card__headline">Italy</h3>
      <p class="country-card__detail">
        <strong>Population:</strong> 60,665,551
      </p>
      <p class="country-card__detail"><strong>Region:</strong> Europe</p>
      <p class="country-card__detail"><strong>Capital:</strong> Rome</p>
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
  max-width: 250px;
  border-radius: 6px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.15);
  margin: 21px;
  overflow: hidden;
  &__flag {
    width: 100%;
    img {
      width: 100%;
    }
  }
  &__info {
    padding: 18px;
  }
  &__headline {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }
  &__detail {
    font-size: 1.4rem;
    margin-top: 0.6rem;
  }
}
</style>