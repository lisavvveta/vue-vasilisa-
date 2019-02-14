<template lang="html">
  <main>
    <section class="navigatiion">
      <ul class="navigation">
        <li class="ItemMenu">
          <router-link to="index"> Главная </router-link>
        </li>
        <li class="ItemMenu">
          <router-link to="order">Как заказать</router-link>
        </li>
        <li class="ItemMenu">
          <router-link to="comments">Отзывы </router-link>
        </li>
        <li class="ItemMenu">
          <router-link to="feedback">Контакты </router-link>
        </li>
      </ul>
    </section>
    <ul class="product">
      <Product-Item v-for="product in sofaAngle" :key="product.id" :product="product"  :Line="sofaAngle"/>
    </ul>
  </main>
</template>

<script>
  import ProductItem from "../components/ProductItem.vue";

  export default {
    components: {
      ProductItem
    },
    data() {
      return {
        sofaAngle: [{
            id: "01000000",
            picture: "/img/sofa-angle/brigantina.jpg",
            name: "Диван угловой Бригантина",
            type: "Диваны угловые",
            size: "3180x176x910",
            description: "Cпальное место 2700x1300",
            price: 55500,
            quantity: 1
          },
          {
            id: "02000000",
            picture: null,
            pictures: [
              "/img/sofa-angle/elvira4-1.jpg",
              "/img/sofa-angle/elvira4-2.jpg",
              "/img/sofa-angle/elvira4-3.jpg",
              "/img/sofa-angle/elvira4-4.jpg",
            ],
            name: "Диван угловой Эльвира",
            type: "Диваны угловые",
            size: "1740х1120х940",
            description: "Спальное место 1950х1400см. Механизм пантограф. Преимущество этого дивана в огромном ящике под постельное белье и механизме пантограф. Угол дивана не меняется.",
            price: 54650,
            quantity: 1
          },
          {
            id: "03000000",
            picture: "/img/sofa-angle/melisa.jpg",
            name: "Диван угловой Мелиса",
            type: "Диваны угловые",
            size: "1970х850х920",
            description: "Спальное место 1500x2000. Механизм раскладывания пантограф",
            price: 39100,
            quantity: 1
          },
          {
            id: "04000000",
            picture: null,
            pictures: [
              "/img/sofa-angle/veronica.jpg",
              "/img/sofa-angle/veronica2.jpg",
            ],
            name: "Диван угловой Вероника",
            type: "Диваны угловые",
            size: "2900х1050х1500",
            description: "Четырехместная. Механизм тик-так, пружинный блок, угол меняется, у подушек съемные чехлы, подлокотники МДФ. При транспортировке легко раскладывается и складывается. У него может быть крeсло.",
            price: 48000,
            quantity: 1
          }
        ]
      };
    }
  };
</script>

<style lang="scss">
  @import "../../stylesheets/layout.scss";
  @import "../../stylesheets/product.scss";
</style>
