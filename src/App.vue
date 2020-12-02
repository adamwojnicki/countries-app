<template>
  <div class="app" :class="theme === 'dark' ? 'dark' : 'light'">
    <Header :theme="this.theme" />
    <SearchBar />
    <Loading v-if="this.loading" />
    <Error v-if="this.error" />
    <CountryList />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import CountryList from "./components/CountryList";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Error from "./components/Error";
import Loading from "./components/Loading";
export default {
  name: "App",
  components: { Header, CountryList, SearchBar, Error, Loading },
  methods: {
    handleThemeChange() {
      this.theme === "light" ? (this.theme = "dark") : (this.theme = "light");
    }
  },
  computed: {
    ...mapGetters(["loading", "error", "theme"])
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
  @media screen and (max-width: 1050px) {
    font-size: 8px;
  }
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.app {
  font-family: var(--sans-serif);
  min-height: 100vh;
  transition: background 0.4s;
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
