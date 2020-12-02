const state = {
  countries: [],
  regions: [],
  searchInput: "",
  selectedRegion: "All",
  loading: false
};
const getters = {
  allCountries: state => state.countries,
  allRegions: state => state.regions,
  loading: state => state.loading,
  searchInput: state => state.searchInput,
  selectedRegion: state => state.selectedRegion
};
const actions = {
  async fetchCountries({ commit }) {
    try {
      const resp = await fetch("https://restcountries.eu/rest/v2/all");
      const data = await resp.json();
      const regions = [...new Set(data.map(country => country.region))].filter(
        reg => reg !== ""
      );
      commit("setCountries", data);
      commit("setRegions", regions);
    } catch (error) {
      console.log(error);
    } finally {
      commit("setLoading", false);
    }
  },
  changeSelectedRegion({ commit }, region) {
    commit("setSelectedRegion", region);
  }
};
const mutations = {
  setCountries: (state, countries) => (state.countries = countries),
  setRegions: (state, regions) => (state.regions = regions),
  setLoading: (state, ld) => (state.loading = ld),
  setSelectedRegion: (state, payload) => (state.selectedRegion = payload)
};

export default {
  state,
  getters,
  actions,
  mutations
};
