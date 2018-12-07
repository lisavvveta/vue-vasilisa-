<template lang="html">
  <main>
    <!-- здесь нужно добавить header-->
    <!-- здесь нужно добавить aside (боковое меню)-->
    <ul class="product">
      <li v-for="item in cupboard" class="product-item image-prod ">
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
      cupboard: [
      {
        // slider
        id: 01 ,
        picture:"/public/img/cupboard/br-4.png",
        picture:"/public/img/modul-sistem/bravo.jpg",
        name: "БР-4" ,
        type: "Шкафы" ,
        size: "2215x800x560",
        description:"Этот шкаф относится к модульной системе Браво." ,
        priсe:" от ₽",
      },
      {
        // slider
        id: 02 ,
        picture:"/public/img/cupboard/br-5.png",
        picture:"/public/img/modul-sistem/bravo.jpg",
        name: "БР-5" ,
        type: "Шкафы" ,
        size: "2215x800x560",
        description:"Этот шкаф относится к модульной системе Браво." ,
        priсe:" от ₽",
      },

    ]
    }
  }
}
</script>


<style lang="scss">

 /* сюда импортировать файлы для слайдера а так же loyaut и для хедера и футера */

</style>


