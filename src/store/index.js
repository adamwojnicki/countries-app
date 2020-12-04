import { createStore } from "vuex";
import countries from "./modules/countries";
export default createStore({
  state: {
    theme: "light"
  },
  getters: {
    theme(state) {
      return state.theme;
    }
  },
  actions: {
    changeTheme({ commit }) {
      commit("setTheme");
    },
    initialTheme({ commit }) {
      commit("setThemeFromLocalStorage");
    }
  },
  mutations: {
    setTheme(state) {
      if (state.theme === "light") {
        state.theme = "dark";
      } else {
        state.theme = "light";
      }
      window.localStorage.setItem("theme", state.theme);
    },
    setThemeFromLocalStorage(state) {
      state.theme = window.localStorage.getItem("theme");
    }
  },
  modules: {
    countries
  }
});
