<template>
  <div class="home">
    <SearchBar />
    <Loading v-if="this.loading" />
    <Error v-if="this.error" />
    <CountryList />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import CountryList from "@/components/CountryList";
import SearchBar from "@/components/SearchBar";
import Error from "@/components/Error";
import Loading from "@/components/Loading";
export default {
  name: "Home",
  components: { CountryList, SearchBar, Error, Loading },
  computed: mapGetters(["loading", "error"])
};
</script>

<style lang="scss"></style>
