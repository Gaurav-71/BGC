<template>
  <div class="dashboard">
    <Heading :headingObj="headingObj" />
    <div class="opt-container">
      <v-card class="mx-auto elevation-4 t-card" to="/admin/settings">
        <v-img
          height="250"
          class="ma-10"
          src="../../assets/Admin/settings.svg"
          contain
        ></v-img>
        <v-card-title class="mx-0 pb-0 ctitle">Profile Settings</v-card-title>
        <v-card-text class="px-0 pb-0 mx-0 mb-0">
          <p style="text-align: left" class="ma-0 pa-4 pt-0">
            Update your profile like your contact details or add a link to a new
            conference you have conducted recently
          </p>
        </v-card-text>
      </v-card>
      <v-menu :close-on-click="closeOnClick" bottom offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-card class="mx-auto elevation-4 t-card" v-bind="attrs" v-on="on">
            <v-img
              height="250"
              class="ma-10"
              src="../../assets/Admin/upload (1).svg"
              contain
            ></v-img>
            <v-card-title class="mx-0 pb-0 ctitle">Create</v-card-title>
            <v-card-text class="px-0 pb-0 mx-0 mb-0">
              <p style="text-align: left" class="ma-0 pa-4 pt-0">
                Add a new internship position, workshop, training, resource or
                make an announcement to your audience
              </p></v-card-text
            >
          </v-card>
        </template>
        <v-list-item class="blur" v-for="(item, index) in items" :key="index">
          <v-list-item class="item" @click="route(index)">
            <v-list-item-title class="content">{{
              item.title
            }}</v-list-item-title>
          </v-list-item>
        </v-list-item>
      </v-menu>
      <v-card class="mx-auto elevation-4 t-card" to="/admin/messages">
        <v-img
          height="250"
          class="ma-10"
          src="../../assets/Admin/chat.svg"
          contain
        ></v-img>
        <v-card-title class="mx-0 pb-0 ctitle">Messages</v-card-title>
        <v-card-text class="px-0 pb-0 mx-0 mb-0">
          <p style="text-align: left" class="ma-0 pa-4 pt-0">
            View all queries from users who have visited the website
          </p></v-card-text
        >
      </v-card>
    </div>
  </div>
</template>

<script>
import Heading from "../../components/Design/Heading";
export default {
  components: {
    Heading,
  },
  data() {
    return {
      headingObj: {
        h1: "Welcome Admin",
        h4: "View user queries and make changes to the website from here",
        src: "admin.svg",
      },
      items: [
        { title: "Internship" },
        { title: "Training" },
        { title: "Workshop" },
        { title: "Resources" },
        { title: "Announcements" },
      ],
      closeOnClick: true,
    };
  },
  methods: {
    route(index) {
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
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../scss/main.scss";
.dashboard {
  margin-top: 4rem;
  min-height: calc(100vh - 4rem);

  padding: 1.5rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  @include responsive($tablet-portrait) {
    margin-top: 3.5rem;
    min-height: auto;
  }
  @include responsive($phone) {
    margin-top: 3.5rem;
  }
  .opt-container {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    margin-top: 1.5rem;
    @include responsive($tablet-portrait) {
      flex-wrap: wrap;
    }
    @include responsive($phone) {
      flex-wrap: wrap-reverse;
      margin: 0rem 0 !important;
    }

    .v-card {
      width: 24rem;
      margin: 0 !important;
      padding: 0 !important;
      background-image: radial-gradient(
          circle at center center,
          transparent,
          rgb(255, 255, 255)
        ),
        repeating-linear-gradient(
          135deg,
          rgb(255, 255, 255) 0px,
          rgb(255, 255, 255) 12px,
          transparent 12px,
          transparent 19px,
          rgb(255, 255, 255) 19px,
          rgb(255, 255, 255) 24px,
          transparent 24px,
          transparent 28px
        ),
        repeating-linear-gradient(
          45deg,
          rgb(245, 245, 245) 0px,
          rgb(245, 245, 245) 7px,
          transparent 7px,
          transparent 14px
        ),
        linear-gradient(90deg, rgb(255, 255, 255), rgb(255, 255, 255));
      border-radius: 0.8rem !important;
      @include responsive($tablet-landscape) {
        width: 20rem;
        margin: 1rem !important;
        padding: 0;
      }
      @include responsive($tablet-portrait) {
        width: 20rem;
        margin: 1rem !important;
        padding: 0;
      }
      @include responsive($phone) {
        width: 88vw !important;
        margin: 1rem 0 !important;
      }

      .ctitle {
        background: $secondary;
        color: $accent;
      }
      p {
        background: $secondary;
        color: white;
        border-radius: inherit;
        //color: $accent;
      }
    }
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