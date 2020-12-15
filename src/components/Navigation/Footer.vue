<template>
  <div class="footer">
    <footer class="footer ma-0">
      <div class="logo">
        <img src="../../assets/Header/logo.png" alt="logos" />
      </div>
      <div class="line"></div>
      <div v-if="$store.getters.getFooterStatus" class="contact-container ma-1">
        <ul style="list-style-type: none">
          <li>
            <a :href="'tel:' + $store.getters.getProfile.data.phNo">
              <i class="fa fa-phone size" aria-hidden="true"></i>
            </a>
            <a href="mailto: bgc.genomics@gmail.com">
              <i class="fa fa-envelope size" aria-hidden="true"></i>
            </a>
            <a :href="$store.getters.getProfile.data.facebook" target="_blank">
              <i class="fa fa-facebook size" aria-hidden="true"></i>
            </a>
            <a :href="$store.getters.getProfile.data.youtube" target="_blank">
              <i class="fa fa-youtube size" aria-hidden="true"></i>
            </a>
            <a :href="$store.getters.getProfile.data.linkedin" target="_blank">
              <i class="fa fa-linkedin size" aria-hidden="true"></i>
            </a>
            <a :href="$store.getters.getProfile.data.maps" target="_blank">
              <i class="fa fa-map size" aria-hidden="true"></i>
            </a>
            <a>
              <i @click="route" class="fa fa-user size" aria-hidden="true"></i>
            </a>
          </li>
        </ul>
      </div>
      <div class="developer">
        <div class="line"></div>
        <a href="http://linkedin.com/in/gaurav-v-941368194">
          <span>
            Copyright
            <i
              class="fa fa-copyright"
              aria-hidden="true"
              style="margin: 0 5px; color: white"
            ></i>
            {{ $store.getters.getYear }} <span class="mx-1">|</span> Made with
            <i
              class="fa fa-heart"
              aria-hidden="true"
              style="margin: 0 5px; color: red"
            ></i>
            by
          </span>
          Gaurav V
        </a>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      icons: ["mdi-facebook", "mdi-linkedin", "mdi-youtube"],
      unsubscribe: null,
    };
  },
  mounted() {
    this.$store
      .dispatch("downloadProfile")
      .then((resp) => {
        this.unsubscribe = resp;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  methods: {
    route() {
      this.$router.push("/admin/login");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../scss/main.scss";
footer {
  color: white;
  width: 100%;
  margin-top: 3rem;
  padding: 1rem 0;
  background: $primary;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  box-sizing: border-box;
  border-top: 5px solid $accent !important;
  .logo {
    img {
      width: 225px;
      height: auto;
      margin: 1rem 0;
    }
  }
  .message {
    width: 100%;
    background: $accent;
    padding: 0.5rem;
    color: black;
    text-align: center;
  }
  ul {
    margin: 1rem 0;
    padding: 0;
    li {
      margin: 0rem;
      a {
        text-decoration: none;
        color: white;
        .size {
          font-size: 35px;
          margin: 0 2rem;
          @include responsive($phone) {
            font-size: 20px;
            margin: 0 1rem;
          }
          @include responsive($small-phone) {
            font-size: 15px;
          }
        }
      }
      a:hover {
        color: $accent;
      }
    }
    li:hover {
      color: $accent;
    }
  }
  .developer {
    width: 100%;
    color: white;
    text-align: center;
    .line {
      width: 100%;
      height: 1px;
      background: $accent;
      margin: 1rem 0;
    }
    a {
      text-decoration: none;
      color: white;
    }
    a:hover {
      color: $accent;
    }
    span {
      color: white;
    }
  }
}
</style>