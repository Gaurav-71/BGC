<template>
  <div class="kits-container">
    <p class="tech elevation-2">
      We have developed Super Resolution HLA typing technology for HLA typing
      for organ transplantation & other studies. Also, we have developed
      in-house diagnostic methods for diagnosis of the Blood disorders like
      Thalassemia & Sickle Cell Anaemia. We have developed multiple special kits
      mentioned below.
    </p>
    <div class="kits mt-7">
      <div class="kit elevation-2">
        <div class="img-container">
          <img class="mr-1" src="../../assets/Kits/dna.svg" alt="dna" />
        </div>
        <div>DNA isolation</div>
      </div>

      <div class="kit elevation-2">
        <div class="img-container">
          <img class="mr-1" src="../../assets/Kits/hla.svg" alt="dna" />
        </div>
        <div>HLA Typing</div>
      </div>
      <div class="kit elevation-2">
        <div class="img-container">
          <img class="mr-1" src="../../assets/Kits/beta.svg" alt="dna" />
        </div>
        <div>Beta Thalassemia</div>
      </div>
      <div class="kit elevation-2">
        <div class="img-container">
          <img class="mr-1" src="../../assets/Kits/anemia.svg" alt="dna" />
        </div>
        <div>Sickle Cell Anemia</div>
      </div>
      <div class="kit elevation-2">
        <div class="img-container">
          <img class="mr-1" src="../../assets/Kits/rna.svg" alt="dna" />
        </div>
        <div>RNA isolation</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../../scss/main.scss";
.kits-container {
  .tech {
    background: #266255;
    color: $accent;
    padding: 1rem;
    border-radius: 0.4rem;
  }
  .kits {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @include responsive($tablet-landscape) {
      flex-wrap: wrap;
      justify-content: space-around;
    }
    @include responsive($tablet-portrait) {
      flex-wrap: wrap;
      justify-content: space-around;
    }
    @include responsive($phone) {
      flex-wrap: wrap;
      justify-content: center;
    }
    .kit {
      width: 220px;
      height: 220px;
      display: grid;
      grid-template-rows: 80% 20%;
      justify-content: center;
      align-items: center;
      background: white;
      text-align: center;
      border-radius: 0.8rem;
      @include responsive($tablet-landscape) {
        margin: 1rem 0;
      }
      @include responsive($tablet-portrait) {
        margin: 1rem 0;
      }
      @include responsive($phone) {
        margin: 1rem 0;
      }
      .img-container {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background: white;
        border-radius: inherit;
        img {
          width: 120px;
          height: 120px;
        }
      }
      div {
        width: 220px;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #266255;
        color: $accent;
        border-bottom-left-radius: inherit;
        border-bottom-right-radius: inherit;
      }
    }
  }
}
</style>