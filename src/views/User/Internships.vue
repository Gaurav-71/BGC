<template>
  <div class="internships">
    <Heading :headingObj="headingObj" />
    <div class="posts">
      <v-card
        v-for="post in $store.getters.getInternships"
        :key="post.id"
        class="mb-10 elevation-2 post-width"
        height="auto"
      >
        <v-card-title
          v-html="post.data.title"
          class="pb-0 mb-0 post-title"
          style="font-size: x-large"
          >{{ post.data.title }}</v-card-title
        >
        <v-card-text>
          <div
            v-if="post.data.date != null"
            class="subtitle-0 ma-0 pa-0 post-date"
          >
            Last date for registration : {{ post.data.date }}
          </div>
        </v-card-text>
        <v-img
          v-if="post.data.image != null"
          class="custom-border"
          max-height="640px"
          :src="post.data.image"
        ></v-img>
        <v-card-text
          ><div
            class="mt-2 description"
            style="font-size: large"
            v-html="post.data.description"
          >
            {{ post.data.description }}
          </div></v-card-text
        >
        <v-divider class="mx-4"></v-divider>

        <v-card-actions
          v-if="post.data.brochure != null || post.data.link !== null"
          class="actions"
        >
          <v-btn
            :href="post.data.brochure"
            target="_blank"
            v-if="post.data.brochure"
            depressed
            class="brochure-btn"
            ><v-icon>mdi-cloud-download</v-icon>
            <span><span class="vanish mr-1">Download </span> Brochure</span>
          </v-btn>
          <v-btn
            :href="post.data.link"
            target="_blank"
            v-if="post.data.link"
            depressed
            class="register-btn"
            ><v-icon>mdi-account-check</v-icon>
            <span>Register <span class="vanish ml-1">Now</span></span>
          </v-btn>
        </v-card-actions>
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
        h1: "Internships",
        h4: "",
        src: "internship.svg",
      },
      unsubscribe: null,
    };
  },
  mounted() {
    console.log("in mounted");
    this.$store
      .dispatch("downloadService", "Internships")
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
.internships {
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
  .posts {
    width: 100%;
    display: grid;
    grid-template-columns: auto auto;
    justify-content: space-around;
    align-items: flex-start;
    @include responsive($tablet-landscape) {
      grid-template-columns: auto;
      justify-content: center;
    }
    @include responsive($tablet-portrait) {
      grid-template-columns: auto;
      justify-content: center;
    }
    @include responsive($phone) {
      grid-template-columns: auto;
      justify-content: center;
    }
    .v-card {
      border: 2px solid $secondary;
      border-bottom-left-radius: inherit;
      border-bottom-right-radius: inherit;
      width: 640px;
      @include responsive($phone) {
        width: 320px;
      }
      @include responsive($small-phone) {
        width: 260px;
      }
      .custom-border {
        border-top: 2px solid $secondary;
        border-bottom: 2px solid $secondary;
      }
      .post-title {
        color: $secondary;
        word-wrap: break-word;
      }
      .post-date {
        color: $accent;
      }
      .v-img {
        width: 640px;
        @include responsive($phone) {
          width: 320px;
        }
        @include responsive($small-phone) {
          width: 260px;
        }
      }
      .actions {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background: $secondary;
        padding: 1rem;
        .register-btn,
        .brochure-btn {
          flex-basis: 50%;
          width: 100%;
          background: $accent;
          color: $secondary;
          display: flex;
          justify-content: center;
          align-items: center;
          span {
            display: flex;
            justify-content: center;
            align-items: center;
            .vanish {
              display: block;
              @include responsive($phone) {
                display: none;
              }
            }
          }
          .v-icon {
            margin-right: 0.5rem;
            @include responsive($phone) {
              margin: 0;
              display: none;
            }
          }
        }
        .brochure-btn {
          background: white;
        }
      }
    }
  }
}
</style>