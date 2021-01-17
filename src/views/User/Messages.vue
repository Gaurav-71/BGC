<template>
  <div class="contact-us">
    <Heading class="message-header" :headingObj="headingObj" />
    <main>
      <div class="left">
        <div v-if="$store.getters.getFooterStatus" class="top elevation-3">
          <div class="facebook">
            <v-btn
              :href="$store.getters.getProfile.data.facebook"
              target="_blank"
              block
              depressed
              tile
              ><i class="fa fa-facebook size" aria-hidden="true"></i>
              <span>Facebook</span></v-btn
            >
          </div>
          <v-divider vertical class="bottom-div"></v-divider>
          <div class="youtube">
            <v-btn
              :href="$store.getters.getProfile.data.youtube"
              target="_blank"
              block
              depressed
              tile
              ><i class="fa fa-youtube size" aria-hidden="true"></i
              ><span>Youtube</span></v-btn
            >
          </div>
          <v-divider vertical class="bottom-div"></v-divider>
          <div class="linkedin">
            <v-btn
              :href="$store.getters.getProfile.data.linkedin"
              target="_blank"
              block
              depressed
              tile
              ><i class="fa fa-linkedin size" aria-hidden="true"></i
              ><span>Linkedin</span></v-btn
            >
          </div>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.7551436669446!2d77.57085271482347!3d13.114692190762163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae189a9942f245%3A0x3d16041cc6856987!2sBengaluru%20Genomics%20Center%20(BGC)!5e0!3m2!1sen!2sin!4v1608369093353!5m2!1sen!2sin"
          frameborder="0"
          style="border: 0"
          allowfullscreen=""
          aria-hidden="false"
          tabindex="0"
          class="custom-iframe elevation-3"
        ></iframe>
        <div v-if="$store.getters.getFooterStatus" class="bottom">
          <div class="action">
            <v-btn
              :href="'tel:' + $store.getters.getProfile.data.phNo"
              block
              depressed
              tile
              ><i class="fa fa-phone size" aria-hidden="true"></i
              ><span>{{ $store.getters.getProfile.data.phNo }}</span></v-btn
            >
          </div>
          <v-divider vertical class="bottom-div"></v-divider>
          <div class="action">
            <v-btn
              :href="'mailto:' + $store.getters.getProfile.data.email"
              block
              depressed
              tile
              ><i class="fa fa-envelope size" aria-hidden="true"></i
              ><span class="lowercase">{{
                $store.getters.getProfile.data.email
              }}</span></v-btn
            >
          </div>
        </div>
      </div>
      <div class="right">
        <div class="flex">
          <input
            type="text"
            placeholder="Enter Name"
            class="name"
            v-model="detail.name"
          />
          <div class="spacer"></div>
          <input
            type="text"
            placeholder="Enter Email"
            class="email"
            v-model="detail.email"
          />
        </div>
        <transition
          name="custom-classes-transition"
          leave-active-class="animated bounceOutRight"
          appear
        >
          <textarea
            id="message"
            name="message"
            class="message"
            placeholder="Enter Message"
            v-if="!sendAway"
            v-model="detail.message"
          ></textarea>
        </transition>
        <div v-if="!sendAway" @click="fullSend" class="btn">Send Message</div>
      </div>
    </main>
    <v-divider style="width: 100%" class="my-10"></v-divider>
    <Heading class="addr-header" :headingObj="addrObj" />
    <div class="address-wrapper">
      <v-card max-width="420" class="mr-5" hover dark>
        <v-card-text>
          <h2 class="text-center">Molecular Diagnostics Lab 1</h2>
          <p class="text-center ma-0 pa-2">
            Plot No: 40/2, Opp: Duo Marvel Layout, Ramanashree California
            Gardens, Ananathapura Main Road, Yelahanka, Bangalore - 560064
          </p>
        </v-card-text>
      </v-card>

      <v-card max-width="420" hover dark>
        <v-card-text>
          <h2 class="text-center">Molecular Diagnostics Lab 2</h2>
          <p class="text-center ma-0 pa-2">
            No. 409, AGB Layout, Hesargatta main road, Opp. Sapthagiri Medical
            College & Hospital, next to Union Bank of India, Bangalore - 560090
          </p>
        </v-card-text>
      </v-card>
    </div>
  </div>
</template>

<script>
import Heading from "../../components/Design/Heading";
import gsap, { Power2, Bounce } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
export default {
  components: {
    Heading,
  },
  data() {
    return {
      headingObj: {
        h1: "Contact Us",
        h4: "Have any queries ? Feel free to contact us",
        src: "contact-us.svg",
      },
      addrObj: {
        h1: "Branches",
        h4: "Addresses of all our branches",
        src: "location.svg",
      },
      detail: {
        name: "",
        email: "",
        message: "",
        timestamp: "",
      },
      sendAway: false,
    };
  },
  methods: {
    fullSend() {
      if (
        this.detail.name.trim() != "" &&
        this.detail.email.trim() != "" &&
        this.detail.message.trim() != ""
      ) {
        this.sendAway = true;
        this.detail.timestamp = Date(Date.now());
        this.$store
          .dispatch("uploadMessage", this.detail)
          .then(() => {
            this.sendAway = false;
            this.detail.name = "";
            this.detail.email = "";
            this.detail.message = "";
            this.detail.timestamp = "";
          })
          .catch((resp) => {
            console.log(resp);
          });
      } else {
        alert("Please fill all details !");
      }
    },
  },
  created() {
    this.$store.commit("setNavColor", 1);
  },
  mounted() {
    const left = gsap.timeline();
    const header = gsap.timeline();
    header.from(".message-header", 1, { opacity: 0, y: -65 });
    left
      .from(".left", 1, { opacity: 0, x: -100 })
      .from(".right", 1, { opacity: 0, x: 100 }, "-=1");

    const addr = gsap.timeline({
      scrollTrigger: ".addr-header",
    });
    addr.add();
    addr.from(".addr-header", 1, { opacity: 0, x: 100 }).from(
      ".address-wrapper .v-card",
      1,
      {
        x: -100,
        stagger: 0.5,
        opacity: 0,
        ease: Power2.easeOut,
      },
      "-=0.4"
    );
  },
};
</script>

<style lang="scss" scoped>
@import "../../scss/main.scss";
.contact-us {
  margin-top: 4rem;
  min-height: calc(100vh - 4rem);
  padding: 1.5rem 2rem;
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
  main {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    @include responsive($phone) {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
    }
    .left {
      width: 50%;
      max-height: 68vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-self: center;
      overflow: hidden;
      @include responsive($phone) {
        width: 100%;
        max-height: 40vh;
        margin-bottom: 2rem;
      }
      .top {
        width: 100%;
        display: grid;
        grid-template-columns: auto 1px auto 1px auto;
        .facebook,
        .linkedin,
        .youtube {
          .v-btn {
            display: flex;
            align-items: center;
            justify-content: center;
            span {
              color: white;
              margin: 0;
              padding: 0;
              margin-left: 0.6rem;
              @include responsive($tablet-portrait) {
                display: none;
              }
              @include responsive($phone) {
                display: none;
              }
            }
            .size {
              color: white;
              font-size: 23px;
            }
          }
        }
        .facebook {
          .v-btn {
            background: #4267b2;
          }
        }
        .youtube {
          .v-btn {
            background: #fc0000;
          }
        }
        .linkedin {
          .v-btn {
            background: #2867b2;
          }
        }
      }
      .bottom {
        width: 100%;
        display: grid;
        grid-template-columns: auto 1px auto;
        @include responsive($phone) {
          grid-template-columns: 50% 50%;
        }
        .action {
          overflow-x: hidden;
          .v-btn {
            background: $secondary;
            display: flex;
            align-items: center;
            justify-content: center;
            i {
              @include responsive($tablet-portrait) {
                display: none;
              }
            }
            span {
              color: white;
              margin: 0;
              padding: 0;
              margin-left: 0.6rem;
              @include responsive($tablet-portrait) {
                font-size: x-small;
                margin: 0;
              }
              @include responsive($phone) {
                font-size: x-small;
                margin: 0;
              }
              @include responsive($small-phone) {
                font-size: 8px;
              }
            }
            .lowercase {
              text-transform: lowercase;
            }
            .size {
              color: white;
              font-size: 23px;
              @include responsive($phone) {
                display: none;
              }
            }
          }
        }
        .bottom-div {
          @include responsive($phone) {
            display: none;
          }
        }
      }
      .custom-iframe {
        width: 100%;
        height: 100vh;
      }
    }
    .right {
      width: 50%;
      max-height: 68vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 0 0 0 2rem;
      @include responsive($tablet-portrait) {
        width: 100%;
      }
      @include responsive($phone) {
        width: 100%;
        //max-height: max-content;
        min-height: 47.5vh;
        padding: 0;
        //margin-top: 10rem;
        //padding: 5rem 0 0 0;
      }
      @include responsive($small-phone) {
        padding: 0rem;
        max-height: 70vh;
      }

      h1 {
        color: $primary;
        margin-bottom: 0;
        @include responsive($tablet-portrait) {
          margin-top: 2.5rem;
        }
      }
      .flex {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        input {
          background: rgba(lighten($secondary, 15%), 0.4);
          border: 1px solid grey;
          padding: 12px 15px;
          width: 49%;
          //margin: 0 1rem 0 0;
          background-position-y: center;
          background-position-x: 0.5rem;
          background-size: 32.5px;
          background-repeat: no-repeat;
          text-indent: 35px;
          border-radius: 0.2rem;
        }
        .name {
          background-image: url("../../assets/Contact Us/name.svg");
        }
        .email {
          background-image: url("../../assets/Contact Us/email.svg");
        }
      }
      .message {
        width: 100%;
        margin: 1rem 0;
        background: rgba(lighten($secondary, 15%), 0.4);
        border: 1px solid grey;
        height: 100vh;
        border-radius: 0.2rem;
        padding: 0.8rem 0 0 1.2rem;
        vertical-align: top;
        word-break: break-all;
      }
      input::placeholder,
      textarea::placeholder {
        color: #333333;
        font-weight: bold;
        @include responsive($small-phone) {
          font-size: x-small;
        }
      }
      .btn {
        width: 100%;
        background: $secondary;
        color: white;
        padding: 0.6rem 1.2rem;
        border-radius: 0.4rem;
        text-align: center;
        cursor: pointer;
        transition: all 0.3s ease-in;
      }
      .btn:hover {
        background: darken($secondary, 3%);
      }
      .btn:active {
        transform: scale(0.98);
      }
    }
  }
  .address-wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: stretch;
    margin-top: 0.5rem;
    @include responsive($phone) {
      flex-wrap: wrap;
    }
    .v-card {
      background: $secondary;
      @include responsive($tablet-landscape) {
        max-width: 300px !important;
      }
      @include responsive($tablet-portrait) {
        max-width: 215px !important;
      }
      @include responsive($phone) {
        margin: 0.5rem 0;
      }
      h2 {
        color: $accent !important;
      }
    }
  }
}
</style>