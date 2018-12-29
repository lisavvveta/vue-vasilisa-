<template lang="html">
  <main>
    <ul class="product">
      <li v-for="item in table" class="product-item image-prod ">
        <h6 class="product-item__title">{{ item.name }}</h6>
        <img :src="item.picture" alt="" class="product-item__picture" />
        <span class="product-item__size">{{ item.size }}</span>
        <span class="product-item__description">{{ item.description }}
          <a href="/src/views/print/index.vue"> Фотопечать любая </a>
        </span>
        <span class="product-item__price">{{ item.price }}</span>
        <button v-on:click="increase" class="product-item__button">В корзину</button>
      </li>
    </ul>
  </main>
</template>

<script>
export default {
  data() {
    return {
      table: [
        {
          // здесь должен быть слайдер
          id: "01",
          picture: "/public/img/table/ritm-1.jpg",
          name: "Ритм",
          type: "Столы",
          size: " 1000x700+300",
          description: " раздвижной ",
          price: "от 14 800 ₽"
        },
        {
          // здесь должен быть слайдер
          id: "02",
          picture: "/public/img/table/table-1.jpg",
          name: "Столы из массивного дерева",
          type: "Столы",
          size: " 1000x680+500 ",
          description: "раздвижной с поворотным механизмом",
          price: " от 16 000 ₽"
        },
        {
          // здесь должен быть слайдер
          id: "03",
          picture: "/public/img/table/pauk.jpg",
          name: "Паук",
          type: "Столы",
          size: "1100x700",
          description: "не раздвижной",
          price: " от 14 300 ₽"
        },
        {
          // здесь должен быть слайдер
          id: "04",
          picture: "/public/img/table/salut-d-800.jpg",
          name: "Салют d-800",
          type: "Столы",
          size: "",
          description: "может быть раздвижным и не раздвижным вставка +300",
          price: " от 9 000 ₽"
        },
        {
          // здесь должен быть слайдер
          id: "05",
          picture: "/public/img/table/bariton-1.jpg",
          name: "Баритон",
          type: "Столы",
          size: "1200x800+400",
          description: "раздвижной",
          price: " от 17 500 ₽"
        },
        {
          // здесь должен быть слайдер
          id: "06",
          picture: "/public/img/table/oda-s-1.jpg",
          name: "Ода-С",
          type: "Столы",
          size: "1000x700+300",
          description: "раздвижной",
          price: " от 14 500 ₽"
        },
        {
          // здесь должен быть слайдер
          id: "07",
          picture: "/public/img/table/bariton-900-1.jpg",
          name: "Баритон",
          type: "Столы",
          size: "900x600+300",
          description: "раздвижной",
          price: " от 15 000 ₽"
        },
        {
          // здесь должен быть слайдер
          id: "08",
          picture: "/public/img/table/oda-s-900-1.jpg",
          name: "Ода-С",
          type: "Столы",
          size: "900х600+300",
          description: "раздвижной",
          price: " от 13 400 ₽"
        },
        {
          // здесь должен быть слайдер
          id: "08",
          picture: "/public/img/table/",
          name: "Былина",
          type: "Столы",
          size: "900x600",
          description: "не раздвижной",
          price: " от 8 300 ₽"
        },
        {
          // здесь должен быть слайдер?
          id: "09",
          picture: "/public/img/table/transformer.jpg",
          name: "Стол трансформер",
          type: "Столы",
          size: "800х800 высота 500",
          description:
            "Вид собраный. Выполнен из ЛДСП, механизм металлический. Расскладывается из журнального столика в обеденный стол. Цвет: венге, шима темный",
          price: " от 13 200 ₽"
        },
        {
          // здесь должен быть слайдер
          id: "10",
          picture: "/public/img/kitchen/bariton-1100-1.jpg",
          name: "Баритон",
          type: "Кухни",
          size: "Размеры 1100х700+300 ",
          description:
            "Он может быть раздвижным и не раздвижным механизм бабочка",
          price: "от 15 000 ₽"
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
