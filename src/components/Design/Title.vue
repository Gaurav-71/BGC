<template>
  <div class="custom-landing-title">
    <div class="display-1 custom-title">{{ text }}</div>
    <div class="line mt-3"></div>
  </div>
</template>

<script>
export default {
  props: {
    text: String,
  },
};
</script>

<style lang="scss" scoped>
@import "../../scss/main.scss";
.custom-landing-title {
  // width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .custom-title {
    letter-spacing: 1px;
    color: $secondary;
    // font-family: "Bebas Neue", cursive !important;

    //font-size: xx-large !important;
  }
  .line {
    width: 5%;
    height: 3px;
    background: $accent;
    @include responsive($phone) {
      width: 27.5%;
    }
  }
}
</style>