<template>
  <div class="country">
    <Loading v-if="this.loading" />
    <Error v-if="this.error" />
    <router-link class="button" :to="{ name: 'Home' }" v-if="!this.loading">
      Back
    </router-link>
    <div class="flex-wrap main" v-if="!this.loading">
      <figure class="country__flag">
        <img :src="this.sglCountry.flag" :alt="this.sglCountry.name" />
      </figure>
      <CountryInfo :sglCountry="this.sglCountry" />
    </div>
  </div>
</template>
<script>
import Loading from "@/components/Loading";
import Error from "@/components/Error";
import CountryInfo from "@/components/CountryInfo";
export default {
  name: "Country",
  components: { Loading, Error, CountryInfo },
  data() {
    return {
      sglCountry: {},
      loading: true,
      error: null
    };
  },
  methods: {
    async fetchCountry() {
      try {
        const resp = await fetch(
          `https://restcountries.eu/rest/v2/name/${this.$route.params.name}`
        );
        const data = await resp.json();
        this.sglCountry = data[0];
      } catch (err) {
        this.error = err;
      } finally {
        this.loading = false;
      }
    }
  },
  created() {
    this.fetchCountry();
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
}
</style>
