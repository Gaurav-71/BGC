<template>
  <div class="dna-container">
    <div class="dna-wrapper">
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
    </div>
    <div class="dna-title">Bengaluru Genomics Center</div>
    <div class="dna-subtitle">- Decode your Heredity -</div>
  </div>
</template>

<script>
export default {};
</script>


<style lang="scss" scoped>
@import "../../scss/main.scss";
.dna-container {
  height: 100vh;
  width: 100%;
  background: rgba(black, 0.7);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .dna-wrapper {
    .dna {
      .bar {
        position: absolute;
        top: 38%;
        left: 28.5%;
        transform: translate(-50%, -50%);
        float: left;
        animation: rotateX 5s linear infinite;

        @keyframes rotateX {
          0% {
            transform: translate(-50%, -50%) rotateX(0);
            filter: hue-rotate(0deg);
          }
          100% {
            transform: translate(-50%, -50%) rotateX(360deg);
            filter: hue-rotate(360deg);
          }
        }

        &:nth-of-type(2) {
          margin-left: 1.5em;
          animation-delay: 0.2s;
        }
        &:nth-of-type(3) {
          margin-left: 3em;
          animation-delay: 0.4s;
        }
        &:nth-of-type(4) {
          margin-left: 4.5em;
          animation-delay: 0.6s;
        }
        &:nth-of-type(5) {
          margin-left: 6em;
          animation-delay: 0.8s;
        }
        &:nth-of-type(6) {
          margin-left: 7.5em;
          animation-delay: 1s;
        }
        &:nth-of-type(7) {
          margin-left: 9em;
          animation-delay: 1.2s;
        }
        &:nth-of-type(8) {
          margin-left: 10.5em;
          animation-delay: 1.4s;
        }
        &:nth-of-type(9) {
          margin-left: 12em;
          animation-delay: 1.6s;
        }
        &:nth-of-type(10) {
          margin-left: 13.5em;
          animation-delay: 1.8s;
        }
        &:nth-of-type(11) {
          margin-left: 15em;
          animation-delay: 2s;
        }
        &:nth-of-type(12) {
          margin-left: 16.5em;
          animation-delay: 2.2s;
        }
        &:nth-of-type(13) {
          margin-left: 18em;
          animation-delay: 2.4s;
        }
        &:nth-of-type(14) {
          margin-left: 19.5em;
          animation-delay: 2.6s;
        }
        &:nth-of-type(15) {
          margin-left: 21em;
          animation-delay: 2.8s;
        }
        &:nth-of-type(16) {
          margin-left: 22.5em;
          animation-delay: 3s;
        }
        &:nth-of-type(17) {
          margin-left: 24em;
          animation-delay: 3.2s;
        }
        &:nth-of-type(18) {
          margin-left: 25.5em;
          animation-delay: 3.4s;
        }
        &:nth-of-type(19) {
          margin-left: 27em;
          animation-delay: 3.6s;
        }
        &:nth-of-type(20) {
          margin-left: 28.5em;
          animation-delay: 4s;
        }
        &:nth-of-type(21) {
          margin-left: 30em;
          animation-delay: 4.2s;
        }
        &:nth-of-type(22) {
          margin-left: 31.5em;
          animation-delay: 4.4s;
        }
        &:nth-of-type(23) {
          margin-left: 33em;
          animation-delay: 4.6s;
        }
        &:nth-of-type(24) {
          margin-left: 34.5em;
          animation-delay: 4.8s;
        }
        &:nth-of-type(25) {
          margin-left: 36em;
          animation-delay: 5s;
        }
        &:nth-of-type(26) {
          margin-left: 37.5em;
          animation-delay: 5.2s;
        }
        &:nth-of-type(27) {
          margin-left: 39em;
          animation-delay: 5.4s;
        }
        &:nth-of-type(28) {
          margin-left: 41.5em;
          animation-delay: 5.6s;
        }
        &:nth-of-type(29) {
          margin-left: 42em;
          animation-delay: 3.8s;
        }

        div:nth-of-type(1),
        div:nth-of-type(3) {
          height: 20px;
          width: 20px;
          background: #ff5722;
          border-radius: 50%;
        }

        div:nth-of-type(2) {
          height: 150px;
          width: 10px;
          background: #ff5722;
          border-radius: 50px;
          margin: 0.3em 0 0.3em 5px;
        }
      }
    }
  }
  .dna-title {
    width: 100%;
    position: absolute;
    top: 52%;
    text-align: center;
    font-size: 4rem;
    color: white;
    font-family: "Anton", sans-serif !important;
    letter-spacing: 1px;
  }
  .dna-subtitle {
    width: 100%;
    position: absolute;
    top: calc(52% + 5rem);
    text-align: center;
    color: $accent;
    font-size: 3rem;
    letter-spacing: 1.5px;
    font-weight: bold;
    font-family: "Rouge Script", cursive !important;
  }
}
</style>