import Vue from "vue";
import Vuex from "vuex";

import { auth } from "../main.js";
import { db } from "../main.js";
import { storage } from "../main.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    navColor: "#093630",
    isLoggedIn: localStorage.getItem("isLoggedIn"),
    isLoggingIn: true,
    profile: null,
    messages: null,
    conferences: null,
    internships: null,
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
    setConferences: (state, conferences) => {
      state.conferences = conferences;
    },
    setInternships: (state, service) => {
      state.internships = service;
      console.log("saved locally", state.internships);
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
    async downloadProfile({ commit }) {
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
    async downloadMessages({ commit }) {
      let resp = await db
        .collection("Messages")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) => {
          let message = [];
          snapshot.forEach((doc) => {
            let data = doc.data();
            message.push(data);
          });
          commit("setMessages", message);
        });
      return resp;
    },
    async downloadConferences({ commit }) {
      let resp = await db
        .collection("Conferences")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) => {
          let conferences = [];
          snapshot.forEach((doc) => {
            let data = { id: doc.id, data: doc.data() };
            conferences.push(data);
          });
          commit("setConferences", conferences);
        });
      return resp;
    },
    async downloadService({ commit }, serviceType) {
      console.log("in service");
      let resp = await db
        .collection(serviceType)
        .orderBy("timestamp", "asc")
        .onSnapshot((snapshot) => {
          let services = [];
          snapshot.forEach((doc) => {
            let data = { id: doc.id, data: doc.data(), edit: false };
            services.push(data);
          });
          if (serviceType == "Internships") {
            console.log("downloaded");
            commit("setInternships", services);
          }
        });
      return resp;
    },
    async uploadMessage(context, message) {
      await db.collection("Messages").add(message);
    },
    async uploadConference(context, conference) {
      await db.collection("Conferences").add(conference);
    },
    async uploadService(context, post) {
      if (post.files.image != null && post.files.brochure != null) {
        console.log("Both present");
        let storageImageRef = storage.ref(
          post.details.serviceType + "/images/" + Date.now()
        );
        let uploadImageFile = storageImageRef.put(post.files.image);
        uploadImageFile.on(
          "state_changed",
          (snapshot) => {},
          (error) => {
            console.log("Couldn't Upload Post Due To Error : ", error);
          },
          async () => {
            await uploadImageFile.snapshot.ref
              .getDownloadURL()
              .then(async (downloadURL) => {
                post.details.image = downloadURL;
                console.log("received img link", downloadURL);
                let storageBrochureRef = storage.ref(
                  post.details.serviceType + "/brochures/" + Date.now()
                );
                let uploadBrochureFile = storageBrochureRef.put(
                  post.files.brochure
                );
                uploadBrochureFile.on(
                  "state_changed",
                  (snapshot) => {},
                  (error) => {
                    console.log("Couldn't Upload Post Due To Error : ", error);
                  },
                  async () => {
                    await uploadBrochureFile.snapshot.ref
                      .getDownloadURL()
                      .then(async (downloadURL) => {
                        post.details.brochure = downloadURL;
                        console.log("received brochure link", downloadURL);
                        post.details.timestamp = Date(Date.now());
                        await db
                          .collection(post.details.serviceType)
                          .add(post.details);
                        console.log("Published Post");
                      });
                  }
                );
              });
          }
        );
      } else if (post.files.image != null) {
        console.log("Only image");
        let storageImageRef = storage.ref(
          post.details.serviceType + "/images/" + Date.now()
        );
        let uploadImageFile = storageImageRef.put(post.files.image);
        uploadImageFile.on(
          "state_changed",
          (snapshot) => {},
          (error) => {
            console.log("Couldn't Upload Post Due To Error : ", error);
          },
          async () => {
            await uploadImageFile.snapshot.ref
              .getDownloadURL()
              .then(async (downloadURL) => {
                post.details.image = downloadURL;
                console.log("received image link", downloadURL);
                post.details.timestamp = Date(Date.now());
                await db.collection(post.details.serviceType).add(post.details);
                console.log("Published Post");
              });
          }
        );
      } else if (post.files.brochure != null) {
        console.log("Only brochure");
        let storageBrochureRef = storage.ref(
          post.details.serviceType + "/brochures/" + Date.now()
        );
        let uploadBrochureFile = storageBrochureRef.put(post.files.brochure);
        uploadBrochureFile.on(
          "state_changed",
          (snapshot) => {},
          (error) => {
            console.log("Couldn't Upload Post Due To Error : ", error);
          },
          async () => {
            await uploadBrochureFile.snapshot.ref
              .getDownloadURL()
              .then(async (downloadURL) => {
                post.details.brochure = downloadURL;
                console.log("received brochure link", downloadURL);
                post.details.timestamp = Date(Date.now());
                await db.collection(post.details.serviceType).add(post.details);
                console.log("Published Post");
              });
          }
        );
      } else {
        console.log("none");
        post.details.timestamp = Date(Date.now());
        console.log(Date.now());
        await db.collection(post.details.serviceType).add(post.details);
        console.log("Published Post");
      }
    },
    async editService(context, service) {
      if (service.files.image != null && service.files.brochure != null) {
        console.log("Both present");
        let storageImageRef = storage.ref(
          service.details.serviceType + "/images/" + service.files.image.name
        );
        let uploadImageFile = storageImageRef.put(service.files.image);
        uploadImageFile.on(
          "state_changed",
          (snapshot) => {},
          (error) => {
            console.log("Couldn't Upload service Due To Error : ", error);
          },
          async () => {
            await uploadImageFile.snapshot.ref
              .getDownloadURL()
              .then(async (downloadURL) => {
                service.details.image = downloadURL;
                console.log("received img link", downloadURL);
                let storageBrochureRef = storage.ref(
                  service.details.serviceType +
                    "/brochures/" +
                    service.files.brochure.name
                );
                let uploadBrochureFile = storageBrochureRef.put(
                  service.files.brochure
                );
                uploadBrochureFile.on(
                  "state_changed",
                  (snapshot) => {},
                  (error) => {
                    console.log(
                      "Couldn't Upload service Due To Error : ",
                      error
                    );
                  },
                  async () => {
                    await uploadBrochureFile.snapshot.ref
                      .getDownloadURL()
                      .then(async (downloadURL) => {
                        service.details.brochure = downloadURL;
                        console.log("received brochure link", downloadURL);
                        await db
                          .collection(service.details.serviceType)
                          .doc(service.id)
                          .update(service.details);
                        console.log("updated service");
                      });
                  }
                );
              });
          }
        );
      } else if (service.files.image != null) {
        console.log("Only image");
        let storageImageRef = storage.ref(
          service.details.serviceType + "/images/" + service.files.image.name
        );
        let uploadImageFile = storageImageRef.put(service.files.image);
        uploadImageFile.on(
          "state_changed",
          (snapshot) => {},
          (error) => {
            console.log("Couldn't Upload service Due To Error : ", error);
          },
          async () => {
            await uploadImageFile.snapshot.ref
              .getDownloadURL()
              .then(async (downloadURL) => {
                service.details.image = downloadURL;
                console.log("received image link", downloadURL);

                await db
                  .collection(service.details.serviceType)
                  .doc(service.id)
                  .update(service.details);
                console.log("updated service");
              });
          }
        );
      } else if (service.files.brochure != null) {
        console.log("Only brochure");
        let storageBrochureRef = storage.ref(
          service.details.serviceType + "/brochures/" + service.files.image.name
        );
        let uploadBrochureFile = storageBrochureRef.put(service.files.brochure);
        uploadBrochureFile.on(
          "state_changed",
          (snapshot) => {},
          (error) => {
            console.log("Couldn't Upload service Due To Error : ", error);
          },
          async () => {
            await uploadBrochureFile.snapshot.ref
              .getDownloadURL()
              .then(async (downloadURL) => {
                service.details.brochure = downloadURL;
                console.log("received brochure link", downloadURL);

                await db
                  .collection(service.details.serviceType)
                  .doc(service.id)
                  .update(service.details);
                console.log("updated service");
              });
          }
        );
      } else {
        console.log("none");
        await db
          .collection(service.details.serviceType)
          .doc(service.id)
          .update(service.details);
        console.log("updated service");
      }
    },
    async editConference({ state }, conference) {
      await db
        .collection("Conferences")
        .doc(conference.id)
        .update(conference.data);
    },
    async deleteConference({ state }, id) {
      await db
        .collection("Conferences")
        .doc(id)
        .delete();
    },
    async deleteService({ state }, service) {
      await db
        .collection(service.serviceType)
        .doc(service.id)
        .delete();
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
    getConferences: (store) => {
      return store.conferences;
    },
    getInternships: (store) => {
      return store.internships;
    },
  },
});
