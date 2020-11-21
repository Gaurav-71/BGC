<template>
  <div class="internships">
    <Heading :headingObj="headingObj" />
    <main>
      <div class="left elevation-2 pa-3 pt-7">
        <v-text-field
          prepend-icon="mdi-format-title"
          label="Post Title"
          required
          filled
        ></v-text-field>
        <v-textarea
          filled
          prepend-icon="mdi-text"
          clearable
          clear-icon="mdi-close-circle"
          label="Post Description"
        ></v-textarea>
        <v-text-field
          filled
          raised
          prepend-icon="mdi-link"
          label="Registration Link"
          required
        ></v-text-field>
        <v-menu
          ref="menu"
          v-model="menu"
          :close-on-content-click="false"
          transition="scale-transition"
          offset-y
          min-width="290px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="date"
              label="Last Date for Registration"
              prepend-icon="mdi-calendar"
              readonly
              filled
              v-bind="attrs"
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker
            ref="picker"
            v-model="date"
            min="1950-01-01"
            @change="save"
          ></v-date-picker>
        </v-menu>
        <div class="flex">
          <v-file-input
            show-size
            label="Upload Brochure Image"
            filled
            prepend-icon="mdi-file-image"
          ></v-file-input>

          <v-file-input
            class="margin"
            show-size
            label="Upload Brochure PDF"
            filled
            prepend-icon="mdi-file-document"
          ></v-file-input>
        </div>
      </div>
      <div class="right">
        <v-card :loading="loading" class="elevation-2">
          <template slot="progress">
            <v-progress-linear
              color="deep-purple"
              height="10"
              indeterminate
            ></v-progress-linear>
          </template>

          <v-img
            height="250"
            src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
          ></v-img>

          <v-card-title>Cafe Badilico</v-card-title>

          <v-card-text>
            <v-row align="center" class="mx-0">
              <v-rating
                :value="4.5"
                color="amber"
                dense
                half-increments
                readonly
                size="14"
              ></v-rating>

              <div class="grey--text ml-4">4.5 (413)</div>
            </v-row>

            <div class="my-4 subtitle-1">$ • Italian, Cafe</div>

            <div>
              Small plates, salads & sandwiches - an intimate setting with 12
              indoor seats plus patio seating.
            </div>
          </v-card-text>

          <v-divider class="mx-4"></v-divider>

          <v-card-actions>
            <v-btn color="deep-purple lighten-2" text @click="reserve">
              Reserve
            </v-btn>
          </v-card-actions>
        </v-card>
      </div>
    </main>
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
      headingObj: {
        h1: "Internships",
        h4: "Create a new internship position for people to join",
        src: "internship.svg",
      },
      date: null,
      menu: false,
    };
  },
  methods: {
    save(date) {
      this.$refs.menu.save(date);
    },
  },
  watch: {
    menu(val) {
      val && setTimeout(() => (this.$refs.picker.activePicker = "YEAR"));
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../../scss/main.scss";
.internships {
  margin-top: 4rem;
  min-height: calc(100vh - 4rem);
  background: $background;
  padding: 1.5rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  @include responsive($tablet-portrait) {
    min-height: auto;
  }
  main {
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-self: center;
    @include responsive($phone) {
      flex-wrap: wrap;
    }
    .left {
      width: 50%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-self: center;
      background: white;
      .v-text-field {
        width: 95%;
      }
      .flex {
        width: 95%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        @include responsive($phone) {
          flex-wrap: wrap;
        }
        .margin {
          margin-left: 1rem;
          @include responsive($phone) {
            margin: 0;
          }
        }
      }
      @include responsive($phone) {
        width: 100%;
        max-height: 20vh;
      }
    }
    .right {
      width: 50%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 0 0 0 2rem;

      @include responsive($tablet-portrait) {
        width: 100%;
      }
      @include responsive($phone) {
        width: 100%;
        max-height: 47.5vh;
        padding: 5rem 0 0 0;
      }
      @include responsive($small-phone) {
        padding-top: 8rem;
        max-height: 80vh;
      }
    }
  }
}
</style>