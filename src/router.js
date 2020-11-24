import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./views/Home";
import Study from "./views/Study";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/", component: Home },
    { path: "/study", component: Study },
  ],
});

export default router;
