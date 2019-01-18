<template>
  <section>
    <section class="navigatiion">
      <ul class="navigation">
        <li class="punct_menu"><router-link to="index"> Главная </router-link></li>
        <li class="punct_menu"><router-link to="order">Как заказать</router-link></li>
        <li class="punct_menu"><router-link to="comments">Отзывы </router-link></li>
        <li class="punct_menu"><router-link to="feedback">Контакты </router-link></li>
      </ul>
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
