<template>
  <div class="settings">
    <div class="custom-heading elevation-2">
      <div class="custom-flex">
        <img src="../../assets/Settings/settings.svg" alt="settings" />
        <div class="custom-text">
          <h1>Settings</h1>
          <h4>Update your contact information and much more</h4>
        </div>
      </div>
      <v-divider class="elevation-1"></v-divider>
    </div>
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
        <v-btn class="mr-2 clr" @click="changeEdit()"> Edit </v-btn>
      </div>
      <div class="custom-btn" v-else>
        <v-btn color="error" class="mr-2" @click="cancel()"> Cancel </v-btn>
        <v-btn color="teal" class="mr-2 white--text" @click="save()">
          Save
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      valid: true,
      profile: null,
      profileCopy: null,
      covidRules: [(v) => !!v || "Cov-d-19 Booking Number is required"],
      phoneRules: [(v) => !!v || "General Phone Number is required"],
      emailRules: [(v) => !!v || "Email is required"],
      facebookRules: [(v) => !!v || "Facebook Link is required"],
      linkedinRules: [(v) => !!v || "Linkedin Link is required"],
      youtubeRules: [(v) => !!v || "Youtube Link is required"],
      mapRules: [(v) => !!v || "Google Maps Link is required"],
      toEdit: false,
    };
  },
  created() {
    this.profile = Object.assign({}, this.$store.getters.getProfile.data);
    this.profileCopy = Object.assign({}, this.$store.getters.getProfile.data);
  },
  methods: {
    save(step) {
      if (this.$refs.form.validate()) {
        this.$store
          .dispatch("editProfile", this.profile)
          .then(() => {
            this.changeEdit();
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
    reset() {
      this.$refs.form.reset();
    },
    changeEdit() {
      this.toEdit = !this.toEdit;
    },
    cancel() {
      this.profile = { ...this.profileCopy };
      this.changeEdit();
    },
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
  .custom-heading {
    padding: 1rem;
    background: white;
    width: 100%;
    .custom-flex {
      display: flex;
      align-items: center;
      padding: 0 1rem;
      img {
        width: 50px;
        height: 50px;
      }
      .custom-text {
        padding-left: 0.5rem;
        h1 {
          padding: 0 0 0 0.5rem;
          margin: 0;
          color: $accent;
        }
        h4 {
          margin: 0;
          padding: 0 0 0.5rem 0.5rem;
          color: $primary;
        }
      }
    }
  }
  .custom-form {
    padding: 1rem;
    background: $secondary;
    width: 100%;
    margin-top: 1.5rem;

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