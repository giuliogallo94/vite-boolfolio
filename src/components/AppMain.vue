<script>
import axios from "axios";
export default {
  data() {
    return {};
  },
  created() {
    axios.get(`${this.baseUrl}/api/projects`).then((resp) => {
      console.log(resp);
    });
  },
};
</script>

<template>
  <h3>AppMain</h3>
</template>

<style lang="scss" scoped></style>
