import Vue from "vue";
import Vuex from "vuex";

import { auth } from "../main.js";
import { db } from "../main.js";
import { storage } from "../main.js";
import { storageRef } from "../main.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    navColor: "#093630",
    isLoggedIn: "false",
    isLoggingIn: true,
    isServiceEmpty: true,
    loadedFooter: false,
    loadedService: false,
    authUser: "",
    profile: null,
    messages: null,
    announcements: null,
    conferences: null,
    internships: null,
    trainings: null,
    workshops: null,
    resources: null,
    hospitals: null,
    hospitalsData: null,
    reports: null,

    userReportUrl: "",

    succesfulUploads: [],
    failedUploads: [],
    repeatUploads: [],

    deletedFiles: [],
  },
  mutations: {
    login: (state, user) => {
      state.authUser = user;
      localStorage.setItem("isLoggedIn", true);
      state.isLoggedIn = localStorage.getItem("isLoggedIn");
    },
    logout: (state) => {
      localStorage.setItem("isLoggedIn", false);
      state.isLoggedIn = localStorage.getItem("isLoggedIn");
    },
    setFooterStatus: (state, status) => {
      state.loadedFooter = status;
    },
    setServiceStatus: (state, status) => {
      state.loadedService = status;
    },
    setProfile: (state, profile) => {
      state.profile = profile;
      state.loadedFooter = true;
    },
    setMessages: (state, messages) => {
      state.messages = messages;
    },
    setConferences: (state, conferences) => {
      state.conferences = conferences;
    },
    setAnnouncements: (state, announcements) => {
      state.announcements = announcements;
      state.loadedService = true;
      if (announcements.length != 0) {
        state.isServiceEmpty = false;
      } else {
        state.isServiceEmpty = true;
      }
    },
    setInternships: (state, service) => {
      state.internships = service;
      state.loadedService = true;
      if (service.length != 0) {
        state.isServiceEmpty = false;
      } else {
        state.isServiceEmpty = true;
      }
    },
    setTrainings: (state, service) => {
      state.trainings = service;
      state.loadedService = true;
      if (service.length != 0) {
        state.isServiceEmpty = false;
      } else {
        state.isServiceEmpty = true;
      }
    },
    setWorkshops: (state, service) => {
      state.workshops = service;
      state.loadedService = true;
      if (service.length != 0) {
        state.isServiceEmpty = false;
      } else {
        state.isServiceEmpty = true;
      }
    },
    setResources: (state, service) => {
      state.resources = service;
      state.loadedService = true;
      if (service.length != 0) {
        state.isServiceEmpty = false;
      } else {
        state.isServiceEmpty = true;
      }
    },
    setYear: (state) => {
      state.date = new Date();
      state.year = date.getFullYear();
    },
    setNavColor: (state, color) => {
      if (color == 1) {
        state.navColor = "#093630";
      } else {
        state.navColor = "rgba(0, 0, 0, 0.2)";
      }
    },
    setHospitals: (state, hospitals) => {
      state.hospitals = hospitals;
      state.loadedService = true;
      if (hospitals.length != 0) {
        state.isServiceEmpty = false;
      } else {
        state.isServiceEmpty = true;
      }
    },
    setHospitalsData: (state, hospitals) => {
      state.hospitalsData = hospitals;
      state.loadedService = true;
      if (hospitals.length != 0) {
        state.isServiceEmpty = false;
      } else {
        state.isServiceEmpty = true;
      }
    },
    setReports: (state, reports) => {
      state.reports = null;
      state.reports = reports;
      state.loadedService = true;
      if (reports.length != 0) {
        state.isServiceEmpty = false;
      } else {
        state.isServiceEmpty = true;
      }
    },
    succesfulReportUpload: (state, report) => {
      state.succesfulUploads.push(report);
    },
    failedReportUpload: (state, report) => {
      state.failedUploads.push(report);
    },
    repeatReportUpload: (state, report) => {
      state.repeatUploads.push(report);
    },
    resetSuccess: (state) => {
      state.succesfulUploads = [];
    },
    resetFailure: (state) => {
      state.failedUploads = [];
    },
    resetRepeat: (state) => {
      state.repeatUploads = [];
    },
    setDeletedFiles: (state, filepath) => {
      state.deletedFiles.push(filepath);
    },
    setUserReportUrl: (state, url) => {
      state.userReportUrl = url;
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
        commit("login", payload.user);
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
    async resetPassword({ commit }, email) {
      var actionCodeSettings = {
        url: "https://www.bgc-genomics.com/covid-19/testing/login",
        handleCodeInApp: false,
      };
      await auth.sendPasswordResetEmail(email, actionCodeSettings);
    },
    async createHospitalCollection({ commit }, hospital) {
      try {
        await auth.createUserWithEmailAndPassword(
          hospital.email.trim(),
          hospital.password
        );
        let user = auth.currentUser;
        let details = { name: hospital.name.trim() };
        await db
          .collection("Hospitals")
          .doc(user.uid)
          .set(details);
        await auth.sendPasswordResetEmail(hospital.email);
      } catch (err) {
        throw err;
      }
    },
    async downloadProfile({ commit }) {
      commit("setFooterStatus", false);
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
    async downloadAnnouncements({ commit }) {
      commit("setServiceStatus", false);
      let resp = await db
        .collection("Announcements")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) => {
          let announcements = [];
          snapshot.forEach((doc) => {
            let data = { id: doc.id, data: doc.data(), edit: false };
            announcements.push(data);
          });
          commit("setAnnouncements", announcements);
        });
      return resp;
    },
    async downloadResources({ commit }) {
      commit("setServiceStatus", false);
      let resp = await db
        .collection("Resources")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) => {
          let resources = [];
          snapshot.forEach((doc) => {
            let data = { id: doc.id, data: doc.data(), edit: false };
            resources.push(data);
          });
          commit("setResources", resources);
        });
      return resp;
    },
    async downloadService({ commit }, serviceType) {
      commit("setServiceStatus", false);
      let resp = await db
        .collection(serviceType)
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) => {
          let services = [];
          snapshot.forEach((doc) => {
            let data = { id: doc.id, data: doc.data(), edit: false };
            services.push(data);
          });
          if (serviceType == "Internships") {
            commit("setInternships", services);
          } else if (serviceType == "Trainings") {
            commit("setTrainings", services);
          } else if (serviceType == "Workshops") {
            commit("setWorkshops", services);
          } else {
            console.log("Not a service");
          }
        });
      return resp;
    },

    async downloadHospitals({ commit }) {
      let resp = await db
        .collection("Hospitals")
        .orderBy("name", "asc")
        .onSnapshot((snapshot) => {
          let hospitals = [];
          let hospitalsData = [];
          snapshot.forEach((doc) => {
            let data = {
              id: doc.id,
              data: doc.data(),
              dialog: false,
            };
            let data1 = doc.data();
            data1.uid = doc.id;
            data1.dialog = false;

            hospitals.push(data);
            hospitalsData.push(data1);
          });
          commit("setHospitals", hospitals);
          commit("setHospitalsData", hospitalsData);
        });
      return resp;
    },
    async downloadReports({ commit }, uid) {
      await db
        .collection("Hospitals")
        .doc(uid)
        .collection("Reports")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) => {
          let reports = [];
          let counter = 0;
          snapshot.forEach((doc) => {
            let data = doc.data();
            counter++;
            data.tid = counter;
            data.docId = doc.id;
            let time = new String(new Date(doc.data().timestamp));
            data.time = time.substring(0, 25);
            let split = doc.data().srfid.split("-");
            data.srfid = split[0];
            data.name = split[1];
            reports.push(data);
          });
          commit("setReports", reports);
        });
    },
    async downloadUserReport({ commit }, srfid) {
      if (srfid != "") {
        db.collection("Reports")
          .where("srfid", "==", srfid)
          .get()
          .then((querySnapshot) => {
            if (querySnapshot.empty) {
              // console.log("no file");
              commit("setUserReportUrl", "no file");
            } else {
              querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                //console.log(doc.id, " => ", doc.data());
                commit("setUserReportUrl", doc.data().url);
              });
            }
          });
      }
    },

    async uploadMessage(context, message) {
      await db.collection("Messages").add(message);
    },
    async uploadConference(context, conference) {
      await db.collection("Conferences").add(conference);
    },
    async uploadAnnouncement(context, announcement) {
      await db.collection("Announcements").add(announcement);
    },
    async uploadResource(context, resource) {
      let uploadPostDetails = await db.collection("Resources").add(resource);
      let announcementInfo = {
        title: "A new resource has been shared",
        description: resource.title,
        serviceType: resource.serviceType,
        serviceId: uploadPostDetails.id,
        timestamp: resource.timestamp,
      };
      await db.collection("Announcements").add(announcementInfo);
    },
    async uploadService(context, post) {
      var uploadFileName = Date.now();
      post.details.timestamp = Date(Date.now());

      post.details.fileName = uploadFileName;
      if (post.files.image != null && post.files.brochure != null) {
        let storageImageRef = storage.ref(
          post.details.serviceType + "/images/" + uploadFileName
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

                let storageBrochureRef = storage.ref(
                  post.details.serviceType + "/brochures/" + uploadFileName
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

                        let uploadPostDetails = await db
                          .collection(post.details.serviceType)
                          .add(post.details);

                        let announcementInfo = {
                          title:
                            post.details.serviceType == "Internships"
                              ? "New internship position is available"
                              : post.details.serviceType == "Trainings"
                              ? "New training program announced"
                              : post.details.serviceType == "Workshops"
                              ? "New workshop announced"
                              : "Announcement",
                          description: post.details.title,
                          serviceType: post.details.serviceType,
                          serviceId: uploadPostDetails.id,
                          timestamp: post.details.timestamp,
                        };
                        await db
                          .collection("Announcements")
                          .add(announcementInfo);
                      });
                  }
                );
              });
          }
        );
      } else if (post.files.image != null) {
        let storageImageRef = storage.ref(
          post.details.serviceType + "/images/" + uploadFileName
        );
        let uploadImageFile = storageImageRef.put(post.files.image);
        uploadImageFile.on(
          "state_changed",
          (snapshot) => {},
          (error) => {
            console.log("Couldn't Upload Post Due To Error : ", error);
          },
          async () => {
            let downloadURL = await uploadImageFile.snapshot.ref.getDownloadURL();
            post.details.image = downloadURL;

            let uploadPostDetails = await db
              .collection(post.details.serviceType)
              .add(post.details);

            let announcementInfo = {
              title:
                post.details.serviceType == "Internships"
                  ? "New internship position is available"
                  : post.details.serviceType == "Trainings"
                  ? "New training program announced"
                  : post.details.serviceType == "Workshops"
                  ? "New workshop announced"
                  : "Announcement",
              description: post.details.title,
              serviceType: post.details.serviceType,
              serviceId: uploadPostDetails.id,
              timestamp: post.details.timestamp,
            };
            await db.collection("Announcements").add(announcementInfo);
          }
        );
      } else if (post.files.brochure != null) {
        let storageBrochureRef = storage.ref(
          post.details.serviceType + "/brochures/" + uploadFileName
        );
        let uploadBrochureFile = storageBrochureRef.put(post.files.brochure);
        uploadBrochureFile.on(
          "state_changed",
          (snapshot) => {},
          (error) => {
            console.log("Couldn't Upload Post Due To Error : ", error);
          },
          async () => {
            let downloadURL = await uploadBrochureFile.snapshot.ref.getDownloadURL();
            post.details.brochure = downloadURL;

            let uploadPostDetails = await db
              .collection(post.details.serviceType)
              .add(post.details);

            let announcementInfo = {
              title:
                post.details.serviceType == "Internships"
                  ? "New internship position is available"
                  : post.details.serviceType == "Trainings"
                  ? "New training program announced"
                  : post.details.serviceType == "Workshops"
                  ? "New workshop announced"
                  : "Announcement",
              description: post.details.title,
              serviceType: post.details.serviceType,
              serviceId: uploadPostDetails.id,
              timestamp: post.details.timestamp,
            };
            await db.collection("Announcements").add(announcementInfo);
          }
        );
      } else {
        let uploadPostDetails = await db
          .collection(post.details.serviceType)
          .add(post.details);

        let announcementInfo = {
          title:
            post.details.serviceType == "Internships"
              ? "New internship position is available"
              : post.details.serviceType == "Trainings"
              ? "New training program announced"
              : post.details.serviceType == "Workshops"
              ? "New workshop announced"
              : "Announcement",
          description: post.details.title,
          serviceType: post.details.serviceType,
          serviceId: uploadPostDetails.id,
          timestamp: post.details.timestamp,
        };
        await db.collection("Announcements").add(announcementInfo);
      }
    },
    async uploadReport(context, report) {
      if (report.file != null) {
        let split = report.file.name.split(".");
        db.collection("Hospitals")
          .doc(report.id)
          .collection("Reports")
          .where("srfid", "==", split[0])
          .get()
          .then((querySnapshot) => {
            if (querySnapshot.empty) {
              // console.log("new file");
              let reportRef = storage.ref(
                "Reports/" + report.hospital + "/" + report.file.name
              );
              let uploadFile = reportRef.put(report.file);
              uploadFile.on(
                "state_changed",
                (snapshot) => {},
                (error) => {
                  this.commit("failedReportUpload", report.file.name);
                  console.log("Couldn't Upload Post Due To Error : ", error);
                },
                async () => {
                  let docUrl = await uploadFile.snapshot.ref.getDownloadURL();
                  let details = {
                    timestamp: Date.now(),
                    path: "Reports/" + report.hospital + "/" + report.file.name,
                    url: docUrl,
                    srfid: split[0],
                  };
                  await db
                    .collection("Hospitals")
                    .doc(report.id)
                    .collection("Reports")
                    .add(details);
                  let idSplit = split[0].split("-");
                  let urlDetails = {
                    srfid: idSplit[0],
                    url: docUrl,
                  };
                  console.log("urlDeets : ", urlDetails);
                  await db.collection("Reports").add(urlDetails);
                  this.commit("succesfulReportUpload", report.file.name);
                  //console.log("Uploaded : ", report.file.name);
                }
              );
            } else {
              //console.log("already uploaded");
              this.commit(
                "repeatReportUpload",
                report.file.name + " already uploaded"
              );
            }
          });
      }
    },

    async editService(context, service) {
      if (service.files.image != null && service.files.brochure != null) {
        let storageImageRef = storage.ref(
          service.details.serviceType + "/images/" + service.details.fileName
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

                let storageBrochureRef = storage.ref(
                  service.details.serviceType +
                    "/brochures/" +
                    service.details.fileName
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

                        await db
                          .collection(service.details.serviceType)
                          .doc(service.id)
                          .update(service.details);

                        let announcement = await db
                          .collection("Announcements")
                          .where("serviceId", "==", service.id)
                          .get();
                        await db
                          .collection("Announcements")
                          .doc(announcement.docs[0].id)
                          .update({ description: service.details.title });
                      });
                  }
                );
              });
          }
        );
      } else if (service.files.image != null) {
        let storageImageRef = storage.ref(
          service.details.serviceType + "/images/" + service.details.fileName
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

                await db
                  .collection(service.details.serviceType)
                  .doc(service.id)
                  .update(service.details);

                let announcement = await db
                  .collection("Announcements")
                  .where("serviceId", "==", service.id)
                  .get();
                await db
                  .collection("Announcements")
                  .doc(announcement.docs[0].id)
                  .update({ description: service.details.title });
              });
          }
        );
      } else if (service.files.brochure != null) {
        let storageBrochureRef = storage.ref(
          service.details.serviceType + "/brochures/" + service.details.fileName
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

                await db
                  .collection(service.details.serviceType)
                  .doc(service.id)
                  .update(service.details);

                let announcement = await db
                  .collection("Announcements")
                  .where("serviceId", "==", service.id)
                  .get();
                await db
                  .collection("Announcements")
                  .doc(announcement.docs[0].id)
                  .update({ description: service.details.title });
              });
          }
        );
      } else {
        await db
          .collection(service.details.serviceType)
          .doc(service.id)
          .update(service.details);

        let announcement = await db
          .collection("Announcements")
          .where("serviceId", "==", service.id)
          .get();
        await db
          .collection("Announcements")
          .doc(announcement.docs[0].id)
          .update({ description: service.details.title });
      }
    },
    async editAnnouncement({ state }, announcement) {
      await db
        .collection("Announcements")
        .doc(announcement.id)
        .update(announcement.data);
    },
    async editResource({ state }, resource) {
      await db
        .collection("Resources")
        .doc(resource.id)
        .update(resource.data);
      let announcement = await db
        .collection("Announcements")
        .where("serviceId", "==", resource.id)
        .get();
      await db
        .collection("Announcements")
        .doc(announcement.docs[0].id)
        .update({ description: resource.data.title });
    },
    async editProfile({ state }, profile) {
      await db
        .collection("Profile")
        .doc("LRNGxXE8kN70tMLgD4Eq")
        .update(profile);
    },
    async editConference({ state }, conference) {
      await db
        .collection("Conferences")
        .doc(conference.id)
        .update(conference.data);
    },
    async deleteAnnouncement({ state }, id) {
      await db
        .collection("Announcements")
        .doc(id)
        .delete();
    },
    async deleteResource({ state }, resource) {
      let announcement = await db
        .collection("Announcements")
        .where("serviceId", "==", resource.id)
        .get();
      await db
        .collection("Announcements")
        .doc(announcement.docs[0].id)
        .delete();
      await db
        .collection("Resources")
        .doc(resource.id)
        .delete();
    },
    async deleteConference({ state }, id) {
      await db
        .collection("Conferences")
        .doc(id)
        .delete();
    },
    async deleteService({ state }, service) {
      let announcement = await db
        .collection("Announcements")
        .where("serviceId", "==", service.id)
        .get();
      await db
        .collection("Announcements")
        .doc(announcement.docs[0].id)
        .delete();
      await db
        .collection(service.serviceType)
        .doc(service.id)
        .delete();
      if (service.data.image != null) {
        let deleteImgRef = storageRef.child(
          service.serviceType + "/images/" + service.data.fileName
        );
        await deleteImgRef.delete();
      }
      if (service.data.brochure != null) {
        let deleteBrochureRef = storageRef.child(
          service.serviceType + "/brochures/" + service.data.fileName
        );
        await deleteBrochureRef.delete();
      }
    },
    async deleteFile({ state }, path) {
      //console.log("del file", path);
      let deleteRef = storageRef.child(path);
      await deleteRef.delete();
    },
    async deleteReport({ state }, report) {
      this.dispatch("deleteFile", report.path);
      //console.log("del rep");
      await db
        .collection("Hospitals")
        .doc(report.collectionDocId)
        .collection("Reports")
        .doc(report.subCollectionDocId)
        .delete();
    },
    async deleteAllReports({ state }, docId) {
      //   console.log("del all", docId);
      // console.log(this.getters.getReports);
      for (let index = 0; index < this.getters.getReports.length; index++) {
        this.dispatch("deleteReport", {
          collectionDocId: docId,
          subCollectionDocId: this.getters.getReports[index].docId,
          path: this.getters.getReports[index].path,
        });
      }
    },
  },
  getters: {
    getNavColor: (store) => {
      return store.navColor;
    },
    getLogStatus: (store) => {
      return store.isLoggedIn;
    },
    getFooterStatus: (store) => {
      return store.loadedFooter;
    },
    getServiceStatus: (store) => {
      return store.isServiceEmpty;
    },
    getServiceLoadStatus: (store) => {
      return store.loadedService;
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
    getAnnouncements: (store) => {
      return store.announcements;
    },
    getInternships: (store) => {
      return store.internships;
    },
    getTrainings: (store) => {
      return store.trainings;
    },
    getWorkshops: (store) => {
      return store.workshops;
    },
    getResources: (store) => {
      return store.resources;
    },
    getYear: (store) => {
      let date = new Date();
      return date.getFullYear();
    },
    getHospitals: (store) => {
      return store.hospitals;
    },
    getHospitalsData: (store) => {
      return store.hospitalsData;
    },
    getReports: (store) => {
      return store.reports;
    },
    getSuccesfulUploads: (store) => {
      return store.succesfulUploads;
    },
    getFailedUploads: (store) => {
      return store.failedUploads;
    },
    getRepeatUploads: (store) => {
      return store.repeatUploads;
    },
    getDeletedFiles: (store) => {
      return store.deletedFiles;
    },
    getUserReportUrl: (store) => {
      return store.userReportUrl;
    },
  },
});
