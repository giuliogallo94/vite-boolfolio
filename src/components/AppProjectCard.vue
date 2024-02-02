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
  <div class="card text-center mb-3">
    <div class="card-body">
      <h5>{{ project.title }}</h5>
      <div class="img mb-2">
        <img :src="`${baseUrl}storage/${project.project_image}`" alt="" />
      </div>
      <span><b>Created:</b> {{ project.date }}</span>
      <div class="info mt-3">
        <router-link to="/details" class="btn btn-primary">Details</router-link>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  .img {
    img {
      aspect-ratio: 1;
      width: 50%;
    }
  }
}
</style>
