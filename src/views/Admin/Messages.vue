<template>
  <div class="admin-messages">
    <Heading :headingObj="headingObj" />
    <v-simple-table
      fixed-header
      height="72vh"
      min-width="80vw"
      class="elevation-12"
      key="0"
    >
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left teal--text">Name</th>
            <th class="text-left teal--text">Email</th>
            <th class="text-left teal--text">Message</th>
            <th class="text-left teal--text">Time</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="message in $store.getters.getMessages"
            :key="message.email"
          >
            <td>{{ message.name }}</td>
            <td>
              {{ message.email }}
            </td>
            <td>
              {{ message.message }}
            </td>
            <td>{{ shortenDate(message.timestamp) }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
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
      headingObj: {
        h1: "Contact Us",
        h4: "All queries from users who have visited the website",
        src: "contact-us.svg",
      },
      unsubscribe: "",
    };
  },
  methods: {
    shortenDate(longDate) {
      return longDate.substring(0, 21);
    },
  },
  mounted() {
    this.$store
      .dispatch("downloadMessages")
      .then((resp) => {
        this.unsubscribe = resp;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style lang="scss" scoped>
@import "../../scss/main.scss";
.admin-messages {
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
  }
  .v-data-table {
    width: 100vw;
  }
}
</style>