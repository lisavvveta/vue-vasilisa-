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
      <Product-Item v-for="product in cupboardAngle" :key="product.id" :product="product" />
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
        cupboardAngle: [{
            // slider
            id: "000000001",
            picture: "/img/cupboard-angle/br-6.png",
            name: "БР-6",
            type: "Шкафы",
            size: "2215x904x904",
            description: "Этот шкаф относится к модульной системе Браво.",
            price: '',
            quantity: 1
          }, ,
          {
            // здесь должен быть слайлер
            id: "000000002",
            picture: "/img/comod/br-10.png",
            name: "Комод БР-10",
            type: "Комоды",
            size: "1182x1116x355",
            description: "Без стекла.В рамке. Этот комод относится к модульной системе Браво.",
            price: 9300,
            quantity: 1
          },
          {
            id: "000000003",
            picture: "/img/bed/SP-121-124.jpg",
            name: "Комод СП-123",
            type: "Комоды",
            size: "1000х810х435",
            description: "Цвет венге-дуб белый, шима светлый, шима светлый",
            price: 6600,
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
