import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    navColor: "transparent",
  },
  mutations: {},
  actions: {},
  modules: {},
  getters: {
    getNavColor: (store) => {
      return store.navColor;
    },
  },
});
