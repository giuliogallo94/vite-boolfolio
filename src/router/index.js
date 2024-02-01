import VueRouter from "vue-router";
import AppDetailsProject from "../components/AppDetailsProject.vue";

Vue.use(VueRouter);

const routes = {
  path: "/details",
  name: "Details",
  component: () => import("../components/AppDetailsProject.vue"),
};
