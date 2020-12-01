<template>
  <div class="dna">
    <section class="bar">
      <div></div>
      <div></div>
      <div></div>
    </section>
    <section class="bar">
      <div></div>
      <div></div>
      <div></div>
    </section>
    <section class="bar">
      <div></div>
      <div></div>
      <div></div>
    </section>
    <section class="bar">
      <div></div>
      <div></div>
      <div></div>
    </section>
    <section class="bar">
      <div></div>
      <div></div>
      <div></div>
    </section>
    <section class="bar">
      <div></div>
      <div></div>
      <div></div>
    </section>
    <section class="bar">
      <div></div>
      <div></div>
      <div></div>
    </section>
    <section class="bar">
      <div></div>
      <div></div>
      <div></div>
    </section>
    <section class="bar">
      <div></div>
      <div></div>
      <div></div>
    </section>
    <section class="bar">
      <div></div>
      <div></div>
      <div></div>
    </section>
    <section class="bar">
      <div></div>
      <div></div>
      <div></div>
    </section>
    <section class="bar">
      <div></div>
      <div></div>
      <div></div>
    </section>
    <section class="bar">
      <div></div>
      <div></div>
      <div></div>
    </section>
    <section class="bar">
      <div></div>
      <div></div>
      <div></div>
    </section>
    <section class="bar">
      <div></div>
      <div></div>
      <div></div>
    </section>
    <section class="bar">
      <div></div>
      <div></div>
      <div></div>
    </section>
    <section class="bar">
      <div></div>
      <div></div>
      <div></div>
    </section>
    <section class="bar">
      <div></div>
      <div></div>
      <div></div>
    </section>
    <section class="bar">
      <div></div>
      <div></div>
      <div></div>
    </section>
    <section class="bar">
      <div></div>
      <div></div>
      <div></div>
    </section>
    <section class="bar">
      <div></div>
      <div></div>
      <div></div>
    </section>
    <section class="bar">
      <div></div>
      <div></div>
      <div></div>
    </section>
    <section class="bar">
      <div></div>
      <div></div>
      <div></div>
    </section>
    <section class="bar">
      <div></div>
      <div></div>
      <div></div>
    </section>
    <section class="bar">
      <div></div>
      <div></div>
      <div></div>
    </section>
    <section class="bar">
      <div></div>
      <div></div>
      <div></div>
    </section>
    <section class="bar">
      <div></div>
      <div></div>
      <div></div>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../../scss/main.scss";
.dna {
  z-index: 2;
  .bar {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    float: left;
    animation: rotateX 5s linear infinite;
    margin: 0 0.2rem;
    @keyframes rotateX {
      0% {
        transform: rotateX(0);
        filter: hue-rotate(0deg);
      }
      100% {
        transform: rotateX(360deg);
        filter: hue-rotate(360deg);
      }
    }
    &:nth-of-type(2) {
      //margin-left: 1.5em;
      animation-delay: 0.2s;
    }
    &:nth-of-type(3) {
      //margin-left: 3em;
      animation-delay: 0.4s;
    }
    &:nth-of-type(4) {
      //margin-left: 4.5em;
      animation-delay: 0.6s;
    }
    &:nth-of-type(5) {
      //margin-left: 6em;
      animation-delay: 0.8s;
    }
    &:nth-of-type(6) {
      //margin-left: 7.5em;
      animation-delay: 1s;
    }
    &:nth-of-type(7) {
      //margin-left: 9em;
      animation-delay: 1.2s;
    }
    &:nth-of-type(8) {
      //margin-left: 10.5em;
      animation-delay: 1.4s;
    }
    &:nth-of-type(9) {
      //margin-left: 12em;
      animation-delay: 1.6s;
    }
    &:nth-of-type(10) {
      //margin-left: 13.5em;
      animation-delay: 1.8s;
    }
    &:nth-of-type(11) {
      //margin-left: 15em;
      animation-delay: 2s;
    }
    &:nth-of-type(12) {
      //margin-left: 16.5em;
      animation-delay: 2.2s;
    }
    &:nth-of-type(13) {
      //margin-left: 18em;
      animation-delay: 2.4s;
    }
    &:nth-of-type(14) {
      //margin-left: 19.5em;
      animation-delay: 2.6s;
    }
    &:nth-of-type(15) {
      //margin-left: 21em;
      animation-delay: 2.8s;
    }
    &:nth-of-type(16) {
      //margin-left: 22.5em;
      animation-delay: 3s;
    }
    &:nth-of-type(17) {
      //margin-left: 24em;
      animation-delay: 3.2s;
    }
    &:nth-of-type(18) {
      //margin-left: 25.5em;
      animation-delay: 3.4s;
    }
    &:nth-of-type(19) {
      //margin-left: 27em;
      animation-delay: 3.6s;
    }
    &:nth-of-type(20) {
      //margin-left: 28.5em;
      animation-delay: 4s;
    }
    &:nth-of-type(21) {
      //margin-left: 30em;
      animation-delay: 4.2s;
    }
    &:nth-of-type(22) {
      //margin-left: 31.5em;
      animation-delay: 4.4s;
    }
    &:nth-of-type(23) {
      //margin-left: 33em;
      animation-delay: 4.6s;
    }
    &:nth-of-type(24) {
      //margin-left: 34.5em;
      animation-delay: 4.8s;
    }
    &:nth-of-type(25) {
      //margin-left: 36em;
      animation-delay: 5s;
    }
    &:nth-of-type(26) {
      //margin-left: 37.5em;
      animation-delay: 5.2s;
    }
    &:nth-of-type(27) {
      //margin-left: 39em;
      animation-delay: 5.4s;
    }
    &:nth-of-type(28) {
      //margin-left: 41.5em;
      animation-delay: 5.6s;
    }
    &:nth-of-type(29) {
      //margin-left: 42em;
      animation-delay: 3.8s;
    }
    div:nth-of-type(1),
    div:nth-of-type(3) {
      height: 20px;
      width: 20px;
      background: #ff5722;
      border-radius: 50%;
      @include responsive($tablet-portrait) {
        height: 18px;
        width: 18px;
      }
      @include responsive($phone) {
        height: 6.5px;
        width: 6.5px;
      }
    }
    div:nth-of-type(2) {
      height: 150px;
      width: 10px;
      background: #ff5722;
      border-radius: 50px;
      margin: 0.3em 0 0.3em 0;

      @include responsive($phone) {
        height: 90px;
        width: 6px;
      }
    }
  }
}
</style>