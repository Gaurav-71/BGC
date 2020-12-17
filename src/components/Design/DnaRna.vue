<template>
  <div class="dna-rna">
    <Heading class="dna-div" :headingObj="subHeading1" />
    <v-expansion-panels>
      <v-expansion-panel
        class="my-2 dna-info"
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
      subHeading1: {
        h1: "DNA/RNA Sequencing",
        h4:
          "All services offered under DNA/RNA sequencing, click on each service to read more",
        src: "dna.svg",
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
    };
  },
};
</script>

<style>
</style>