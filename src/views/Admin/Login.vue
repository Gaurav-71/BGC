<template>
  <v-container class="fill-height my-bgrnd" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card class="elevation-12 pa-5" raised rounded outlined>
          <v-toolbar color="#093630" flat>
            <v-toolbar-title class="white--text">Admin Login</v-toolbar-title>
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
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      email: "bgc-genomics@gmail.com",
      password: "",
    };
  },
  methods: {
    login() {
      let data = { email: this.email, password: this.password };
      this.$store
        .dispatch("login", data)
        .then(() => {
          this.$router.push("/admin/");
        })
        .catch((err) => {
          alert(err);
          this.password = "";
        });
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