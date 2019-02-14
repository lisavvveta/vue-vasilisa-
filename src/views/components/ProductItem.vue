<template>
  <li class="product-item image-prod">
    <h6 class="product-item__title">{{ product.name }}</h6>
    <img
      v-if="Line.picture.length ==1"
      :src="Line.picture"
      :alt="Line.title"
      class="product-item__picture" />

    <!-- <Slider
      v-if="Line.pictures.length > 1"
      :slides="Line.pictures"
      /> -->
    <img v-else src="/img/placeholder.png" :alt="Line.title" class="product-item__picture" />

    <p class="product-item__size">{{ product.size }}</p><br>
    <p class="product-item__description">{{ product.description }}</p><br>
    <p class="product-item__price">от {{ product.price }} ₽ </p><br>
    <button type="button" @click="addToCart" class="product-item__button">В корзину</button>

<p>{{ Line.pictures }}</p>

  </li>
</template>

<script>

  import Slider from "../components/Slider.vue";

export default {
  name: "Slider",
  components: {
    Slider
  },
  props: {
    product: {
      type: Object,
      required: true
    },
    Line: {
      type: Array,
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
