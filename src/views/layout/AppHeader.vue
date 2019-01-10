<template>
  <header class="header">
    <div class="company">
     <a href="index.vue"> <img class="logotyp" src="/img/vasilisa.png"  alt="logotyp" /></a>
    </div>
    <div class="href-box">
      <section class="basket">
        <p class="basket">
          <img
            id="corner"
            src="/img/bascet.png"
            width="100"
            onclick="toggle(hidden_content)"/>Корзина (<span class="count">{{ counter }}</span>)
        </p>
        <div class="hidden">
          <p>Товаров:<span class="count"> {{ counter }} </span></p>
          <p>На сумму: <span id="price">{{ total }}</span></p>
          <a href="order.html"> <button>Заказать звонок</button></a>
        </div>
      </section>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "../../stylesheets/layout.scss";
@import "../../stylesheets/basket.scss";
@import "../../stylesheets/navigation.scss";

.header {
  max-width: 1300px;
  // margin-left: 200px;
  display: flex;
  // justify-content: center;
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
