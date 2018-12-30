<template lang="html">
  <main>
    <ul class="product">
      <li v-for="item in kids" class="product-item image-prod ">
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
      kids: [
        {
          // Здесь должен быть слайдер
          id: "01",
          picture: "/img/kids/1-1.jpg",
          name: "Мини диванчик в детскую",
          type: "Детская мебель",
          size: "970х800х700",
          description:
            "Спальное место 1830х940. Механизм выкатной. Боковинки из ЛДСП в толстой кромке. Основание реечное. Основа ППУ. Внутри маленький ящик",
          price: " от 11 650 ₽"
        },
        {
          // Здесь должен быть слайдер
          id: "02",
          picture: "/img/kids/table-chair-4.jpg",
          name: "Стол детский ростущий",
          type: "Детская мебель",
          size: "1000х600",
          description:
            "Цвет: зеленый, синий, желтый и оранжевый. Металлические ножки, регулируются по возрасту ребенка. Разработа по СанПину. Преднозначена для детей с 1 года до 8 лет. ",
          price: " от 3 400 ₽"
        },
        {
          // Здесь должен быть слайдер
          id: "03",
          picture: "/img/kids/table-chair-5.jpg",
          name: "Стул детский ростущий",
          type: "Детская мебель",
          size: "",
          description:
            "Цвет фанеры. Металлические ножки, регулируются по возрасту ребенка. Разработа по СанПину. Преднозначена для детей с 1 года до 8 лет. ",
          price: " от 1 700 ₽"
        },
        {
          // Здесь должен быть слайдер
          id: "04",
          picture: "/img/kids/BR-116.jpg",
          name: "БР-116",
          type: "Детская мебель",
          size: "1932х880",
          description:
            "Спальное место 1900х800. Реечное основание с ящиками внизу.",
          price: " от 8 100 ₽"
        },
        {
          // Здесь должен быть слайдер
          id: "05",
          picture: "/img/kids/junior.jpg",
          name: "Стол Юниор",
          type: "Детская мебель",
          size: "1050х580х750",
          description: "Цвета разные.",
          price: " от 4 450 ₽"
        },
        {
          // Здесь должен быть слайдер
          id: "06",
          picture: "/img/kids/",
          name: "Книжный стеллаж",
          type: "Детская мебель",
          size: "2000х800х200",
          description: "Цвета шима светлая, дуб молочный",
          price: " от 3 500 ₽"
        },
        {
          // Здесь должен быть слайдер
          id: "07",
          picture: "/img/kids/table-rack.jpg",
          name: "Стол стеллаж",
          type: "Детская мебель",
          size: "1200х680",
          description: "Цвета разные.",
          price: " от 5 000 ₽"
        },
        {
          // Здесь должен быть слайдер
          id: "08",
          picture: "/img/kids/nicolas.jpg",
          name: "Двухярусная кровать Николaс",
          type: "Детская мебель",
          size: "1900х1700х750",
          description: "С двумя матрасами",
          price: " от 24 500 ₽"
        },
        {
          // Здесь должен быть слайдер
          id: "09",
          picture: "/img/kids/rita.jpg",
          name: "Спальный детский гарнитур Рита",
          type: "Детская мебель",
          size: "",
          description: "С двумя матрасами",
          price: " от 51 600 ₽"
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
