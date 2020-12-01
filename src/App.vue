<template>
  <div class="app" :class="theme === 'dark' ? 'dark' : 'light'">
    <Header />
    <SearchBar
      @on-search="this.handleSearch"
      @on-filter-change="this.handleFilter"
      :regions="this.regions"
    />
    <Loading v-if="this.loading" />
    <Error v-if="this.error" :message="this.error" />
    <CountryList
      v-if="this.loading === false"
      :countries="this.filteredCountries"
    />
  </div>
</template>

<script>
import CountryList from "./components/CountryList";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Error from "./components/Error";
import Loading from "./components/Loading";
export default {
  name: "App",
  components: { Header, CountryList, SearchBar, Error, Loading },
  data() {
    return {
      countries: [],
      regions: [],
      search: "",
      filter: "All",
      error: null,
      loading: true,
      theme: "dark"
    };
  },
  methods: {
    async fetchCountries() {
      try {
        const resp = await fetch("https://restcountries.eu/rest/v2/all");
        const data = await resp.json();
        this.countries = data;
        this.regions = [...new Set(data.map(country => country.region))];
      } catch (error) {
        this.error = error.message;
      } finally {
        this.loading = false;
      }
    },
    handleSearch(searchInput) {
      this.search = searchInput;
    },
    handleFilter(filterInput) {
      this.filter = filterInput;
    }
  },
  computed: {
    filteredCountries() {
      if (this.search === "" && this.filter === "All") {
        return this.countries;
      } else {
        return this.countries.filter(
          country =>
            country.name.toLowerCase().includes(this.search.toLowerCase()) &&
            (country.region === this.filter || this.filter === "All")
        );
      }
    }
  },
  created() {
    this.fetchCountries();
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap");
:root {
  font-size: 10px;
  --sans-serif: "Poppins", Arial, Helvetica, sans-serif;
  --color-light: #f4f4f4;
  --color-dark: #232323;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.app {
  font-family: var(--sans-serif);
  min-height: 100vh;
}
.app.light {
  background: var(--color-light);
  color: var(--color-dark);
}
.app.dark {
  background: var(--color-dark);
  color: var(--color-light);
  input[type="text"],
  select {
    color: var(--color-light);
    background: var(--color-dark);
  }
}
</style>
