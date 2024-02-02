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
  <h3 class="text-center">Projects' List</h3>
  <div class="row mt-5">
    <div class="col-4" v-for="project in projects" :key="project.id">
      <AppProjectCard :project="project" />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
