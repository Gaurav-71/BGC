<template>
  <div class="announcements">
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
        h1: "Announcements",
        h4:
          "Find all updates related to BGC internships, trainings, and workshops here",
        src: "announcements.svg",
      },
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../../scss/main.scss";
.announcements {
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