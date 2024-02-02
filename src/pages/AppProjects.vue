<script>
import axios from "axios";
import AppProjectCard from "../components/AppProjectCard.vue";

export default {
  name: "AppProjects",

  data() {
    return {
      projects: [],
      baseUrl: "http://127.0.0.1:8000",
    };
  },

  created() {
    axios.get(`${this.baseUrl}/api/projects`).then((resp) => {
      this.projects = resp.data.results;
    });
  },

  components: { AppProjectCard },
};
</script>

<template>
  <div class="row mt-5">
    <div class="col-4" v-for="project in projects" :key="project.id">
      <AppProjectCard :project="project" />
    </div>
    Projects' list
  </div>
</template>

<style lang="scss" scoped></style>
