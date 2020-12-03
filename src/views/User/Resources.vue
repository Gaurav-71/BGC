<template>
  <div class="resources">
    <Heading :headingObj="headingObj" />
    <v-card v-for="resource in $store.getters.getResources" :key="resource.id">
      <div class="my-header">
        <v-card-title
          v-html="resource.data.title"
          class="ma-0 pa-0 title-color"
        >
          {{ resource.data.title }}
        </v-card-title>
        <div class="time mt-1">Posted on {{ resource.data.timestamp }}</div>
      </div>
      <v-divider class="my-3"></v-divider>
      <p>{{ resource.data.description }}</p>
      <v-btn
        v-if="resource.data.link != null"
        :href="resource.data.link"
        target="_blank"
        depressed
        block
        class="px-6"
        >Read More</v-btn
      >
    </v-card>
    <EmptyMessage
      v-if="$store.getters.getResources.length == 0"
      serviceType="resources"
    />
  </div>
</template>

<script>
import Heading from "../../components/Design/Heading";
import EmptyMessage from "../../components/Design/Empty";
export default {
  components: {
    Heading,
    EmptyMessage,
  },
  data() {
    return {
      headingObj: {
        h1: "Resources",
        h4: "All informative resources to help you enrich your knowledge",
        src: "resources.svg",
      },
    };
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
@import "../../scss/main.scss";
.resources {
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
  .v-card {
    width: 100%;
    margin: 0.5rem 0;
    padding: 1rem;

    .my-header {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      .title-color {
        color: $secondary !important;
        font-size: x-large;
        @include responsive($phone) {
          font-size: large;
          line-height: 1.4rem;
        }
      }
      .time {
        color: grey;
        @include responsive($phone) {
          font-size: small;
        }
      }
    }
    p {
      @include responsive($phone) {
        font-size: small;
      }
    }
    .v-btn {
      background: $secondary !important;
      color: $accent;
    }
  }
}
</style>