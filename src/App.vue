<template>
  <div class="app" :class="this.theme === 'dark' ? 'dark' : 'light'">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default {
  name: "App",
  components: { Header, Footer },
  methods: mapActions(["initialTheme"]),
  computed: mapGetters(["theme"]),
  created() {
    this.initialTheme();
  }
};
</script>
<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap");
:root {
  font-size: 10px;
  --sans-serif: "Poppins", Arial, Helvetica, sans-serif;
  --color-light: #f4f4f4;
  --color-dark: #232323;
  @media screen and (max-width: 1050px) {
    font-size: 8px;
  }
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.app {
  font-family: var(--sans-serif);
  min-height: 100vh;
  transition: background 0.4s;
  position: relative;
  padding-bottom: 100px;
  a {
    text-decoration: none;
  }
  .button {
    font-size: 1.8rem;
    padding: 0.6rem 3.6rem;
    display: inline-block;
    margin: 24px 0;
    transition: filter 0.4s ease-in-out;
    border-radius: 6px;
  }
}
.app.light {
  background: var(--color-light);
  color: var(--color-dark);
  a {
    color: var(--color-dark);
  }
  .button {
    background: #cacaca;
    &:hover {
      filter: brightness(80%);
    }
  }
}
.app.dark {
  background: var(--color-dark);
  color: var(--color-light);
  input[type="text"],
  select {
    color: var(--color-light);
    background: var(--color-dark);
  }
  a {
    color: var(--color-light);
  }
  .button {
    background: #131313;
    &:hover {
      filter: brightness(120%);
    }
  }
}
</style>
