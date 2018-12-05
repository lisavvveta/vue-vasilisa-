<template lang="html">
  <main>
    <!-- здесь нужно добавить header-->
    <!-- здесь нужно добавить aside (боковое меню)-->
    <ul class="product">
      <li v-for="item in bed" class="product-item image-prod ">
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
      bed: [
      {
        id: 001 ,
        picture:"/public/img/bed/bruno.jpg",
        name: "Бруно" ,
        type: "Кровати" ,
        size: "Размеры: 1100х1452х2064",
        description:" с ортопедическим основанием" ,
        prise:" ₽",
      },
      {
        id: 002 ,
        picture:"/public/img/bed/Venera.png",
        name: "Бруно" ,
        type: "Кровати" ,
        size: "Размеры: 2000x1400",
        description:"" ,
        prise:" ₽",
      },
      {
        id: 003 ,
        picture:"/public/img/bed/fortuna.jpg",
        name: "Фортуна" ,
        type: "Кровати" ,
        size: "Размеры: 2000x1400",
        description:"" ,
        prise:" ₽",
      },
      {
        id: 004 ,
        picture:"/public/img/bed/sicilia.jpg",
        name: "Сицилия" ,
        type: "Кровати" ,
        size: "Размеры: 1600-2000",
        description:"" ,
        prise:" ₽",
      },
      {
        id: 005 ,
        picture:"/public/img/bed/kapry.jpg",
        name: "Капри" ,
        type: "Кровати" ,
        size: "Размеры: 1600-2000",
        description:"" ,
        prise:" ₽",
      },
      {
        id: 006 ,
        picture:"/public/img/bed/selena.jpg",
        name: "Селена" ,
        type: "Кровати" ,
        size: "Размеры: 1600-2000",
        description:"" ,
        prise:" ₽",
      },
      {
        id: 007 ,
        picture:"/public/img/bed/SP-121-124.jpg",
        name: "СП-121" ,
        type: "Кровати" ,
        size: "Размеры: 1600-2000 ",
        description:"Цвет: венге-дуб беленый" ,
        prise:" ₽",
      },
    ]
    }
  }
}
</script>


<style lang="scss">

 /* сюда импортировать файлы для слайдера а так же loyaut и для хедера и футера */

</style>


