<template>
  <div class="services-about">
    <Heading class="page-header" :headingObj="headingObj" />
    <div class="main-services">
      <v-card class="elevation-7">
        <div class="overlay">
          <div class="service">
            <div class="service-name elevation-10">DNA/RNA sequencing</div>
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
            <div class="service-name elevation-10">Bioinformatics Analysis</div>
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
    <Services class="mt-3" />
    <v-divider style="width: 100%" class="my-8"></v-divider>
    <Heading class="page-header" :headingObj="subHeading3" />
    <p class="tech elevation-2">
      We have developed Super Resolution HLA typing technology for HLA typing
      for organ transplantation & other studies. Also, we have developed
      in-house diagnostic methods for diagnosis of the Blood disorders like
      Thalassemia & Sickle Cell Anaemia. We have developed multiple special kits
      mentioned below.
    </p>
    <div class="kits mt-2">
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
    <v-divider style="width: 100%" class="my-8"></v-divider>

    <Heading class="page-header" :headingObj="subHeading1" />
    <!--<v-expansion-panels multiple accordion :value="expanded">--->
    <v-expansion-panels>
      <v-expansion-panel
        class="my-2"
        style="background: #266255"
        v-for="(service, i) in services"
        :key="i"
      >
        <v-expansion-panel-header
          style="
            color: rgb(230, 190, 138);
            display: flex;
            justify-content: space-around;
            font-size: medium;
          "
          class="expansion-header font-weight-bold"
        >
          <span>{{ service.title }}</span>
          <template v-slot:actions>
            <v-icon color="white"> $expand </v-icon>
          </template>
        </v-expansion-panel-header>
        <v-expansion-panel-content class="white">
          <v-divider style="width: 100%" class="mb-4"></v-divider>
          {{ service.desc }}
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
    <v-divider style="width: 100%" class="my-8"></v-divider>
    <Heading class="page-header" :headingObj="subHeading2" />
    <v-expansion-panels multiple accordion :value="expanded">
      <v-expansion-panel class="my-2" style="background: #266255">
        <v-expansion-panel-header
          style="
            color: rgb(230, 190, 138);
            display: flex;
            justify-content: space-around;
            font-size: medium;
          "
          class="expansion-header font-weight-bold"
        >
          Genome Analysis
          <template v-slot:actions>
            <v-icon color="white"> $expand </v-icon>
          </template>
        </v-expansion-panel-header>
        <v-expansion-panel-content color="grey darken-4">
          <v-divider style="width: 100%" class="mb-4"></v-divider>
          <v-expansion-panels>
            <v-expansion-panel
              class="my-2"
              style="background: #266255"
              v-for="(service, i) in genomeAnalysis"
              :key="i"
            >
              <v-expansion-panel-header
                style="
                  color: rgb(230, 190, 138);
                  display: flex;
                  justify-content: space-around;
                  font-size: medium;
                "
                class="expansion-header font-weight-bold"
              >
                <span>{{ service.title }}</span>
                <template v-slot:actions>
                  <v-icon color="white"> $expand </v-icon>
                </template>
              </v-expansion-panel-header>
              <v-expansion-panel-content
                v-if="service.steps != null"
                class="white"
              >
                <v-divider style="width: 100%" class="mb-4"></v-divider>
                <h2 style="color: #266255">Steps Involved</h2>
                <v-divider class="my-2" style="width: 100%"></v-divider>
                <ul
                  v-for="(step, j) in service.steps"
                  :key="j"
                  style="list-style-type: none"
                >
                  <li class="mb-1">{{ j + 1 }}. {{ step }}</li>
                </ul>
              </v-expansion-panel-content>
              <v-expansion-panel-content v-else class="white">
                <v-divider style="width: 100%" class="mb-4"></v-divider
                >{{ service.desc }}</v-expansion-panel-content
              >
            </v-expansion-panel>
          </v-expansion-panels>
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel class="my-2" style="background: #266255">
        <v-expansion-panel-header
          style="
            color: rgb(230, 190, 138);
            display: flex;
            justify-content: space-around;
            font-size: medium;
          "
          class="expansion-header font-weight-bold"
        >
          Transcriptome Analysis
          <template v-slot:actions>
            <v-icon color="white"> $expand </v-icon>
          </template>
        </v-expansion-panel-header>
        <v-expansion-panel-content color="grey darken-4">
          <v-divider style="width: 100%" class="mb-4"></v-divider>
          <v-expansion-panels>
            <v-expansion-panel
              class="my-2"
              style="background: #266255"
              v-for="(service, i) in transcriptomeAnalysis"
              :key="i"
            >
              <v-expansion-panel-header
                style="
                  color: rgb(230, 190, 138);
                  display: flex;
                  justify-content: space-around;
                  font-size: medium;
                "
                class="expansion-header font-weight-bold"
              >
                <span>{{ service.title }}</span>
                <template v-slot:actions>
                  <v-icon color="white"> $expand </v-icon>
                </template>
              </v-expansion-panel-header>
              <v-expansion-panel-content
                v-if="service.steps != null"
                class="white"
              >
                <v-divider style="width: 100%" class="mb-4"></v-divider>
                <h2 style="color: #266255">Steps Involved</h2>
                <v-divider class="my-2" style="width: 100%"></v-divider>
                <ul
                  v-for="(step, j) in service.steps"
                  :key="j"
                  style="list-style-type: none"
                >
                  <li class="mb-1">{{ j + 1 }}. {{ step }}</li>
                </ul>
              </v-expansion-panel-content>
              <v-expansion-panel-content v-else class="white">
                <v-divider style="width: 100%" class="mb-4"></v-divider
                >{{ service.desc }}</v-expansion-panel-content
              >
            </v-expansion-panel>
          </v-expansion-panels>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script>
import Heading from "../../components/Design/Heading";
import Services from "../../components/Design/Services";
export default {
  components: {
    Heading,
    Services,
  },
  data() {
    return {
      headingObj: {
        h1: "Services",
        h4: "All services offered by Bengaluru Genomics Center",
        src: "services.svg",
      },
      subHeading1: {
        h1: "DNA/RNA Sequencing",
        h4:
          "All services offered under DNA/RNA sequencing, click on each service to read more",
        src: "dna.svg",
      },
      subHeading2: {
        h1: "Bioinformatics Analysis",
        h4:
          "All services offered under Bioinformatics Analysis, click on each service to read more",
        src: "dna1.svg",
      },
      subHeading3: {
        h1: "Technology",
        h4: "Innovative technologies developed by Bengaluru Genomic Center",
        src: "technology.svg",
      },
      services: [
        {
          title: "Genome resequencing",
          desc:
            "The method of complete DNA sequencing of a species whose reference is already available is nothing but whole genome resequencing. It is ideal for discovery applications, comparative studies, identifying inherited disorders, characterizing mutations, tracking the disease progression etc.",
        },
        {
          title: "De novo resequencing",
          desc:
            "de novo sequencing is decoding of ATGC arrangements of an uncharacterized genomes whose reference sequence is not available. It is carried out without the prior knowledge of the genome sequence of interest and also provides novel insight into an organism genetics and biology.",
        },
        {
          title: "Cross Species Comparative DNA sequencing",
          desc:
            "Cross Species Comparative DNA sequencing for species at varying evolutionary distances is a powerful approach for identifying coding and functional noncoding sequences, as well as sequences that are unique for a given organism.",
        },
        {
          title: "Transcriptomes (RNA, small RNA)",
          desc:
            " Next generation sequencing technologies can be utilized to the study of transcriptomics. RNA- Seq or RNA sequencing employs high-throughput sequencing of complementary DNA fragments delivering a transcriptional profile.",
        },
        {
          title: "COVID-19 Testing following ICMR guidelines",
          desc:
            "The COVID-19 RT-PCR test is a real-time reverse transcription polymerase chain reaction test for the qualitative detection of nucleic acid from SARS-CoV-2 in upper and lower respiratory specimens (such as nasopharyngeal or oropharyngeal swabs etc.)",
        },
        {
          title: "Meta-genomes & Meta-Transcriptomes",
          desc:
            "Metatranscriptome sequencing is sequencing of RNA molecules of microbial community to reveal the structure, function and diversity. It also complements metagenome sequencing. This approach of sequencing will help researches to conduct different studies like antibiotic resistance prediction, host pathogen interaction, quantifying gene expression changes, tracking disease progression etc.",
        },
        {
          title: "HLA Typing",
          desc:
            "The information of Human Leukocyte Antigen (HLA) genes (class I and II) is important for organ transplantation (bone marrow, liver, kidney) and immunity. The foregoing HLA typing methods can detect known alleles which only cover partial HLA gene (exon 2 and 3 of class I, and exon 2 of class II). Moreover, these methods are expensive and only provide low resolution, less accurate and lack of haplotype information. BGC has developed HLA haplotyping methodology using single molecule sequencing (Gowda 2016; Patent). This method capture and sequence complete full-length of Class I and Class II HLA genes. We have bioinformatics tools which resolves paternal and maternal alleles",
        },
        {
          title: "Beta Thalassemia",
          desc:
            "It is the major blood disorders in Indian population. The specific mutation (deletion/Insertion/substitution) in the β-globin gene causes frameshift or premature stop codon(s) in the protein coding open reading frame. This may lead to loss of protein or synthesis of totally different protein, which may not participate in haemoglobin formation. These patients experience low level of oxygen in their blood and require frequent blood transfusion.",
        },
        {
          title: "Sickle Cell Anaemia",
          desc:
            "It is one of major Hemoglobinopathies or blood disorders. This is caused by specific mutations in β-globin gene, which change haemoglobin structure and lead to formation of sickle shaped red blood cells, which reduces oxygen supply to organs and require frequent blood transfusion.",
        },
        {
          title: "Genotyping (SNP, SSR, Genes)",
          desc:
            " Genotyping is the process of determining genetic variants in an individual by examining the individual's DNA sequence and comparing it to another individual's sequence or a reference sequence.",
        },
        {
          title: "Amplicon Sequencing (R- Gene Panel, 16S rRNA/ITS, etc.)",
          desc:
            " Amplicon-based targeted resequencing is a commonly adopted solution for next-generation sequencing applications focused on specific genomic regions characterized by high specificity and deep coverage.",
        },
        {
          title: "Sanger Sequencing",
          desc:
            "Sanger Sequencing, also known as Chain Termination Method was developed in 1977 by Frederick Sanger and his colleagues to determine the sequence of nucleotide bases in a piece of DNA with 99.99% base accuracy. It is considered a “gold standard” for validating DNA sequences including those already sequenced through Next Generation Sequencing (NGS).",
        },
      ],
      genomeAnalysis: [
        {
          title: "Genome Resequencing analysis and annotation",
          steps: [
            "Raw Reads: Quality and Statistics",
            "Filtered Reads: Quality and Statistics",
            "Alignment of reads against Reference Genome: mapping statistics and graphs",
            "Variant (SNPs, InDels, Structural Variants etc.) detection",
            "Variant annotation",
            "Identification of novel variants",
            "Comparative analysis (more than 2 samples)",
          ],
        },
        {
          title: "Genome de novo analysis and annotation",
          steps: [
            "Raw Reads: Quality and Statistics",
            "Filtered Reads: Quality and Statistics",
            "Assembly of reads into contigs and Scaffolds",
            "Genome assembly statistics",
            "Gene prediction",
            "Gene annotation",
            "Gene ontology, functional classification of genes in biological process, cellular components and molecular functions",
            "Genome wide SSRs identification",
            "Phylogenetic analysis",
          ],
        },
        {
          title: "Exome analysis and annotation",
          steps: [
            "Raw Reads: Quality and Statistics",
            "Filtered Reads: Quality and Statistics",
            "Alignment of reads against Reference Genome: mapping statistics and graphs",
            "SNPs and InDels calling",
            "SNPs and InDels annotation",
            "Gene Ontology",
          ],
        },
        {
          title: "Amplicon analysis (16S rRNA/ITS)",
          steps: [
            "Raw Reads: Quality and Statistics",
            "Filtered Reads: Quality and Statistics",
            "OTUs (Operational Taxonomic Units) identification",
            "Taxonomic and phylogenetic analysis",
            "Diversity and rarefaction analysis",
          ],
        },
        {
          title: "Metagenome analysis",
          steps: [
            "Raw Reads: Quality and Statistics",
            "Filtered Reads: Quality and Statistics",
            "Assembly",
            "Phylogenetic analysis and taxonomic classification",
            "Gene prediction and functional annotation",
            " Pathway analysis",
            "Abundance estimation",
            "Comparative analysis (more than two samples)",
            "Principle component analysis",
          ],
        },
        {
          title: "Marker (SSR, SNP, transposon) analysis",
          steps: null,
          desc:
            "In marker analysis, genetic markers (polymorphic genetic sequences) like RFLPs or microsatellites are analysed rather than analysing the sequence of a gene directly. Marker analysis approach is quite helpful in population biology and ecology studies that can be used to trace patterns in populations like plants, animals, humans, etc.",
        },
        {
          title: "Phylogeny analysis",
          steps: null,
          desc:
            "The branching pattern of ancestor–descendant relationships among ‘taxa’ (e.g., species or their genes) is called a ‘phylogeny’. ‘Phylogenetics’ is the process of attempting to estimate these historical relationships by examining information such as DNA, protein sequences, or morphological (shape) characters from extant taxa.",
        },
      ],
      transcriptomeAnalysis: [
        {
          title: "De novo Transcriptome analysis",
          steps: [
            "Raw Reads: Quality and Statistics",
            "Filtered Reads: Quality and Statistics",
            "De novo assembly of transcripts to contigs/Scaffolds",
            "Coding region prediction",
            "Coding region annotation",
            "Identification of SSRs and SNPs",
            "Identification of isoforms and alternative splice sites ",
            "Gene Ontology and pathway analysis",
            "Gene expression profiling",
          ],
        },
        {
          title: "Reference based Transcriptome analysis",
          steps: [
            "Raw Reads: Quality and Statistics",
            "Filtered Reads: Quality and Statistics",
            "Mapping of transcripts against reference genome",
            "Identification and quantification of transcript",
            "Transcript annotation",
            "Identification of SSRs, SNPs, isoforms and alternative transcripts",
            "Identification of novel and rare transcripts",
            "Gene Ontology and pathway analysis",
            "Differential gene expression analysis (more than 2 samples)",
          ],
        },
        {
          title: "Metatranscriptome analysis",
          steps: [
            "Raw Reads: Quality and Statistics",
            "Filtered Reads: Quality and Statistics",
            "Assembly",
            "Phylogenetic analysis and taxonomic classification",
            "Identification and annotation of coding region",
            "Functional annotation",
            "Pathway analysis",
            "Gene expression diversity analysis",
            "Differential gene expression analysis (more than 2 samples)",
          ],
        },
      ],
      expanded: [0, 1],
      unsubscribe: null,
    };
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