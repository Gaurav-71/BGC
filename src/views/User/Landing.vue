<template>
  <div class="landing-page">
    <div class="hero-section">
      <DNA />
    </div>
  </div>
</template>

<script>
import DNA from "../../components/Animation/dna";
export default {
  components: {
    DNA,
  },
  created() {
    if (this.$store.getters.getLogStatus != "false") {
      this.$router.push("/admin");
    }
  },
};
</script>

<style lang="scss" scoped>
.landing-page {
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  .hero-section {
    height: 100vh;
    width: 100%;
    background: black;
    background-image: url("../../assets/Landing/hero.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
}
</style>