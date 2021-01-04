<template>
  <div class="services-about">
    <Heading class="page-header" :headingObj="headingObj" />
    <div class="main-services">
      <v-card class="elevation-7">
        <div class="overlay">
          <div class="service">
            <div class="service-name elevation-10">
              NGS Service : DNA/RNA sequencing
            </div>
            <div class="service-description elevation-10">
              <div class="text">
                <ul v-for="(service, x) in services" :key="x">
                  <li>{{ service.title }}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <img class="white--text" src="../../assets/Services/dna.jpg" />
      </v-card>
      <v-card class="elevation-7">
        <div class="overlay">
          <div class="service">
            <div class="service-name elevation-10">
              NGS Service : Bioinformatics Analysis
            </div>
            <div class="service-description elevation-10">
              <div class="text">
                <ul>
                  <li>
                    Genome Analysis
                    <ul>
                      <li>Metagenome, Phylogeny analysis</li>
                      <li>
                        Resequencing, De novo, Exome analysis and annotation
                      </li>

                      <li>Amplicon analysis (16S rRNA/ITS)</li>

                      <li>Marker (SSR, SNP, transposon) analysis</li>
                    </ul>
                  </li>
                  <li>
                    Transcriptome Analysis
                    <ul>
                      <li>De novo Transcriptome analysis</li>
                      <li>Reference based Transcriptome analysis</li>
                      <li>Metatranscriptome analysis</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <img class="white--text" src="../../assets/Services/bio.jpg" />
      </v-card>
    </div>
    <Services class="mt-3 mini-services" />
    <v-divider style="width: 100%" class="my-8 lol"></v-divider>
    <Heading class="kits-header" :headingObj="subHeading3" />
    <Kits class="kits-component" />
    <v-divider style="width: 100%" class="my-8"></v-divider>
    <DnaRna />
    <v-divider style="width: 100%" class="my-8"></v-divider>
    <Bioinformatics />
  </div>
</template>

<script>
import Heading from "../../components/Design/Heading";
import Services from "../../components/Design/Services";
import DnaRna from "../../components/Design/DnaRna";
import Bioinformatics from "../../components/Design/Bioinformatics";
import Kits from "../../components/Design/Kits";
import gsap, { Power2, Bounce } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export default {
  components: {
    Heading,
    Services,
    DnaRna,
    Bioinformatics,
    Kits,
  },
  data() {
    return {
      headingObj: {
        h1: "Services",
        h4: "All services offered by Bengaluru Genomics Center",
        src: "services.svg",
      },
      services: [
        {
          title: "Genome resequencing",
        },
        {
          title: "De novo resequencing",
        },
        {
          title: "Cross Species Comparative DNA sequencing",
        },
        {
          title: "Transcriptomes (RNA, small RNA)",
        },
        {
          title: "COVID-19 Testing following ICMR guidelines",
        },
        {
          title: "Meta-genomes & Meta-Transcriptomes",
        },
        {
          title: "HLA Typing",
        },
        {
          title: "Beta Thalassemia",
        },
        {
          title: "Sickle Cell Anaemia",
        },
        {
          title: "Genotyping (SNP, SSR, Genes)",
        },
        {
          title: "Amplicon Sequencing (R- Gene Panel, 16S rRNA/ITS, etc.)",
        },
        {
          title: "Sanger Sequencing",
        },
      ],
      subHeading3: {
        h1: "Technology",
        h4: "Innovative technologies developed by Bengaluru Genomic Center",
        src: "technology.svg",
      },
      unsubscribe: null,
    };
  },
  mounted() {
    const header = gsap.timeline();
    const tech = gsap.timeline({
      scrollTrigger: ".kits-header",
    });
    const dna = gsap.timeline({
      scrollTrigger: ".dna-div",
    });
    const bio = gsap.timeline({
      scrollTrigger: ".bio-header",
    });
    header.add();
    tech.add();
    dna.add();
    bio.add();
    header
      .from(".page-header", 1, {
        y: -100,
        opacity: 0,
      })
      .from(
        ".main-services",
        1,
        {
          y: -30,
          opacity: 0,
        },
        "-=0.7"
      )
      .from(".mini-services", { opacity: 0, x: -400 }, "-=0.6");
    tech
      .from(".kits-header", { opacity: 0, x: 100, delay: 0.3 })
      .from(".tech", { opacity: 0, x: -100 })
      .from(".kit", {
        x: -100,
        stagger: 0.3,
        opacity: 0,
        ease: Power2.easeOut,
      });
    dna.from(".dna-div", { opacity: 0, x: 100 }).from(".dna-info", {
      y: -50,
      stagger: 0.3,
      opacity: 0,
      ease: Power2.easeOut,
    });
    bio.from(".bio-header", { opacity: 0, x: 100 }).from(".bio-panel", {
      y: -50,
      stagger: 0.3,
      opacity: 0,
      ease: Power2.easeOut,
    });
  },
};
</script>

<style lang="scss" scoped>
@import "../../scss/main.scss";
.services-about {
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
  .main-services {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: stretch;
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
    .v-card {
      transition: all 0.2s ease-in;
      width: 46.5vw;
      min-height: 40vh;
      border-radius: 0.8rem;
      @include responsive($tablet-landscape) {
        margin: 1rem 0;
        width: 28rem;
        min-height: 25rem;
      }
      @include responsive($tablet-portrait) {
        margin: 1rem 0;
        width: 20rem;
        min-height: 25rem;
      }
      @include responsive($phone) {
        margin: 1rem 0;
        width: 20rem;
        min-height: 25rem;
      }
      .overlay {
        position: absolute;
        height: 100%;
        width: 100%;
        z-index: 10;
        background: rgba($color: $secondary, $alpha: 0.4);
        border-radius: inherit;
        transition: all 0.5s ease-in;
        .service {
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          transition: all 1s ease-in;
          .service-name,
          .service-description {
            width: 100%;
            padding: 1rem;
            text-align: center;
            background: rgba($color: $secondary, $alpha: 0.9);
            color: $accent;
            border: 1px solid $accent;
            border-right: none;
            border-left: none;
            text-transform: uppercase;
            font-weight: bold;
          }
          .service-name {
            font-size: medium;
            @include responsive($tablet-portrait) {
              font-size: small;
            }
            @include responsive($phone) {
              font-size: small;
            }
          }
          .service-description {
            transition: opacity 0.2s linear;
            opacity: 0;
            height: 0;
            width: 0;
            padding: 0;

            display: flex;
            justify-content: flex-start;
            align-items: center;
            text-align: left;
            flex-direction: column;
            overflow: hidden;
            .text {
              width: 100%;
              font-weight: normal;
              text-align: left;
              opacity: 0;
              transition: opacity 0.4s ease-in;
              transition-delay: 0.1s;
              text-transform: none;
              @include responsive($tablet-portrait) {
                font-size: small;
              }
              @include responsive($phone) {
                font-size: small;
              }
              //padding: 1rem;
            }
            .v-btn {
              width: 100%;
              height: 3rem;
              background: $accent;
              color: rgba($color: $secondary, $alpha: 0.9);
              border-radius: 1rem;
              text-transform: none;
              opacity: 0;
              transition: opacity 0.4s ease-in;
              transition-delay: 0.1s;
            }
          }
        }
      }
      img {
        width: 100%;
        height: 100%;
        border-radius: inherit;
      }
      .v-btn {
        height: 100%;
        background: $secondary;
        color: $accent;
        border-radius: inherit;
        border-top-right-radius: 0;
        border-top-left-radius: 0;
      }
    }
    .v-card:hover {
      transform: scale(1.04);

      .overlay {
        .service {
          .service-description {
            opacity: 1;
            height: max-content;
            width: 100%;
            margin-top: 1rem;
            padding: 0 1rem;
            .text {
              opacity: 1;
              padding: 0.5rem 1rem;
              @include responsive($phone) {
                font-size: small;
                padding: 1rem;
              }
            }
            .v-btn {
              opacity: 1;
            }
          }
        }
      }
    }
  }
}
</style>