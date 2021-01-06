<template>
  <p v-for="border in borders" :key="border">{{ border }}</p>
</template>

<script>
export default {
  name: "CountryBorders",
  props: ["borders"]
};
</script>

<style>
</style>