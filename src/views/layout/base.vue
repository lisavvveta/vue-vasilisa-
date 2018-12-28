<template>
  <div id="wrapper" class="wrapper">
    <App-Header />

    <aside />

    <router-view />

    <App-Footer />
  </div>
</template>

<script>
import AppHeader from "./AppHeader.vue";
import AppFooter from "./AppFooter.vue";
import Aside from './aside.vue';

export default {
  name: "Base",
  components: { AppHeader, aside, AppFooter }
};
</script>

<style lang="scss">

</style>
