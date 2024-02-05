<script>
import axios from "axios";
import { store } from "../store";

export default {
  data() {
    return {
      store,
      project: null,
    };
  },

  created() {
    // console.log(this.$route.params.slug);

    axios
      .get(`${this.store.baseUrl}/api/projects/${this.$route.params.slug}`)
      .then((resp) => {
        console.log(resp.data.results);
        this.project = resp.data.results;
      });
  },
};
</script>

<template>
  <div class="container">
    <h1>{{ this.project.title }}</h1>

    <p><b>Creation date:</b> {{ project.date }}</p>
  </div>
</template>

<style lang="scss" scoped></style>
