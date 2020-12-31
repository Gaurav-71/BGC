import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import firebase from "firebase";

/* Test config

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

*/

const firebaseConfig = {
  apiKey: "AIzaSyB73N8i7X5iLtMeW_Fqo0fDAhaqW6mUmRI",
  authDomain: "bengaluru-genomics-center.firebaseapp.com",
  databaseURL: "https://bengaluru-genomics-center-default-rtdb.firebaseio.com",
  projectId: "bengaluru-genomics-center",
  storageBucket: "bengaluru-genomics-center.appspot.com",
  messagingSenderId: "135831839806",
  appId: "1:135831839806:web:4890e5904a9f8725f15d6f",
  measurementId: "G-B99S59BP7Y",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const auth = firebase.auth();
export const db = firebase.firestore();
export const storage = firebase.storage();
export const storageRef = storage.ref();

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
