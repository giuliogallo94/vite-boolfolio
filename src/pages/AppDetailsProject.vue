<script>
import axios from "axios";
import { store } from "../store";

export default {
  data() {
    return {
      store,
      project: null,
      loading: false,
    };
  },

  created() {
    // console.log(this.$route.params.slug);
    this.loading = true;

    axios
      .get(`${this.store.baseUrl}/api/projects/${this.$route.params.slug}`)
      .then((resp) => {
        if (resp.data.results) {
          // console.log(resp.data.results);
          this.project = resp.data.results;
        } else {
          this.$router.push({ name: "not-found" });
        }
      })
      .finally(() => {
        this.loading = false;
      });
  },
};
</script>

<template>
  <div class="container">
    <div v-if="loading">Loading...</div>
    <div v-else>
      <h1>{{ this.project.title }}</h1>
      <p><b>Creation date:</b> {{ project.date }}</p>
      <img :src="`${store.baseUrl}/storage/${project.project_image}`" alt="" />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
