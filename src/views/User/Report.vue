<template>
  <div v-if="$store.getters.getUserReportUrl != ''" class="reports">
    <div
      v-if="$store.getters.getUserReportUrl == 'no file'"
      class="missing elevation-5"
    >
      <img src="../../assets/Reports/remove.svg" alt="missing" />
      <p>Unable to find this report, please contact us for further queries</p>
    </div>
    <div v-else>
      <iframe
        :src="$store.getters.getUserReportUrl + '#zoom=FitW'"
        class="pdf"
      ></iframe>
    </div>
  </div>
  <div v-else class="reports"><loading /><br />Loading ...</div>
</template>

<script>
import loading from "../../components/Animation/Loader";
export default {
  components: {
    loading,
  },
  data() {
    return {
      url: "",
    };
  },
  mounted() {
    console.log("Hi from report.vue ( Mounted ) : ", this.$route.path);
    console.log("Query ( Mounted ) : ", this.$route.query.srfid);
    this.$store
      .dispatch("downloadUserReport", this.$route.query.srfid)
      .then((resp) => {
        console.log("success");
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style lang="scss" scoped>
@import "../../scss/main.scss";
.reports {
  margin-top: 4rem;
  width: 100%;
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
  .missing {
    //width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 3rem;
    background: white;
    border-radius: 2rem;
    border: 3px solid $accent;
    padding: 3rem 0;
    img {
      width: 12rem;
      height: auto;
    }
    p {
      width: 100%;
      background: $secondary;
      border: 3px solid $accent;
      border-left: none;
      border-right: none;
      padding: 1rem 2rem;
      margin: 1rem 0;
      text-align: center;
      color: $accent;
    }
  }
  .pdf {
    width: 95vw;
    height: 90vh;
  }
}
</style>