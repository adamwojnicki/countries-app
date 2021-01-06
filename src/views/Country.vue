<template>
  <div class="country">
    <Error v-if="this.error" />
    <router-link class="button" :to="{ name: 'Home' }" v-if="!this.loading">
      Back
    </router-link>
    <div class="flex-wrap main" v-if="!this.loading">
      <figure class="country__flag">
        <img :src="this.sglCountry.flag" :alt="this.sglCountry.name" />
      </figure>
      <CountryInfo :sglCountry="this.sglCountry" /><br />
      <CountryBorders :borders="this.sglCountry.borders" />
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import Error from "@/components/Error";
import CountryInfo from "@/components/CountryInfo";
import CountryBorders from "@/components/CountryBorders";
export default {
  name: "Country",
  components: { Error, CountryInfo, CountryBorders },
  data() {
    return {
      sglCountry: {},
      error: null
    };
  },
  computed: mapState(["countries"]),
  created() {
    this.sglCountry = this.countries.countries.find(
      country => country.name === this.$route.params.name
    );
  },
  updated() {
    this.sglCountry = this.countries.countries.find(
      country => country.name === this.$route.params.name
    );
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
    flex-wrap: wrap;
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
}
</style>
