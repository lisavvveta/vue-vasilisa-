<template lang="html">
  <main>
    <ul class="product">
      <li v-for="item in cupboard" class="product-item image-prod ">
        <h6 class="product-item__title">{{ item.name }}</h6>
        <img :src="item.picture" alt="" class="product-item__picture" />
        <span class="product-item__size">{{ item.size }}</span><br>
        <span class="product-item__description">{{ item.description }}</span><br>
        <span class="product-item__price">{{ item.price }}</span>
        <button v-on:click="increase" class="product-item__button">В корзину</button>
      </li>
    </ul>
  </main>
</template>

<script>
export default {
  data() {
    return {
      cupboard: [
        {
          // slider
          id: "01",
          picture: "/img/cupboard/br-4.png",
          name: "БР-4",
          type: "Шкафы",
          size: "2215x800x560",
          description: "Этот шкаф относится к модульной системе Браво.",
          priсe: " от ₽"
        },
        {
          // slider
          id: "02",
          picture: "/img/cupboard/br-5.png",
          picture: "/img/modul-sistem/bravo.jpg",
          name: "БР-5",
          type: "Шкафы",
          size: "2215x800x560",
          description: "Этот шкаф относится к модульной системе Браво.",
          priсe: " от ₽"
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
