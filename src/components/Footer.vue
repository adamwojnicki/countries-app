<template>
  <footer class="footer">
    <p class="footer__content">2020 Adam Wojnicki</p>
  </footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style lang="scss">
.footer {
  padding: 15px;
  box-shadow: 5px 0 15px rgba(0, 0, 0, 0.15);
  position: absolute;
  bottom: 0;
  width: 100%;
  &__content {
    font-size: 1.8rem;
    text-align: center;
  }
}
</style>