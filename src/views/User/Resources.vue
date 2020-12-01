<template>
  <div class="resources">
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
        h1: "Resources",
        h4: "",
        src: "resources.svg",
      },
    };
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
}
</style>