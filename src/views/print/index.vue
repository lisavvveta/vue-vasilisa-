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
      <Product-Item v-for="product in foto" :key="product.id" :product="product"  :Line="foto"/>
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
        foto: [{
            id: "0100000",
            picture: "/img/foto-print/01.jpg",
            name: "Фотопечать №1",
            type: "Фотопечать",
            size: "",
            description: " ",
            quantity: 1
          },
          {
            id: "0200000",
            picture: "/img/foto-print/02.jpg",
            name: "Фотопечать №2",
            type: "Фотопечать",
            size: "",
            description: " ",
            quantity: 1
          },
          {
            id: "0300000",
            picture: "/img/foto-print/03.jpg",
            name: "Фотопечать №3",
            type: "Фотопечать",
            size: "",
            description: " ",
            quantity: 1
          },
          {
            id: "0400000",
            picture: "/img/foto-print/04.jpg",
            name: "Фотопечать №4",
            type: "Фотопечать",
            size: "",
            description: " ",
            quantity: 1
          },
          {
            id: "0500000",
            picture: "/img/foto-print/05.jpg",
            name: "Фотопечать №5",
            type: "Фотопечать",
            size: "",
            description: " ",
            quantity: 1
          },
          {
            id: "0600000",
            picture: "/img/foto-print/06.jpg",
            name: "Фотопечать №6",
            type: "Фотопечать",
            size: "",
            description: " ",
            quantity: 1
          },
          {
            id: "0700000",
            picture: "/img/foto-print/07.jpg",
            name: "Фотопечать №7",
            type: "Фотопечать",
            size: "",
            description: " ",
            quantity: 1
          },
          {
            id: "0800000",
            picture: "/img/foto-print/08.jpg",
            name: "Фотопечать №8",
            type: "Фотопечать",
            size: "",
            description: " ",
            quantity: 1
          },
          {
            id: "0900000",
            picture: "/img/foto-print/09.jpg",
            name: "Фотопечать №9",
            type: "Фотопечать",
            size: "",
            description: " ",
            quantity: 1
          },
          {
            id: "1000000",
            picture: "/img/foto-print/10.jpg",
            name: "Фотопечать №10",
            type: "Фотопечать",
            size: "",
            description: " ",
            quantity: 1
          },
          {
            id: "1100000",
            picture: "/img/foto-print/11.jpg",
            name: "Фотопечать №11",
            type: "Фотопечать",
            size: "",
            description: " ",
            quantity: 1
          },
          {
            id: "1200000",
            picture: "/img/foto-print/12.jpg",
            name: "Фотопечать №12",
            type: "Фотопечать",
            size: "",
            description: " ",
            quantity: 1
          },
          {
            id: "1300000",
            picture: "/img/foto-print/13.jpg",
            name: "Фотопечать №13",
            type: "Фотопечать",
            size: "",
            description: " ",
            quantity: 1
          },
          {
            id: "1400000",
            picture: "/img/foto-print/14.jpg",
            name: "Фотопечать №14",
            type: "Фотопечать",
            size: "",
            description: " ",
            quantity: 1
          },
          {
            id: "1500000",
            picture: "/img/foto-print/15.jpg",
            name: "Фотопечать №15",
            type: "Фотопечать",
            size: "",
            description: " ",
            quantity: 1
          },
          {
            id: "1600000",
            picture: "/img/foto-print/16.jpg",
            name: "Фотопечать №16",
            type: "Фотопечать",
            size: "",
            description: " ",
            quantity: 1
          },
          {
            id: "1700000",
            picture: "/img/foto-print/17.jpg",
            name: "Фотопечать №17",
            type: "Фотопечать",
            size: "",
            description: " ",
            quantity: 1
          },
          {
            id: "1800000",
            picture: "/img/foto-print/18.jpg",
            name: "Фотопечать №18",
            type: "Фотопечать",
            size: "",
            description: " ",
            quantity: 1
          },
          {
            id: "1900000",
            picture: "/img/foto-print/19.jpg",
            name: "Фотопечать №19",
            type: "Фотопечать",
            size: "",
            description: " ",
            quantity: 1
          },
          {
            id: "2000000",
            picture: "/img/foto-print/20.jpg",
            name: "Фотопечать №20",
            type: "Фотопечать",
            size: "",
            description: " ",
            quantity: 1
          },
          {
            id: "2100000",
            picture: "/img/foto-print/21.jpg",
            name: "Фотопечать №21",
            type: "Фотопечать",
            size: "",
            description: " ",
            quantity: 1
          },
          {
            id: "2200000",
            picture: "/img/foto-print/22.jpg",
            name: "Фотопечать №22",
            type: "Фотопечать",
            size: "",
            description: " ",
            quantity: 1
          },
          {
            id: "2300000",
            picture: "/img/foto-print/23.jpg",
            name: "Фотопечать №23",
            type: "Фотопечать",
            size: "",
            description: " ",
            quantity: 1
          },
          {
            id: "2400000",
            picture: "/img/foto-print/24.jpg",
            name: "Фотопечать №24",
            type: "Фотопечать",
            size: "",
            description: " ",
            quantity: 1
          },
          {
            id: "2500000",
            picture: "/img/foto-print/25.jpg",
            name: "Фотопечать №25",
            type: "Фотопечать",
            size: "",
            description: " ",
            quantity: 1
          },
          {
            id: "2600000",
            picture: "/img/foto-print/26.jpg",
            name: "Фотопечать №26",
            type: "Фотопечать",
            size: "",
            description: " ",
            quantity: 1
          },
          {
            id: "2700000",
            picture: "/img/foto-print/27.jpg",
            name: "Фотопечать №27",
            type: "Фотопечать",
            size: "",
            description: " ",
            quantity: 1
          },
          {
            id: "2800000",
            picture: "/img/foto-print/28.jpg",
            name: "Фотопечать №28",
            type: "Фотопечать",
            size: "",
            description: " ",
            quantity: 1
          },
          {
            id: "2900000",
            picture: "/img/foto-print/29.jpg",
            name: "Фотопечать №29",
            type: "Фотопечать",
            size: "",
            description: " ",
            quantity: 1
          },
          {
            id: "3000000",
            picture: "/img/foto-print/30.jpg",
            name: "Фотопечать №30",
            type: "Фотопечать",
            size: "",
            description: " ",
            quantity: 1
          },
          {
            id: "3100000",
            picture: "/img/foto-print/31.jpg",
            name: "Фотопечать №31",
            type: "Фотопечать",
            size: "",
            description: " ",
            quantity: 1
          },
          {
            id: "3200000",
            picture: "/img/foto-print/32.jpg",
            name: "Фотопечать №32",
            type: "Фотопечать",
            size: "",
            description: " ",
            quantity: 1
          },
          {
            id: "3300000",
            picture: "/img/foto-print/33.jpg",
            name: "Фотопечать №33",
            type: "Фотопечать",
            size: "",
            description: " ",
            quantity: 1
          },
          {
            id: "3400000",
            picture: "/img/foto-print/34.jpg",
            name: "Фотопечать №34",
            type: "Фотопечать",
            size: "",
            description: " ",
            quantity: 1
          },
          {
            id: "3500000",
            picture: "/img/foto-print/35.jpg",
            name: "Фотопечать №35",
            type: "Фотопечать",
            size: "",
            description: " ",
            quantity: 1
          },
          {
            id: "3600000",
            picture: "/img/foto-print/36.jpg",
            name: "Фотопечать №36",
            type: "Фотопечать",
            size: "",
            description: " ",
            quantity: 1
          },
          {
            id: "3700000",
            picture: "/img/foto-print/37.jpg",
            name: "Фотопечать №37",
            type: "Фотопечать",
            size: "",
            description: " ",
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
