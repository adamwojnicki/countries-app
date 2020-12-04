<template>
  <div class="country">test</div>
</template>

<script>
export default {
  name: "Country",
  data() {
    return {
      country: null
    };
  },
  methods: {
    async fetchCountry() {
      const resp = await fetch(
        `https://restcountries.eu/rest/v2/name/${this.$route.params.name}`
      );
      const data = await resp.json();
      this.country = data[0];
    }
  },
  created() {
    this.fetchCountry();
  }
};
</script>

<style>
</style>