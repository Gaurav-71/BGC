<template>
  <div class="upload">
    <Heading :headingObj="reportsObj" />
    <div v-if="$store.getters.getReports" class="all-reports">
      <v-data-table
        :headers="headers"
        :items="$store.getters.getReports"
        item-key="tid"
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
        <template v-slot:[`item.controls`]="props">
          <v-btn
            class="my-4 white--text"
            color="#266255"
            dark
            block
            :href="props.item.url"
            target="_blank"
          >
            <v-icon class="mr-2">mdi-eye</v-icon>
            View Report
          </v-btn>
        </template>
      </v-data-table>
    </div>
    <EmptyMessage v-else serviceType="reports" />
  </div>
</template>

<script>
import Heading from "../../components/Design/Heading";
import EmptyMessage from "../../components/Design/Empty";
import { auth } from "../../main";
export default {
  components: {
    Heading,
    EmptyMessage,
  },
  data() {
    return {
      date: "",
      unsubscribe: null,
      select: "",
      search: "",
      text: "",
      snackbar: false,
      report: null,
      headingObj: {
        h1: "Upload Report",
        h4: "Publish a covid report to the associated hospital",
        src: "submit.svg",
      },
      reportsObj: {
        h1: "Covid Reports",
        h4: "View all Covid-19 reports linked to your hospital",
        src: "documents.svg",
      },
      headers: [
        {
          text: "Date Uploaded",
          align: "start",
          value: "time",
        },
        {
          text: "SRFID",
          value: "srfid",
        },
        {
          text: "Name",
          value: "name",
        },
        { text: "URL", value: "url", width: "20%" },
        { text: "Actions", value: "controls", sortable: false },
      ],
    };
  },
  methods: {
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
    let user = auth.currentUser;
    this.$store
      .dispatch("downloadReports", user.uid)
      .then(() => {})
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style lang="scss" scoped>
@import "../../scss/main.scss";
.upload {
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
  .all-reports,
  .upload-reports {
    width: 100%;
  }
  .upload-reports {
    background: #266255;
    padding: 1rem 2rem;
    .my-flex {
      display: flex;
      justify-content: space-around;
      align-items: center;
      .whitebg {
        border-radius: 0.3rem;
        background: whitesmoke;
      }
    }
  }
}
</style>