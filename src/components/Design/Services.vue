<template>
  <div class="services-cards px-1">
    <v-card to="/internships" class="elevation-7 my-4">
      <div class="overlay">
        <div class="service">
          <div class="service-name elevation-10">Internships</div>
          <div class="service-description elevation-10">
            <div class="text">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit
              molestias laborum numquam, autem quidem accusantium sequi
            </div>
            <v-btn class="my-2 mb-3">View Internships</v-btn>
          </div>
        </div>
      </div>
      <img class="white--text" src="../../assets/Services/internship.jpg" />
    </v-card>
    <v-card to="/training" class="elevation-7">
      <div class="overlay">
        <div class="service">
          <div class="service-name elevation-10">Training</div>
          <div class="service-description elevation-10">
            <div class="text">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit
              molestias laborum numquam, autem quidem accusantium sequi
            </div>
            <v-btn class="my-2 mb-3">View Trainings</v-btn>
          </div>
        </div>
      </div>
      <img class="white--text" src="../../assets/Services/training.jpg" />
    </v-card>
    <v-card to="/workshops" class="elevation-7">
      <div class="overlay">
        <div class="service">
          <div class="service-name elevation-10">Workshops</div>
          <div class="service-description elevation-10">
            <div class="text">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit
              molestias laborum numquam, autem quidem accusantium sequi
            </div>
            <v-btn class="my-2 mb-3">View Workshops</v-btn>
          </div>
        </div>
      </div>
      <img class="white--text" src="../../assets/Services/workshop.jpg" />
    </v-card>
    <v-card to="/resources" class="elevation-7">
      <div class="overlay">
        <div class="service">
          <div class="service-name elevation-10">Resources</div>
          <div class="service-description elevation-10">
            <div class="text">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit
              molestias laborum numquam, autem quidem accusantium sequi
            </div>
            <v-btn class="my-2 mb-3">View Resources</v-btn>
          </div>
        </div>
      </div>
      <img class="white--text" src="../../assets/Services/resources.jpg" />
    </v-card>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../../scss/main.scss";
.services-cards {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
    width: 19rem;
    height: 25rem;
    border-radius: 0.8rem;
    @include responsive($tablet-landscape) {
      margin: 1rem 0;
    }
    @include responsive($tablet-portrait) {
      margin: 1rem 0;
    }
    @include responsive($phone) {
      margin: 1rem 0;
    }
    .overlay {
      position: absolute;
      height: 25rem;
      width: 100%;
      z-index: 10;
      background: rgba($color: $secondary, $alpha: 0.3);
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
          justify-content: center;
          align-items: center;
          flex-direction: column;
          overflow: hidden;
          .text {
            font-weight: normal;
            text-align: left;
            opacity: 0;
            transition: opacity 0.4s ease-in;
            transition-delay: 0.1s;
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
    transform: scale(1.06);
    cursor: pointer;
    .overlay {
      .service {
        .service-description {
          opacity: 1;
          height: max-content;
          width: 100%;
          margin-top: 1rem;
          padding: 1rem;
          .text {
            opacity: 1;
            padding: 1rem;
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