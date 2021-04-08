<template>
  <v-container class="fill-height my-bgrnd" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card class="elevation-12 pa-5" raised rounded outlined>
          <v-toolbar color="#093630" flat>
            <v-toolbar-title class="white--text"
              >Hospital Login</v-toolbar-title
            >
          </v-toolbar>
          <v-card-text>
            <v-form>
              <v-text-field
                v-model="email"
                label="Email"
                name="email"
                type="email"
              >
                <v-icon class="mr-2" color="#093630" slot="prepend"
                  >mdi-email</v-icon
                >
              </v-text-field>

              <v-text-field
                id="password"
                label="Password"
                name="password"
                type="password"
                v-model="password"
              >
                <v-icon class="mr-2" color="#093630" slot="prepend"
                  >mdi-lock</v-icon
                >
              </v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions class="d-flex justify-center">
            <v-btn color="#093630" class="white--text px-5" @click="login"
              >Login</v-btn
            >
          </v-card-actions>
          <v-btn
            color="error"
            block
            text
            class="white--text px-5"
            @click="reset"
            >Reset Password</v-btn
          >
        </v-card>
      </v-col>
    </v-row>
    <v-snackbar v-model="snackbar">
      {{ text }}
      <template v-slot:action="{ attrs }">
        <v-btn color="pink" text v-bind="attrs" @click="snackbarToggle">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      text: "",
      snackbar: false,
    };
  },
  methods: {
    login() {
      let data = {
        email: this.email,
        password: this.password,
        user: "hospital",
      };
      this.$store
        .dispatch("login", data)
        .then(() => {
          this.$router.push("/covid-19/testing/reports");
        })
        .catch((err) => {
          alert(err);
          this.email = "";
          this.password = "";
        });
    },
    snackbarToggle() {
      this.snackbar = !this.snackbar;
    },
    reset() {
      if (this.email.trim() != "") {
        this.$store
          .dispatch("resetPassword", this.email)
          .then(() => {
            this.password = "";
            this.text = "Please check your registered email to reset password";
            this.snackbarToggle();
          })
          .catch((err) => {
            alert(err);
            this.email = "";
            this.password = "";
          });
      } else {
        this.text = "Please enter a valid email adress to reset password";
        this.snackbarToggle();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../scss/main.scss";
.my-bgrnd {
  min-height: 100vh;
}
</style>