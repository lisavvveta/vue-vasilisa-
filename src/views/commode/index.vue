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
        //slide
        id: 01 ,
        picture:"/public/img/comod/comod-height.jpeg",
        name: "Комод высокий" ,
        type: "Комоды" ,
        size: "1336x500x370",
        description:"Корпус-венге, фасад глянец. Цвет уточнить у консультанта" ,
        priсe:" от 6 500 ₽",
      },
      {
        //slide
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
        //slide
        id: 03 ,
        picture:"/public/img/bed/SP-121-124.jpg",
        name: "Комод СП-123" ,
        type: "Комоды" ,
        size: "1000х810х435",
        description:"Цвет венге-дуб белый, шима светлый, шима светлый" ,
        priсe:" от 6 600 ₽",
      },
      {
        //slide
        id: 04 ,
        picture:"/public/img/bed/SP-121-124.jpg",
        name: "Тумба прикроватная СП-124" ,
        type: "Комоды" ,
        size: "500х435х445",
        description:"Цвет венге-дуб беленый, шима светлый, шима светлый " ,
        priсe:" от 2 600 ₽",
      },
      {
        //slide
        id: 05 ,
        picture:"/public/img/comod/penal-br-1.png",
        picture:"/public/img/modul-sistem/bravo.jpg",
        name: "Пенал БР-1" ,
        type: "Комоды" ,
        size: "2215x500x351",
        description:"Этот пенал относится к модульной системе Браво." ,
        priсe:" от  ₽",
      },
      {
        //slide
        id: 06 ,
        picture:"/public/img/comod/penal-br-2.png",
        picture:"/public/img/modul-sistem/bravo.jpg",
        name: "Пенал БР-2" ,
        type: "Комоды" ,
        size: "2215x500x351",
        description:"Этот пенал относится к модульной системе Браво." ,
        priсe:" от  ₽",
      },
      {
        //slide
        id: 07 ,
        picture:"/public/img/comod/penal-br-3.png",
        picture:"/public/img/modul-sistem/bravo.jpg",
        name: "Пенал БР-3" ,
        type: "Комоды" ,
        size: "2215x500x351",
        description:"Этот пенал относится к модульной системе Браво." ,
        priсe:" от  ₽",
      },
      {
        //slide
        id: 08 ,
        picture:"/public/img/comod/br-7.png",
        picture:"/public/img/modul-sistem/bravo.jpg",
        name: "Стеллаж БР-7" ,
        type: "Комоды" ,
        size: "2215x351x351",
        description:"Этот стеллаж относится к модульной системе Браво." ,
        priсe:" от  ₽",
      },
      {
        //slide
        id: 09 ,
        picture:"/public/img/comod/penal-br-8.png",
        picture:"/public/img/modul-sistem/bravo.jpg",
        name: "Пенал БР-8" ,
        type: "Комоды" ,
        size: "2215x500x351",
        description:"Этот пенал относится к модульной системе Браво." ,
        priсe:" от  ₽",
      },
    ]
    }
  }
}
</script>


<style lang="scss">

 /* сюда импортировать файлы для слайдера а так же loyaut и для хедера и футера */

</style>


