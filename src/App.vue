<template>
  <div id="app">
    <CountryList />
  </div>
</template>

<script>
import CountryList from "./components/CountryList";
export default {
  name: "App",
  components: { CountryList },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
