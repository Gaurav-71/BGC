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
    class="royal-border"
    dark
    style="z-index: 1000"
  >
    <v-toolbar-title>
      <v-img
        alt="Vuetify Logo"
        class="shrink mb-2 mr-5"
        contain
        src="../../assets/Header/logo.png"
        transition="scale-transition"
        width="115"
        @click="goHome()"
        style="cursor: pointer"
      />
    </v-toolbar-title>

    <v-spacer></v-spacer>
    <v-toolbar-items
      v-if="$store.getters.getLogStatus == 'false'"
      class="hidden-md-and-down d-md-block"
    >
      <v-btn to="/" class="hover-color" :color="$store.getters.getNavColor" dark
        >Home</v-btn
      >
      <v-menu open-on-hover bottom offset-y dark>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            class="hover-color"
            :color="$store.getters.getNavColor"
            v-bind="attrs"
            v-on="on"
          >
            Services
          </v-btn>
        </template>
        <v-list
          v-for="(item, index) in userMenu"
          :key="index"
          class="hover-color"
          :color="$store.getters.getNavColor"
        >
          <v-list-item @click="route(index, 1)">
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <v-menu open-on-hover offset-y dark>
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
        <v-list
          v-for="conference in $store.getters.getConferences"
          :key="conference.id"
          :color="$store.getters.getNavColor"
          class="hover-color"
        >
          <v-list-item :href="conference.data.link" target="_blank" color="red">
            <v-list-item-title>{{ conference.data.name }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <v-btn
        to="/announcements"
        class="hover-color"
        :color="$store.getters.getNavColor"
        >Announcements</v-btn
      >

      <v-btn
        to="/contact-us"
        class="hover-color"
        :color="$store.getters.getNavColor"
        >Contact Us</v-btn
      >
    </v-toolbar-items>
    <v-toolbar-items v-else class="hidden-md-and-down d-md-block">
      <v-btn
        to="/admin/messages"
        class="hover-color"
        :color="$store.getters.getNavColor"
        ><div class="my-flex">
          <i class="fa fa-envelope size" aria-hidden="true"></i>
          <p>Messages</p>
        </div></v-btn
      >

      <v-menu open-on-hover dark offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            class="hover-color"
            :color="$store.getters.getNavColor"
            v-bind="attrs"
            v-on="on"
          >
            <div class="my-flex">
              <i class="fa fa-plus size" aria-hidden="true"></i>
              <p>Create</p>
            </div>
          </v-btn>
        </template>
        <v-list
          v-for="(item, index) in items"
          :key="index"
          class="hover-color"
          :color="$store.getters.getNavColor"
        >
          <v-list-item @click="route(index, 2)">
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <v-btn
        to="/admin/settings"
        class="hover-color"
        :color="$store.getters.getNavColor"
        ><div class="my-flex">
          <i class="fa fa-gear size" aria-hidden="true"></i>
          <p>Settings</p>
        </div>
      </v-btn>
    </v-toolbar-items>
    <v-spacer></v-spacer>
    <v-btn
      v-if="$store.getters.getLogStatus == 'false'"
      to="/covid-19/testing"
      raised
      rounded
      color="teal"
      class="mb-1 corona-btn"
    >
      <span class="py-3">COVID-19 Testing</span>
    </v-btn>
    <v-btn @click="logout" v-else class="ml-3 mb-1" raised rounded color="teal">
      <v-icon color="yellow">mdi-open-in-new</v-icon>
      <span class="ml-2">Sign Out</span>
    </v-btn>
    <v-icon
      v-if="$store.getters.getLogStatus"
      dark
      size="35"
      @click="sideNav = !sideNav"
      class="ml-2 mb-1 hidden-md-and-up"
      >mdi-menu</v-icon
    >
  </v-app-bar>
</template>

<script>
export default {
  data() {
    return {
      sideNav: false,
      userMenu: [
        { title: "About" },
        { title: "Internships" },
        { title: "Trainings" },
        { title: "Workshops" },
        { title: "Resources" },
      ],
      items: [
        { title: "Internship" },
        { title: "Training" },
        { title: "Workshop" },
        { title: "Resources" },
        { title: "Announcements" },
      ],
      offest: true,
    };
  },
  methods: {
    route(index, loggedIn) {
      if (loggedIn == 1) {
        switch (index) {
          case 0:
            this.router.push("/services/about");
            break;
          case 1:
            this.$router.push("/internships");
            break;
          case 2:
            this.$router.push("/trainings");
            break;
          case 3:
            this.$router.push("/workshops");
            break;
          case 4:
            this.$router.push("/resources");
            break;
        }
      } else {
        switch (index) {
          case 0:
            this.$router.push("/admin/create/internship");
            break;
          case 1:
            this.$router.push("/admin/create/training");
            break;
          case 2:
            this.$router.push("/admin/create/workshop");
            break;
          case 3:
            this.$router.push("/admin/create/resources");
            break;
          case 4:
            this.$router.push("/admin/create/announcement");
            break;
        }
      }
    },
    goHome() {
      this.$router.push("/");
    },
    logout() {
      this.$store
        .dispatch("logout")
        .then(() => {
          this.$router.push("/");
        })
        .catch((err) => {
          alert(err);
        });
    },
  },
  mounted() {
    this.$store
      .dispatch("downloadConferences")
      .then((resp) => {
        this.unsubscribe = resp;
      })
      .catch((err) => {
        alert(err);
      });
  },
};
</script>

<style lang="scss" scoped>
@import "../../scss/main.scss";
.royal-border {
  box-sizing: border-box;
  border-bottom: 3px solid $accent !important;
  z-index: 100;
}
.my-flex {
  padding-top: 0.7rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  .size {
    margin-bottom: 0.3rem;
    font-size: 20px;
  }
}
.hover-color {
  transition: color 0.3s ease-in;
  box-shadow: none;
  border-bottom: 3px solid $accent !important;
}
.hover-color:hover {
  color: $accent !important;
  cursor: pointer !important;
}
.black-bg {
  background-image: black;
}
.corona-btn {
  @include responsive($phone) {
    font-size: x-small !important;
  }
  @include responsive($small-phone) {
    font-size: 0.5rem !important;
  }
}
</style>