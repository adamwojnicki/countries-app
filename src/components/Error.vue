<template>
  <div class="error">
    <div class="error__content">
      <h2 class="error__headline">Something wrong happened :(</h2>
      <p class="error__description">{{ this.error }}</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Error",
  computed: mapGetters(["error"])
};
</script>

<style lang="scss">
.error {
  position: relative;
  height: 40vh;
  &__content {
    position: absolute;
    top: 50%;
    left: 50%;
    text-align: center;
    transform: translate(-50%, -50%);
  }
  &__headline {
    font-size: 3rem;
    margin-bottom: 18px;
  }
  &__description {
    font-size: 1.7rem;
  }
}
</style>
