<template>
  <div class="country">
    <router-link class="button" :to="{ name: 'Home' }">Back</router-link>
    <div class="flex-wrap">
      <figure class="country__flag">
        <img :src="this.sglCountry.flag" :alt="this.sglCountry.name" />
      </figure>
      <div class="country__info">
        <h2 class="country__name">{{ this.sglCountry.name }}</h2>
        <div class="flex-wrap">
          <ul class="info-list">
            <li class="info-list__item">
              <strong>Native Name: </strong>{{ this.sglCountry.nativeName }}
            </li>
            <li class="info-list__item">
              <strong>Poplation </strong>{{ this.sglCountry.population }}
            </li>
            <li class="info-list__item">
              <strong>Region: </strong>{{ this.sglCountry.region }}
            </li>
            <li class="info-list__item">
              <strong>Sub Region: </strong>{{ this.sglCountry.subregion }}
            </li>
            <li class="info-list__item">
              <strong>Capital: </strong>{{ this.sglCountry.capital }}
            </li>
          </ul>
          <ul class="info-list">
            <li class="info-list__item">
              <strong>Top Level Domain: </strong>
            </li>
            <li class="info-list__item">
              <strong>Currencies: </strong>
            </li>
            <li class="info-list__item">
              <strong>Languages: </strong>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Country",
  data() {
    return {
      sglCountry: {}
    };
  },
  methods: {
    async fetchCountry() {
      const resp = await fetch(
        `https://restcountries.eu/rest/v2/name/${this.$route.params.name}`
      );
      const data = await resp.json();
      this.sglCountry = data[0];
    }
  },
  created() {
    this.fetchCountry();
  }
};
</script>
<style lang="scss">
.button {
  font-size: 1.8rem;
  padding: 0.6rem 3.6rem;
  display: inline-block;
  margin: 24px 0;
  background: #131313;
  transition: filter 0.4s ease-in-out;
  border-radius: 6px;
  &:hover {
    filter: brightness(120%);
  }
}
.country {
  max-width: 1440px;
  width: 90%;
  margin: auto;
  .flex-wrap {
    display: flex;
  }
  &__flag {
    width: 30%;
    img {
      width: 100%;
    }
  }
  &__info {
    width: 70%;
    padding: 0 24px;
  }
  &__name {
    font-size: 4.8rem;
  }
}
</style>
