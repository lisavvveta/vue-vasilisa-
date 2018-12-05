<template lang="html">
  <main>
    <!-- здесь нужно добавить header-->
    <!-- здесь нужно добавить aside (боковое меню)-->
    <ul class="product">
      <li v-for="item in kids" class="product-item image-prod ">
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
      kids: [
      {
        // Здесь должен быть слайдер
        id: 01 ,
        picture:"/public/img/kids/1-1.jpg",
        name: "Мини диванчики в детскую" ,
        type: "Детская мебель" ,
        size: "970х800х700",
        description:"Спальное место 1830х940. Боковинки из ЛДСП в толстой кромке. Основание спального место и фанеры. Внутри небольшой ящик" ,
        prise:" от 11 600 ₽",
      },
    ]
    }
  }
}
</script>


<style lang="scss">

 /* сюда импортировать файлы для слайдера а так же loyaut и для хедера и футера */

</style>


