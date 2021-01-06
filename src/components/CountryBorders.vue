<template>
  <!-- <p v-for="border in borders" :key="border">{{ border }}</p> -->
  <CountryBorderBtn
    v-for="border in this.countryNames"
    :key="border"
    :border="border"
  />
</template>

<script>
import CountryBorderBtn from "@/components/CountryBorderBtn";
import { mapState } from "vuex";
export default {
  name: "CountryBorders",
  props: ["borders"],
  components: { CountryBorderBtn },
  computed: {
    ...mapState(["countries"]),
    countryNames() {
      return this.borders.map(
        border =>
          this.countries.countries.find(
            country => country.alpha3Code === border
          ).name
      );
    }
  },
  created() {
    console.log(this.countryNames);
  }
};
</script>

<style>
</style>