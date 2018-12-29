<template lang="html">
  <main>
    <ul class="product">
      <li v-for="item in colouring" class="product-item image-prod ">
        <h6 class="product-item__title">{{ item.name }}</h6>
        <img :src="item.picture" alt="" class="product-item__picture" />
        <span class="product-item__size">{{ item.size }}</span>
        <span class="product-item__description">{{ item.description }}</span>
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
      colouring: [
        {
          id: "01",
          picture: "/public/img/colouring/pink.jpg",
          name: "Розовый",
          type: "Цвета",
          size: "",
          description: "",
          price: ""
        },
        {
          id: "02",
          picture: "/public/img/colouring/blue.jpg",
          name: "Синий",
          type: "Цвета",
          size: "",
          description: "",
          price: ""
        },
        {
          id: "03",
          picture: "/public/img/colouring/oal-sonoma.jpg",
          name: "Дуб Сонома",
          type: "Цвета",
          size: "",
          description: "",
          price: ""
        },
        {
          id: "04",
          picture: "/public/img/colouring/oal- milk.jpg",
          name: "Дуб Молочный или Дуб белый",
          type: "Цвета",
          size: "",
          description: "",
          price: ""
        },
        {
          id: "05",
          picture: "/public/img/colouring/venge.jpg",
          name: "Венге",
          type: "Цвета",
          size: "",
          description: "",
          price: ""
        },
        {
          id: "06",
          picture: "/public/img/colouring/shimo-white.jpg",
          name: "Шимо светлый",
          type: "Цвета",
          size: "",
          description: "",
          price: ""
        },
        {
          id: "07",
          picture: "/public/img/colouring/shimo-dark.jpg",
          name: "Шимо темный",
          type: "Цвета",
          size: "",
          description: "",
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
