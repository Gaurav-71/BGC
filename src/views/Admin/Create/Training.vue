<template>
  <div class="services">
    <Heading :headingObj="headingObj" />
    <Guidelines :serviceType="post.serviceType" />
    <main>
      <div class="left elevation-2 px-3 py-7">
        <v-text-field
          v-model="post.title"
          prepend-icon="mdi-format-title"
          label="Post Title"
          required
          filled
        ></v-text-field>
        <v-textarea
          v-model="post.description"
          filled
          prepend-icon="mdi-text"
          clearable
          clear-icon="mdi-close-circle"
          label="Post Description in HTML"
        ></v-textarea>
        <v-text-field
          v-model="post.link"
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
              v-model="post.date"
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
            v-model="post.date"
            min="1950-01-01"
            @change="save"
          ></v-date-picker>
        </v-menu>
        <div class="flex">
          <v-file-input
            @change="generateImagePreview"
            v-model="files.image"
            show-size
            label="Upload Brochure Image"
            filled
            prepend-icon="mdi-file-image"
          ></v-file-input>

          <v-file-input
            @change="generateBrochurePreview"
            v-model="files.brochure"
            class="margin"
            show-size
            label="Upload Brochure PDF"
            filled
            prepend-icon="mdi-file-document"
          ></v-file-input>
        </div>
        <div class="container text-center btn-flex">
          <v-btn @click="clearForm()" rounded raised class="publish red"
            ><v-icon>mdi-close</v-icon><span>Clear</span></v-btn
          >
          <v-btn @click="publish()" rounded raised class="publish"
            ><v-icon>mdi-plus</v-icon><span>Publish</span></v-btn
          >
        </div>
      </div>
      <div class="right">
        <h1 class="elevation-2">Post Preview</h1>
        <v-card class="my-2" width="1024px">
          <v-card-title
            v-html="post.title"
            class="pb-0 mb-0 post-title"
            style="font-size: x-large"
            >{{ post.title }}</v-card-title
          >
          <v-card-text>
            <div
              v-if="post.date != null"
              class="subtitle-0 ma-0 pa-0 post-date"
            >
              Last date for registration : {{ post.date }}
            </div>
          </v-card-text>
          <v-img
            v-if="imagePreview != null"
            height="auto"
            class="custom-border"
            :src="imagePreview"
          ></v-img>
          <v-card-text>
            <div
              class="description"
              style="font-size: large"
              v-html="post.description"
            >
              {{ post.description }}
            </div>
          </v-card-text>

          <v-divider class="mx-4"></v-divider>

          <v-card-actions
            v-if="files.brochure != null || post.link !== null"
            class="actions"
          >
            <v-btn
              :href="brochurePreview"
              target="_blank"
              v-if="files.brochure"
              depressed
              class="brochure-btn"
              ><v-icon>mdi-cloud-download</v-icon>
              <span>Download Brochure</span>
            </v-btn>
            <v-btn
              :href="post.link"
              target="_blank"
              v-if="post.link"
              depressed
              class="register-btn"
              ><v-icon>mdi-account-check</v-icon> <span>Register Now</span>
            </v-btn>
          </v-card-actions>
        </v-card>
      </div>
    </main>
    <Heading :headingObj="subHeadingObj" class="mt-9" />
    <div class="custom-form elevation-2 mt-3">
      <v-form
        ref="form"
        class="pa-0 ma-0"
        v-model="valid"
        lazy-validation
        v-for="(service, index) in $store.getters.getTrainings"
        :key="service.id"
        :disabled="!service.edit"
      >
        <v-card class="mt-5 elevation-10 py-3">
          <div class="all-conferences flex px-3 pt-3">
            <v-text-field
              v-model="service.data.title"
              class="px-3"
              label="Post Title"
              prepend-icon="mdi-format-title"
              required
              filled
            ></v-text-field>
            <v-text-field
              v-model="service.data.link"
              class="px-3"
              label="Registration Link"
              prepend-icon="mdi-link"
              required
              filled
            ></v-text-field>
            <v-menu
              v-model="menuPreview[index]"
              :close-on-content-click="false"
              transition="scale-transition"
              offset-y
              min-width="290px"
            >
              <template v-slot:activator="{ on }">
                <v-text-field
                  v-model="service.data.date"
                  label="Last Date for Registration"
                  prepend-icon="mdi-calendar"
                  readonly
                  filled
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker
                v-model="service.data.date"
                min="1950-01-01"
                @input="menuPreview[index] = false"
              ></v-date-picker>
            </v-menu>
          </div>
          <div class="all-conferences flex px-3">
            <v-textarea
              v-model="service.data.description"
              filled
              prepend-icon="mdi-text"
              clearable
              class="px-3"
              clear-icon="mdi-close-circle"
              label="Post Description in HTML"
            ></v-textarea>
          </div>
          <div class="all-conferences flex px-3">
            <v-file-input
              v-model="editFiles.image"
              show-size
              label="Upload New Brochure Image"
              filled
              prepend-icon="mdi-file-image"
              class="px-3"
            ></v-file-input>
            <v-file-input
              v-model="editFiles.brochure"
              class="px-3"
              show-size
              label="Upload New Brochure PDF"
              filled
              prepend-icon="mdi-file-document"
            ></v-file-input>
          </div>
          <v-divider></v-divider>
          <div class="container text-center mt-3">
            <v-btn
              v-if="service.edit"
              @click="changeEdit(service)"
              class="error"
              raised
            >
              <v-icon>mdi-close</v-icon>
              <span>Cancel</span>
            </v-btn>
            <v-btn
              v-if="!service.edit"
              @click="deleteService(service)"
              class="error"
              raised
            >
              <v-icon>mdi-delete</v-icon>
              <span>Delete</span>
            </v-btn>
            <v-btn
              v-if="service.edit"
              @click="saveEdit(service)"
              class="mr-1"
              raised
            >
              <v-icon class="mr-1">mdi-cloud-check</v-icon>
              <span>Save</span>
            </v-btn>
            <v-btn v-else class="mr-1" @click="changeEdit(service)" raised>
              <v-icon class="mr-1">mdi-pen</v-icon>
              <span>Edit</span>
            </v-btn>
          </div>
        </v-card>
      </v-form>
      <EmptyMessage
        v-if="$store.getters.getServiceStatus"
        :serviceType="post.serviceType"
      />
    </div>
  </div>
</template>

<script>
import Heading from "../../../components/Design/Heading";
import Guidelines from "../../../components/Design/Guidelines";
import EmptyMessage from "../../../components/Design/Empty";
export default {
  components: {
    Heading,
    Guidelines,
    EmptyMessage,
  },
  data() {
    return {
      headingObj: {
        h1: "Training",
        h4:
          "Create a new training annoucement for people to participate & learn",
        src: "training.svg",
      },
      subHeadingObj: {
        h1: "Saved Trainings",
        h4: "View, edit or delete created training announcements",
        src: "training.svg",
      },
      post: {
        serviceType: "Trainings",
        title: null,
        description: null,
        link: null,
        date: null,
        image: null,
        fileName: null,
        brochure: null,
        timestamp: null,
      },
      files: {
        image: null,
        brochure: null,
      },
      editFiles: {
        image: null,
        brochure: null,
      },
      toEdit: false,
      valid: true,
      imagePreview: null,
      brochurePreview: null,
      menu: false,
      menuPreview: [],
      unsubscribe: null,
    };
  },
  methods: {
    save(date) {
      this.$refs.menu.save(date);
    },
    generateImagePreview() {
      if (this.files.image != null) {
        this.imagePreview = URL.createObjectURL(this.files.image);
      } else {
        this.imagePreview = null;
      }
    },
    generateBrochurePreview() {
      if (this.files.brochure != null) {
        this.brochurePreview = URL.createObjectURL(this.files.brochure);
      } else {
        this.brochurePreview = null;
      }
    },
    clearForm() {
      this.post = {
        serviceType: "Trainings",
        title: null,
        description: null,
        link: null,
        date: null,
        image: null,
        fileName: null,
        brochure: null,
        timestamp: null,
      };
      this.files = {
        image: null,
        brochure: null,
      };
      this.imagePreview = null;
      this.brochurePreview = null;
    },
    publish() {
      let postDetails = {
        files: this.files,
        details: this.post,
      };

      this.$store
        .dispatch("uploadService", postDetails)
        .then(() => {
          this.clearForm();
        })
        .catch((err) => {
          console.log(err);
        });
    },
    saveEdit(data) {
      let editDetails = {
        id: data.id,
        files: this.editFiles,
        details: data.data,
      };

      this.$store
        .dispatch("editService", editDetails)
        .then(() => {
          this.editFiles = {
            image: null,
            brochure: null,
          };
          this.changeEdit(data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    changeEdit(service) {
      service.edit = !service.edit;
    },
    cancel(service) {
      this.changeEdit(service);
    },
    deleteService(service) {
      let serviceDetails = {
        id: service.id,
        serviceType: "Trainings",
        data: service.data,
      };
      this.$store
        .dispatch("deleteService", serviceDetails)
        .then(() => {})
        .catch((err) => {
          console.log(err);
        });
    },
  },
  watch: {
    menu(val) {
      val && setTimeout(() => (this.$refs.picker.activePicker = "YEAR"));
    },
  },
  mounted() {
    this.$store
      .dispatch("downloadService", "Trainings")
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
@import "../../../scss/_services.scss";
</style>