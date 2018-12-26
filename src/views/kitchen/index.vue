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
        size: "Размеры: 2м",
        description:"Комплектация: сушка белая, круглая мойка (0,6), ручки пластиковые. Большая цветовая политра." ,
        price:"от 27 700 ₽",
      },
      {
      // сюда добавить слайдер с остальными кухнями
        id: 04 ,
        picture:"/public/img/kitchen/ldsp-4.jpg",
        name: "ЛДСП" ,
        type: "Кухни" ,
        size: "Размеры: 1,5 м",
        description:"Комплектация: сушка белая, мойка круглая (0,6), ручки пластиковые, фасады ЛДСП и большая цветовая политра." ,
        price:"21 900 ₽",
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
       {
         //здесь сделать слайдер
        id: 10 ,
        picture:"/public/img/kitchen/ldsp-zacaz - 1.jpg",
        name: "ЛДСП на заказ" ,
        type: "Кухни" ,
        size: "",
        description:"Комплектация подбирается под ваш бюджет. Огромная палитра цветовых решений." ,
        price:"от 20 000 ₽",
      },
       {
         //здесь сделать слайдер
        id: 11 ,
        picture:"/public/img/kitchen/mdf - 1.jpg",
        name: "Кухни модульные ЛДСП и МДФ" ,
        type: "Кухни" ,
        size: "",
        description: "Фасады глянец. Комплектация подбирается под ваш размер. Большой выбор цветовой гаммы" ,
        price:"от 23 000 ₽",
      },
      {
         //здесь сделать слайдер
        id: 12 ,
        picture:"/public/img/kitchen/mdf - 1.jpg",
        name: "Кухни модульные ЛДСП и МДФ" ,
        type: "Кухни" ,
        size: "",
        description: "Фасады глянец. Комплектация подбирается под ваш размер. Большой выбор цветовой гаммы" ,
        price:"от 23 000 ₽",
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


