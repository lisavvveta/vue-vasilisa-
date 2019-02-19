<template lang="html">
  <main>
    <section class="navigatiion">
      <ul class="navigation">
        <li class="ItemMenu">
          <router-link to="index"> Главная </router-link>
        </li>
        <li class="ItemMenu">
          <router-link to="order">Как заказать</router-link>
        </li>
        <li class="ItemMenu">
          <router-link to="comments">Отзывы </router-link>
        </li>
        <li class="ItemMenu">
          <router-link to="feedback">Контакты </router-link>
        </li>
      </ul>
    </section>
    <ul class="product">
      <Product-Item v-for="product in ModulSistem" :key="product.id" :product="product"  :Line="ModulSistem"/>
    </ul>
  </main>
</template>

<script>
import ProductItem from "../components/ProductItem.vue";

export default {
  components: {
    ProductItem
  },
  data() {
    return {
      ModulSistem: [
        {
          id: "010000",
          picture: null,
          pictures: ["/img/modul-sistem/bravo.jpg"],
          name: "Модульная система Браво",
          type: "Модульная система",
          size: "1200х4300",
          description: "",
          price: 61500,
          quantity: 1
        },
        {
          id: "020000",
          picture: null,
          pictures: ["/img/modul-sistem/lion.png"],
          name: "Модульная система Лион",
          type: "Комоды",
          size: "1182x1116x355",
          description: "",
          price: 42300,
          quantity: 1
        }
      ]
    };
  }
};
</script>
