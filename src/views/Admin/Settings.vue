<template>
  <div class="settings">
    <Heading :headingObj="headingObj" />
    <div class="custom-form elevation-2">
      <v-form
        ref="form"
        class="pa-0 ma-0"
        v-model="valid"
        lazy-validation
        :disabled="!toEdit"
      >
        <v-card class="elevation-10 pt-3">
          <v-text-field
            v-model="profile.phNo"
            :rules="phoneRules"
            class="px-6"
            label="General Number"
            required
          ></v-text-field>

          <v-text-field
            v-model="profile.email"
            :rules="emailRules"
            class="px-6"
            label="Email"
            required
          ></v-text-field>
        </v-card>
        <v-card class="mt-5 elevation-10 pt-3">
          <v-text-field
            v-model="profile.covidBookingNo"
            :rules="covidRules"
            class="px-6"
            label="Covid-19 Booking Number"
            required
          ></v-text-field
        ></v-card>
        <v-card class="mt-5 elevation-10 pt-3">
          <v-text-field
            v-model="profile.facebook"
            :rules="facebookRules"
            class="px-6"
            label="Facebook Link"
            required
          ></v-text-field>
          <v-text-field
            v-model="profile.linkedin"
            :rules="linkedinRules"
            class="px-6"
            label="Linkedin Link"
            required
          ></v-text-field>
          <v-text-field
            v-model="profile.youtube"
            :rules="youtubeRules"
            class="px-6"
            label="Youtube Link"
            required
          ></v-text-field>
          <v-text-field
            v-model="profile.maps"
            :rules="mapRules"
            class="px-6"
            label="Google Maps Link"
            required
          ></v-text-field>
        </v-card>
      </v-form>
      <div class="custom-btn" v-if="!toEdit">
        <v-btn class="mr-2 clr" @click="changeEdit(1)"> Edit </v-btn>
      </div>
      <div class="custom-btn" v-else>
        <v-btn color="error" class="mr-2" @click="cancel(1)"> Cancel </v-btn>
        <v-btn color="teal" class="mr-2 white--text" @click="save(1)">
          Save
        </v-btn>
      </div>
    </div>
    <div class="custom-form elevation-2 mt-6">
      <v-form ref="form" class="pa-0 ma-0" v-model="valid" lazy-validation>
        <v-card class="flex elevation-10 pa-3">
          <v-text-field
            v-model="newConference.name"
            class="px-6"
            label="Conference Name"
            required
          ></v-text-field>

          <v-text-field
            v-model="newConference.link"
            class="px-6"
            label="Website Link"
            required
          ></v-text-field>
          <v-btn @click="addConference()"><v-icon>mdi-plus</v-icon></v-btn>
        </v-card>
      </v-form>
      <v-form
        ref="form"
        class="pa-0 ma-0"
        v-model="valid"
        lazy-validation
        :disabled="!toEditConferences"
        v-if="renderConferences"
      >
        <v-card class="mt-5 elevation-10 py-3">
          <div
            class="all-conferences flex pa-3"
            v-for="conference in $store.getters.getConferences"
            :key="conference.id"
          >
            <v-text-field
              v-model="conference.data.name"
              :rules="nameRules"
              class="px-6"
              label="Conference Name"
              required
            ></v-text-field>

            <v-text-field
              v-model="conference.data.link"
              :rules="websiteRules"
              class="px-6"
              label="Website Link"
              required
            ></v-text-field>
            <v-btn
              v-if="toEditConferences"
              @click="save(2, conference)"
              raised
              rounded
              >Save
            </v-btn>
            <v-btn @click="deleteConference(conference.id)" raised rounded>
              <v-icon>mdi-delete</v-icon>
            </v-btn>
          </div>
        </v-card>
      </v-form>
      <div class="custom-btn" v-if="!toEditConferences">
        <v-btn class="mr-2 clr" @click="changeEdit(2)"> Edit </v-btn>
      </div>
      <div class="custom-btn" v-else>
        <v-btn color="error" class="mr-2" @click="cancel(2)"> Cancel </v-btn>
      </div>
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
        h1: "Settings",
        h4: "Update your contact information and much more",
        src: "settings.svg",
      },
      newConference: {
        name: "",
        link: "",
        timestamp: "",
      },
      valid: true,
      profile: null,
      profileCopy: null,
      conferences: null,
      conferencesCopy: null,
      covidRules: [(v) => !!v || "Covid-19 Booking Number is required"],
      phoneRules: [(v) => !!v || "General Phone Number is required"],
      emailRules: [(v) => !!v || "Email is required"],
      facebookRules: [(v) => !!v || "Facebook Link is required"],
      linkedinRules: [(v) => !!v || "Linkedin Link is required"],
      youtubeRules: [(v) => !!v || "Youtube Link is required"],
      mapRules: [(v) => !!v || "Google Maps Link is required"],
      nameRules: [(v) => !!v || "Conference name is required"],
      websiteRules: [(v) => !!v || "Website Link is required"],
      toEdit: false,
      toEditConferences: false,
      unsubscribe: null,
      renderConferences: true,
    };
  },
  created() {
    this.profile = Object.assign({}, this.$store.getters.getProfile.data);
    this.profileCopy = Object.assign({}, this.$store.getters.getProfile.data);
  },
  methods: {
    save(form, data = null) {
      switch (form) {
        case 1:
          this.$store
            .dispatch("editProfile", this.profile)
            .then(() => {
              this.changeEdit(1);
            })
            .catch((err) => {
              console.log(err);
            });
          break;
        case 2:
          let editDetails = { id: data.id, data: data.data };
          this.$store
            .dispatch("editConference", editDetails)
            .then(() => {
              this.changeEdit(2);
            })
            .catch((err) => {
              console.log(err);
            });
          break;
      }
    },
    changeEdit(form) {
      switch (form) {
        case 1:
          this.toEdit = !this.toEdit;
          break;
        case 2:
          this.toEditConferences = !this.toEditConferences;
          break;
      }
    },
    cancel(form) {
      switch (form) {
        case 1:
          this.profile = { ...this.profileCopy };
          this.changeEdit(1);
          break;
        case 2:
          this.changeEdit(2);
          break;
      }
    },
    addConference() {
      this.newConference.timestamp = Date(Date.now());
      this.$store
        .dispatch("uploadConference", this.newConference)
        .then(() => {
          this.newConference.name = "";
          this.newConference.link = "";
          this.newConference.timestamp = "";
        })
        .catch((err) => {
          console.log(err);
        });
    },
    deleteConference(id) {
      this.$store
        .dispatch("deleteConference", id)
        .then(() => {})
        .catch((err) => {
          console.log(err);
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

.settings {
  margin-top: 4rem;
  min-height: calc(100vh - 4rem);
  background: $background;
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
  .custom-form {
    padding: 1rem;
    background: $secondary;
    width: 100%;

    .flex {
      width: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      padding: 0 2rem;
      @include responsive($phone) {
        flex-wrap: wrap;
        border-bottom: 5px solid $secondary;
      }
      .v-btn {
        margin: 0 1rem;
        background: $secondary;
        color: $accent;
      }
    }
    .custom-btn {
      width: 100%;
      margin: 1.5rem 0 0.5rem 0;
      text-align: center;
      .clr {
        background: $accent;
        color: $secondary;
      }
    }
  }
}
</style>