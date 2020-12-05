<template>
  <div class="country">
    <router-link :to="{ name: 'Home' }">Back</router-link>
    <figure>
      <img :src="this.sglCountry.flag" :alt="this.sglCountry.name" />
    </figure>
    <h1>{{ this.sglCountry.name }}</h1>
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

<style></style>
