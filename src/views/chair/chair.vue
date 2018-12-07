<template lang="html">
    <main>
      <!-- здесь нужно добавить header-->
      <!-- здесь нужно добавить aside (боковое меню)-->
      <ul id="ChairMassiv" class="product" >
        <li v-for="item in chair" class="product-item image-prod ">
        <h6 class="product-item__title"> {{ item.name }} </h6>
        <image v-lazy=" '/public/img/chair/' alt"="" class="product-item__picture"> {{ item.picture }} </image>
        <span class="product-item__size"> {{ item.size }} </span>
        <span class="product-item__description"> {{item.description }} </span>
        <span class="product-item__price"> {{ item.price }} </span>
        <button v-on:click="counter += 1" class="product-item__button">В корзину</button>
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
 
 /* сюда импортировать файлы для слайдера а так же loyaut и для хедера и футера */ 

</style>

 