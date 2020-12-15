<template>
  <div class="landing-page">
    <div class="hero-section">
      <div class="overlay"></div>
      <DNA />
      <div class="dna-title">Bengaluru Genomics Center</div>
      <span class="dna-subtitle">- Decode your Heredity -</span>
    </div>
    <section class="about-section white-bg">
      <Title text="About Us" />
      <p>
        Bengaluru Genomics Center (BGC) is a Genomics Science Company founded in
        2016 in the biotech and software hub, Bengaluru. We are built on high
        quality science fundamentals for active collaborations/alliances with
        the right partners, who have passion in the areas of genomics. We
        contributes to growth of genomic science by training over 1000
        scientists over all walks of life like Computer Science, Biology,
        Medicine, Agriculture, Environment, etc. We also provide genomic
        services and are an accredited medical laboratory and have developed HLA
        Typing and Diagnostic kits to test human genes. We have a well trained
        staff to carry out the laboratory operations pertaining to Genomics,
        Molecular Biology & Data analysis. The team is mentored by experts in
        Genomics & Boinformatics. We pride ourselves of having good connections
        with vendors across the length & breadth of country and we are an ICMR-
        approved COVID-19 testing lab as well.
      </p>
    </section>
    <section class="covid">
      <Title text="COVID-19 Testing" />
      <p>We are approved for COVID-19 testing by ICMR, Government of India.</p>
      <div class="covid-description">
        <div v-if="$store.getters.getFooterStatus" class="card">
          <img src="../../assets/Landing/covid.png" alt="" />
          <v-btn rounded raised>
            <v-icon>mdi-phone</v-icon>
            <a
              :href="'tel:' + $store.getters.getProfile.data.phNo"
              style="text-decoration: none"
              class="ml-2"
              >Book a test</a
            >
          </v-btn>
        </div>
        <div class="card">
          <img src="../../assets/Covid-19/affordable.svg" alt="" />
          <p>Affordable</p>
        </div>
        <div class="card">
          <img src="../../assets/Covid-19/house.svg" alt="" />
          <p>Home Testing Available</p>
        </div>
        <div class="card">
          <img src="../../assets/Covid-19/accuracy.svg" alt="" />
          <p>100% Accurate results</p>
        </div>
        <div class="card">
          <img src="../../assets/Covid-19/24-hours.svg" alt="" />
          <p>24x7 Service</p>
        </div>
      </div>
      <p class="mt-10 mx-0 py-3 myp">
        We provide RT-PCR testing for COVID-19 and have tested over 90,000
        samples.
      </p>
    </section>
    <section class="services-section white-bg">
      <Title text="Services" />
      <MainServices class="mt-8" />
      <Services class="mt-2" />
    </section>
    <section class="testimonial-section">
      <Title text="Testimonials" />
    </section>
    <section class="announcements-section white-bg">
      <Title text="Announcements" />
      <p>
        Recent events, activities and news regarding internships, workshops,
        trainings and much more
      </p>
      <div
        v-if="$store.getters.getServiceLoadStatus"
        class="announcement-cards"
      >
        <v-card
          v-for="announcement in $store.getters.getAnnouncements.slice(0, 4)"
          :key="announcement.id"
          class="announcement-card my-3"
          elevation="2"
          outlined
          shaped
          tile
          rounded
        >
          <div class="left">
            <div class="white-bg elevation-15">
              <v-img
                class="img-size"
                v-if="announcement.data.serviceType == 'Announcements'"
                src="../../assets/Heading/announcements.svg"
              ></v-img>
              <v-img
                class="img-size"
                v-else-if="announcement.data.serviceType == 'Internships'"
                src="../../assets/Heading/internship.svg"
              ></v-img>
              <v-img
                class="img-size"
                v-else-if="announcement.data.serviceType == 'Workshops'"
                src="../../assets/Heading/workshop.svg"
              ></v-img>
              <v-img
                class="img-size"
                v-else-if="announcement.data.serviceType == 'Trainings'"
                src="../../assets/Heading/training.svg"
              ></v-img>
              <v-img
                class="img-size"
                v-else-if="announcement.data.serviceType == 'Resources'"
                src="../../assets/Heading/resources.svg"
              ></v-img>
            </div>
          </div>
          <div class="right">
            <div class="title">
              <div class="title-name pa-0 ma-0">
                {{ announcement.data.title }}
              </div>
              <div class="timestamp pa-0 ma-0">
                Posted on {{ announcement.data.timestamp }}
              </div>
            </div>
            <v-divider class="mt-2 mb-3"></v-divider>
            <div class="description mb-5">
              {{ announcement.data.description }}
            </div>
            <v-btn
              v-if="announcement.data.serviceType == 'Internships'"
              to="/internships"
              class="mt-auto ml-auto px-10"
              >View</v-btn
            >
            <v-btn
              v-else-if="announcement.data.serviceType == 'Trainings'"
              to="/trainings"
              class="mt-auto ml-auto px-10"
              >View</v-btn
            >
            <v-btn
              v-else-if="announcement.data.serviceType == 'Resources'"
              to="/resources"
              class="mt-auto ml-auto px-10"
              >View</v-btn
            >
            <v-btn
              v-else-if="announcement.data.serviceType == 'Workshops'"
              to="/workshops"
              class="mt-auto ml-auto px-10"
              >View</v-btn
            >
            <v-btn
              v-else-if="
                announcement.data.serviceType == 'Announcements' &&
                announcement.data.link != null
              "
              :href="announcement.data.link"
              target="_blank"
              class="mt-auto ml-auto px-10"
              >View</v-btn
            >
          </div>
        </v-card>
        <EmptyMessage
          v-if="$store.getters.getServiceStatus"
          serviceType="announcements"
        />
      </div>
      <div class="mt-6 mx-0 py-3 myp">
        <v-btn to="/announcements" depressed class="pa-0 pl-2 pr-1 ma-0"
          >Click Here,</v-btn
        >to view all announcements
      </div>
    </section>
    <section class="partner-section">
      <Title text="Partners" />
      <p>
        We have collaborated with various premier institutes and have conducted
        both onsite & online training programmes in various fields.
      </p>
      <div class="partners-container">
        <div class="partners">
          <div class="partner">
            <img src="../../assets/Training/training-1.png" alt="" />
          </div>
          <div class="partner">
            <img src="../../assets/Training/training-2.png" alt="" />
          </div>
          <div class="partner">
            <img src="../../assets/Training/training-3.png" alt="" />
          </div>
          <div class="partner">
            <img src="../../assets/Training/training-4.png" alt="" />
          </div>
          <div class="partner">
            <img src="../../assets/Training/training-6.png" alt="" />
          </div>
          <div class="partner">
            <img src="../../assets/Training/training-7.png" alt="" />
          </div>
          <div class="partner">
            <img src="../../assets/Training/training-8.png" alt="" />
          </div>
          <div class="partner">
            <img src="../../assets/Training/training-5.png" alt="" />
          </div>
          <div class="partner">
            <img src="../../assets/Training/training-1.png" alt="" />
          </div>
        </div>
      </div>
    </section>
    <section class="gallery-section white-bg">
      <Title text="Gallery" />
    </section>
    <section class="technology-section">
      <Title text="Technology" />
      <Kits class="mt-7" />
    </section>
    <section class="contact-section white-bg">
      <Title text="Get in touch with us" />
      <p>
        Feel free to contact us anytime with your queries, we are always at your
        service !
      </p>
      <div class="container"><v-btn to="/contact-us">Contact Us</v-btn></div>
    </section>
  </div>
</template>

<script>
import DNA from "../../components/Animation/dna";
import Title from "../../components/Design/Title";
import MainServices from "../../components/Design/MainServices";
import Services from "../../components/Design/Services";
import Kits from "../../components/Design/Kits";
export default {
  components: {
    DNA,
    Title,
    MainServices,
    Services,
    Kits,
  },
  mounted() {
    this.$store
      .dispatch("downloadAnnouncements")
      .then((resp) => {
        this.unsubscribe = resp;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  created() {
    if (this.$store.getters.getLogStatus != "false") {
      this.$router.push("/admin");
    }
  },
};
</script>

<style lang="scss" scoped>
@import "../../scss/main.scss";
.landing-page {
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  .hero-section {
    height: 100vh;
    width: 100%;
    background: black;
    background-image: url("../../assets/Landing/hero.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    .overlay {
      width: 100%;
      height: 100%;
      position: absolute;
      background: rgba(black, 0.7);
      z-index: 1;
    }
    .dna-title {
      margin: 0;
      padding: 0;
      margin-top: 0.5rem;
      text-align: center;
      font-size: 4rem;
      color: white;
      font-family: "Anton", sans-serif !important;
      letter-spacing: 1px;
      z-index: 2;
      @include responsive($phone) {
        margin-top: 1.25rem;
        font-size: 2.5rem;
      }
      @include responsive($small-phone) {
        margin-top: 1.25rem;
        font-size: 2rem;
      }
    }
    .dna-subtitle {
      padding: 0;
      margin: 0;
      text-align: center;
      color: $accent;
      font-size: 3rem;
      letter-spacing: 1.5px;
      font-weight: bold;
      font-family: "Rouge Script", cursive !important;
      z-index: 2;
      display: inline-block;
      @include responsive($phone) {
        font-size: xx-large;
      }
    }
  }
  section {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-self: center;
    padding: 2rem 0;
    .myp {
      background: $secondary !important;
      color: $accent;
      text-align: center;
      .v-btn {
        background: $secondary !important;
        text-transform: none;
        color: $accent;
        font-weight: bolder;
        font-size: medium;
      }
    }
  }
  p {
    width: 100%;
    text-align: center;
    margin: 1rem;
    font-size: large;
  }
  .white-bg {
    background: white;
    background-image: $white;
    border: 3px solid $secondary;
    border-left: none;
    border-right: none;
  }
  .about-section {
    p {
      padding: 1rem 2rem;
      text-align: left;
    }
  }
  .services-section {
    padding: 2rem;
  }
  .covid {
    .covid-description {
      display: flex;
      justify-content: space-around;
      align-items: center;
      .card {
        margin-top: 2rem;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        img {
          width: 120px;
          height: 120px;
          margin-bottom: 1rem;
        }
        p {
          padding: 0;
          margin: 0;
        }

        .v-btn {
          //margin-top: 1rem;
          background: $secondary !important;
          color: $accent !important;
          a {
            color: $accent !important;
          }
        }
      }
    }
  }
  .announcements-section {
    .announcement-cards {
      margin-top: 0.5rem;
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: stretch;
      flex-wrap: wrap;
      padding: 0 2rem;
      .announcement-card {
        width: 49%;
        display: grid;
        grid-template-columns: 25% 75%;
        @include responsive($tablet-landscape) {
          grid-template-columns: 33% 67%;
        }
        @include responsive($tablet-portrait) {
          width: 100%;
        }
        @include responsive($phone) {
          width: 100%;
          min-height: 25rem;

          grid-template-columns: none;
          grid-template-rows: 30% 70%;
          padding-bottom: 1rem;
        }
        .left {
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          background: $secondary;
          .white-bg {
            height: 125px;
            width: 125px;
            display: flex;
            justify-content: center;
            align-items: center;
            background: white;
            border-radius: 50%;
            @include responsive($phone) {
              height: 95px;
              width: 95px;
            }
            .img-size {
              max-width: 65px;
              height: 65px;
              @include responsive($phone) {
                max-width: 50px;
                height: 50px;
              }
            }
          }
        }
        .right {
          width: 100%;
          display: flex;
          justify-content: flex-start;
          align-items: flex-start;
          flex-direction: column;
          padding: 1rem;
          overflow: hidden;
          .title {
            .title-name {
              color: $secondary;
              font-size: x-large;
            }
            .timestamp {
              color: grey;
              font-size: small;
            }
          }

          .v-divider {
            width: 100%;
            background: $secondary;
          }
          .v-btn {
            background: $secondary;
            color: $accent;
          }
        }
      }
    }
  }
  .partner-section {
    .partners-container {
      margin-top: 1rem;
      width: 100%;
      .partners {
        display: flex;
        justify-content: center;
        width: 100%;
        padding: 1rem 0;
        overflow: hidden;
        .partner {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          margin: 0 1rem;
          animation: marquee 6s linear infinite;
          @include responsive($phone) {
            animation: marquee-phone 10s linear infinite;
          }
          img {
            width: 160px;
            height: 160px;
            border-radius: 50%;
            //animation: shrink 5s linear infinite;
            //box-shadow: 5px 8px 10px rgba(0, 0, 0, 0.25);
          }
          h3 {
            margin: 1.5rem 0 0.7rem 0;
            color: darken($primary, 15%);
          }
          .country {
            display: flex;
            justify-content: center;
            align-items: center;
            img {
              width: 30px;
              height: 18px;
              border-radius: 0;
            }
            span {
              margin: 0 0.5rem;
              color: black;
              font-size: small;
            }
          }
        }
      }
    }
  }
  .technology-section {
    padding: 2rem;
  }
  .contact-section {
    .container {
      width: 100%;
      display: flex;
      justify-content: center;
      .v-btn {
        background: $secondary;
        color: $accent;
      }
    }
  }
}

@keyframes marquee {
  0% {
    transform: translateX(90%);
  }
  100% {
    transform: translateX(-90%);
  }
}

@keyframes marquee-phone {
  0% {
    transform: translateX(450%);
  }
  100% {
    transform: translateX(-450%);
  }
}
</style>