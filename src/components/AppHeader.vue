<script>
export default {
  data() {
    return {};
  },
};
</script>

<template>
  <div class="mb-5">
    <ul class="justify-content-center list-group list-group-horizontal">
      <li class="list-group-item">
        <router-link :to="{ name: 'home' }">Home</router-link>
      </li>
      <li class="list-group-item">
        <router-link :to="{ name: 'projects' }">Projects</router-link>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped></style>
