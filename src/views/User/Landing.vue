<template>
  <div class="landing-page">
    <div class="hero-section">
      <div class="overlay"></div>
      <DNA />
      <div class="dna-title">Bengaluru Genomics Center</div>
      <span class="dna-subtitle">- Decode your Heredity -</span>
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
@import "../../scss/main.scss";
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
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .overlay {
      width: 100%;
      height: 100%;
      position: absolute;
      background: rgba(black, 0.7);
      z-index: 1;
    }
    .dna-title {
      margin: 0;
      padding: 0;
      margin-top: 0.5rem;
      text-align: center;
      font-size: 4rem;
      color: white;
      font-family: "Anton", sans-serif !important;
      letter-spacing: 1px;
      z-index: 2;
    }
    .dna-subtitle {
      padding: 0;
      margin: 0;
      text-align: center;
      color: $accent;
      font-size: 3rem;
      letter-spacing: 1.5px;
      font-weight: bold;
      font-family: "Rouge Script", cursive !important;
      z-index: 2;
      display: inline-block;
    }
  }
}
</style>