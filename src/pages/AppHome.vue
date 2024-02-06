<script>
export default {
  name: "AppHome",

  data() {
    return {};
  },
};
</script>

<template>
  <div class="container text-center">
    <h1>This is the homepage</h1>
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni maiores
      sed aspernatur tempore non nemo odit porro aperiam quas, reiciendis iusto
      debitis quod sapiente. Magnam vel commodi est quibusdam? Blanditiis.
    </p>

    <router-link :to="{ name: 'projects' }">Go To Projects' List</router-link>
  </div>
</template>

<style lang="scss" scoped></style>
