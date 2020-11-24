<template>
  <!-- ============================================================== -->
  <!-- main wrapper -->
  <!-- ============================================================== -->
  <div id="app" class="dashboard-main-wrapper">
    <Header />
    <NavBar />
    <div id="content" class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Header from "./components/layout/Header.vue";
import NavBar from "./components/layout/NavBar.vue";

export default {
  name: "App",
  components: {
    Header,
    NavBar,
  },
};
</script>

<style></style>
