<template lang="html">
  <main>
    <ul class="product">
      <li v-for="item in coupe" class="product-item image-prod ">
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
      coupe: [
        {
          id: "01",
          picture: "/img/bed/SP-121-124.jpg",
          name: "СП-121",
          type: "Шкафы-купе",
          size: "1435x550x2100",
          description: "Цвета: венге, дуб беленый",
          price: " от 16 000 ₽"
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
