<template>
  <div class="bio">
    <Heading class="bio-header" :headingObj="subHeading2" />
    <v-expansion-panels multiple accordion :value="expanded">
      <v-expansion-panel class="my-2 bio-panel" style="background: #266255">
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
                class="bio-panel-header expansion-header font-weight-bold"
                style="
                  color: rgb(230, 190, 138);
                  display: flex;
                  justify-content: space-around;
                  font-size: medium;
                "
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
      <v-expansion-panel class="my-2 bio-panel" style="background: #266255">
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
export default {
  components: {
    Heading,
  },
  data() {
    return {
      subHeading2: {
        h1: "Bioinformatics Analysis",
        h4:
          "All services offered under Bioinformatics Analysis, click on each service to read more",
        src: "dna1.svg",
      },
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
    };
  },
};
</script>

<style>
</style>