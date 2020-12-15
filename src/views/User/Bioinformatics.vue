<template>
  <div class="bioinf"><Bioinformatics /></div>
</template>

<script>
import Bioinformatics from "../../components/Design/Bioinformatics";
export default { components: { Bioinformatics } };
</script>

<style lang="scss" scoped>
@import "../../scss/main.scss";
.bioinf {
  margin-top: 4rem;
  min-height: calc(100vh - 4rem);
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  @include responsive($tablet-portrait) {
    margin-top: 3.5rem;
    min-height: auto;
  }
  @include responsive($phone) {
    margin-top: 3.5rem;
    padding: 1rem;
  }
}
</style>