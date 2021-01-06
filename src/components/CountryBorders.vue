<template>
  <div class="country-borders">
    <h3 class="country-borders__headline" v-if="this.borders.length > 0">
      Nearby countries:
    </h3>
    <CountryBorderBtn
      v-for="border in this.countryNames"
      :key="border"
      :border="border"
    />
  </div>
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
  }
};
</script>

<style lang="scss">
.country-borders {
  margin-top: 3.2rem;
  &__headline {
    font-size: 2.4rem;
  }
  .button {
    margin: initial;
    margin-right: 16px;
    margin-top: 16px;
  }
}
</style>