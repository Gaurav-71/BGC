import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyA44-LFIVTvJ2NVSvJgUlyCTdWFrEJfMzU",
  authDomain: "bgc-test-601b9.firebaseapp.com",
  databaseURL: "https://bgc-test-601b9.firebaseio.com",
  projectId: "bgc-test-601b9",
  storageBucket: "bgc-test-601b9.appspot.com",
  messagingSenderId: "963116123816",
  appId: "1:963116123816:web:7ef036e2a7099942dae49d",
  measurementId: "G-9GN7F10SDH",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const auth = firebase.auth();
export const db = firebase.firestore();

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
