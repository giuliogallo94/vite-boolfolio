<script>
import AppMain from "./components/AppMain.vue";

export default {
  data() {
    return {};
  },
  components: { AppMain },
};
</script>

<template>
  <div class="container py-4">
    <h1 class="text-center">App.vue</h1>
    <AppMain />
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
@use "./styles/general.scss";
</style>
