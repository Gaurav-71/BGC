<template>
  <div class="user-service">
    <Heading class="page-header" :headingObj="headingObj" />
    <div class="service-landing">
      <div class="left">
        <img
          class="service-landing-img"
          src="../../assets/Services/workshop.svg"
          alt="internship"
        />
      </div>
      <div class="right">
        <div class="title">Sharpen your skills</div>
        <div class="subtitle-1">
          Gain knowledge about countless concepts from industry experts.
        </div>
        <v-divider class="anim1"></v-divider>
        <p class="mt-7 anim1">
          We conduct workshops designed to provide a strong platform for
          understanding the techniques in different fields of Genomics,
          Bioinformatics, Biotechnology, Biology, Medicine, Agriculture,
          Environment and much more.
        </p>
        <p class="anim1">
          Participants will gain significant experience in scientific techniques
          through Integrated learning methods, utilizing hands-on training to
          reinforce theoretical knowledge.
        </p>
        <p class="mb-9 anim1">
          We conduct information packed workshops online and in person.
        </p>
        <v-btn class="py-5 view-btn" href="#services" rounded
          >View Workshops</v-btn
        >
      </div>
    </div>
    <v-divider class="mb-10" style="width: 100%"></v-divider>
    <div class="posts" id="services">
      <v-card
        v-for="post in $store.getters.getWorkshops"
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
    <EmptyMessage
      v-if="$store.getters.getServiceStatus"
      serviceType="workshops"
    />
  </div>
</template>

<script>
import Heading from "../../components/Design/Heading";
import EmptyMessage from "../../components/Design/Empty";
import gsap, { Power2, Bounce } from "gsap";
export default {
  components: {
    Heading,
    EmptyMessage,
  },
  data() {
    return {
      headingObj: {
        h1: "Workshops",
        h4: "We conduct information packed workshops on various topics",
        src: "workshop.svg",
      },
      unsubscribe: null,
    };
  },

  mounted() {
    const header = gsap.timeline();
    const tl = gsap.timeline({ defaults: { duration: 0.85, stagger: 0.3 } }); // create an instance and assign it to variable tl
    tl.add();
    header.add();
    header.from(".page-header", {
      duration: 1,
      x: 100,
      opacity: 0,
      delay: 0.6,
    }); // add tween to timeline
    tl.from(".service-landing-img", {
      x: -100,
      opacity: 0,
      delay: 0.6,
    })
      .from(".title", { y: -50, opacity: 0 }, "-=.9")
      .from(".subtitle-1", { stagger: 0, opacity: 0 }, "-=0.5")
      .from(
        ".anim1",
        { y: -50, stagger: 0.3, opacity: 0, ease: Power2.easeOut },
        "-=.9"
      )
      .from(
        ".view-btn",
        {
          duration: 0.4,

          stagger: 0,
          opacity: 0,
        },
        "-=.9"
      );
    this.$store
      .dispatch("downloadService", "Workshops")
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
@import "../../scss/_userServices.scss";

.user-service {
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
    padding: 1.5rem;
  }
  .service-landing {
    width: 100%;
    min-height: calc(100vh - 14rem);
    display: grid;
    justify-content: center;
    //align-items: flex-start;
    grid-template-columns: 50% 50%;
    @include responsive($tablet-landscape) {
      //align-items: flex-start;
      min-height: auto;
    }
    @include responsive($tablet-portrait) {
      min-height: auto;
      height: auto;
      display: flex;
    }
    @include responsive($phone) {
      height: auto;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .left {
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 95%;
        margin-bottom: 1.5rem;
        @include responsive($tablet-portrait) {
          display: none;
        }
      }
    }
    .right {
      padding: 3rem;
      @include responsive($tablet-portrait) {
        padding: 0.5rem;
      }
      @include responsive($phone) {
        padding: 0;
      }
      .title {
        color: $secondary;
        font-size: 2.8rem !important ;
        margin: 0.5rem 0;
        @include responsive($phone) {
          font-size: xx-large !important;
        }
      }
      .subtitle-1 {
        font-size: large !important;
        @include responsive($phone) {
          font-size: medium !important;
        }
      }
      .v-divider {
        margin: 1rem 0;
        margin-bottom: 0;
      }
      p {
        font-size: large;
        @include responsive($phone) {
          font-size: medium;
        }
      }

      .v-btn {
        background: $secondary;
        color: $accent;
        @include responsive($tablet-landscape) {
          display: none;
        }
        @include responsive($tablet-portrait) {
          display: none;
        }
        @include responsive($phone) {
          display: none;
          margin-bottom: 2rem;
        }
      }
    }
  }
}
</style>