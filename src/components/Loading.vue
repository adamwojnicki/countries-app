<template>
  <div class="loading">
    <img src="../assets/Infinity.svg" alt="loading" />
  </div>
</template>

<script>
export default {
  name: "Loading"
};
</script>

<style lang="scss">
.loading {
  position: relative;
  height: 40vh;
  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
