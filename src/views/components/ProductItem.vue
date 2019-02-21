<template>
  <li class="product-item image-prod">
    <h6 class="product-item__title">{{ product.name }}</h6>
    <template v-if="product.pictures">
      <img
        v-if="product.pictures.length == 1"
        :src="product.pictures[0]"
        :alt="product.title"
        class="picture"
      >

      <Slider
        v-else-if="product.pictures.length > 1"
        :slides="product.pictures"
        class="product-item__picture img_slide"
        />

      <img
        v-else
        :alt="product.title"
        src="/img/placeholder.png"
        class="product-item__picture "
        />
    </template>

    <p class="product-item__size">{{ product.size }}</p>
    <br>
    <p class="product-item__description">{{ product.description }}</p>
    <br>
    <p class="product-item__price">от {{ product.price }} ₽</p>
    <br>
    <button type="button" @click="addToCart" class="product-item__button">В корзину</button>
  </li>
</template>

<script>
import Slider from "../components/Slider.vue";

export default {
  name: "Product-Item",
  components: {
    Slider
  },
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
img {
  width: 100%;
}

.product-item {
  flex: 1 1;
  min-width: 400px;
  min-height: 400px;
  height: auto;
  margin: 10px;
  padding: 20px;
  margin-bottom: 20px;
  background-color: white;
  transition: box-shadow 0.2s ease;
  box-shadow: 0 2px 20px 0 rgba(0, 0, 0, 0.5),
    0 2px 20px 0px rgba(40, 140, 220, 0.5);

  &:hover {
    box-shadow: 0 2px 20px 0 rgba(0, 0, 0, 1),
      0 2px 20px 0px rgba(40, 140, 220, 1);
  }

  &__picture {
    height: 350px;
    object-fit: contain;
    object-position: 50% 50%;
  }

  &__title {
    margin-bottom: 5px;
    font-family: "Montserrat", sans-serif;
    font-weight: 700;
    font-size: 16px;
  }

  &__description {
    margin-bottom: 12px;
    font-family: "Montserrat", sans-serif;
    font-size: 14px;
    font-weight: normal;
    line-height: 1.8;
  }

  &__actions {
    display: flex;
    align-items: center;
  }

  &__price {
    color: #373535;
    font-family: "Montserrat", sans-serif;
    font-size: 18px;
    line-height: 1;
    margin-right: 15px;
  }

  &__button {
    padding: 13px 16px 11px;
    margin-left: auto;
    font-size: 14px;
    line-height: 1;
    font-family: "Montserrat", sans-serif;
    color: #fff;
    background-color: #29a329;
    border: 1px solid #1e90ff;
    border-radius: 8px;
    touch-action: manipulation;
    outline: none;
    transition: all 0.15s ease;

    &:active {
      background-color: #191970;
    }
  }
}
</style>
