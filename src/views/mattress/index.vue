<template lang="html">
  <main>
    <ul class="product">
      <li v-for="item in mattress" class="product-item image-prod">
        <h6 class="product-item__title">{{ item.name }}</h6>
        <img :src="item.picture" alt="" class="product-item__picture" />
        <span class="product-item__size">{{ item.size }}</span>
        <span class="product-item__description">{{ item.description }}</span>
        <span class="product-item__price">{{ item.price }}</span>
        <button v-on:click="increase" class="product-item__button">
      </li>
    </ul>
  </main>
</template>

<script>
export default {
  data() {
    return {
      mattress: [
        {
          id: "01",
          picture: "",
          name: "",
          type: "Матрасы",
          size: " ",
          description: " ",
          price: "от "
        },
      ]
    };
  }
};
</script>

<style lang="scss">
@import "../../stylesheets/layout.scss";
@import "../../stylesheets/product.scss";
</style>
