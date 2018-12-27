<template>
  <div id="wrapper" class="wrapper">
    <App-Header />

    <router-view />

    <App-Footer />
  </div>
</template>

<script>
import AppHeader from "./AppHeader.vue";
import AppFooter from "./AppFooter.vue";

export default {
  name: "Base",
  components: { AppHeader, AppFooter }
};
</script>

<style lang="scss">
// нужны ли сюда стили?
</style>
