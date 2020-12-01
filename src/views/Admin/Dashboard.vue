<template>
  <div class="dashboard">Hi Admin !</div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../../scss/main.scss";
.dashboard {
  margin-top: 4rem;
  min-height: calc(100vh - 4rem);
  background: $background;
  display: flex;
  justify-content: center;
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