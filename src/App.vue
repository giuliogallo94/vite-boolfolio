<script>
import AppHome from "./pages/AppHome.vue";
import AppProjects from "./pages/AppProjects.vue";
import AppHeader from "./components/AppHeader.vue";

export default {
  data() {
    return {};
  },
  components: { AppHome, AppHeader, AppProjects },
};
</script>

<template>
  <div class="container py-4">
    <AppHeader />
    <router-view></router-view>
    <!-- <AppHome /> -->
  </div>
</template>

<style lang="scss">
@use "./styles/general.scss";
</style>
