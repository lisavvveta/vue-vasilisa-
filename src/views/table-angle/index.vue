<template lang="html">
    <main>
      <!-- здесь нужно добавить header-->
      <!-- здесь нужно добавить aside (боковое меню)-->
      <ul id="v-for-massiv" class="product" >
        <li class="product-item image-prod ">
          <h6 class="product-item__title"> {{name}} </h6>
          <img v-lazy=" '/public/img/' + picture"
                :alt=" type + ' ' + name"
                class="product-item__image" />
            <span class="product-item__size"> {{size}} </span>
            <span class="product-item__description"> {{description}} </span>
            <span class="product-item__price"> {{price}} </span>
            <button @click=" toCart() " class="product-item__button">В корзину</button>
        </li>
      </ul>
      <!-- здесь нужно добавить footer-->
    </main>
</template>



<script>
export default {

}
</script>


<style lang="scss">

 @import "../../stylesheets/layout.scss";
 @import "../../stylesheets/product.scss";

</style>

