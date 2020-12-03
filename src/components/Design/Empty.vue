<template>
  <div class="empty">
    <div class="img-bg elevation-15">
      <img class="mb-1" src="../../assets/Empty/warning.svg" alt="empty" />
    </div>
    <div>No {{ serviceType }} have been added yet !</div>
    <v-divider class="ml-4" dark></v-divider>
  </div>
</template>

<script>
export default {
  props: {
    serviceType: String,
  },
};
</script>

<style lang="scss" scoped>
@import "../../scss/main.scss";
.empty {
  width: 100%;
  padding: 1rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background: $secondary;
  border-radius: 1rem;
  .img-bg {
    height: 75px;
    width: 75px;
    background: white;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 0.8rem;
    img {
      width: 45px;
      height: 45px;
    }
  }
  div {
    color: $accent;
  }
}
</style>