<template>
  <div class="main-services">
    <v-card class="elevation-7 left-card">
      <div class="overlay">
        <div class="service">
          <div class="service-name elevation-10">DNA/RNA sequencing</div>
          <div class="service-description elevation-10">
            <div class="text">
              <ul v-for="(service, x) in services" :key="x">
                <li>{{ service.title }}</li>
              </ul>
            </div>
            <v-btn to="/services/DNA-RNA-Sequencing" class="my-2 mb-7"
              >View</v-btn
            >
          </div>
        </div>
      </div>
      <img class="white--text" src="../../assets/Services/dna.jpg" />
    </v-card>
    <v-card class="elevation-7 right-card">
      <div class="overlay">
        <div class="service">
          <div class="service-name elevation-10">Bioinformatics Analysis</div>
          <div class="service-description elevation-10">
            <div class="text">
              <ul>
                <li>
                  Genome Analysis
                  <ul>
                    <li>Whole Genome Resequencing analysis and annotation</li>
                    <li>Whole Genome de novo analysis and annotation</li>
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
            <v-btn to="/services/Bioinformatics-analyisis" class="my-2 mb-7"
              >View</v-btn
            >
          </div>
        </div>
      </div>
      <img class="white--text" src="../../assets/Services/bio.jpg" />
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      services: [
        {
          title: "Whole Genome Sequencing (de novo and resequencing)",
        },

        {
          title: "Cross Species Comparative DNA sequencing",
        },
        {
          title: "Transcriptomes (RNA, small RNA)",
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
          title: "Amplicon, Sanger Sequencing ",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../../scss/main.scss";
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
    height: auto;
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
            @include responsive($tablet-portrait) {
              font-size: small;
              padding: 1rem;
              padding-bottom: 0.5rem;
            }
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
</style>