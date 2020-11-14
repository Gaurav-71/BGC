import Vue from "vue";
import Vuex from "vuex";

import { auth } from "../main.js";
import { db } from "../main.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    navColor: "#093630",
    isLoggedIn: false,
    isLoggingIn: true,
  },
  mutations: {
    login: (state) => {
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.isLoggedIn = false;
    },
  },
  actions: {
    async login({ commit }, payload) {
      this.state.isLoggingIn = false;
      try {
        let response = await auth.signInWithEmailAndPassword(
          payload.email,
          payload.password
        );
        commit("login", response.user);
      } catch (err) {
        this.state.isLoggingIn = true;
        throw err;
      }
    },
    async logout(context) {
      await auth.signOut();
      this.state.isLoggingIn = true;
      context.commit("logout");
    },
  },
  modules: {},
  getters: {
    getNavColor: (store) => {
      return store.navColor;
    },
    getLogStatus: (store) => {
      return store.isLoggedIn;
    },
  },
});
