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
      <Product-Item v-for="product in colouring" :key="product.id" :product="product" />
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
      colouring: [
        {
          id: "000001",
          pictures: ["/img/colouring/pink.jpg"],
          name: "Розовый",
          type: "Цвета",
          size: "",
          description: "",
          price: "",
          quantity: 1
        },
        {
          id: "000002",
          pictures: ["/img/colouring/blue.jpg"],
          name: "Синий",
          type: "Цвета",
          size: "",
          description: "",
          price: "",
          quantity: 1
        },
        {
          id: "000003",
          pictures: ["/img/colouring/oal-sonoma.jpg"],
          name: "Дуб Сонома",
          type: "Цвета",
          size: "",
          description: "",
          price: "",
          quantity: 1
        },
        {
          id: "000004",
          pictures: ["/img/colouring/oal- milk.jpg"],
          name: "Дуб Молочный или Дуб белый",
          type: "Цвета",
          size: "",
          description: "",
          price: "",
          quantity: 1
        },
        {
          id: "000005",
          pictures: ["/img/colouring/venge.jpg"],
          name: "Венге",
          type: "Цвета",
          size: "",
          description: "",
          price: "",
          quantity: 1
        },
        {
          id: "000006",
          pictures: ["/img/colouring/shimo-white.jpg"],
          name: "Шимо светлый",
          type: "Цвета",
          size: "",
          description: "",
          price: "",
          quantity: 1
        },
        {
          id: "000007",
          pictures: ["/img/colouring/shimo-dark.jpg"],
          name: "Шимо темный",
          type: "Цвета",
          size: "",
          description: "",
          price: "",
          quantity: 1
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
