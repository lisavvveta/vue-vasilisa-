<template>
  <section>
    <section class="navigatiion">
      <nav class="navigation">
        <a class="punct_menu" href="/src/views/index/index.vue"> Главная </a>
        <a class="punct_menu" href="order.html"> Как заказать</a>
        <a class="punct_menu" href="comments.html">Отзывы</a>
        <a class="punct_menu" href="feedback.html">Контакты</a>
      </nav>
      <form>
        <p>
          <input
            class="search"
            type="search"
            name="q"
            placeholder="Поиск по сайту"
          />
          <input class="search" type="submit" value="Найти" />
        </p>
      </form>
    </section>
    <div>
      <fieldset>
        <legend>Отзыв</legend>
        <form>
          <p>Напишите ваш отзыв о магазине.</p>
          <textarea name="comments" cols="120" rows="30">
 Введите свой комментарий</textarea
          >
          <button class="product-item__button">Отправить</button>
        </form>
      </fieldset>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "../../stylesheets/layout.scss";
@import "../../stylesheets/product.scss";

fieldset {
  display: flex;
  align-items: center;
}
</style>
