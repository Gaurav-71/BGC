<template>
  <div class="custom-heading elevation-2">
    <div class="custom-flex">
      <img :src="imgAddr(imgSrc)" alt="heading-img" />
      <div class="custom-text">
        <h1>{{ headingObj.h1 }}</h1>
        <h4>{{ headingObj.h4 }}</h4>
      </div>
    </div>
    <v-divider class="elevation-1"></v-divider>
  </div>
</template>

<script>
export default {
  props: {
    headingObj: Object,
  },
  data() {
    return {
      imgSrc: this.headingObj.src,
    };
  },
  methods: {
    imgAddr(src) {
      return require("../../assets/Heading/" + src);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../scss/main.scss";
.custom-heading {
  padding: 1rem;
  background: white;
  width: 100%;
  margin-bottom: 1.5rem;
  .custom-flex {
    display: flex;
    align-items: center;
    padding: 0 1rem;
    img {
      width: 60px;
      height: 60px;
    }
    .custom-text {
      padding-left: 0.5rem;
      h1 {
        padding: 0 0 0 0.5rem;
        margin: 0;
        color: $accent;
        @include responsive($phone) {
          font-size: x-large;
        }
      }
      h4 {
        margin: 0;
        padding: 0 0 0.5rem 0.5rem;
        color: $primary;
        @include responsive($phone) {
          font-size: small;
        }
      }
    }
  }
}
</style>