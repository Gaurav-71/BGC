<template>
  <div class="user-service">
    <Heading class="page-header" :headingObj="headingObj" />
    <div class="service-landing">
      <div class="left">
        <img
          class="service-landing-img"
          src="../../assets/Services/trainings.svg"
          alt="internship"
        />
      </div>
      <div class="right">
        <div class="title">Learn and get inspired</div>
        <div class="subtitle-1">
          Gain knowledge about countless concepts from industry experts.
        </div>
        <v-divider class="anim1"></v-divider>
        <p class="my-7 anim1">
          In collaboration with various premier institutes we have conducted
          both onsite & online training programmes in the field of Genomics,
          Transcriptomics, Metagenomics & Bioinformatics and trained over 1000
          participants from India & abroad.
        </p>
        <p class="anim1">
          We have partnered with the following organisations mentioned below,
        </p>
        <div class="partners-container anim1">
          <div class="partners">
            <div class="partner">
              <img src="../../assets/Training/training-1.png" alt="" />
            </div>
            <div class="partner">
              <img src="../../assets/Training/training-2.png" alt="" />
            </div>
            <div class="partner">
              <img src="../../assets/Training/training-3.png" alt="" />
            </div>
            <div class="partner">
              <img src="../../assets/Training/training-4.png" alt="" />
            </div>

            <div class="partner">
              <img src="../../assets/Training/training-6.png" alt="" />
            </div>
            <div class="partner">
              <img src="../../assets/Training/training-7.png" alt="" />
            </div>
            <div class="partner">
              <img src="../../assets/Training/training-8.png" alt="" />
            </div>
            <div class="partner">
              <img src="../../assets/Training/training-1.png" alt="" />
            </div>
            <div class="partner">
              <img src="../../assets/Training/training-5.png" alt="" />
            </div>
          </div>
        </div>
        <v-btn class="mt-10 py-5 view-btn" href="#services" rounded
          >View Workshops</v-btn
        >
      </div>
    </div>

    <div class="posts posts-anim mt-5" id="services">
      <v-card
        v-for="post in $store.getters.getTrainings"
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
      serviceType="Trainings"
      class="posts-anim"
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
        h1: "Trainings",
        h4:
          "We provide the best training in the field of Genomics, Transcriptomics, Metagenomics & Bioinformatics ",
        src: "training.svg",
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
      )

      .from(".posts-anim", { stagger: 0, opacity: 0, y: 50 }, "-=.6");

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
@import "../../scss/_userServices.scss";

.user-service {
  margin-top: 4rem;
  min-height: calc(100vh - 4rem);
  padding: 1.5rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
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
      flex-direction: column;
      align-items: center;
      // /overflow-x: hidden;
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
      @include responsive($tablet-portrait) {
        width: 100%;
      }
      img {
        width: 95%;
        margin-bottom: 1.5rem;
        @include responsive($tablet-portrait) {
          display: none;
        }
      }
    }
    .right {
      padding: 0.5rem 3rem;
      @include responsive($tablet-portrait) {
        width: 100%;
        padding: 0.5rem;
      }
      @include responsive($phone) {
        width: 100%;
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
      .partners-container {
        margin-top: 1rem;
        width: 100%;
        overflow-x: hidden;
        .partners {
          display: flex;
          justify-content: center;
          width: 100%;
          padding: 1rem 0;
          overflow: hidden;
          .partner {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            margin: 0 1rem;
            animation: marquee 13s linear infinite;
            @include responsive($phone) {
              animation: marquee-phone 20s linear infinite;
            }
            img {
              width: 90px;
              height: 90px;
              border-radius: 50%;
              //animation: shrink 5s linear infinite;
              //box-shadow: 5px 8px 10px rgba(0, 0, 0, 0.25);
            }
            h3 {
              margin: 1.5rem 0 0.7rem 0;
              color: darken($primary, 15%);
            }
          }
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

@keyframes marquee {
  0% {
    transform: translateX(300%);
  }
  100% {
    transform: translateX(-300%);
  }
}
@keyframes shrink {
  0% {
    width: 100px;
    height: 100px;
  }
  100% {
    width: 0;
    height: 0;
  }
}
@keyframes marquee-phone {
  0% {
    transform: translateX(450%);
  }
  100% {
    transform: translateX(-450%);
  }
}
</style>