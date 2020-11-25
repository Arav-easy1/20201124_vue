<template>
  <!-- ============================================================== -->
  <!-- navbar -->
  <!-- ============================================================== -->
  <div class="dashboard-header">
    <nav class="navbar navbar-expand-lg bg-white fixed-top">
      <a class="navbar-brand" href="/">EASY1-ARAV</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse " id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto navbar-right-top">
          <li class="nav-item dropdown connection" style="border-right: 1px solid #e6e6f2;padding-top: 6px;"></li>
          <li class="nav-item dropdown nav-user">
            <b-button variant="outline-primary" id="tooltip-target-1">Hello!</b-button>
            <b-tooltip target="tooltip-target-1" triggers="hover" positioning="lefttop"> Hi! This is <b>Easyone</b>'s Blog! </b-tooltip>
          </li>
        </ul>
      </div>
    </nav>
  </div>
  <!-- ============================================================== -->
  <!-- end navbar -->
  <!-- ============================================================== -->
</template>
<script>
export default {};
</script>
