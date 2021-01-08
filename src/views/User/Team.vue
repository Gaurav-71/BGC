<template>
  <section class="team-section white-bg">
    <Heading class="page-header1" :headingObj="headingObj" />
    <div class="team-container">
      <div class="organizer anim1">
        <img src="../../assets/Team/org-7.jpg" alt />
        <h3>Prof. Malali Gowda</h3>
        <h4>Founder & Director</h4>
      </div>
      <div class="organizer anim1">
        <img src="../../assets/Team/org-22.jpg" alt />
        <h3>Dr. Pruthvi Chakravarthi</h3>
        <h4>CEO & Director</h4>
      </div>
      <div class="organizer anim1">
        <img src="../../assets/Team/org-1.jpeg" alt />
        <h3>Dr. Usha G S</h3>
        <h4>Director</h4>
      </div>
      <div class="organizer anim1">
        <img src="../../assets/Team/org-6.jpg" alt />
        <h3>Dr. Rajani Kantha</h3>
        <h4>Director</h4>
      </div>
    </div>
    <Heading class="page-header2 mt-6" :headingObj="headingObj2" />
    <div class="team-container">
      <a
        href="https://www.linkedin.com/in/gaurav-v-8071"
        target="_blank"
        style="text-decoration: none"
        class="organizer anim2"
      >
        <img src="../../assets/Team/gv.jpg" alt />
        <h3>Gaurav V</h3>
        <h4>Website Designer & Developer</h4>
      </a>
      <div class="organizer anim2">
        <img src="../../assets/Team/org-85.jpg" alt />
        <h3>Fatima Tuz Zehra</h3>
        <h4>Content Curator</h4>
      </div>
    </div>
  </section>
</template>

<script>
import Heading from "../../components/Design/Heading";
import gsap, { Power2, Bounce } from "gsap";
export default {
  components: { Heading },
  data() {
    return {
      headingObj: {
        h1: "Management",
        h4: "The management team of BGC consisting of the Directors and CEO",
        src: "team.svg",
      },
      headingObj2: {
        h1: "Website Development",
        h4: "The people behind the making of the website",
        src: "web1.svg",
      },
    };
  },
  mounted() {
    const header = gsap.timeline();
    header.add();
    header
      .from(".page-header1", {
        duration: 1,
        x: 100,
        opacity: 0,
        delay: 0.6,
      })
      .from(
        ".anim1",
        { x: -20, stagger: 0.4, opacity: 0, ease: Power2.easeOut },
        "-=.7"
      )
      .from(".page-header2", {
        duration: 1,
        x: 100,
        opacity: 0,
      })
      .from(
        ".anim2",
        { x: -20, stagger: 0.4, opacity: 0, ease: Power2.easeOut },
        "-=.7"
      );
  },
};
</script>

<style lang="scss" scoped>
@import "../../scss/main.scss";
.team-section {
  margin-top: 4rem;
  min-height: calc(100vh - 4rem);
  padding: 1.5rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
  @include responsive($tablet-portrait) {
    margin-top: 3.5rem;
    min-height: auto;
  }
  @include responsive($phone) {
    margin-top: 3.5rem;
    padding: 1.5rem;
  }
  .team-container {
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 0;
    padding: 0;
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
      margin-right: 3rem;
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
</style>