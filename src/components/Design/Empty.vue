<template>
  <div v-if="$store.getters.getServiceLoadStatus" class="empty">
    <div class="img-bg elevation-15">
      <img class="mb-1" src="../../assets/Empty/warning.svg" alt="empty" />
    </div>
    <div>No {{ serviceType }} have been added yet !</div>
    <v-divider class="ml-4" dark></v-divider>
  </div>
  <div v-else class="empty">
    <div><Loader /></div>
    <div class="mx-4 white--text">Loading {{ serviceType }}</div>
    <v-divider dark></v-divider>
  </div>
</template>

<script>
import Loader from "../Animation/Loader";
export default {
  components: {
    Loader,
  },
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
    height: 70px;
    width: 70px;
    background: white;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 0.8rem;
    @include responsive($phone) {
      min-height: 65px;
      min-width: 65px;
    }
    img {
      max-width: 45px;
      height: 45px;
      @include responsive($phone) {
        width: 35px;
        height: 35px;
      }
    }
  }
  div {
    color: $accent;
  }
  .v-divider {
    background: $accent !important;
    @include responsive($phone) {
      display: none;
    }
  }
}
</style>