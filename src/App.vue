<template>
  <div id="app">
    <Header />
    <CountryList :countries="this.countries" />
  </div>
</template>

<script>
import CountryList from "./components/CountryList";
import Header from "./components/Header";
export default {
  name: "App",
  components: { Header, CountryList },
  data() {
    return {
      countries: ["Italy", "Greece", "aaa"]
    };
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
