<template>
  <div class="container-box main-app-container">
    <div class="left-sidebar">
      <header-vue></header-vue>
    </div>
    <div class="main-section"></div>
    <div class="right-sidebar"></div>
  </div>
</template>

<script>
import HeaderVue from "../components/Header.vue";
export default {
  name: "IndexPage",
  components: {
    HeaderVue,
  },
};
</script>
<style lang="scss">
.main-app-container {
  width: 1200px;
  margin: auto;
}
.container-box {
  display: grid;
  grid-template-columns: 250px auto 400px;
  .box-2 {
    border: 1px solid #ccc;
  }
}
</style>
