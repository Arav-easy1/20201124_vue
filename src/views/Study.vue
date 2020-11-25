<template>
  <div class="ecommerce-widget">
    <vue-embed-gist gist-id="52ec3679fe637b3b6219220ae0cabc76" file="vueLifeCycle.js" />
    <div class="row" style="height: 100%">
      <div class="col-xl-10 col-lg-10 col-md-11 col-sm-12 col-12" :key="i" v-for="(d, i) in learned" style="margin: 0 auto;">
        <!-- <div class="card" style="height: 99%;"> -->
        <!-- <div class="card-body"> -->
        <b-card header="Vue.js" header-text-variant="white" header-tag="header" header-bg-variant="primary" :footer="d.f" footer-tag="footer" footer-bg-variant="light" footer-border-variant="dark" :title="d.title" style="max-width: 100%;">
          <b-card-text v-html="d.d"></b-card-text>
        </b-card>
        <!-- </div> -->
        <!-- </div> -->
      </div>
    </div>
  </div>
</template>
<script>
import VueEmbedGist from "vue-embed-gist";

export default {
  data() {
    return {
      learned: [
        { title: "Vue의 life-cycle", d: "go", f: "2020-11-24" },
        { title: "bootstrap-vue", d: "methods", f: "2020-11-24" },
      ],
    };
  },
  components: {
    VueEmbedGist,
  },
};
</script>
