<template>
  <div class="training">
    <Heading :headingObj="headingObj" />
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
        h1: "Training",
        h4: "",
        src: "training.svg",
      },
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../../scss/main.scss";
.training {
  margin-top: 4rem;
  min-height: calc(100vh - 4rem);
  background: $background;
  padding: 1.5rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  @include responsive($tablet-portrait) {
    min-height: auto;
  }
}
</style>