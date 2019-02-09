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
      <Product-Item v-for="product in table" :key="product.id" :product="product" />
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
        table: [{
            // здесь должен быть слайдер
            id: "010000000",
            picture: "/img/table/table-1.jpg",
            name: "Столы из массивного дерева",
            type: "Столы",
            size: " 1000x680+500 ",
            description: "раздвижной с поворотным механизмом",
            price: 16000,
            quantity: 1
          },
          {
            // здесь должен быть слайдер
            id: "020000000",
            picture: "/img/table/pauk.jpg",
            name: "Паук",
            type: "Столы",
            size: "1100x700",
            description: "не раздвижной",
            price: 14300,
            quantity: 1
          },
          {
            // здесь должен быть слайдер
            id: "030000000",
            picture: "/img/table/salut-d-800.jpg",
            name: "Салют d-800",
            type: "Столы",
            size: "",
            description: "может быть раздвижным и не раздвижным вставка +300",
            price: 9000,
            quantity: 1
          },
          {
            // здесь должен быть слайдер
            id: "040000000",
            picture: "/img/table/bariton-1.jpg",
            name: "Баритон",
            type: "Столы",
            size: "1200x800+400",
            description: "раздвижной",
            price: 17500,
            quantity: 1
          },
          {
            // здесь должен быть слайдер
            id: "050000000",
            picture: "/img/table/oda-s-1.jpg",
            name: "Ода-С",
            type: "Столы",
            size: "1000x700+300",
            description: "раздвижной",
            price: 14500,
            quantity: 1
          },
          {
            // здесь должен быть слайдер
            id: "060000000",
            picture: "/img/table/bariton-900-1.jpg",
            name: "Баритон",
            type: "Столы",
            size: "900x600+300",
            description: "раздвижной",
            price: 15000,
            quantity: 1
          },
          {
            // здесь должен быть слайдер
            id: "070000000",
            picture: "/img/table/oda-s-900-1.jpg",
            name: "Ода-С",
            type: "Столы",
            size: "900х600+300",
            description: "раздвижной",
            price: 13400,
            quantity: 1
          },
          {
            // здесь должен быть слайдер?
            id: "080000000",
            picture: "/img/table/transformer.jpg",
            name: "Стол трансформер",
            type: "Столы",
            size: "800х800 высота 500",
            description: "Вид собраный. Выполнен из ЛДСП, механизм металлический. Раскладывается из журнального столика в обеденный стол. Цвет: венге, шима темный",
            price: 13200,
            quantity: 1
          },
          {
            // здесь должен быть слайдер
            id: "090000000",
            picture: "/img/table/bariton-1100-1.jpg",
            name: "Баритон",
            type: "Кухни",
            size: "Размеры 1100х700+300 ",
            description: "Он может быть раздвижным и не раздвижным механизм бабочка",
            price: 15000,
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
