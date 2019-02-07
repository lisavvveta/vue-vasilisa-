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
      <Product-Item v-for="product in bed" :key="product.id" :product="product" />
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
        bed: [{
            id: "01",
            picture: "/img/bed/bruno.jpg",
            name: "Бруно 1,4",
            type: "Кровати",
            size: "1100х1652х2064",
            description: "C ортопедическим основанием",
            price: 15100,
            quantity: 1
          },
          {
            id: "02",
            picture: "/img/bed/Venera.png",
            name: "Бруно 1,6",
            type: "Кровати",
            size: "1100x1852x2064",
            description: "",
            price: 15850,
            quantity: 1
          },
          {
            id: "03",
            picture: "/img/bed/bruno.jpg",
            name: "Бруно 1,8",
            type: "Кровати",
            size: "1100х2052х2064",
            description: "C ортопедическим основанием",
            price: 16800,
            quantity: 1
          },
          {
            // слайдер
            id: "04",
            picture: "/img/bed/fortuna.jpg",
            name: "Фортуна 1,4",
            type: "Кровати",
            size: "2000x1400",
            description: "Ортопедические основание. Спинка металл черный. Ножки на выбор: массивное дерево (шоколад махагон), или металлическими",
            price: 19500,
            quantity: 1
          },
          {
            // слайдер
            id: "05",
            picture: "/img/bed/fortuna.jpg",
            name: "Фортуна 1,6",
            type: "Кровати",
            size: "2000x1600",
            description: "Ортопедические основание. Спинка металл черный. Ножки на выбор: массивное дерево (шоколад махагон), или металлическими",
            price: 19500,
            quantity: 1
          },
          {
            id: "06",
            picture: "/img/bed/sicilia.jpg",
            name: "Сицилия",
            type: "Кровати",
            size: "1820х2480х1210",
            description: "Ортопедическое основание или механизм подъема.",
            price: 48500,
            quantity: 1
          },
          {
            id: "07",
            picture: "/img/bed/kapry.jpg",
            name: "Капри",
            type: "Кровати",
            size: "1720х2120х1060",
            description: "Ортопедическое основание или механизм подъема. Может быть исполнено как в коже так и в ткани.",
            price: 28200,
            quantity: 1
          },
          {
            id: "08",
            picture: "/img/bed/selena.jpg",
            name: "Селена",
            type: "Кровати",
            size: "2000х900",
            description: "Ортопедическое основание. Спинка черный металл, ножки массив дерева (шоколад, махагон).",
            price: 13800,
            quantity: 1
          },
          {
            id: "09",
            picture: "/img/bed/selena2.jpg",
            name: "Селена",
            type: "Кровати",
            size: "2000х900",
            description: "Ортопедическое основание. Спинка черный металл, ножки металлические.",
            price: 12500,
            quantity: 1
          },
          {
            id: "18",
            picture: "/img/bed/SP-121-124.jpg",
            name: "СП-122",
            type: "Кровати",
            size: "2032х1435х750",
            description: "С реечным основанием. Цвет: венге-дуб белый, либо шима темная, шима светлая. Входит в спальный гарнитур.",
            price: 6600,
            quantity: 1
          },
          {
            id: "10",
            picture: "/img/bed/venera.jpg",
            name: "Венера",
            type: "Кровати",
            size: "1,4",
            description: "2000х1400. Ортопедическое основание, ножки массив дерева, спинки металлические",
            price: 20500,
            quantity: 1
          },
          {
            id: "11",
            picture: "/img/bed/venera.jpg",
            name: "Венера",
            type: "Кровати",
            size: "1,6",
            description: "2000х1600. Ортопедическое основание, ножки массив дерева, спинки металлические",
            price: 21500,
            quantity: 1
          },
          {
            id: "12",
            picture: "/img/bed/muza.jpg",
            name: "Муза",
            type: "Кровати",
            size: "1,4",
            description: "2000х1400. Ортопедическое основание, ножки массив дерева, спинки металлические",
            price: 22500,
            quantity: 1
          },
          {
            id: "13",
            picture: "/img/bed/muza.jpg",
            name: "Муза",
            type: "Кровати",
            size: "1,6",
            description: "2000х1600. Ортопедическое основание, ножки массив дерева, спинки металлические",
            price: 22800,
            quantity: 1
          },
          {
            id: "14",
            picture: "/img/bed/lion.jpg",
            name: "Лион",
            type: "Кровати",
            size: "1,4",
            description: "2000х1400. Ортопедическое основание, металлические ножки, спинки металлические.",
            price: 12900,
            quantity: 1
          },
          {
            id: "15",
            picture: "/img/bed/lion.jpg",
            name: "Лион",
            type: "Кровати",
            size: "1,6",
            description: "2000х1600. Ортопедическое основание, металлические ножки, спинки металлические.",
            price: 13400,
            quantity: 1
          },
          {
            id: "16",
            picture: "/img/bed/lion.jpg",
            name: "Лион",
            type: "Кровати",
            size: "0,9",
            description: "2000х900. Ортопедическое основание, металлические ножки, спинки металлические.",
            price: 10300,
            quantity: 1
          },
          {
            id: "17",
            picture: "/img/bed/lion.jpg",
            name: "Лион",
            type: "Кровати",
            size: "1,2",
            description: "2000х1200. Ортопедическое основание, металлические ножки, спинки металлические.",
            price: 12250,
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
