<template lang="html">
  <main>
    <ul id="v-for-massiv" class="product">
      <li class="product-item image-prod ">
        <h6 class="product-item__title">{{ name }}</h6>
        <img :src="item.picture" alt="" class="product-item__picture" />
        <span class="product-item__size"> {{ size }} </span>
        <span class="product-item__description"> {{ description }} </span>
        <span class="product-item__price"> {{ price }} </span>
        <button @click="toCart()" class="product-item__button">
          В корзину
        </button>
      </li>
    </ul>
  </main>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "../../stylesheets/layout.scss";
@import "../../stylesheets/product.scss";
</style>
