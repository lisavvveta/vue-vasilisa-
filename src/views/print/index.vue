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
      <Product-Item v-for="product in foto" :key="product.id" :product="product" />
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
            id: "01",
            picture: "/img/foto-print/01.jpg",
            name: "Фотопечать №1",
            type: "Фотопечать",
            size: "",
            description: " ",
            quantity: 1
          },
          {
            id: "02",
            picture: "/img/foto-print/02.jpg",
            name: "Фотопечать №2",
            type: "Фотопечать",
            size: "",
            description: " ",
            quantity: 1
          },
          {
            id: "03",
            picture: "/img/foto-print/03.jpg",
            name: "Фотопечать №3",
            type: "Фотопечать",
            size: "",
            description: " ",
            quantity: 1
          },
          {
            id: "04",
            picture: "/img/foto-print/04.jpg",
            name: "Фотопечать №4",
            type: "Фотопечать",
            size: "",
            description: " ",
            quantity: 1
          },
          {
            id: "05",
            picture: "/img/foto-print/05.jpg",
            name: "Фотопечать №5",
            type: "Фотопечать",
            size: "",
            description: " ",
            quantity: 1
          },
          {
            id: "06",
            picture: "/img/foto-print/06.jpg",
            name: "Фотопечать №6",
            type: "Фотопечать",
            size: "",
            description: " ",
            quantity: 1
          },
          {
            id: "07",
            picture: "/img/foto-print/07.jpg",
            name: "Фотопечать №7",
            type: "Фотопечать",
            size: "",
            description: " ",
            quantity: 1
          },
          {
            id: "08",
            picture: "/img/foto-print/08.jpg",
            name: "Фотопечать №8",
            type: "Фотопечать",
            size: "",
            description: " ",
            quantity: 1
          },
          {
            id: "09",
            picture: "/img/foto-print/09.jpg",
            name: "Фотопечать №9",
            type: "Фотопечать",
            size: "",
            description: " ",
            quantity: 1
          },
          {
            id: "10",
            picture: "/img/foto-print/10.jpg",
            name: "Фотопечать №10",
            type: "Фотопечать",
            size: "",
            description: " ",
            quantity: 1
          },
          {
            id: "11",
            picture: "/img/foto-print/11.jpg",
            name: "Фотопечать №11",
            type: "Фотопечать",
            size: "",
            description: " ",
            quantity: 1
          },
          {
            id: "12",
            picture: "/img/foto-print/12.jpg",
            name: "Фотопечать №12",
            type: "Фотопечать",
            size: "",
            description: " ",
            quantity: 1
          },
          {
            id: "13",
            picture: "/img/foto-print/13.jpg",
            name: "Фотопечать №13",
            type: "Фотопечать",
            size: "",
            description: " ",
            quantity: 1
          },
          {
            id: "14",
            picture: "/img/foto-print/14.jpg",
            name: "Фотопечать №14",
            type: "Фотопечать",
            size: "",
            description: " ",
            quantity: 1
          },
          {
            id: "15",
            picture: "/img/foto-print/15.jpg",
            name: "Фотопечать №15",
            type: "Фотопечать",
            size: "",
            description: " ",
            quantity: 1
          },
          {
            id: "16",
            picture: "/img/foto-print/16.jpg",
            name: "Фотопечать №16",
            type: "Фотопечать",
            size: "",
            description: " ",
            quantity: 1
          },
          {
            id: "17",
            picture: "/img/foto-print/17.jpg",
            name: "Фотопечать №17",
            type: "Фотопечать",
            size: "",
            description: " ",
            quantity: 1
          },
          {
            id: "18",
            picture: "/img/foto-print/18.jpg",
            name: "Фотопечать №18",
            type: "Фотопечать",
            size: "",
            description: " ",
            quantity: 1
          },
          {
            id: "19",
            picture: "/img/foto-print/19.jpg",
            name: "Фотопечать №19",
            type: "Фотопечать",
            size: "",
            description: " ",
            quantity: 1
          },
          {
            id: "20",
            picture: "/img/foto-print/20.jpg",
            name: "Фотопечать №20",
            type: "Фотопечать",
            size: "",
            description: " ",
            quantity: 1
          },
          {
            id: "21",
            picture: "/img/foto-print/21.jpg",
            name: "Фотопечать №21",
            type: "Фотопечать",
            size: "",
            description: " ",
            quantity: 1
          },
          {
            id: "22",
            picture: "/img/foto-print/22.jpg",
            name: "Фотопечать №22",
            type: "Фотопечать",
            size: "",
            description: " ",
            quantity: 1
          },
          {
            id: "23",
            picture: "/img/foto-print/23.jpg",
            name: "Фотопечать №23",
            type: "Фотопечать",
            size: "",
            description: " ",
            quantity: 1
          },
          {
            id: "24",
            picture: "/img/foto-print/24.jpg",
            name: "Фотопечать №24",
            type: "Фотопечать",
            size: "",
            description: " ",
            quantity: 1
          },
          {
            id: "25",
            picture: "/img/foto-print/25.jpg",
            name: "Фотопечать №25",
            type: "Фотопечать",
            size: "",
            description: " ",
            quantity: 1
          },
          {
            id: "26",
            picture: "/img/foto-print/26.jpg",
            name: "Фотопечать №26",
            type: "Фотопечать",
            size: "",
            description: " ",
            quantity: 1
          },
          {
            id: "27",
            picture: "/img/foto-print/27.jpg",
            name: "Фотопечать №27",
            type: "Фотопечать",
            size: "",
            description: " ",
            quantity: 1
          },
          {
            id: "28",
            picture: "/img/foto-print/28.jpg",
            name: "Фотопечать №28",
            type: "Фотопечать",
            size: "",
            description: " ",
            quantity: 1
          },
          {
            id: "29",
            picture: "/img/foto-print/29.jpg",
            name: "Фотопечать №29",
            type: "Фотопечать",
            size: "",
            description: " ",
            quantity: 1
          },
          {
            id: "30",
            picture: "/img/foto-print/30.jpg",
            name: "Фотопечать №30",
            type: "Фотопечать",
            size: "",
            description: " ",
            quantity: 1
          },
          {
            id: "31",
            picture: "/img/foto-print/31.jpg",
            name: "Фотопечать №31",
            type: "Фотопечать",
            size: "",
            description: " ",
            quantity: 1
          },
          {
            id: "32",
            picture: "/img/foto-print/32.jpg",
            name: "Фотопечать №32",
            type: "Фотопечать",
            size: "",
            description: " ",
            quantity: 1
          },
          {
            id: "33",
            picture: "/img/foto-print/33.jpg",
            name: "Фотопечать №33",
            type: "Фотопечать",
            size: "",
            description: " ",
            quantity: 1
          },
          {
            id: "34",
            picture: "/img/foto-print/34.jpg",
            name: "Фотопечать №34",
            type: "Фотопечать",
            size: "",
            description: " ",
            quantity: 1
          },
          {
            id: "35",
            picture: "/img/foto-print/35.jpg",
            name: "Фотопечать №35",
            type: "Фотопечать",
            size: "",
            description: " ",
            quantity: 1
          },
          {
            id: "36",
            picture: "/img/foto-print/36.jpg",
            name: "Фотопечать №36",
            type: "Фотопечать",
            size: "",
            description: " ",
            quantity: 1
          },
          {
            id: "37",
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
