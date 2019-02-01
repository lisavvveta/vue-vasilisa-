<template>
  <header class="header">
    <div class="company">
      <router-link to="index"> <img class="logotyp" src="/img/vasilisa.png"  alt="logotyp" /> </router-link>
    </div>
    <div class="href-box">
      <section class="basket">
        <h2 class="basket">
          <img
            id="corner"
            src="/img/bascet.png"
            width="100"/>Корзина {{ count }}
        </h2>
        <div class="hidden">
          <p>Товаров: {{ count }} </p>
          <p>На сумму: <span id="price">{{  }}</span></p>
          <router-link to="order"> <button>Заказать звонок</button></router-link>
        </div>
      </section>
    </div>
  </header>
</template>

<script>
export default {
   data: {
		count: 0
	},
};
</script>

<style lang="scss">
@import "../../stylesheets/layout.scss";
@import "../../stylesheets/basket.scss";
@import "../../stylesheets/navigation.scss";

.header {
  max-width: 1300px;
  display: flex;
}

.logotyp {
  width: 700px;
  height: auto;
  display: flex;
  justify-content: center;
  margin-left: 100px;
  padding-left: 80px;
}
</style>
