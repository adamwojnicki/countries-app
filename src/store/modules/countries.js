const state = {
  countries: [],
  regions: []
};
const getters = {
  allCountries: state => state.countries,
  allRegions: state => state.regions
};
const actions = {
  async fetchCountries({ commit }) {
    try {
      const resp = await fetch("https://restcountries.eu/rest/v2/all");
      const data = await resp.json();
      commit("setCountries", data);
      const regions = [...new Set(data.map(country => country.region))].filter(
        reg => reg !== ""
      );
      commit("setRegions", regions);
    } catch (error) {
      console.log(error);
      //   this.error = error.message;
    } finally {
      //   this.loading = false;
    }
  }
};
const mutations = {
  setCountries: (state, countries) => (state.countries = countries),
  setRegions: (state, regions) => (state.regions = regions)
};

export default {
  state,
  getters,
  actions,
  mutations
};
