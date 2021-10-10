<template>
  <div class="country-info">
    <h2 class="country-info__name">{{ this.sglCountry.name.common }}</h2>
    <div class="flex-wrap">
      <ul class="info-list">
        <!-- <li class="info-list__item">
          <strong>Native Name: </strong>
          {{ this.sglCountry.name.nativeName[0] }}
        </li> -->
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
          {{ this.sglCountry.capital[0] }}
        </li>
      </ul>
      <ul class="info-list">
        <!-- <li class="info-list__item">
          <strong>Top Level Domain: </strong>
          {{ this.tld }}
        </li> -->
        <!-- <li class="info-list__item">
          <strong>Currencies: </strong>
          {{ this.currencies }}
        </li> -->
        <!-- <li class="info-list__item">
          <strong>Languages: </strong>
          {{ this.languages }}
        </li> -->
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "CountryInfo",
  props: ["sglCountry"],
  computed: {
    domains() {
      return this.sglCountry.topLevelDomain.join(", ");
    },
    currencies() {
      let arrCurrencies = [];
      this.sglCountry.currencies.map(curr => arrCurrencies.push(curr.name));
      return arrCurrencies.join(", ");
    },
    languages() {
      let arrLanguages = [];
      this.sglCountry.languages.map(lang => arrLanguages.push(lang.name));
      return arrLanguages.join(", ");
    }
  }
};
</script>

<style lang="scss">
.country-info {
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
  &__name {
    font-size: 4.8rem;
    margin-bottom: 32px;
  }
}
</style>