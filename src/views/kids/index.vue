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
      <Product-Item v-for="product in kids" :key="product.id" :product="product"/>
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
      kids: [
        {
          id: "0000000000001",
          picture: null,
          pictures: [
            "/img/kids/1-1.jpg",
            "/img/kids/1-2.jpg",
            "/img/kids/1-3.jpg",
            "/img/kids/1-4.jpg"
          ],
          name: "Мини диванчик в детскую",
          type: "Детская мебель",
          size: "970х800х700",
          description:
            "Спальное место 1830х940. Механизм выкатной. Боковинки из ЛДСП в толстой кромке. Основание реечное. Основа ППУ. Внутри маленький ящик",
          price: 11650,
          quantity: 1
        },
        {
          id: "0000000000002",
          picture: null,
          pictures: [
            "/img/kids/table-chair-5.jpg",
            "/img/kids/table-chair-2.jpg",
            "/img/kids/table-chair-3.jpg",
            "/img/kids/table-chair-4.jpg",
            "/img/kids/table-chair-5.jpg"
          ],
          name: "Стул детский растущий",
          type: "Детская мебель",
          size: "",
          description:
            "Цвет фанеры. Металлические ножки, регулируются по возрасту ребенка. Разработа по СанПину. Предназначена для детей с 1 года до 8 лет. ",
          price: 1700,
          quantity: 1
        },
        {
          id: "0000000000003",
          picture: null,
          pictures: ["/img/placeholder.png"],
          name: "Книжный стеллаж",
          type: "Детская мебель",
          size: "2000х800х200",
          description: "Цвета шима светлая, дуб молочный",
          price: 3500,
          quantity: 1
        },
        {
          id: "0000000000004",
          picture: null,
          pictures: ["/img/kids/junior.jpg"],
          name: "Стол Юниор",
          type: "Детская мебель",
          size: "1050х580х750",
          description: "Цвета разные.",
          price: 4450,
          quantity: 1
        },
        {
          id: "0000000000005",
          picture: null,
          pictures: [
            "/img/kids/table-rack.jpg",
            "/img/kids/table-rack-2.jpg",
            "/img/kids/table-rack-3.jpg"
          ],
          name: "Стол стеллаж",
          type: "Детская мебель",
          size: "1200х680",
          description: "Цвета разные.",
          price: 5000,
          quantity: 1
        },
        {
          id: "0000000000006",
          picture: "/img/kids/nicolas.jpg",
          name: "Двухярусная кровать Николaс",
          type: "Детская мебель",
          size: "1900х1700х750",
          description: "С двумя матрасами. Спальное место 750х1850.",
          price: 24500,
          quantity: 1
        },
        {
          id: "0000000000007",
          picture: null,
          pictures: ["/img/kids/BR-116.jpg", "/img/kids/BR-116-2.jpg"],
          name: "БР-116",
          type: "Детская мебель",
          size: "1932х880",
          description:
            "Спальное место 1900х800. Реечное основание с ящиками внизу.",
          price: 8100,
          quantity: 1
        },
        {
          id: "0000000000008",
          picture: "/img/kids/rita.jpg",
          name: "Спальный детский гарнитур Рита",
          type: "Детская мебель",
          size: "",
          description: "С двумя матрасами",
          price: 51600,
          quantity: 1
        },
        {
          id: "0000000000009",
          picture: "/img/kids/alina.jpg",
          name: "Детская Алина",
          type: "Детская мебель",
          size: "",
          description:
            "Шкаф 800х2000х500. Кровать с матрасом 750х1900. Спальное место 750х1850.",
          price: 30200,
          quantity: 1
        },
        {
          id: "0000000000010",
          picture: ["/img/kids/deil-1.jpg", "/img/kids/deil-2.jpg"],
          name: "Детская Дейл",
          type: "Детская мебель",
          size: "",
          description: "2200х1900х750. С матрасом. Спальное место 750х1850.",
          price: 32000,
          quantity: 1
        }
      ]
    };
  }
};
</script>

<style lang="scss">
</style>
