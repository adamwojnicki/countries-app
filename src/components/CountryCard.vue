<template>
  <router-link :to="{ name: 'Country', params: { name: this.country.name } }">
    <div class="country-card">
      <figure class="country-card__flag">
        <img :src="this.country.flag" :alt="this.country.name + ' flag'" />
      </figure>
      <div class="country-card__info">
        <h3 class="country-card__headline">{{ this.country.name }}</h3>
        <p class="country-card__detail" v-if="this.country.population">
          <strong>Population:</strong>
          {{ Number(this.country.population).toLocaleString("en-US") }}
        </p>
        <p class="country-card__detail" v-if="this.country.region">
          <strong>Region:</strong> {{ this.country.region }}
        </p>
        <p class="country-card__detail" v-if="this.country.capital">
          <strong>Capital:</strong> {{ this.country.capital }}
        </p>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "CountryCard",
  props: ["country"]
};
</script>

<style lang="scss">
.country-card {
  border-radius: 6px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.125);
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
