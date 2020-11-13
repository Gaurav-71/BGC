<template>
  <v-navigation-drawer
    temporary
    right
    dark
    fixed
    class="black-bg"
    height="320px"
    v-if="sideNav"
    v-model="sideNav"
  >
    <v-list dense>
      <v-subheader class="black py-8 d-flex justify-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink m-3"
          contain
          src="../../assets/Header/logo.png"
          transition="scale-transition"
          width="120"
      /></v-subheader>
      <v-list-item-group color="primary">
        <v-list-item to="/">
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item to="/about">
          <v-list-item-content>
            <v-list-item-title>About</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item to="/speakers">
          <v-list-item-content>
            <v-list-item-title>Speakers</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
        <v-menu dark>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              style="
                background: none;
                text-transform: capitalize;
                font-size: small;
              "
              v-bind="attrs"
              v-on="on"
            >
              Events
            </v-btn>
          </template>
          <v-list>
            <v-list-item
              v-for="(item, index) in items"
              :key="index"
              @click="route(index)"
            >
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
        <v-divider></v-divider>
        <v-list-item to="/team">
          <v-list-item-content>
            <v-list-item-title>Team</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item to="/contact-us">
          <v-list-item-content>
            <v-list-item-title>Contact Us</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
  <v-app-bar
    v-else
    fixed
    :color="$store.getters.getNavColor"
    dark
    style="z-index: 1000"
  >
    <v-toolbar-title>
      <v-img
        alt="Vuetify Logo"
        class="shrink m-3 mr-16"
        contain
        src="../../assets/Header/logo.png"
        transition="scale-transition"
        width="140"
      />
    </v-toolbar-title>

    <v-spacer></v-spacer>
    <v-toolbar-items
      v-if="!$store.getters.getLogStatus"
      class="hidden-md-and-down d-md-block"
    >
      <v-btn to="/" class="hover-color" :color="$store.getters.getNavColor" dark
        >Home</v-btn
      >

      <v-btn
        to="/speakers"
        class="hover-color"
        :color="$store.getters.getNavColor"
        >Services</v-btn
      >

      <v-menu dark>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            class="hover-color"
            :color="$store.getters.getNavColor"
            v-bind="attrs"
            v-on="on"
          >
            Conferences
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="(item, index) in items"
            :key="index"
            @click="route(index)"
          >
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <v-btn to="/team" class="hover-color" :color="$store.getters.getNavColor"
        >Resources</v-btn
      >

      <v-btn to="/team" class="hover-color" :color="$store.getters.getNavColor"
        >Team</v-btn
      >

      <v-btn
        to="/contact-us"
        class="hover-color"
        :color="$store.getters.getNavColor"
        >Contact Us</v-btn
      >
    </v-toolbar-items>
    <v-spacer></v-spacer>
    <v-btn
      v-if="!$store.getters.getLogStatus"
      to="/covid-19/testing"
      class="ml-0"
      raised
      rounded
      color="teal"
    >
      <span class="py-3">COVID-19 Testing</span>
    </v-btn>
    <v-btn @click="logout" v-else class="ml-3" raised rounded color="red">
      <v-icon color="yellow">mdi-open-in-new</v-icon>
      <span class="ml-2">Sign Out</span>
    </v-btn>
    <v-icon
      v-if="!$store.getters.getLogStatus"
      dark
      @click="sideNav = !sideNav"
      class="ml-2 hidden-md-and-up"
      >mdi-menu</v-icon
    >
  </v-app-bar>
</template>

<script>
export default {
  data() {
    return {
      sideNav: false,
      items: [
        { title: "2015" },
        { title: "2016" },
        { title: "2017" },
        { title: "2019" },
      ],
    };
  },
  methods: {
    /*
    logout() {
      this.$store
        .dispatch("logout")
        .then(() => {
          this.$store.state.isLoggedIn = false;
          this.$router.push("/");
        })
        .catch((err) => {
          alert(err);
        });
    },*/
  },
  mounted() {
    /*this.$store
      .dispatch("loadCount")
      .then((resp) => {
        this.unsubscribe = resp;
      })
      .catch((err) => {
        alert(err);
      });*/
  },
};
</script>

<style lang="scss" scoped>
@import "../../scss/main.scss";
.hover-color {
  transition: color 0.3s ease-in;
  box-shadow: none;
}
.hover-color:hover {
  color: $accent !important;
  cursor: pointer !important;
}
.black-bg {
  background-image: black;
}
</style>