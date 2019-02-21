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
      <Product-Item v-for="product in table" :key="product.id" :product="product"/>
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
      table: [
        {
          id: "010000000",
          picture: null,
          pictures: ["/img/table/table-1.jpg", "/img/table/table-2.jpg"],
          name: "Столы из массивного дерева",
          type: "Столы",
          size: " 1000x680+500 ",
          description: "раздвижной с поворотным механизмом",
          price: 17500,
          quantity: 1
        },
        {
          id: "020000000",
          picture: null,
          pictures: ["/img/table/pauk.jpg", "/img/table/pauk-2.jpg"],
          name: "Паук",
          type: "Столы",
          size: "1100x700",
          description: "Может быть раздвижной и не раздвижной",
          price: 11400,
          quantity: 1
        },
        {
          id: "030000000",
          picture: null,
          pictures: [
            "/img/table/salut-d-800.jpg",
            "/img/table/salut-d-800-2.jpg",
            "/img/table/salut-d-800-3.jpg"
          ],
          name: "Салют d-800",
          type: "Столы",
          size: "",
          description: "может быть раздвижным и не раздвижным вставка +300",
          price: 9700,
          quantity: 1
        },
        {
          id: "040000000",
          picture: null,
          pictures: [
            "/img/table/bariton-1.jpg",
            "/img/table/bariton-2.jpg",
            "/img/table/bariton-3.jpg"
          ],
          name: "Баритон",
          type: "Столы",
          size: "1200x800+400",
          description: "раздвижной",
          price: 19300,
          quantity: 1
        },
        {
          id: "050000000",
          picture: null,
          pictures: [
            "/img/table/oda-s-1.jpg",
            "/img/table/oda-s-2.jpg",
            "/img/table/oda-s-3.jpg",
            "/img/table/oda-s-4.jpg",
            "/img/table/oda-s-5.jpg"
          ],
          name: "Ода-С",
          type: "Столы",
          size: "1000x700+300",
          description: "раздвижной",
          price: 15500,
          quantity: 1
        },
        {
          id: "060000000",
          picture: null,
          pictures: [
            "/img/table/bariton-900-1.jpg",
            "/img/table/bariton-900-2.jpg",
            "/img/table/bariton-900-3.jpg",
            "/img/table/bariton-900-5.jpg",
            "/img/table/bariton-900-6.jpg"
          ],
          name: "Баритон",
          type: "Столы",
          size: "900x600+300",
          description: "раздвижной",
          price: 16500,
          quantity: 1
        },
        {
          id: "070000000",
          picture: null,
          pictures: ["/img/table/oda-s-900-1.jpg", "/img/table/oda-s-900-.jpg"],
          name: "Ода-С",
          type: "Столы",
          size: "900х600+300",
          description: "раздвижной",
          price: 15000,
          quantity: 1
        },
        {
          id: "080000000",
          picture: null,
          pictures: ["/img/table/transformer.jpg"],
          name: "Стол трансформер",
          type: "Столы",
          size: "800х800 высота 500",
          description:
            "Вид собраный. Выполнен из ЛДСП, механизм металлический. Раскладывается из журнального столика в обеденный стол. Цвет: венге, шима темный",
          price: 13200,
          quantity: 1
        },
        {
          id: "090000000",
          picture: null,
          pictures: [
            "/img/table/bariton-1100-1.jpg",
            "/img/table/bariton-1100-2.jpg",
            "/img/table/bariton-1100-3.jpg",
            "/img/table/bariton-1100-4.jpg",
            "/img/table/bariton-1100-5.jpg"
          ],
          name: "Баритон",
          type: "Кухни",
          size: "Размеры 1100х700+300 ",
          description:
            "Он может быть раздвижным и не раздвижным механизм бабочка",
          price: 15000,
          quantity: 1
        }
      ]
    };
  }
};
</script>
