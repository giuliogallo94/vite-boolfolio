<script>
import axios from "axios";
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
};
</script>

<template>
  <h3>AppMain</h3>
</template>

<style lang="scss" scoped></style>
