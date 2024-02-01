import { createApp } from "vue";
import "./styles/general.scss";
import App from "./App.vue";

// import { createRouter } from "vue-router";
import AppDetailsProject from "./components/AppDetailsProject.vue";

createApp(App).mount("#app");
// Vue.use(VueRouter);

// const routes = [
//   //   {
//   //     path: "/",
//   //     name: "App",
//   //     component: App,
//   //   },
//   {
//     path: "/details",
//     name: "Details",
//     component: () => import("./components/AppDetailsProject.vue"),
//   },
// ];
