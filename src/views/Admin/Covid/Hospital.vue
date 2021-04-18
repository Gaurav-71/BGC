<template>
  <div class="hospital">
    <Heading :headingObj="headingObj" />
    <div class="create-hospital elevation-2 mb-10">
      <div class="my-flex mt-2">
        <v-text-field
          v-model="hospital.name"
          :rules="nameRules"
          class="mr-2 pb-2 pt-6 whitebg px-5 elevation-4"
          label="Hospital Name"
          required
        ></v-text-field>
        <v-text-field
          v-model="hospital.email"
          :rules="emailRules"
          class="ml-2 pb-2 pt-6 whitebg px-5 elevation-4"
          label="Hospital Email Id"
          required
        ></v-text-field>
      </div>
      <v-btn
        block
        class="my-4"
        style="color: #266255"
        light
        @click="addHospital"
      >
        <v-icon class="mr-2">mdi-upload</v-icon>
        Add Hospital to Database
      </v-btn>
      <v-snackbar v-model="snackbar">
        {{ text }}
        <template v-slot:action="{ attrs }">
          <v-btn color="pink" text v-bind="attrs" @click="snackbarToggle">
            Close
          </v-btn>
        </template>
      </v-snackbar>
    </div>
    <Heading :headingObj="hospitalObj" />
    <div v-if="$store.getters.getHospitalsData" class="all-hospitals">
      <v-data-table
        :headers="headers"
        :items="$store.getters.getHospitalsData"
        item-key="name"
        :search="search"
        light
        :custom-filter="filterOnlyCapsText"
      >
        <template v-slot:top>
          <v-text-field
            v-model="search"
            label="Search"
            class="mx-4"
          ></v-text-field>
        </template>
      </v-data-table>
    </div>
  </div>
</template>

<script>
import Heading from "../../../components/Design/Heading";
export default {
  components: {
    Heading,
  },
  data() {
    return {
      snackbar: false,
      dialog: false,
      text: "",
      search: "",
      headingObj: {
        h1: "Add Hospital",
        h4: "Add a partnered hospital to your database ",
        src: "hospital.svg",
      },
      hospitalObj: {
        h1: "All Hospitals",
        h4: "View and manage all partnered hospitals",
        src: "view.svg",
      },
      hospital: {
        name: null,
        email: null,
        password: "123456",
      },
      headers: [
        {
          text: "Hospital Name",
          align: "start",
          value: "name",
        },
        {
          text: "Unique ID",
          value: "uid",
        },
      ],
      nameRules: [(v) => !!v || "Hospital name is required"],
      emailRules: [(v) => !!v || "Hospital email is required"],
    };
  },
  methods: {
    snackbarToggle() {
      this.snackbar = !this.snackbar;
    },
    addHospital() {
      this.$store
        .dispatch("createHospitalCollection", this.hospital)
        .then((resp) => {
          this.hospital = {
            name: " ",
            email: " ",
            password: "123456",
          };
          this.text = "Hospital was added to the database successfully !";
          this.snackbarToggle();
        })
        .catch((err) => {
          this.text = err;
          this.snackbarToggle();
          console.log(err);
        });
    },

    filterOnlyCapsText(value, search, item) {
      return (
        value != null &&
        search != null &&
        typeof value === "string" &&
        value.toString().indexOf(search) !== -1
      );
    },
  },
  mounted() {
    this.$store
      .dispatch("downloadHospitals")
      .then((resp) => {
        this.unsubscribe = resp;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style lang="scss" scoped>
@import "../../../scss/main.scss";
.hospital {
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
  .all-hospitals {
    width: 100%;
  }
  .create-hospital {
    width: 100%;
    background: #266255;
    padding: 1rem 2rem;
    .my-flex {
      display: flex;
      justify-content: space-around;
      align-items: center;
      @include responsive($phone) {
        flex-wrap: wrap;
      }
      .whitebg {
        border-radius: 0.3rem;
        background: whitesmoke;
        @include responsive($phone) {
          margin: 0.5rem 0 !important;
        }
      }
    }
  }
}

.v-btn {
  @include responsive($phone) {
    font-size: x-small;
  }
}
</style>