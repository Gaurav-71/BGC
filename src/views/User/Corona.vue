<template>
  <div class="corona">
    <section>
      <div class="sec-1">
        <div class="lr">
          <div class="left">
            <div class="display-1 lh">Save Yourself</div>
            <div class="display-1 lh">Save The World</div>
            <p class="py-4 lh">
              Coronavirus disease (COVID-19) is an infectious disease, feeling
              any symptoms ? Get tested immediately by booking a test with us.
            </p>
            <div class="lh my-flex1 dshow-in-mob">
              <v-btn
                color="rgb(230, 190, 138)"
                rounded
                raised
                class="mr-5"
                @click="route(1)"
              >
                <v-icon>mdi-hospital</v-icon>
                <a style="text-decoration: none; color: #1c8d76" class="ml-2"
                  >Hospital Login</a
                >
              </v-btn>
              <v-btn color="#1a5b4b" rounded raised @click="route(2)">
                <v-icon>mdi-phone</v-icon>
                <a
                  style="text-decoration: none; color: rgb(230, 190, 138)"
                  class="ml-2"
                  >Book a test</a
                >
              </v-btn>
            </div>
          </div>
          <div class="right">
            <img
              class="main-pic"
              src="../../assets/Covid-19/docs.png"
              alt="doctors"
            />
          </div>
        </div>
        <div class="overlay-container">
          <div class="overlay elevation-5">
            <div class="heading">
              BGC is approved for COVID-19 testing by ICMR, Government of India.
            </div>
            <div class="features">
              <div class="feature">
                <img
                  src="../../assets/Covid-19/affordable.svg"
                  alt="affordable"
                />
                <p>Fast and Affordable</p>
              </div>
              <div class="feature">
                <img src="../../assets/Covid-19/experts.svg" alt="experts" />
                <p>Accurate results by authorised physicians</p>
              </div>
              <!--  <div class="feature">
                <img src="../../assets/Covid-19/house.svg" alt="house" />
                <p>Sample collection from home or hospital is available</p>
              </div> -->
              <div class="feature">
                <img
                  src="../../assets/Covid-19/24-hours.svg"
                  alt="24-hr service"
                />
                <p>24x7 Service</p>
              </div>
            </div>
            <div class="line"></div>
          </div>
        </div>
      </div>
      <div class="sec-2"></div>
    </section>
  </div>
</template>

<script>
import gsap, { Power2, Bounce } from "gsap";
export default {
  created() {
    this.$store.commit("setNavColor", 1);
  },
  methods: {
    route(page) {
      if (page == 1) {
        this.$router.push("/covid-19/testing/login");
      }
      if (page == 2) {
        this.$router.push("/contact-us");
      }
    },
  },
  mounted() {
    const covid = gsap.timeline();
    covid.add();
    covid
      .from(".lh", 0.8, {
        y: -50,
        stagger: 0.5,
        opacity: 0,
        ease: Power2.easeOut,
      })
      .from(".right", 0.8, { opacity: 0, x: -100 }, "-=1.6")
      .from(".overlay-container", 0.8, { opacity: 0 }, "-=1.6")
      .from(".heading", 0.8, { opacity: 0, x: 100 })
      .from(
        ".feature",
        0.8,
        {
          x: -100,
          stagger: 0.3,
          opacity: 0,
          ease: Power2.easeOut,
        },
        "-=1.6"
      );
  },
};
</script>

<style lang="scss">
@import "../../scss/main.scss";
.corona {
  min-height: 100vh;
  @include responsive($phone) {
    margin-top: 3rem;
  }
  section {
    .sec-1,
    .sec-2 {
      width: 100%;
    }
    .sec-1 {
      height: 55vh;

      @include responsive($tablet-portrait) {
        height: 70vh;
      }
      @include responsive($phone) {
        height: 55vh;
      }
      .lr {
        height: 100%;
        width: 100%;
        display: flex;
        @include responsive($tablet-portrait) {
          flex-direction: column;
          align-items: center;
          justify-items: center;
        }
        @include responsive($phone) {
          height: auto;
          flex-direction: column;
        }
        z-index: 1;
        .left {
          flex-basis: 50%;
          padding-left: 8rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          @include responsive($tablet-portrait) {
            padding: 3rem 0 0 0;
            text-align: center;
          }
          @include responsive($phone) {
            padding: 2rem 0 0 0;
            text-align: center;
          }
          .lh {
            width: 100%;
            .v-btn {
              @include responsive($phone) {
                font-size: x-small;
              }
            }
            @include responsive($tablet-portrait) {
              padding: 0.5rem 1rem;
              margin: 0;
              display: flex;
              justify-content: center;
            }
            @include responsive($phone) {
              padding: 0.5rem 1rem;
              margin: 0;
              display: flex;
              justify-content: center;
            }
          }
          .display-1 {
            color: $primary;
          }
        }
        .right {
          height: 100%;
          flex-basis: 50%;
          display: flex;
          justify-content: center;
          align-items: flex-end;
          .main-pic {
            width: 650px;
            height: auto;
            @include responsive($tablet-portrait) {
              width: 630px;
            }
            @include responsive($phone) {
              margin-top: 3rem;
              width: 270px;
            }
          }
        }
      }
      .overlay-container {
        display: flex;
        justify-content: center;
        .overlay {
          position: absolute;

          top: 49vh;
          //margin-top: 52.5vh;
          width: 90vw;
          height: max-content;
          background: white;
          border-radius: 1.5rem;
          @include responsive($tablet-portrait) {
            top: 65vh;
          }
          @include responsive($phone) {
            top: 66vh;
          }
          .heading {
            width: 100%;
            text-align: center;
            padding: 1rem;
            font-size: xx-large;
            color: $primary;
            @include responsive($tablet-landscape) {
              padding: 1.5rem;
            }
            @include responsive($phone) {
              font-size: x-large;
            }
          }
          .features {
            width: 100%;
            display: flex;
            justify-content: space-around;
            align-items: center;
            padding: 1rem;
            @include responsive($phone) {
              flex-wrap: wrap;
            }
            .feature {
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              img {
                width: 130px;
                height: 130px;
              }
              p {
                padding: 1.5rem;
                color: $secondary;
                text-align: center;
              }
            }
          }
        }
      }
    }
    .sec-2 {
      height: 45vh;
      background: $secondary;
      @include responsive($tablet-landscape) {
        height: 55vh;
      }
      @include responsive($phone) {
        min-height: 150vh;
      }
      @include responsive($small-phone) {
        min-height: 210vh;
      }
    }
  }
}
</style>