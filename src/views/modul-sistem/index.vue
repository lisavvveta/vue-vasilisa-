<template lang="html">
  <main>
    <!-- здесь нужно добавить header-->
    <!-- здесь нужно добавить aside (боковое меню)-->
    <ul class="product">
      <li v-for="item in commode" class="product-item image-prod ">
        <h6 class="product-item__title">{{ item.name }}</h6>
        <img :src="item.picture" alt="" class="product-item__picture"/>
        <span class="product-item__size">{{ item.size }}</span>
        <span class="product-item__description">{{ item.description }}</span>
        <span class="product-item__price">{{ item.price }}</span>
        <button v-on:click="counter += 1" class="product-item__button">В корзину</button>
      </li>
    </ul>
  <!-- здесь нужно добавить footer-->
  </main>
</template>

<script>
export default {
  data () {
    return {
      commode: [
      {
        id: 01 ,
        picture:"/public/img/modul-sistem/bravo.jpg",
        name: "Модульная система Браво" ,
        type: "Модульная система" ,
        size: "1200х4300",
        description:"" ,
        price:" от 61 500 ₽",
      },
      {
        id: 02 ,
        picture:"/public/img/comod/br-10.png",
        name: "Модульная система Лион" ,
        type: "Комоды" ,
        size: "1182x1116x355",
        description:"Без стекла. это относится к модульной системе Браво." ,
        price:" от 42 300 ₽",
      },
    ]
    }
  }
}
</script>


<style lang="scss">

 /* сюда импортировать файлы для слайдера а так же loyaut и для хедера и футера */

</style>


