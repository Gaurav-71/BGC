<template>
  <div class="landing-page">
    <div id="heroDna" class="hero-section">
      <DNA />
    </div>
    <section class="about-section white-bg">
      <Title class="about-title" text="About Us" />
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
      <Title class="covid-title" text="COVID-19 Testing" />
      <p>BGC is approved for COVID-19 testing by ICMR, Government of India.</p>
      <div class="covid-description">
        <div v-if="$store.getters.getFooterStatus" class="card call-card">
          <img src="../../assets/Landing/covid.png" alt="" />
          <v-btn rounded raised class="show-in-mob">
            <i class="fa fa-phone size" aria-hidden="true"></i>
            <a
              :href="'tel:' + $store.getters.getProfile.data.phNo"
              style="text-decoration: none"
              class="ml-2"
              >Book a test</a
            >
          </v-btn>
          <v-btn
            to="/contact-us"
            rounded
            raised
            class="dshow-in-mob"
            style="padding-top: 0.5rem"
          >
            <i class="fa fa-phone size" aria-hidden="true"></i>
            <a style="text-decoration: none" class="ml-2">Book a test</a>
          </v-btn>
        </div>
        <div class="card">
          <img src="../../assets/Covid-19/affordable.svg" alt="" />
          <p>Affordable</p>
        </div>
        <!-- <div class="card">
          <img src="../../assets/Covid-19/house.svg" alt="" />
          <p>Home Sample Collection Available</p>
        </div> -->
        <div class="card">
          <img src="../../assets/Covid-19/accuracy.svg" alt="" />
          <p>Accurate results</p>
        </div>
        <div class="card">
          <img src="../../assets/Covid-19/24-hours.svg" alt="" />
          <p>24x7 Service</p>
        </div>
      </div>
      <p class="mt-10 mx-0 py-3 myp">
        We provide RT-PCR testing for COVID-19
        <span v-if="$store.getters.getFooterStatus"
          >and have tested over
          {{ this.$store.getters.getProfile.data.cases }} samples.</span
        >
      </p>
    </section>
    <section class="services-section white-bg">
      <Title class="services-title" text="Services" />
      <MainServices class="mt-8" />
      <Services class="mt-2" />
    </section>
    <section class="partner-section">
      <Title class="partners-title" text="Partners" />
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

    <section class="announcements-section white-bg">
      <Title class="announcements-title" text="Announcements" />
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
      <div v-if="!$store.getters.getServiceStatus" class="mt-6 mx-0 py-3 myp">
        <v-btn to="/announcements" depressed class="pa-0 pl-2 pr-1 ma-0"
          >Click Here,</v-btn
        >to view all announcements
      </div>
    </section>
    <section class="technology-section">
      <Title class="tech-title" text="Technology" />
      <Kits class="mt-7" />
    </section>

    <section class="team-section white-bg">
      <Title class="team-title" text="Leadership & Team" />
      <div class="team-container">
        <div class="organizer">
          <img src="../../assets/Team/org-7.jpg" alt />
          <h3>Prof. Malali Gowda</h3>
          <h4>Founder & Director</h4>
        </div>
        <div class="organizer">
          <img src="../../assets/Team/org-22.jpg" alt />
          <h3>Dr. Pruthvi Chakravarthi</h3>
          <h4>CEO & Director</h4>
        </div>
        <div class="organizer">
          <img src="../../assets/Team/org-1.jpeg" alt />
          <h3>Dr. Usha G S</h3>
          <h4>Director</h4>
        </div>
        <div class="organizer">
          <img src="../../assets/Team/org-6.jpg" alt />
          <h3>Dr. Rajani Kantha</h3>
          <h4>Director</h4>
        </div>
      </div>
      <div class="my-5 mx-0 py-3 myp viewmore">
        <v-btn to="/team" depressed class="pa-0 pl-2 pr-1 ma-0"
          >Click Here,</v-btn
        >to view the list of directors, scientific advisors which make us a
        valuable team of professionals
      </div>
    </section>
    <section class="testimonial-section">
      <Title class="testimonial-title" text="Testimonials" />
      <div class="testimonial-container my-10">
        <v-card class="mx-auto elevation-4 t-card mai" max-width="375">
          <v-img
            height="250"
            src="../../assets/Testimonials/maitali.jpeg"
          ></v-img>

          <v-card-title class="mb-0 pb-0">Maitili Varma</v-card-title>

          <v-card-text>
            <v-row align="center" class="mx-0 px-0">
              <v-rating
                :value="4.5"
                color="amber"
                dense
                half-increments
                readonly
                size="14"
              ></v-rating>

              <div class="grey--text ml-4">4.5</div>
            </v-row>
            <v-divider style="width: 100%; margin: 0.8rem 0"></v-divider>
            <p style="text-align: left" class="ma-0 pa-0">
              The experience was overall excellent. I learnt a lot during this
              course. The lectures were very informative. The discussions have
              also helped me greatly.
            </p>
          </v-card-text>
        </v-card>
        <v-card class="mx-auto elevation-6 t-card sri" max-width="525">
          <v-img
            height="250"
            src="../../assets/Testimonials/srihari.jpeg"
          ></v-img>

          <v-card-title class="mb-0 pb-0">Srihari Prathapaneni</v-card-title>

          <v-card-text>
            <v-row align="center" class="mx-0 px-0">
              <v-rating
                :value="4.5"
                color="amber"
                dense
                half-increments
                readonly
                size="14"
              ></v-rating>

              <div class="grey--text ml-4">4.5</div>
            </v-row>
            <v-divider style="width: 100%; margin: 0.8rem 0"></v-divider>
            <p style="text-align: left" class="ma-0 pa-0">
              This course is not only meant for the beginners but the advance
              learner can also add new concepts to their knowledge. Explained
              with such good examples that it had made the things to see more
              transparently and the tricks used to access the tools had saved a
              lot more time while working on ubuntu. All the important sections
              of genomics is covered by BGC . I need not to apply for the
              various lessons of as this platform has provided me all of it
              under a one roof.
            </p>
          </v-card-text>
        </v-card>
        <v-card class="mx-auto elevation-4 t-card tan" max-width="375">
          <v-img
            height="250"
            src="../../assets/Testimonials/sriraksha.jpg"
          ></v-img>

          <v-card-title class="mb-0 pb-0">Sriraksha Padaki</v-card-title>

          <v-card-text>
            <v-row align="center" class="mx-0 px-0">
              <v-rating
                :value="5"
                color="amber"
                dense
                half-increments
                readonly
                size="14"
              ></v-rating>

              <div class="grey--text ml-4">5</div>
            </v-row>
            <v-divider style="width: 100%; margin: 0.8rem 0"></v-divider>
            <p style="text-align: left" class="ma-0 pa-0">
              Workshop, training in BGC is completely effective and worth your
              time and money as they give us a complete hands-on experience. It
              was very interactive.
            </p>
            <p style="text-align: left" class="ma-0 pa-0 show-in-mob">
              I felt like i was one of the major trainee/intern. The staff teach
              us so well and after completing the session, you will get better
              views on the subject as they put lot of involvement to make us
              understand the subject For me, even though I attended online
              workshop, it was an active and a very reasonable one.
            </p>
          </v-card-text>
        </v-card>
      </div>
    </section>
    <section class="gallery-section white-bg">
      <Title class="gallery-title" text="Gallery" />
      <v-carousel
        cycle
        height="500"
        class="mt-4 elevation-3 car"
        hide-delimiters
        show-arrows-on-hover
      >
        <v-carousel-item v-for="i in 31" :key="i">
          <v-img
            :src="require(`../../assets/Carousel/img${i + 1}.jpg`)"
            height="100%"
            :key="i"
          />
        </v-carousel-item>
      </v-carousel>
    </section>
    <section class="lab-section">
      <Title class="lab-title" text="Labs" />
      <p class="labp">
        We have two lab branches where we conduct all our research and tests.
      </p>
      <div class="address-wrapper">
        <v-card class="text-left mx-4 labc" max-width="420" hover dark>
          <v-card-text>
            <h2 class="text-center">Molecular Diagnostics Lab 1</h2>
            <p class="ma-0 pa-2">
              Plot No: 40/2, Opp: Duo Marvel Layout, Ramanashree California
              Gardens, Ananathapura Main Road, Yelahanka, Bangalore - 560064
            </p>
          </v-card-text> </v-card
        ><v-card class="text-left mx-4 labc" max-width="420" hover dark>
          <v-card-text>
            <h2 class="text-center">Molecular Diagnostics Lab 2</h2>
            <p class="ma-0 pa-2">
              No. 409, AGB Layout, Hesargatta main road, Opp. Sapthagiri Medical
              College & Hospital,next to Union Bank of India, Bangalore - 560090
            </p>
          </v-card-text>
        </v-card>
      </div>
    </section>
    <section class="contact-section white-bg">
      <Title class="contacts-title" text="Get in touch with us" />
      <p>
        Feel free to contact us anytime with your queries, we are always at your
        service !
      </p>
      <div class="container ct-btn">
        <v-btn to="/contact-us">Contact Us</v-btn>
      </div>
    </section>
  </div>
</template>

<script>
import DNA from "../../components/Design/dna";
import Title from "../../components/Design/Title";
import MainServices from "../../components/Design/MainServices";
import Services from "../../components/Design/Services";
import Kits from "../../components/Design/Kits";
import Loading from "../../components/Animation/Loader";
import gsap, { Power2, Bounce } from "gsap";
import EmptyMessage from "../../components/Design/Empty";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default {
  components: {
    DNA,
    Title,
    MainServices,
    Services,
    Kits,
    Loading,
    EmptyMessage,
  },
  data() {
    return {};
  },

  mounted() {
    this.$store.commit("setNavColor", 2);
    function isElementInViewport(el) {
      var rect = el.getBoundingClientRect();
      return (
        rect.bottom > 150 &&
        rect.right > 0 &&
        rect.left <
          (window.innerWidth ||
            document.documentElement.clientWidth) /* or $(window).width() */ &&
        rect.top <
          (window.innerHeight ||
            document.documentElement.clientHeight) /* or $(window).height() */
      );
    }
    let heroSection = document.getElementById("heroDna");
    window.addEventListener(
      "scroll",
      (event) => {
        if (isElementInViewport(heroSection)) {
          this.$store.commit("setNavColor", 2);
        } else {
          this.$store.commit("setNavColor", 1);
        }
      },
      false
    );

    //------------------ gsap animations ------------------------

    const about = gsap.timeline({ scrollTrigger: ".about-section" });
    about.add();
    about
      .from(".about-title", 0.8, { opacity: 0, y: -20 })
      .from(".about-section p", 0.8, { opacity: 0, y: 40 }, "-=0.8");

    const covid = gsap.timeline({ scrollTrigger: ".covid" });
    covid.add();
    covid
      .from(".covid-title", 0.8, { opacity: 0, y: -20 })
      .from(".covid p", 0.8, { opacity: 0, y: 20 })
      .from(
        ".covid .covid-description .card",
        0.8,
        {
          x: -100,
          stagger: 0.3,
          opacity: 0,
          ease: Power2.easeOut,
        },
        "-=0.8"
      );

    const services = gsap.timeline({ scrollTrigger: ".services-section" });
    services.add();
    services
      .from(".services-title", 0.8, { opacity: 0, y: -20 })
      .from(".main-services .left-card", 1, { opacity: 0, y: -40 }, "-=0.8")
      .from(".main-services .right-card", 1, { opacity: 0, y: -40 }, "-=0.8")
      .from(
        ".services-cards .sc",
        0.8,
        {
          y: -20,
          opacity: 0,
        },
        "-=0.6"
      );

    const testimonial = gsap.timeline({
      scrollTrigger: ".testimonial-section",
    });
    testimonial.add();
    testimonial.from(".testimonial-title", 1, { opacity: 0, y: -30 }).from(
      ".testimonial-container .t-card",
      1,
      {
        x: -100,
        stagger: 0.5,
        opacity: 0,
        ease: Power2.easeOut,
      },
      "-=0.4"
    );

    const team = gsap.timeline({
      scrollTrigger: ".team-section",
    });
    team.add();
    team
      .from(".team-title", 1, { opacity: 0, y: -30 })
      .from(
        ".organizer",
        1,
        {
          x: -100,
          stagger: 0.5,
          opacity: 0,
          ease: Power2.easeOut,
        },
        "-=0.4"
      )
      .from(".viewmore", 1, { opacity: 0, y: 30 }, "-=0.6");

    const announcement = gsap.timeline({
      scrollTrigger: ".announcements-section",
    });
    announcement.add();
    announcement
      .from(".announcements-title", 0.8, { opacity: 0, y: -20 })
      .from(".announcements-section p", 0.8, { opacity: 0, y: 20 });

    const partners = gsap.timeline({ scrollTrigger: ".partner-section" });
    partners.add();
    partners
      .from(".partners-title", 0.8, { opacity: 0, y: -20 })
      .from(".partner-section p", 0.8, { opacity: 0, y: 20 })
      .from(".partners-container", { opacity: 0 });

    const tech = gsap.timeline({
      scrollTrigger: ".tech-title",
    });
    tech.add();
    tech
      .from(".tech-title", 0.8, { opacity: 0, y: -20 })
      .from(".tech", 0.8, { delay: 0.5, opacity: 0, x: 100 })
      .from(
        ".kit",
        {
          x: -50,
          stagger: 0.3,
          opacity: 0,
          ease: Power2.easeOut,
        },
        "-=0.8"
      );

    const gallery = gsap.timeline({ scrollTrigger: ".gallery-section" });
    gallery.add();
    gallery.from(".gallery-title", 0.8, { opacity: 0, y: -20 });

    const lab = gsap.timeline({ scrollTrigger: ".lab-section" });
    lab.add();
    lab
      .from(".lab-title", 0.8, { opacity: 0, y: -20 })
      .from(".labp", 0.8, { opacity: 0, x: 50 })
      .from(
        ".labc",
        {
          x: -50,
          stagger: 0.3,
          opacity: 0,
          ease: Power2.easeOut,
        },
        "-=0.8"
      );

    const contacts = gsap.timeline({ scrollTrigger: ".contact-section" });
    contacts.add();
    contacts
      .from(".contacts-title", 0.8, { opacity: 0, y: -20 })
      .from(".contact-section p", 0.8, { opacity: 0, y: 20 })
      .from(".ct-btn", 0.8, { opacity: 0, x: 50 });

    //-----------------------------------------------------------

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
  overflow-x: hidden;
  .hero-section {
    margin: 0;
    padding: 0;
    background: $primary;
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
    margin: 1rem 0;
    padding: 0 1rem;
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
      @include responsive($phone) {
        flex-wrap: wrap;
        justify-content: center;
      }
      .card {
        margin-top: 2rem;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        @include responsive($phone) {
          margin: 1rem 2rem;
        }
        img {
          width: 120px;
          height: 120px;
          margin-bottom: 1rem;
          @include responsive($tablet-portrait) {
            width: 70px;
            height: 70px;
          }
          @include responsive($phone) {
            width: 160px;
            height: 160px;
          }
        }
        p {
          padding: 0;
          margin: 0;
          @include responsive($tablet-portrait) {
            font-size: small;
          }
        }

        .v-btn {
          //margin-top: 1rem;
          background: $secondary !important;
          color: $accent !important;
          .v-icon {
            display: none;
          }
          a {
            color: $accent !important;
            @include responsive($tablet-portrait) {
              font-size: small !important;
            }
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
  .testimonial-section {
    .testimonial-container {
      display: flex;
      justify-content: space-around;
      align-items: center;
      @include responsive($tablet-landscape) {
        transform: scale(0.72);
      }
      @include responsive($tablet-portrait) {
        flex-wrap: wrap-reverse;
        //align-items: stretch;
      }
      @include responsive($phone) {
        flex-wrap: wrap-reverse;
        margin: 1rem 0 !important;
      }
      .mai,
      .sri,
      .tan {
        @include responsive($tablet-portrait) {
          max-width: 550px !important;
          margin: 1rem;
        }
      }
      .tan {
        @include responsive($tablet-portrait) {
          margin-top: 0;
        }
      }
      .v-card {
        background-image: radial-gradient(
            circle at center center,
            transparent,
            rgb(255, 255, 255)
          ),
          repeating-linear-gradient(
            135deg,
            rgb(255, 255, 255) 0px,
            rgb(255, 255, 255) 12px,
            transparent 12px,
            transparent 19px,
            rgb(255, 255, 255) 19px,
            rgb(255, 255, 255) 24px,
            transparent 24px,
            transparent 28px
          ),
          repeating-linear-gradient(
            45deg,
            rgb(245, 245, 245) 0px,
            rgb(245, 245, 245) 7px,
            transparent 7px,
            transparent 14px
          ),
          linear-gradient(90deg, rgb(255, 255, 255), rgb(255, 255, 255));
        border-radius: 0.8rem !important;
        @include responsive($tablet-landscape) {
          margin: 1rem !important;
          padding: 0;
        }
        @include responsive($phone) {
          width: 88vw !important;
          margin: 1rem 0;
        }
        // background: $secondary;
        p {
          padding: 1rem;
          border-radius: 0.8rem;

          //color: $accent;
        }
      }
    }
  }
  .gallery-section {
    width: 100%;
    overflow: hidden;
    .loading-image {
      background: rgba($secondary, 0.4);
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      .text {
        margin-top: 1rem;
        color: $primary;
      }
    }
  }
  .team-section {
    .team-container {
      width: 100%;
      display: flex;
      justify-content: center;
      margin-top: 1rem;
      padding: 0.5rem 0;
      @include responsive($tablet-portrait) {
        flex-wrap: wrap;
      }
      @include responsive($phone) {
        flex-wrap: wrap;
      }
      .organizer {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 1rem 3rem;
        @include responsive($phone) {
          margin: 1rem;
        }
        h3 {
          color: $secondary;
          margin-top: 1rem;
          margin-bottom: 0.1rem;
        }
        h4 {
          margin: 0;
          color: darken($accent, 10%);
        }
        img {
          width: 250px;
          height: 250px;
          border-radius: 0.8rem;
          box-shadow: 5px 8px 10px rgba(0, 0, 0, 0.25);
        }
      }
    }
  }
  .lab-section {
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
        h2 {
          color: $accent !important;
        }
        @include responsive($tablet-landscape) {
          max-width: 300px !important;
        }
        @include responsive($tablet-portrait) {
          max-width: 215px !important;
        }
        @include responsive($phone) {
          margin: 0.5rem 0;
        }
        .v-card-text {
          p {
            color: $accent !important;
          }
        }
      }
    }
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

.size {
  font-size: 20px;
  margin: 0;
  @include responsive($phone) {
    font-size: 20px;
  }
  @include responsive($small-phone) {
    font-size: 15px;
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