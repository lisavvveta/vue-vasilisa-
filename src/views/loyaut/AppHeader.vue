<template>
  <header class="header">
      <div class="company"><img class="logotyp" src="../img/vasilisa.png" width="700" alt="logotyp"> </div>
      <div class="href-box">
          <section class="basket">
              <p class="basket"> <img id="corner" src="../img/bascet.png" width="100" onclick="toggle(hidden_content)"> Корзина (<span class="count">{{ counter }}</span>)</p>
              <div class="hidden" id="hidden_content">
                  <p>Товаров:<span id="bascet" class="count"> {{ counter }} </span> </p>
                  <p>На сумму: <span price="0" id="price">{{ total }}</span> </p>
                  <a href="order.html"> <button> Заказать звонок</button></a>
              </div>
          </section>
      </div>
      <nav class="navigation">
          <a class="punct_menu" href="/src/views/index/index.vue"> Главная </a>
          <a class="punct_menu" href="order.html"> Как заказать</a>
          <a class="punct_menu" href="comments.html">Отзывы</a>
          <a class="punct_menu" href="feedback.html">Контакты</a>
      </nav>
      <div>
          <form>
              <p><input class="search" type="search" name="q" placeholder="Поиск по сайту">
                  <input class="search" type="submit" value="Найти"></p>
          </form>
      </div>
  </header>
</template>

<script>
export default {

}
</script>

<style lang="scss">
 @import "../../stylesheets/layout.scss";
@import "../../stylesheets/basket.scss";
@import "../../stylesheets/menu.scss";

 .header {
  display: flex;
  justify-content: center;
}

.search {
  font-size: 20px;
  margin: 15px;
}

.logotyp {
  width: 500px;
  height: auto;
  display: flex;
  justify-content: center;
  margin: 40px;
  padding-left: 80px;
}
</style>

