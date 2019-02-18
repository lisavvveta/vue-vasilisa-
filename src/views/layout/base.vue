<template>
  <div id="wrapper" class="wrapper">
    <App-Header />

    <App-Sidebar />

    <router-view />

    <App-Footer />
  </div>
</template>

<script>
import AppHeader from "./AppHeader.vue";
import AppSidebar from "./AppSidebar.vue";
import AppFooter from "./AppFooter.vue";

export default {
  name: "Base",
  components: { AppHeader, AppSidebar, AppFooter }
};
</script>

<style lang="scss">
@import "../../stylesheets/layout.scss";
</style>
