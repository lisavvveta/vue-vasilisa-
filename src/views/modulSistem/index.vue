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
    <ul class="product">
      <li v-for="item in commode" class="product-item image-prod ">
        <h6 class="product-item__title">{{ item.name }}</h6>
        <img :src="item.picture" alt="" class="product-item__picture" />
        <span class="product-item__size">{{ item.size }}</span><br>
        <span class="product-item__description">{{ item.description }}</span><br>
        <span class="product-item__price">{{ item.price }}</span>
        <button v-on:click="increase" class="product-item__button">
          В корзину
        </button>
      </li>
    </ul>
  </main>
</template>

<script>
export default {
  data() {
    return {
      commode: [
        {
          id: "01",
          picture: "/img/modul-sistem/bravo.jpg",
          name: "Модульная система Браво",
          type: "Модульная система",
          size: "1200х4300",
          description: "",
          price: " от 61 500 ₽"
        },
        {
          id: "02",
          picture: "/img/comod/br-10.png",
          name: "Модульная система Лион",
          type: "Комоды",
          size: "1182x1116x355",
          description: "Без стекла. это относится к модульной системе Браво.",
          price: " от 42 300 ₽"
        }
      ]
    };
  }
};
</script>

<style lang="scss">
@import "../../stylesheets/layout.scss";
@import "../../stylesheets/product.scss";
</style>
