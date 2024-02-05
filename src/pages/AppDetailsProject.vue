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
          console.log(resp.data.results);
          this.project = resp.data.results;
          this.loading = false;
        } else {
          this.$router.push({ name: "not-found" });
        }
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
      <span
        v-for="technology in project.technologies"
        class="badge me-2 mb-2"
        :style="{ 'background-color': technology.hex_color }">
        {{ technology.name }}
      </span>
      <img :src="`${store.baseUrl}/storage/${project.project_image}`" alt="" />
      <div></div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
