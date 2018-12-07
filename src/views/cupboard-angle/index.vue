<template lang="html">
  <main>
    <!-- здесь нужно добавить header-->
    <!-- здесь нужно добавить aside (боковое меню)-->
    <ul class="product">
      <li v-for="item in cupboardAngle" class="product-item image-prod ">
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
      cupboardAngle: [
      {
        // slider
        id: 01 ,
        picture:"/public/img/cupboard-angle/br-6.png",
        picture:"/public/img/modul-sistem/bravo.jpg",
        name: "БР-6" ,
        type: "Шкафы" ,
        size: "2215x904x904",
        description:"Этот шкаф относится к модульной системе Браво." ,
        priсe:" от ₽",
      },,
      {
        // здесь должен быть слайлер
        id: 02 ,
        picture:"/public/img/comod/br-10.png",
        name: "Комод БР-10" ,
        type: "Комоды" ,
        size: "1182x1116x355",
        description:"Без стекла.В рамке. Этот комод относится к модульной системе Браво." ,
        priсe:" от 9 300 ₽",
      },
      {
        id: 03 ,
        picture:"/public/img/bed/SP-121-124.jpg",
        name: "Комод СП-123" ,
        type: "Комоды" ,
        size: "1000х810х435",
        description:"Цвет венге-дуб белый, шима светлый, шима светлый" ,
        priсe:" от 6 600 ₽",
      },

    ]
    }
  }
}
</script>


<style lang="scss">

 /* сюда импортировать файлы для слайдера а так же loyaut и для хедера и футера */

</style>


