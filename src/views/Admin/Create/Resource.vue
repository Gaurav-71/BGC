<template>
  <div class="services">
    <Heading :headingObj="headingObj" />
    <Guidelines :serviceType="post.serviceType" />
    <main>
      <div class="announcement elevation-2 px-3 py-7">
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
          label="Abstract"
        ></v-textarea>
        <v-text-field
          v-model="post.link"
          prepend-icon="mdi-link"
          label="Resource Link"
          required
          filled
        ></v-text-field>
        <div class="container text-center btn-flex">
          <v-btn @click="clearForm()" rounded raised class="publish red"
            ><v-icon>mdi-close</v-icon><span>Clear</span></v-btn
          >
          <v-btn @click="publish()" rounded raised class="publish"
            ><v-icon>mdi-plus</v-icon><span>Publish</span></v-btn
          >
        </div>
      </div>
    </main>
    <Heading :headingObj="subHeadingObj" class="mt-9" />
    <div class="custom-form elevation-2 mt-3">
      <v-form
        ref="form"
        class="pa-0 ma-0"
        v-model="valid"
        lazy-validation
        v-for="service in $store.getters.getResources"
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
              label="Resource Link"
              prepend-icon="mdi-link"
              required
              filled
            ></v-text-field>
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
        h1: "Resources",
        h4: "Share informative resources for people to read",
        src: "resources.svg",
      },
      subHeadingObj: {
        h1: "Saved Resources",
        h4: "View, edit or delete shared resources",
        src: "resources.svg",
      },
      post: {
        serviceType: "Resources",
        title: null,
        description: null,
        link: null,
        timestamp: null,
      },
      toEdit: false,
      valid: true,
      unsubscribe: null,
    };
  },
  methods: {
    clearForm() {
      this.post = {
        serviceType: "Resources",
        title: null,
        description: null,
        timestamp: null,
      };
    },
    publish() {
      this.post.timestamp = Date(Date.now());

      this.$store
        .dispatch("uploadResource", this.post)
        .then(() => {
          this.clearForm();
        })
        .catch((err) => {
          console.log(err);
        });
    },
    saveEdit(data) {
      this.$store
        .dispatch("editResource", data)
        .then(() => {
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
      this.$store
        .dispatch("deleteResource", {
          id: service.id,
          title: service.data.title,
        })
        .then(() => {})
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    this.$store
      .dispatch("downloadResources")
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

.announcement {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-self: center;
  background: white;
  .v-text-field {
    width: 95%;
  }
  .publish {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: $secondary !important;
    color: $accent;
    .v-icon {
      margin-right: 0.5rem;
    }
  }
  .btn-flex {
    width: 95%;
    display: flex;
    justify-content: center;
    align-items: center;
    .red {
      background: rgba(255, 0, 0, 0.795) !important;
      color: white;
      margin-right: 1rem;
    }
  }
}
</style>