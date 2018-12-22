<template lang="html">
  <main>
    <!-- здесь нужно добавить header-->
    <!-- здесь нужно добавить aside (боковое меню)-->
    <ul class="product">
      <li v-for="item in sofaAngle" class="product-item image-prod ">
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
      sofaAngle: [
      {
        id: 01 ,
        picture:"/public/img/sofa-angle/brigantina.jpg",
        name: "Диван угловой Бригантина" ,
        type: "Диваны угловые" ,
        size: "3180x176x910",
        description:"Cпальное место 2700x1300" ,
        prise:" от 55 500 ₽",
      },
      {
        // здесь должен быть слайдер
        id: 02 ,
        picture:"/public/img/sofa-angle/elvira4-1.jpg",
        name: "Диван угловой Эльвира" ,
        type: "Диваны угловые" ,
        size: "1740х1120х940",
        description:"Спальное место 1950х1400см. Механизм пантограф. Преимущество этого дивана в огромном ящике под постельное белье и механизме пантограф. Угол дивана не меняется." ,
        prise:"от 54 650 ₽",
      },
      {
        // здесь должен быть слайдер
        id: 03 ,
        picture:"/public/img/sofa-angle/melisa.jpg",
        name: "Диван угловой Мелиса" ,
        type: "Диваны угловые" ,
        size: "1970х850х920",
        description:"Cпальное место 1500x2000. Механизм раскралыдывания пантограф" ,
        prise:" от 39 100 ₽",
      },
      {
        // здесь должен быть слайдер
        id: 04 ,
        picture:"/public/img/sofa-angle/veronica.jpg",
        name: "Диван угловой Вероника" ,
        type: "Диваны угловые" ,
        size: "2900х1050х1500",
        description:"Четырехместная. Механизм тик-так, пружинный блок, угол меняется, у подушек съемные чехлы, подлокотники МДФ. При транспортировке легко расскладывается и складывается. У него может быть крксло." ,
        prise:" от 48 000 ₽",
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


