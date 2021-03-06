<template>
  <div class="announcements">
    <Heading class="announcement-header" :headingObj="headingObj" />
    <div class="announcements-wrapper">
      <div class="announcement-cards">
        <v-card
          v-for="announcement in $store.getters.getAnnouncements"
          :key="announcement.id"
          class="announcement-card my-3"
          elevation="2"
          outlined
          shaped
          tile
          rounded
        >
          <div class="left">
            <div class="white-bg elevation-15">
              <v-img
                class="img-size"
                v-if="announcement.data.serviceType == 'Announcements'"
                src="../../assets/Heading/announcements.svg"
              ></v-img>
              <v-img
                class="img-size"
                v-else-if="announcement.data.serviceType == 'Internships'"
                src="../../assets/Heading/internship.svg"
              ></v-img>
              <v-img
                class="img-size"
                v-else-if="announcement.data.serviceType == 'Workshops'"
                src="../../assets/Heading/workshop.svg"
              ></v-img>
              <v-img
                class="img-size"
                v-else-if="announcement.data.serviceType == 'Trainings'"
                src="../../assets/Heading/training.svg"
              ></v-img>
              <v-img
                class="img-size"
                v-else-if="announcement.data.serviceType == 'Resources'"
                src="../../assets/Heading/resources.svg"
              ></v-img>
            </div>
          </div>
          <div class="right">
            <div class="title">
              <div class="title-name pa-0 ma-0">
                {{ announcement.data.title }}
              </div>
              <div class="timestamp pa-0 ma-0">
                Posted on {{ announcement.data.timestamp }}
              </div>
            </div>
            <v-divider class="mt-2 mb-3"></v-divider>
            <div class="description mb-5">
              {{ announcement.data.description }}
            </div>
            <v-btn
              v-if="announcement.data.serviceType == 'Internships'"
              to="/internships"
              class="mt-auto ml-auto px-10"
              >View</v-btn
            >
            <v-btn
              v-else-if="announcement.data.serviceType == 'Trainings'"
              to="/trainings"
              class="mt-auto ml-auto px-10"
              >View</v-btn
            >
            <v-btn
              v-else-if="announcement.data.serviceType == 'Resources'"
              to="/resources"
              class="mt-auto ml-auto px-10"
              >View</v-btn
            >
            <v-btn
              v-else-if="announcement.data.serviceType == 'Workshops'"
              to="/workshops"
              class="mt-auto ml-auto px-10"
              >View</v-btn
            >
            <v-btn
              v-else-if="
                announcement.data.serviceType == 'Announcements' &&
                announcement.data.link != null
              "
              :href="announcement.data.link"
              target="_blank"
              class="mt-auto ml-auto px-10"
              >View</v-btn
            >
          </div>
        </v-card>
        <EmptyMessage
          v-if="$store.getters.getServiceStatus"
          serviceType="announcements"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Heading from "../../components/Design/Heading";
import Services from "../../components/Design/Services.vue";
import EmptyMessage from "../../components/Design/Empty";
import gsap, { Power2, Bounce } from "gsap";
export default {
  components: {
    Heading,
    Services,
    EmptyMessage,
  },
  data() {
    return {
      headingObj: {
        h1: "Announcements",
        h4:
          "Find all updates related to BGC internships, trainings, and workshops here",
        src: "announcements.svg",
      },
      unsubscribe: null,
    };
  },
  created() {
    this.$store.commit("setNavColor", 1);
  },
  watch: {
    loadedAnnouncements: function (empty, filled) {
      console.log(empty, filled);
    },
  },
  mounted() {
    const header = gsap.timeline();
    header.add();
    header.from(".announcement-header", { opacity: 0, x: 100 });
    const cards = gsap.timeline();
    cards.add();
    cards.from(".announcement-card", {
      y: -50,
      stagger: 0.3,
      opacity: 0,
      ease: Power2.easeOut,
    });
    this.$store
      .dispatch("downloadAnnouncements")
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
.announcements {
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
  .announcements-wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    .full-width {
      width: 100%;
      height: 2px;
      margin: 2rem 0;
    }
    .announcement-cards {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: stretch;
      flex-wrap: wrap;
      .announcement-card {
        width: 49%;
        display: grid;
        grid-template-columns: 25% 75%;
        @include responsive($tablet-landscape) {
          grid-template-columns: 33% 67%;
        }
        @include responsive($tablet-portrait) {
          width: 100%;
        }
        @include responsive($phone) {
          width: 100%;
          min-height: 25rem;

          grid-template-columns: none;
          grid-template-rows: 30% 70%;
          padding-bottom: 1rem;
        }
        .left {
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          background: $secondary;
          .white-bg {
            height: 125px;
            width: 125px;
            display: flex;
            justify-content: center;
            align-items: center;
            background: white;
            border-radius: 50%;
            @include responsive($phone) {
              height: 95px;
              width: 95px;
            }
            .img-size {
              max-width: 65px;
              height: 65px;
              @include responsive($phone) {
                max-width: 50px;
                height: 50px;
              }
            }
          }
        }
        .right {
          width: 100%;
          display: flex;
          justify-content: flex-start;
          align-items: flex-start;
          flex-direction: column;
          padding: 1rem;
          overflow: hidden;
          .title {
            .title-name {
              color: $secondary;
              font-size: x-large;
            }
            .timestamp {
              color: grey;
              font-size: small;
            }
          }

          .v-divider {
            width: 100%;
            background: $secondary;
          }
          .v-btn {
            background: $secondary;
            color: $accent;
          }
        }
      }
    }
  }
}
</style>