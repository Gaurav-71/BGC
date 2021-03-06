<template>
  <div class="upload">
    <Heading :headingObj="headingObj" />

    <div
      v-if="$store.getters.getHospitals"
      class="upload-reports elevation-2 mb-10"
    >
      <div class="my-flex mt-2">
        <v-combobox
          v-model="select"
          :items="$store.getters.getHospitals"
          item-text="data.name"
          label="Enter Hospital Name"
          class="mr-2 pb-2 pt-6 whitebg px-5 elevation-4"
          return-object
        ></v-combobox>
        <v-file-input
          v-model="report"
          class="ml-2 pb-2 pt-6 whitebg px-5 elevation-4"
          show-size
          multiple
          counter
          color="white"
          label="Upload Report File"
        ></v-file-input>
      </div>
      <v-btn
        block
        class="my-4 upload-btn"
        style="color: #266255"
        light
        @click="uploadReport"
      >
        <v-icon class="mr-2">mdi-upload</v-icon>
        Upload Covid Report To Database
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
    <div v-else>Loading</div>
    <div v-if="$store.getters.getHospitals" class="all-hospitals">
      <Heading :headingObj="reportsObj" />
      <v-expansion-panels focusable>
        <v-expansion-panel
          style="background: #266255"
          v-for="(item, i) in $store.getters.getHospitals"
          :key="i"
          class="mt-4"
        >
          <v-expansion-panel-header
            style="
              color: rgb(230, 190, 138);
              display: flex;
              justify-content: space-around;
              font-size: medium;
            "
            class="font-weight-bold"
            @click="downloadReports(item.id)"
            >{{ item.data.name }}</v-expansion-panel-header
          >
          <v-expansion-panel-content style="background: white" class="pt-3">
            <div v-if="$store.getters.getReports">
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
                  <v-btn
                    class="my-4 white--text"
                    color="red"
                    dark
                    block
                    @click="
                      deleteReport(item.id, props.item.docId, props.item.path)
                    "
                  >
                    <v-icon class="mr-2">mdi-delete</v-icon>
                    Delete Report
                  </v-btn>
                </template>
              </v-data-table>
            </div>
            <EmptyMessage v-else serviceType="reports" />
            <v-dialog v-model="item.dialog" persistent max-width="30rem">
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  color="red"
                  class="white--text mt-10"
                  block
                  v-bind="attrs"
                  v-on="on"
                  ><v-icon class="mr-3">mdi-delete</v-icon> Delete All
                  Reports</v-btn
                >
              </template>
              <v-card>
                <v-card-title class="headline white--text error">
                  Delete all reports
                </v-card-title>
                <v-card-text class="pt-5"
                  >Are you sure you want to delete all reports linked to
                  {{ item.data.name }} ? This action can't be
                  undone.</v-card-text
                >
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn dark color="grey " @click="popupToggle(item)">
                    Cancel
                  </v-btn>
                  <v-btn color="error" @click="deleteAllReports(item)">
                    Delete
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </div>
    <EmptyMessage v-else serviceType="hospitals" />
    <v-dialog v-model="dialog2" scrollable persistent max-width="80vw">
      <v-card>
        <v-card-title
          v-if="
            this.$store.getters.getSuccesfulUploads.length +
              this.$store.getters.getFailedUploads.length +
              this.$store.getters.getRepeatUploads.length !=
            totalfiles
          "
          style="background: #093630; color: white"
          >Upload in Progress (
          {{
            this.$store.getters.getSuccesfulUploads.length +
            this.$store.getters.getFailedUploads.length +
            this.$store.getters.getRepeatUploads.length
          }}
          of {{ totalfiles }} )
        </v-card-title>
        <v-card-title v-else style="background: #093630; color: white"
          >Completed (
          {{
            this.$store.getters.getSuccesfulUploads.length +
            this.$store.getters.getFailedUploads.length +
            this.$store.getters.getRepeatUploads.length
          }}
          of {{ totalfiles }} )
        </v-card-title>
        <v-divider></v-divider>
        <div class="upload-status" style="height: 50vh">
          <div class="left">
            <div class="succesful">
              Succesful Uploads :
              {{ this.$store.getters.getSuccesfulUploads.length }}
            </div>
            <div
              v-for="(file, index) in $store.getters.getSuccesfulUploads"
              :key="index"
              class="file"
            >
              {{ file }}
            </div>
          </div>
          <div class="center">
            <div class="repeat">
              Repeated Uploads :
              {{ this.$store.getters.getRepeatUploads.length }}
            </div>
            <div
              v-for="(file, index) in $store.getters.getRepeatUploads"
              :key="index"
              class="file"
            >
              {{ file }}
            </div>
          </div>
          <div class="right">
            <div class="failed">
              Failed Uploads : {{ this.$store.getters.getFailedUploads.length }}
            </div>
            <div
              v-for="(file, index) in $store.getters.getFailedUploads"
              :key="index"
              class="file"
            >
              {{ file }}
            </div>
          </div>
        </div>
        <v-divider></v-divider>
        <v-card-actions>
          <v-btn
            v-if="
              this.$store.getters.getSuccesfulUploads.length +
                this.$store.getters.getFailedUploads.length +
                this.$store.getters.getRepeatUploads.length ==
              totalfiles
            "
            color="green darken-1"
            class="ml-auto"
            text
            @click="resetProgress"
          >
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import Heading from "../../../components/Design/Heading";
import EmptyMessage from "../../../components/Design/Empty";
export default {
  components: {
    Heading,
    EmptyMessage,
  },
  data() {
    return {
      dialog: false,
      dialog2: false,
      dialog3: false,

      totalfiles: 0,

      deleteItem: null,

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
        h4: "View and manage your reports linked to the associated hospital",
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
    snackbarToggle() {
      this.snackbar = !this.snackbar;
    },
    popupToggle(item) {
      item.dialog = !item.dialog;
    },
    downloadReports(uid) {
      this.$store
        .dispatch("downloadReports", uid)
        .then((resp) => {})
        .catch((err) => {
          console.log(err);
        });
    },
    resetProgress() {
      this.$store.commit("resetSuccess");
      this.$store.commit("resetFailure");
      this.$store.commit("resetRepeat");
      this.dialog2 = false;
      this.totalfiles = 0;
    },
    uploadReport() {
      if (this.report != null) {
        this.totalfiles = this.report.length;
        this.dialog2 = true;
        for (var i = 0; i < this.report.length; i++) {
          this.$store
            .dispatch("uploadReport", {
              id: this.select.id,
              hospital: this.select.data.name,
              file: this.report[i],
            })
            .then((resp) => {
              this.text = "File uploaded successfully";
              this.snackbarToggle();
            })
            .catch((err) => {
              this.text = "Couldn't upload the file";
              this.snackbarToggle();
              console.log(err);
            });
        }
        this.select = "";
        this.report = null;
      } else {
        this.text = "Please upload the report file";
        this.snackbarToggle();
      }
    },
    deleteReport(collectionDocId, subCollectionDocId, path) {
      this.$store
        .dispatch("deleteReport", { collectionDocId, subCollectionDocId, path })
        .then((resp) => {
          this.text = "Report was deleted successfully !";
          this.snackbarToggle();
        })
        .catch((err) => {
          this.text = this.text =
            "Error: Couldn't delete report, please try again !";
          this.snackbarToggle();
          console.log(err);
        });
    },
    deleteAllReports(item) {
      this.$store
        .dispatch("deleteAllReports", item.id)
        .then((resp) => {
          this.text =
            "All reports linked to the selected hospital were deleted successfully !";
          this.snackbarToggle();
          this.popupToggle(item);
        })
        .catch((err) => {
          this.text = "Error: Couldn't delete all reports, please try again !";
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
  .all-hospitals,
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

.upload-status {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .left,
  .right,
  .center {
    flex-basis: calc(100% / 3);
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    overflow-y: scroll;
    .file {
      width: 100%;
      background: rgb(238, 236, 236);
      border-bottom: 0.5px solid $primary;
      padding: 0.5rem 1.5rem;
    }
  }
  .left {
    border-right: 1px solid $primary;
    .succesful {
      width: 100%;
      padding: 1rem 1.5rem;
      background: #266255;
      color: white;
    }
  }
  .center {
    border-left: 1px solid $primary;
    border-right: 1px solid $primary;
    .repeat {
      width: 100%;
      padding: 1rem 1.5rem;
      background: $accent;
      color: white;
    }
  }
  .right {
    border-left: 1px solid $primary;
    .failed {
      width: 100%;
      padding: 1rem 1.5rem;
      background: red;
      color: white;
    }
  }
}

.v-btn {
  @include responsive($phone) {
    font-size: xx-small;
  }
}
</style>