<template>
  <li class="product-item image-prod">
    <h6 class="product-item__title">{{ product.name }}</h6>
    <img :src="product.picture" alt="product.picture" class="product-item__picture" />
    <p class="product-item__size">{{ product.size }}</p><br>
    <p class="product-item__description">{{ product.description }}</p><br>
    <p class="product-item__price">от {{ product.price }} ₽ </p><br>
    <button type="button" @click="addToCart" class="product-item__button">В корзину</button>
  </li>
</template>

<script>
export default {
  name: "Product-Item",
  props: {
    product: {
      type: Object,
      required: true
    }
  },

  methods: {
    addToCart() {
      const { product } = this;
      this.$bus.emit("add-product", product);
    }
  }
};
</script>

<style lang="scss">
</style>
