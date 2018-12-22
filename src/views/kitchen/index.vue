<template lang="html">
  <main>
    <!-- здесь нужно добавить header-->
    <!-- здесь нужно добавить aside (боковое меню)-->
    <ul class="product">
      <li v-for="item in kitchen" class="product-item image-prod ">
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
      kitchen: [
      {
        id: 01 ,
        picture:"/public/img/kitchen/marta.jpg",
        name: "Марта " ,
        type: "Кухни" ,
        size: "Размеры: 1,2м 1,6м 2м",
        description:"" ,
        price:" от 10 000 ₽",
      },
      {
        id: 02 ,
        picture:"/public/img/kitchen/verona.jpg",
        name: "Верона " ,
        type: "Кухни" ,
        size: "Размеры 1,5м 1,7м 2м угловой 1,2 х 1,4",
        description:"Цвета: орех, белый дуб" ,
        price:" от 22 000 ₽",
      },
      {
        id: 03 ,
        picture:"/public/img/kitchen/ldsp-3.jpg",
        name: "ЛДСП" ,
        type: "Кухни" ,
        size: "Размеры: от 1м до 2м",
        description:"" ,
        price:"Уточняйте у оператора",
      },
      {
        id: 04 ,
        picture:"/public/img/kitchen/ldsp-4.jpg",
        name: "ЛДСП" ,
        type: "Кухни" ,
        size: "Размеры: от 1м до 2м",
        description:"" ,
        price:"Уточняйте у оператора",
      },
      {
        id: 05 ,
        picture:"/public/img/kitchen/ldsp-5.jpg",
        name: "ЛДСП" ,
        type: "Кухни" ,
        size: "Размеры: от 1м до 2м",
        description:"" ,
        price:"Уточняйте у оператора",
      },
      {
        id: 06 ,
        picture:"/public/img/kitchen/ariana.jpg",
        name: "Ариана" ,
        type: "Кухни" ,
        size: "Размеры: от 1м до 2м",
        description:"" ,
        price:"Уточняйте у оператора",
      },
      {
        id: 07 ,
        picture:"/public/img/kitchen/kleo-3.jpg",
        name: "Калео" ,
        type: "Кухни" ,
        size: "",
        description:"" ,
        price:"Уточняйте у оператора",
      },
      {
        id: 08 ,
        picture:"/public/img/kitchen/dub-loa.jpg",
        name: "Дуб Лоа" ,
        type: "Кухни" ,
        size: "Размеры: от 1м до 2м",
        description:"" ,
        price:"Уточняйте у оператора",
      },
      {
        id: 09 ,
        picture:"/public/img/kitchen/sandra.jpg",
        name: "Сандра" ,
        type: "Кухни" ,
        size: "Размеры: от 1м до 2м",
        description:"" ,
        price:"Уточняйте у оператора",
      },
     ]
    }
  }
}
</script>


<style lang="scss">

 @import "../../stylesheets/layout.scss";
 @import "../../stylesheets/product.scss";

</style>


