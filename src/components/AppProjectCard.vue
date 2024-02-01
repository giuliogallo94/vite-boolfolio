<script>
export default {
  props: {
    project: Object,
  },

  data() {
    return {
      baseUrl: "http://127.0.0.1:8000/",
    };
  },
};
</script>

<template>
  <h2>ProjectCard</h2>
  <div class="card">
    <div class="card-body">
      <h4>{{ project.title }}</h4>
      <div class="img">
        <img :src="`${baseUrl}storage/${project.project_image}`" alt="" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  .img {
    img {
      max-width: 100%;
    }
  }
}
</style>
