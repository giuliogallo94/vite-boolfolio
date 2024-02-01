<script>
import axios from "axios";
import AppProjectCard from "./AppProjectCard.vue";

export default {
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
  <h3>AppMain</h3>
  <AppProjectCard />
</template>

<style lang="scss" scoped></style>
