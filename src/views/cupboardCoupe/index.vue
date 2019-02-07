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
      <Product-Item v-for="product in coupe" :key="product.id" :product="product" />
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
        coupe: [{
          id: "01",
          picture: "/img/bed/SP-121-124.jpg",
          name: "СП-121",
          type: "Шкафы-купе",
          size: "1435x550x2100",
          description: "Цвета: венге, дуб беленый",
          price: 16000,
          quantity: 1
        }]
      };
    }
  };
</script>

<style lang="scss">
  @import "../../stylesheets/layout.scss";
  @import "../../stylesheets/product.scss";
</style>
