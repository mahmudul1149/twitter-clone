<template>
  <div class="container-box main-app-container">
    <div class="left-sidebar">
      <leftsidebar></leftsidebar>
    </div>
    <div class="main-section">
      <mainSection></mainSection>
    </div>
    <div class="right-sidebar">
      <rightsidebar></rightsidebar>
    </div>
  </div>
</template>

<script>
import leftsidebar from "../components/leftsidebar.vue";
import mainSection from "../components/main-section.vue";
import rightsidebar from "../components/rightsidebar.vue";
export default {
  name: "IndexPage",
  components: {
    leftsidebar,
    mainSection,
    rightsidebar,
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
  grid-template-columns: 270px auto 300px;
  gap: 1rem;
}
@media screen and (max-width: 1200px) {
  .right-sidebar {
    display: none;
  }
}
</style>
