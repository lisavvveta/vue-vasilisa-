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
      <Product-Item v-for="product in kitchen" :key="product.id" :product="product"  :Line="kitchen"/>
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
        kitchen: [
          {
            id: "0100",
            picture: "/img/kitchen/marta.jpg",
            name: "Марта ",
            type: "Кухни",
            size: "Размеры: 1,2м 1,6м 2м",
            description: "",
            price: 10000,
            quantity: 1
          },
          {
            id: "0200",
            picture: "/img/kitchen/verona.jpg",
            name: "Верона ",
            type: "Кухни",
            size: "Размеры 1,5м 1,7м 2м угловой 1,2 х 1,4",
            description: "Цвета: орех, белый дуб",
            price: 22000,
            quantity: 1
          },
          {
            id: "0300",
            picture: null,
            pictures: [
              "/img/kitchen/ldsp-3.jpg",
              "/img/kitchen/ldsp-1.jpg",
              "/img/kitchen/ldsp-2.jpg",
              "/img/kitchen/ldsp-5.jpg",
              "/img/kitchen/ldsp-6.jpg",
              "/img/kitchen/ldsp-7.jpg",
              "/img/kitchen/ldsp-8.jpg",
            ],
            name: "ЛДСП",
            type: "Кухни",
            size: "Размеры: 2м",
            description: "Комплектация: сушка белая, круглая мойка (0,6), ручки пластиковые. Большая цветовая палитра.",
            price: 27700,
            quantity: 1
          },
          {
            id: "0400",
            picture: "/img/kitchen/ldsp-4.jpg",
            name: "ЛДСП",
            type: "Кухни",
            size: "Размеры: 1,5 м",
            description: "Комплектация: сушка белая, мойка круглая (0,6), ручки пластиковые, фасады ЛДСП и большая цветовая палитра.",
            price: 21900,
            quantity: 1
          },
          {
            id: "0500",
            picture: null,
            pictures:[
               "/img/kitchen/ariana-2.jpg",
               "/img/kitchen/ariana.jpg",
            ],
            name: "Ариана",
            type: "Кухни",
            size: "Размеры: от 1м ",
            description: "",
            price: 27850,
            quantity: 1
          },
          {
            id: "0600",
            picture: null,
            pictures: [
              "/img/kitchen/kleo-3.jpg",
              "/img/kitchen/kleo-1.jpg",
              "/img/kitchen/kleo-2.jpg",
              "/img/kitchen/kleo-4.jpg",
              "/img/kitchen/kleo-5.jpg",
            ],
            name: "Калео",
            type: "Кухни",
            size: "",
            description: "",
            price: "Уточняйте у оператора",
            quantity: 1
          },
          {
            id: "0700",
            picture: "/img/kitchen/dub-loa.jpg",
            name: "Дуб Лоа",
            type: "Кухни",
            size: "Размеры: от 1м ",
            description: "",
            price: 30000,
            quantity: 1
          },
          {
            id: "0800",
            picture: "/img/kitchen/sandra.jpg",
            name: "Сандра",
            type: "Кухни",
            size: "Размеры: от 1м",
            description: "",
            price: 30000,
            quantity: 1
          },
          {
            id: "0900",
            picture: null,
            pictures:[
              "/img/kitchen/ldsp-zacaz - 1.jpg",
              "/img/kitchen/ldsp-zacaz - 2.jpg",
              "/img/kitchen/ldsp-zacaz - 3.jpg",
              "/img/kitchen/ldsp-zacaz - 4.jpg",
              "/img/kitchen/ldsp-zacaz - 5.jpg",
            ],
            name: "ЛДСП на заказ",
            type: "Кухни",
            size: "",
            description: "Комплектация подбирается под ваш бюджет. Огромная палитра цветовых решений.",
            price: 20000,
            quantity: 1
          },
          {
            id: "1000",
            picture: null,
            pictures:[
              "/img/kitchen/mdf - 2.jpg",
              "/img/kitchen/mdf - 1.jpg",
              "/img/kitchen/mdf - 3.jpg",
              "/img/kitchen/mdf - 4.jpg",
              "/img/kitchen/mdf - 5.jpg",
              "/img/kitchen/mdf - 6.jpg",
              "/img/kitchen/mdf - 7.jpg",
              "/img/kitchen/mdf - 8.jpg",
              "/img/kitchen/mdf - 9.jpg",
              "/img/kitchen/mdf - 10.jpg",
            ],
            name: "Кухни модульные ЛДСП и МДФ глянец",
            type: "Кухни",
            size: "",
            description: "Фасады глянец. Комплектация подбирается под ваш размер, ручки хромированные, глянцевые или матовые, кромка фасадов может быть в алюминиевом профиле или в 3D-кромка . Большой выбор цветовой гаммы",
            price: 23000,
            quantity: 1
          },
          {
            id: "1100",
            picture: null,
            pictures: [
              "/img/kitchen/mdf-ramka -3.jpg",
              "/img/kitchen/mdf-ramka -1.jpg",
              "/img/kitchen/mdf-ramka -2.jpg",
            ],
            name: "Кухня фасад рамка МДФ",
            type: "Кухни",
            size: "",
            description: "",
            price: 23000,
            quantity: 1
          },
          {
            id: "1200",
            picture: null,
            pictures:[
              "/img/kitchen/kosa-1.jpg",
              "/img/kitchen/kosa-2.jpg",
            ],
            name: "Кухня Коса патина рамка",
            type: "Кухни",
            size: "",
            description: "",
            price: 23100,
            quantity: 1
          },
          {
            id: "1300",
            picture: "/public/img/kitchen/MDF+fotoprint.jpg",
            name: "Кухня МДФ+фотопечать",
            type: "Кухни",
            size: "",
            description: "Цена зависит от комплектации",
            price: 30000,
            quantity: 1
          },
          {
            id: "1400",
            picture: "/public/img/kitchen/mdf +frizer.jpg",
            name: "Кухня МДФ+фрезеровка",
            type: "Кухни",
            size: "",
            description: "Цена зависит от комплектации",
            price: 40000,
            quantity: 1
          },
          {
            id: "1500",
            picture: "/public/img/kitchen/radius.jpg",
            name: "Пластик с радиусными фасадами",
            type: "Кухни",
            size: "",
            description: "",
            price: "",
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
