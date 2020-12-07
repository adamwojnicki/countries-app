<template>
  <div class="country">
    <router-link class="button" :to="{ name: 'Home' }">Back</router-link>
    <div class="flex-wrap main">
      <figure class="country__flag">
        <img :src="this.sglCountry.flag" :alt="this.sglCountry.name" />
      </figure>
      <div class="country__info">
        <h2 class="country__name">{{ this.sglCountry.name }}</h2>
        <div class="flex-wrap">
          <ul class="info-list">
            <li class="info-list__item">
              <strong>Native Name: </strong>
              {{ this.sglCountry.nativeName }}
            </li>
            <li class="info-list__item">
              <strong>Popluation: </strong>
              {{ Number(this.sglCountry.population).toLocaleString("en-US") }}
            </li>
            <li class="info-list__item">
              <strong>Region: </strong>
              {{ this.sglCountry.region }}
            </li>
            <li class="info-list__item">
              <strong>Sub Region: </strong>
              {{ this.sglCountry.subregion }}
            </li>
            <li class="info-list__item">
              <strong>Capital: </strong>
              {{ this.sglCountry.capital }}
            </li>
          </ul>
          <ul class="info-list">
            <li class="info-list__item">
              <strong>Top Level Domain: </strong>
              {{ this.cdomains }}
            </li>
            <li class="info-list__item">
              <strong>Currencies: </strong>
              {{ this.ccurrencies }}
            </li>
            <li class="info-list__item">
              <strong>Languages: </strong>
              {{ this.clanguages }}
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
      sglCountry: {},
      domains: [],
      currencies: [],
      languages: []
    };
  },
  methods: {
    async fetchCountry() {
      const resp = await fetch(
        `https://restcountries.eu/rest/v2/name/${this.$route.params.name}`
      );
      const data = await resp.json();
      this.sglCountry = data[0];
      this.domains = data[0].topLevelDomain;
      this.currencies = data[0].currencies;
      this.languages = data[0].languages;
    }
  },
  created() {
    this.fetchCountry();
  },
  computed: {
    cdomains() {
      return this.domains.join(", ");
    },
    ccurrencies() {
      let arrCurrencies = [];
      this.currencies.map(curr => arrCurrencies.push(curr.name));
      return arrCurrencies.join(", ");
    },
    clanguages() {
      let arrLanguages = [];
      this.languages.map(lang => arrLanguages.push(lang.name));
      return arrLanguages.join(", ");
    }
  }
};
</script>
<style lang="scss">
.country {
  max-width: 1440px;
  width: 90%;
  margin: auto;
  .flex-wrap {
    display: flex;
    @media screen and (max-width: 650px) {
      &.main {
        flex-direction: column;
      }
    }
  }
  &__flag {
    width: 30%;
    @media screen and (max-width: 650px) {
      width: 100%;
      margin: auto;
    }
    img {
      width: 100%;
    }
  }
  &__info {
    width: 70%;
    padding: 0 24px;
    font-size: 1.6rem;
    @media screen and (max-width: 650px) {
      width: 100%;
      margin: auto;
      padding: 0;
    }
    @media screen and (max-width: 460px) {
      .flex-wrap {
        flex-direction: column;
      }
    }
    .info-list {
      list-style-type: none;
      margin-right: 32px;
      &__item {
        margin-bottom: 12px;
      }
    }
  }
  &__name {
    font-size: 4.8rem;
    margin-bottom: 32px;
  }
}
</style>
