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
            <div class="lh">
              <v-btn color="rgb(230, 190, 138)" rounded raised>
                <v-icon>mdi-phone</v-icon>
                <a
                  :href="'tel:' + $store.getters.getProfile.data.phNo"
                  style="text-decoration: none; color: #1c8d76"
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
              We are approved for COVID-19 testing by ICMR, Government of India.
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
                <p>100 % Accurate results by authorised physicians</p>
              </div>
              <div class="feature">
                <img src="../../assets/Covid-19/house.svg" alt="house" />
                <p>Sample collection from home or hospital is available</p>
              </div>
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
export default {};
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
            @include responsive($tablet-portrait) {
              padding: 0.5rem 1rem;
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
          z-index: 10;
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
        height: 145vh;
      }
    }
  }
}
</style>