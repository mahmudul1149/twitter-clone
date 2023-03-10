<template>
  <div class="container-box main-app-container">
    <div class="left-sidebar">
      <leftsidebar></leftsidebar>
    </div>
    <div class="main-section">
      <mainSection></mainSection>
    </div>
    <div class="right-sidebar"></div>
  </div>
</template>

<script>
import leftsidebar from "../components/leftsidebar.vue";
import mainSection from "../components/main-section.vue";
export default {
  name: "IndexPage",
  components: {
    leftsidebar,
    mainSection,
  },
};
</script>
<style lang="scss">
// .left-sidebar {
//   position: fixed;
//   overflow: hidden;
//   width: 400px;
//   top: 0;
//   left: 400px;
// }
.main-app-container {
  width: 1200px;
  margin: auto;
  height: 1px;

  .main-section {
    border: 1px solid rgba(0, 0, 0, 00.1);
  }
}
.container-box {
  display: grid;
  grid-template-columns: 300px auto 350px;
}
</style>
