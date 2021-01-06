<template>
  <router-link
    :to="{ name: 'Country', params: { name: this.border } }"
    class="button"
  >
    {{ this.border }}
  </router-link>
</template>

<script>
export default {
  name: "CountryBorderBtn",
  props: ["border"]
};
</script>

<style>
</style>