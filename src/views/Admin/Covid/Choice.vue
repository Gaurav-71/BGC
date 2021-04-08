<template>
  <div class="dashboard">
    <Heading :headingObj="headingObj" />
    <div class="opt-container">
      <v-card
        class="mr-7 elevation-4 t-card"
        to="/admin/covid-reports/hospitals"
      >
        <v-img
          height="250"
          class="ma-10"
          src="../../../assets/Admin/Covid/hospital.svg"
          contain
        ></v-img>
        <v-card-title class="mx-0 pb-0 ctitle">Hospitals</v-card-title>
        <v-card-text class="px-0 pb-0 mx-0 mb-0">
          <p style="text-align: left" class="ma-0 pa-4 pt-0">
            Update your profile like your contact details or add a link to a new
            conference you have conducted recently
          </p>
        </v-card-text>
      </v-card>
      <v-card class="ml-7 elevation-4 t-card" to="/admin/covid-reports/upload">
        <v-img
          height="250"
          class="ma-10"
          src="../../../assets/Admin/Covid/submit.svg"
          contain
        ></v-img>
        <v-card-title class="mx-0 pb-0 ctitle">Covid Reports</v-card-title>
        <v-card-text class="px-0 pb-0 mx-0 mb-0">
          <p style="text-align: left" class="ma-0 pa-4 pt-0">
            Easily add a new hospital to your database or publish a covid report
            to your associated hospital
          </p>
        </v-card-text>
      </v-card>
    </div>
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
        h1: "Hospital Covid Reports",
        h4:
          "Add a new hospital to your database or publish a covid report to your associated hospital",
        src: "covid.svg",
      },
    };
  },
  methods: {
    route(index) {
      switch (index) {
        case 0:
          this.$router.push("/hospitals");
          break;
        case 1:
          this.$router.push("/upload");
          break;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../../scss/main.scss";
.dashboard {
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
  .opt-container {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: stretch;
    margin-top: 1.5rem;
    @include responsive($tablet-portrait) {
      flex-wrap: wrap;
    }
    @include responsive($phone) {
      flex-wrap: wrap-reverse;
      margin: 0rem 0 !important;
    }
    .v-card {
      width: 20rem;

      background-image: radial-gradient(
          circle at center center,
          transparent,
          rgb(255, 255, 255)
        ),
        repeating-linear-gradient(
          135deg,
          rgb(255, 255, 255) 0px,
          rgb(255, 255, 255) 12px,
          transparent 12px,
          transparent 19px,
          rgb(255, 255, 255) 19px,
          rgb(255, 255, 255) 24px,
          transparent 24px,
          transparent 28px
        ),
        repeating-linear-gradient(
          45deg,
          rgb(245, 245, 245) 0px,
          rgb(245, 245, 245) 7px,
          transparent 7px,
          transparent 14px
        ),
        linear-gradient(90deg, rgb(255, 255, 255), rgb(255, 255, 255));
      border-radius: 0.8rem !important;
      @include responsive($tablet-landscape) {
        width: 20rem;
        margin: 1rem !important;
        padding: 0;
      }
      @include responsive($tablet-portrait) {
        width: 20rem;
        margin: 1rem !important;
        padding: 0;
      }
      @include responsive($phone) {
        width: 88vw !important;
        margin: 1rem 0 !important;
      }

      .ctitle {
        background: $secondary;
        color: $accent;
      }
      p {
        background: $secondary;
        color: white;
        border-radius: inherit;
        //color: $accent;
      }
    }
  }
}

.blur {
  background: $primary;
  border-bottom: 1px solid $accent;

  .item {
    .content {
      color: white;
    }
  }
}
</style>