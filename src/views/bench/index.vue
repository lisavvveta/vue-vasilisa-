<template>
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
       <Product-Item v-for="product in bench" :key="product.id" :product="product"  :Line="bench"/>
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
        bench: [
          {
          id: "0001",
          picture: "/img/bench/trio.jpg",
          name: "Диванчик трио плюс",
          type: "Скамьи",
          size: "РАЗМЕРЫ: ДЛИНА-1000, ШИРИНА-680, ВЫСОТА-600",
          description: "",
          price: 12000,
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
