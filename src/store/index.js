import Vue from "vue";
import Vuex from "vuex";

import { auth } from "../main.js";
import { db } from "../main.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    navColor: "#093630",
    isLoggedIn: localStorage.getItem("isLoggedIn"),
    isLoggingIn: true,
    profile: null,
    messages: null,
  },
  mutations: {
    login: (state) => {
      localStorage.setItem("isLoggedIn", true);
      state.isLoggedIn = localStorage.getItem("isLoggedIn");
    },
    logout: (state) => {
      localStorage.setItem("isLoggedIn", false);
      state.isLoggedIn = localStorage.getItem("isLoggedIn");
    },
    setProfile: (state, profile) => {
      state.profile = profile;
    },
    setMessages: (state, messages) => {
      state.messages = messages;
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
    async downloadProfile({ state, commit }) {
      let resp = await db.collection("Profile").onSnapshot((snapshot) => {
        let profile = [];
        snapshot.forEach((doc) => {
          let data = { id: doc.id, data: doc.data() };
          profile.push(data);
        });
        commit("setProfile", profile[0]);
      });
      return resp;
    },
    async downloadMessages({ state, commit }) {
      let resp = await db.collection("Messages").onSnapshot((snapshot) => {
        let message = [];
        snapshot.forEach((doc) => {
          let data = doc.data();
          message.push(data);
        });
        commit("setMessages", message);
      });
      return resp;
    },
    async uploadMessage(context, payload) {
      await db.collection("Messages").add(payload);
    },
    async editProfile({ state }, user) {
      await db
        .collection("Profile")
        .doc(state.profile.id)
        .update(user);
    },
  },
  getters: {
    getNavColor: (store) => {
      return store.navColor;
    },
    getLogStatus: (store) => {
      return store.isLoggedIn;
    },
    getProfile: (store) => {
      return store.profile;
    },
    getMessages: (store) => {
      return store.messages;
    },
  },
});
