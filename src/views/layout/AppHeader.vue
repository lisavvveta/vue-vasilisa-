<template>
  <header class="header">
    <div class="company">
      <router-link to="index"> <img class="logotyp" src="/img/vasilisa.png"  alt="logotyp" /> </router-link>
    </div>
      <Cart />
  </header>
</template>

<script>
import Cart from "../cart/index.vue";

export default {
  name: "Header",
  components: {
    Cart
  }
};
</script>

<style lang="scss">
@import "../../stylesheets/layout.scss";
@import "../../stylesheets/navigation.scss";

.header {
  max-width: 1300px;
  display: flex;
}

.logotyp {
  width: 650px;
  height: auto;
  display: flex;
  justify-content: center;
  margin-left: 100px;
  padding-left: 80px;
  margin-bottom: 20px;
}
</style>
