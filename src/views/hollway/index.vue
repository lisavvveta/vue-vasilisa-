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
      <Product-Item v-for="product in hollway" :key="product.id" :product="product" />
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
        hollway: [{
            // Здесь должен быть слайдер
            //Сюда запихнуть все рамиры, так как это один рамир, а не несколько
            id: "000000000001",
            picture: "/img/hallway/ramir.jpg",
            name: "Пpихожая со шкафом Рамир",
            type: "Прихожая",
            size: "1202х2100х504",
            description: "Шкаф может быть справа или слева",
            price: 13500,
            quantity: 1
          },
          {
            id: "000000000002",
            picture: "/img/hallway/nota-4.jpg",
            name: "Прихожая Нота 4",
            type: "Прихожая",
            size: "2115х1000х350",
            description: "Цвета: белый дуб",
            price: 8400,
            quantity: 1
          },
          {
            // здесь будет слайдер
            id: "000000000003",
            picture: "/img/hallway/nota-3-1.jpg",
            name: "Прихожая Нота 3",
            type: "Прихожая",
            size: "1823x400х2114",
            description: "Модульная. Цвета: шима, венге. Вешалка 1233х1480",
            price: 13200,
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
