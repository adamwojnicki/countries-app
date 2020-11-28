<template>
  <div id="app">
    <Header />
    <SearchBar />
    <CountryList :countries="this.countries" />
  </div>
</template>

<script>
import CountryList from "./components/CountryList";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
export default {
  name: "App",
  components: { Header, CountryList, SearchBar },
  data() {
    return {
      countries: null
    };
  },
  methods: {
    async fetchCountries() {
      const resp = await fetch("https://restcountries.eu/rest/v2/all");
      const data = await resp.json();
      this.countries = data;
    }
  },
  created() {
    this.fetchCountries();
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap");
:root {
  font-size: 10px;
  --sans-serif: "Poppins", Arial, Helvetica, sans-serif;
  --bg-color: #f4f4f4;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: var(--sans-serif);
  background: var(--bg-color);
}
</style>
