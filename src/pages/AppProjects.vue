<script>
import axios from "axios";
import AppProjectCard from "../components/AppProjectCard.vue";
import { store } from "../store";

export default {
  data() {
    return {
      projects: [],
      store,
      curPage: 1,
      lastPage: 1,
      total: 0,
    };
  },

  created() {
    // axios.get(`${this.baseUrl}/api/projects`).then((resp) => {
    //   this.projects = resp.data.results;
    // });
    this.getProjects(1);
  },

  methods: {
    getProjects(pageNum) {
      this.curPage = pageNum;
      axios
        .get(`${this.store.baseUrl}/api/projects`, {
          params: {
            page: pageNum,
          },
        })
        .then((resp) => {
          this.projects = resp.data.results;
          this.lastPage = resp.data.results.last_page;
          this.total = resp.data.results.total;
        });
    },
  },

  components: { AppProjectCard },
};
</script>

<template>
  <div class="container">
    <h3 class="text-center">Projects' List</h3>
    <div class="my-3">Projects found: {{ total }}</div>
    <div class="row mt-5">
      <div class="col-4" v-for="project in projects" :key="project.id">
        <AppProjectCard :project="project" />
      </div>
    </div>
    <div class="my-4">
      <!-- Prev button -->
      <button
        class="btn btn-primary me-2"
        :disabled="curPage === 1"
        href=""
        @click.prevent="getPosts(curPage - 1)">
        Prev
      </button>

      <button
        class="btn btn-primary me-2"
        :class="{ 'btn-success': num === curPage }"
        v-for="num in lastPage"
        @click.prevent="getPosts(num)">
        {{ num }}
      </button>

      <!-- Next button -->
      <button
        class="btn btn-primary"
        href=""
        :disabled="curPage === lastPage"
        @click.prevent="getPosts(curPage + 1)">
        Next
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
