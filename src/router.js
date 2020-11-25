import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./views/Home";
import Study from "./views/Study";
import Project from "./views/Project";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/", component: Home },
    { path: "/study", component: Study },
    { path: "/project", component: Project },
  ],
});

export default router;
