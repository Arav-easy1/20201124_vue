<template>
  <!-- ============================================================== -->
  <!-- main wrapper -->
  <!-- ============================================================== -->
  <div id="app" class="dashboard-main-wrapper">
    <Header />
    <NavBar />
    <!-- ============================================================== -->
    <!-- wrapper  -->
    <!-- ============================================================== -->
    <div class="dashboard-wrapper">
      <div class="dashboard-ecommerce">
        <div class="container-fluid dashboard-content ">
          <PageHeader />
          <router-view></router-view>
        </div>
      </div>
      <Footer />
    </div>
  </div>
</template>

<script>
import Header from "./components/layout/Header.vue";
import NavBar from "./components/layout/NavBar.vue";
import Footer from "./components/layout/Footer.vue";
import PageHeader from "./components/layout/PageHeader.vue";

export default {
  name: "App",
  components: {
    Header,
    NavBar,
    PageHeader,
    Footer,
  },
};
</script>

<style></style>
