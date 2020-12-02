<template>
  <div class="theme-toggle">
    <label class="toggle">
      <input
        type="checkbox"
        :checked="this.theme === 'dark' ? 'checked' : false"
        @change="this.changeTheme()"
      />
      <span class="toggler round"></span>
    </label>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "ThemeToggle",
  computed: mapGetters(["theme"]),
  methods: mapActions(["changeTheme"])
};
</script>

<style>
.toggle {
  position: relative;
  display: inline-block;
  width: 46px;
  height: 25px;
}
.toggle input {
  opacity: 0;
  width: 0;
  height: 0;
}
.toggler {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--color-dark);
  -webkit-transition: 0.5s;
  transition: 0.4s;
}
.toggler:before {
  position: absolute;
  content: "";
  height: 17px;
  width: 17px;
  left: 4px;
  bottom: 4px;
  background: var(--color-light);
  -webkit-transition: 0.5s;
  transition: 0.4s;
}
.toggle input:checked + .toggler {
  background: teal;
}
.input:focus + .toggler {
  box-shadow: 0 0 2px var(--color-light);
}
.toggle input:checked + .toggler:before {
  background: var(--color-light);
  -webkit-transform: translateX(21px);
  transform: translateX(21px);
}
.toggler.round {
  border-radius: 45px;
}
.toggler.round:before {
  border-radius: 50%;
}
</style>
