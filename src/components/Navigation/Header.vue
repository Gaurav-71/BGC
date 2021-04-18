<template>
  <div class="custom-wrapper">
    <transition
      name="custom-classes-transition"
      enter-active-class="animated bounceInRight"
      leave-active-class="animated fadeOut"
      appear
    >
      <v-navigation-drawer
        temporary
        right
        dark
        fixed
        height="355px"
        v-show="sideNav"
        v-model="sideNav"
        color="#093630"
        class="mob-nav-container"
      >
        <v-list
          v-if="$store.getters.getLogStatus == 'false'"
          class="mob-nav"
          dense
        >
          <v-subheader class="py-8 d-flex justify-center">
            <v-img
              alt="Vuetify Logo"
              class="shrink mb-2"
              contain
              src="../../assets/Header/logo.png"
              transition="scale-transition"
              width="120"
          /></v-subheader>
          <v-list-item-group>
            <v-divider></v-divider>
            <v-list-item to="/">
              <v-list-item-content>
                <v-btn depressed color="transparent" class="btn-menu">
                  Home
                </v-btn>
              </v-list-item-content>
            </v-list-item>
            <v-divider></v-divider>
            <v-list-item>
              <v-list-item-content>
                <v-menu :close-on-click="closeOnClick" bottom offset-y>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      color="transparent"
                      depressed
                      class="btn-menu"
                      v-bind="attrs"
                      v-on="on"
                    >
                      Services
                    </v-btn>
                  </template>
                  <v-list-item
                    class="blur"
                    v-for="(item, index) in userMenu"
                    :key="index"
                  >
                    <v-list-item class="item" @click="route(index, 1)">
                      <v-list-item-title class="content">{{
                        item.title
                      }}</v-list-item-title>
                    </v-list-item>
                  </v-list-item>
                </v-menu>
              </v-list-item-content>
            </v-list-item>
            <v-divider></v-divider>
            <v-list-item>
              <v-list-item-content>
                <v-menu open-on-hover offset-y dark>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      depressed
                      color="transparent"
                      class="btn-menu"
                      v-bind="attrs"
                      v-on="on"
                    >
                      Conferences
                    </v-btn>
                  </template>
                  <v-list
                    v-for="conference in $store.getters.getConferences"
                    :key="conference.id"
                    class="hover-color item-container"
                  >
                    <v-list-item
                      :href="conference.data.link"
                      target="_blank"
                      class="item-title"
                    >
                      <v-list-item-title>{{
                        conference.data.name
                      }}</v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </v-list-item-content>
            </v-list-item>
            <v-divider></v-divider>
            <v-list-item to="/announcements">
              <v-list-item-content>
                <v-btn depressed color="transparent" class="btn-menu">
                  Announcements
                </v-btn>
              </v-list-item-content>
            </v-list-item>
            <v-divider></v-divider>
            <v-list-item to="/contact-us">
              <v-list-item-content>
                <v-btn depressed color="transparent" class="btn-menu">
                  Contact Us
                </v-btn>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
        <v-list
          v-if="$store.getters.getLogStatus == 'true'"
          class="mob-nav"
          dense
        >
          <v-subheader class="py-8 d-flex justify-center">
            <v-img
              alt="Vuetify Logo"
              class="shrink mb-2"
              contain
              src="../../assets/Header/logo.png"
              transition="scale-transition"
              width="120"
          /></v-subheader>
          <v-list-item-group>
            <v-divider></v-divider>
            <v-list-item>
              <v-list-item-content>
                <v-menu :close-on-click="closeOnClick" bottom offset-y>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      color="transparent"
                      depressed
                      class="btn-menu"
                      v-bind="attrs"
                      v-on="on"
                    >
                      Create
                    </v-btn>
                  </template>
                  <v-list-item
                    class="blur"
                    v-for="(item, index) in items"
                    :key="index"
                  >
                    <v-list-item class="item" @click="route(index, 2)">
                      <v-list-item-title class="content">{{
                        item.title
                      }}</v-list-item-title>
                    </v-list-item>
                  </v-list-item>
                </v-menu>
              </v-list-item-content>
            </v-list-item>
            <v-divider></v-divider>
            <v-list-item to="/admin/messages">
              <v-list-item-content>
                <v-btn depressed color="transparent" class="btn-menu">
                  Messages
                </v-btn>
              </v-list-item-content>
            </v-list-item>
            <v-divider></v-divider>
            <v-list-item to="/admin/settings">
              <v-list-item-content>
                <v-btn depressed color="transparent" class="btn-menu">
                  Settings
                </v-btn>
              </v-list-item-content>
            </v-list-item>
            <v-divider></v-divider>
            <v-list-item to="/admin/covid-reports/upload">
              <v-list-item-content>
                <v-btn depressed color="transparent" class="btn-menu">
                  Covid Reports
                </v-btn>
              </v-list-item-content>
            </v-list-item>
            <v-divider></v-divider>
            <v-list-item to="/admin/covid-reports/hospitals">
              <v-list-item-content>
                <v-btn depressed color="transparent" class="btn-menu">
                  Hospitals
                </v-btn>
              </v-list-item-content>
            </v-list-item>
            <v-divider></v-divider>
          </v-list-item-group>
        </v-list> </v-navigation-drawer
    ></transition>
    <v-app-bar
      v-show="!sideNav"
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
        v-if="
          $store.getters.getLogStatus == 'false' ||
          $store.state.authUser == 'hospital'
        "
        class="hidden-md-and-down d-md-block"
      >
        <v-btn
          to="/"
          class="hover-color"
          :color="$store.getters.getNavColor"
          dark
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
            class="hover-color item-container"
          >
            <v-list-item class="item-title" @click="route(index, 1)">
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
            class="hover-color item-container"
          >
            <v-list-item
              :href="conference.data.link"
              target="_blank"
              class="item-title"
            >
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
          to="/admin/settings"
          class="hover-color"
          :color="$store.getters.getNavColor"
          ><div class="my-flex">
            <i class="fa fa-gear size" aria-hidden="true"></i>
            <p>Settings</p>
          </div>
        </v-btn>
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
          to="/admin/messages"
          class="hover-color"
          :color="$store.getters.getNavColor"
          ><div class="my-flex">
            <i class="fa fa-envelope size" aria-hidden="true"></i>
            <p>Messages</p>
          </div></v-btn
        >
        <v-btn
          to="/admin/covid-reports"
          class="hover-color"
          :color="$store.getters.getNavColor"
          ><div class="my-flex">
            <i class="fa fa-file size" aria-hidden="true"></i>
            <p>Covid</p>
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
      <v-btn
        @click="logout"
        v-else
        class="ml-3 mb-1"
        raised
        rounded
        color="teal"
      >
        <v-icon color="yellow">mdi-open-in-new</v-icon>
        <span class="ml-2">Sign Out</span>
      </v-btn>
      <v-icon
        v-if="$store.getters.getLogStatus"
        dark
        size="35"
        @click="openNav()"
        class="ml-2 mb-1 hidden-md-and-up"
        >mdi-menu</v-icon
      >
    </v-app-bar>
  </div>
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
      closeOnClick: true,
    };
  },
  methods: {
    openNav() {
      this.sideNav = !this.sideNav;
    },
    route(index, loggedIn) {
      this.$store.commit("setNavColor", 1);
      if (loggedIn == 1) {
        switch (index) {
          case 0:
            this.$router.push("/services/about");
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
      if (this.$store.getters.getLogStatus == "false") {
        this.$router.push("/");
      } else {
        this.$router.push("/admin/");
      }
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
.custom-wrapper {
  .royal-border {
    box-sizing: border-box;
    border-bottom: 3px solid $accent !important;
    z-index: 100;
    backdrop-filter: blur(50px);
    transition: background 0.2s ease-in;
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
    transition: background 0.2s ease-in-out;
    // backdrop-filter: blur(20px);
  }
  .hover-color:hover {
    color: $accent !important;
    cursor: pointer !important;
    backdrop-filter: blur(30px);
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

  .mob-nav-container {
    border-bottom: 4px solid $accent;
    border-bottom-left-radius: 0.8rem;
    border-bottom-right-radius: 0.8rem;
    margin-right: 0.5rem;
    overflow: hidden;
    .mob-nav {
      background: $primary !important;
    }
  }
}

.item-container {
  background: rgba($secondary, 1);
  border: 1.75px solid $accent !important;
  border-left: none !important;
  border-right: none !important;
  .item-title {
    background: rgba($secondary, 1);
  }
}

.blur {
  background: $primary;
  border-bottom: 1px solid $accent;

  .item {
    .content {
      color: white;
    }
  }
}
</style>