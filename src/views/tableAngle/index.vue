<template lang="html">
  <main>
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
    <ul id="v-for-massiv" class="product">
      <li v-for="item in tableAngle" class="product-item image-prod">
        <h6 class="product-item__title">{{ item.name }}</h6>
        <img :src="item.picture" alt="" class="product-item__picture" />
        <span class="product-item__size">{{ item.size }}</span><br>
        <span class="product-item__description">{{ item.description }}</span><br>
        <span class="product-item__price">{{ item.price }}</span>
        <button v-on:click="increase" class="product-item__button">В корзину</button>
      </li>
    </ul>
  </main>
</template>

<script>
export default {

};
</script>

<style lang="scss">
@import "../../stylesheets/layout.scss";
@import "../../stylesheets/product.scss";
</style>
