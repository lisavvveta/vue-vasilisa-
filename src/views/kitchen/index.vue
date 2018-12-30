<template lang="html">
  <main>
    <ul class="product">
      <li v-for="item in kitchen" class="product-item image-prod ">
        <h6 class="product-item__title">{{ item.name }}</h6>
        <img :src="item.picture" alt="" class="product-item__picture" />
        <span class="product-item__size">{{ item.size }}</span><br>
        <span class="product-item__description">{{ item.description }}</span><br>
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
      kitchen: [
        {
          id: "01",
          picture: "/img/kitchen/marta.jpg",
          name: "Марта ",
          type: "Кухни",
          size: "Размеры: 1,2м 1,6м 2м",
          description: "",
          price: " от 10 000 ₽"
        },
        {
          id: "02",
          picture: "/img/kitchen/verona.jpg",
          name: "Верона ",
          type: "Кухни",
          size: "Размеры 1,5м 1,7м 2м угловой 1,2 х 1,4",
          description: "Цвета: орех, белый дуб",
          price: " от 22 000 ₽"
        },
        {
          id: "03",
          picture: "/img/kitchen/ldsp-3.jpg",
          name: "ЛДСП",
          type: "Кухни",
          size: "Размеры: 2м",
          description:
            "Комплектация: сушка белая, круглая мойка (0,6), ручки пластиковые. Большая цветовая палитра.",
          price: "от 27 700 ₽"
        },
        {
          // сюда добавить слайдер с остальными кухнями
          id: "04",
          picture: "/img/kitchen/ldsp-4.jpg",
          name: "ЛДСП",
          type: "Кухни",
          size: "Размеры: 1,5 м",
          description:
            "Комплектация: сушка белая, мойка круглая (0,6), ручки пластиковые, фасады ЛДСП и большая цветовая палитра.",
          price: "от 21 900 ₽"
        },
        {
          id: "06",
          picture: "/img/kitchen/ariana-2.jpg",
          name: "Ариана",
          type: "Кухни",
          size: "Размеры: от 1м ",
          description: "",
          price: "от 27 850 ₽"
        },
        {
          id: "07",
          picture: "/img/kitchen/kleo-3.jpg",
          name: "Калео",
          type: "Кухни",
          size: "",
          description: "",
          price: "Уточняйте у оператора"
        },
        {
          id: "08",
          picture: "/img/kitchen/dub-loa.jpg",
          name: "Дуб Лоа",
          type: "Кухни",
          size: "Размеры: от 1м ",
          description: "",
          price: "от 30 000 ₽"
        },
        {
          id: "09",
          picture: "/img/kitchen/sandra.jpg",
          name: "Сандра",
          type: "Кухни",
          size: "Размеры: от 1м",
          description: "",
          price: " от 30 000 ₽"
        },
        {
          //здесь сделать слайдер
          id: "10",
          picture: "/img/kitchen/ldsp-zacaz - 1.jpg",
          name: "ЛДСП на заказ",
          type: "Кухни",
          size: "",
          description:
            "Комплектация подбирается под ваш бюджет. Огромная палитра цветовых решений.",
          price: "от 20 000 ₽"
        },
        {
          //здесь сделать слайдер
          id: "11",
          picture: "/img/kitchen/mdf - 2.jpg",
          name: "Кухни модульные ЛДСП и МДФ глянец",
          type: "Кухни",
          size: "",
          description:
            "Фасады глянец. Комплектация подбирается под ваш размер, ручки хромированные, глянцевые или матовые, кромка фасадов может быть в алюминиевом профиле или в 3D-кромка . Большой выбор цветовой гаммы",
          price: "от 23 000 ₽"
        },
        {
          //здесь сделать слайдер
          id: "12",
          picture: "/img/kitchen/mdf-ramka -3.jpg",
          name: "Кухня фасад рамка МДФ",
          type: "Кухни",
          size: "",
          description: "",
          price: "от 23 000 ₽"
        },
        {
          //здесь сделать слайдер
          id: "13",
          picture: "/img/kitchen/kosa-1.jpg",
          name: "Кухня Коса патина рамка",
          type: "Кухни",
          size: "",
          description: "",
          price: "от 23 100 ₽"
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
