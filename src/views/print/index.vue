<template lang="html">
  <main>
    <!-- здесь нужно добавить header-->
    <!-- здесь нужно добавить aside (боковое меню)-->
    <ul class="product">
      <li v-for="item in foto" class="product-item image-prod ">
        <h6 class="product-item__title">{{ item.name }}</h6>
        <img :src="item.picture" alt="" class="product-item__picture" />
        <span class="product-item__size">{{ item.size }}</span>
        <span class="product-item__description">{{ item.description }}</span>
        <span class="product-item__price">{{ item.price }}</span>
        <button v-on:click="counter += 1" class="product-item__button">
          В корзину
        </button>
      </li>
    </ul>
    <!-- здесь нужно добавить footer-->
  </main>
</template>

<script>
export default {
  data() {
    return {
      foto: [
        {
          id: "01",
          picture: "img/foto-print/1.jpg",
          name: "1",
          type: "Фотопечать",
          size: "",
          description: " ",
          price: ""
        },
        {
          id: "02",
          picture: "img/foto-print/2.jpg",
          name: "2",
          type: "Фотопечать",
          size: "",
          description: " ",
          price: ""
        },
        {
          id: "03",
          picture: "img/foto-print/3.jpg",
          name: "3",
          type: "Фотопечать",
          size: "",
          description: " ",
          price: ""
        },
        {
          id: "04",
          picture: "img/foto-print/4.jpg",
          name: "4",
          type: "Фотопечать",
          size: "",
          description: " ",
          price: ""
        },
        {
          id: "05",
          picture: "img/foto-print/5.jpg",
          name: "5",
          type: "Фотопечать",
          size: "",
          description: " ",
          price: ""
        },
        {
          id: "06",
          picture: "img/foto-print/6.jpg",
          name: "6",
          type: "Фотопечать",
          size: "",
          description: " ",
          price: ""
        },
        {
          id: "07",
          picture: "img/foto-print/7.jpg",
          name: "7",
          type: "Фотопечать",
          size: "",
          description: " ",
          price: ""
        },
        {
          id: "08",
          picture: "img/foto-print/8.jpg",
          name: "8",
          type: "Фотопечать",
          size: "",
          description: " ",
          price: ""
        },
        {
          id: "09",
          picture: "img/foto-print/9.jpg",
          name: "9",
          type: "Фотопечать",
          size: "",
          description: " ",
          price: ""
        },
        {
          id: "10",
          picture: "img/foto-print/10.jpg",
          name: "10",
          type: "Фотопечать",
          size: "",
          description: " ",
          price: ""
        },
        {
          id: "11",
          picture: "img/foto-print/11.jpg",
          name: "11",
          type: "Фотопечать",
          size: "",
          description: " ",
          price: ""
        },
        {
          id: "12",
          picture: "img/foto-print/12.jpg",
          name: "12",
          type: "Фотопечать",
          size: "",
          description: " ",
          price: ""
        },
        {
          id: "13",
          picture: "img/foto-print/13.jpg",
          name: "13",
          type: "Фотопечать",
          size: "",
          description: " ",
          price: ""
        },
        {
          id: "14",
          picture: "img/foto-print/14.jpg",
          name: "14",
          type: "Фотопечать",
          size: "",
          description: " ",
          price: ""
        },
        {
          id: "15",
          picture: "img/foto-print/15.jpg",
          name: "15",
          type: "Фотопечать",
          size: "",
          description: " ",
          price: ""
        },
        {
          id: "16",
          picture: "img/foto-print/16.jpg",
          name: "16",
          type: "Фотопечать",
          size: "",
          description: " ",
          price: ""
        },
        {
          id: "17",
          picture: "img/foto-print/17.jpg",
          name: "17",
          type: "Фотопечать",
          size: "",
          description: " ",
          price: ""
        },
        {
          id: "18",
          picture: "img/foto-print/18.jpg",
          name: "18",
          type: "Фотопечать",
          size: "",
          description: " ",
          price: ""
        },
        {
          id: "19",
          picture: "img/foto-print/19.jpg",
          name: "19",
          type: "Фотопечать",
          size: "",
          description: " ",
          price: ""
        },
        {
          id: "20",
          picture: "img/foto-print/20.jpg",
          name: "20",
          type: "Фотопечать",
          size: "",
          description: " ",
          price: ""
        },
        {
          id: "21",
          picture: "img/foto-print/21.jpg",
          name: "21",
          type: "Фотопечать",
          size: "",
          description: " ",
          price: ""
        },
        {
          id: "22",
          picture: "img/foto-print/22.jpg",
          name: "22",
          type: "Фотопечать",
          size: "",
          description: " ",
          price: ""
        },
        {
          id: "23",
          picture: "img/foto-print/23.jpg",
          name: "23",
          type: "Фотопечать",
          size: "",
          description: " ",
          price: ""
        },
        {
          id: "24",
          picture: "img/foto-print/24.jpg",
          name: "24",
          type: "Фотопечать",
          size: "",
          description: " ",
          price: ""
        },
        {
          id: "25",
          picture: "img/foto-print/25.jpg",
          name: "25",
          type: "Фотопечать",
          size: "",
          description: " ",
          price: ""
        },
        {
          id: "26",
          picture: "img/foto-print/26.jpg",
          name: "26",
          type: "Фотопечать",
          size: "",
          description: " ",
          price: ""
        },
        {
          id: "27",
          picture: "img/foto-print/27.jpg",
          name: "27",
          type: "Фотопечать",
          size: "",
          description: " ",
          price: ""
        },
        {
          id: "28",
          picture: "img/foto-print/28.jpg",
          name: "28",
          type: "Фотопечать",
          size: "",
          description: " ",
          price: ""
        },
        {
          id: "29",
          picture: "img/foto-print/29.jpg",
          name: "29",
          type: "Фотопечать",
          size: "",
          description: " ",
          price: ""
        },
        {
          id: "30",
          picture: "img/foto-print/30.jpg",
          name: "30",
          type: "Фотопечать",
          size: "",
          description: " ",
          price: ""
        },
        {
          id: "31",
          picture: "img/foto-print/31.jpg",
          name: "31",
          type: "Фотопечать",
          size: "",
          description: " ",
          price: ""
        },
        {
          id: "32",
          picture: "img/foto-print/32.jpg",
          name: "32",
          type: "Фотопечать",
          size: "",
          description: " ",
          price: ""
        },
        {
          id: "33",
          picture: "img/foto-print/33.jpg",
          name: "33",
          type: "Фотопечать",
          size: "",
          description: " ",
          price: ""
        },
        {
          id: "34",
          picture: "img/foto-print/34.jpg",
          name: "34",
          type: "Фотопечать",
          size: "",
          description: " ",
          price: ""
        },
        {
          id: "35",
          picture: "img/foto-print/35.jpg",
          name: "35",
          type: "Фотопечать",
          size: "",
          description: " ",
          price: ""
        },
        {
          id: "36",
          picture: "img/foto-print/36.jpg",
          name: "36",
          type: "Фотопечать",
          size: "",
          description: " ",
          price: ""
        },
        {
          id: "37",
          picture: "img/foto-print/37.jpg",
          name: "37",
          type: "Фотопечать",
          size: "",
          description: " ",
          price: ""
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
