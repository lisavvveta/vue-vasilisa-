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
     <Product-Item v-for="product in commode" :key="product.id" :product="product" />
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
        commode: [{
            //slide
            id: "01",
            picture: "/img/comod/comod-height.jpeg",
            name: "Комод высокий",
            type: "Комоды",
            size: "1336x500x370",
            description: "Корпус-венге, фасад глянец. Цвет уточнить у консультанта",
            price: 6500,
            quantity: 1
          },
          {
            //slide
            id: "02",
            picture: "/img/comod/br-10.png",
            name: "Комод БР-10",
            type: "Комоды",
            size: "1182x1116x355",
            description: "Без стекла.В рамке. Этот комод относится к модульной системе Браво.",
            price: 9300,
            quantity: 1
          },
          {
            //slide
            id: "03",
            picture: "/img/bed/SP-121-124.jpg",
            name: "Комод СП-123",
            type: "Комоды",
            size: "1000х810х435",
            description: "Цвет венге-дуб белый, шима светлый, шима светлый",
            price: 6600,
            quantity: 1
          },
          {
            //slide
            id: "04",
            picture: "/img/bed/SP-121-124.jpg",
            name: "Тумба прикроватная СП-124",
            type: "Комоды",
            size: "500х435х445",
            description: "Цвет венге-дуб беленый, шима светлый, шима светлый ",
            price: 2600,
            quantity: 1
          },
          {
            //slide
            id: "05",
            picture: "/img/comod/penal-br-1.png",
            name: "Пенал БР-1",
            type: "Комоды",
            size: "2215x500x351",
            description: "Этот пенал относится к модульной системе Браво.",
            price: '' ,
            quantity: 1
          },
          {
            //slide
            id: "06",
            picture: "/img/comod/penal-br-2.png",
            name: "Пенал БР-2",
            type: "Комоды",
            size: "2215x500x351",
            description: "Этот пенал относится к модульной системе Браво.",
            price: '',
            quantity: 1
          },
          {
            //slide
            id: "07",
            picture: "/img/comod/penal-br-3.png",
            name: "Пенал БР-3",
            type: "Комоды",
            size: "2215x500x351",
            description: "Этот пенал относится к модульной системе Браво.",
            price: '',
            quantity: 1
          },
          {
            //slide
            id: "08",
            picture: "/img/comod/br-7.png",
            name: "Стеллаж БР-7",
            type: "Комоды",
            size: "2215x351x351",
            description: "Этот стеллаж относится к модульной системе Браво.",
            price: '',
            quantity: 1
          },
          {
            //slide
            id: "09",
            picture: "/img/comod/penal-br-8.png",
            name: "Пенал БР-8",
            type: "Комоды",
            size: "2215x500x351",
            description: "Этот пенал относится к модульной системе Браво.",
            price: '',
            quantity: 1
          },
          {
            //slide
            id: "10",
            picture: "/img/comod/penal-br-9.png",
            name: "Пенал БР-9",
            type: "Комоды",
            size: "2215x560x400",
            description: "Этот пенал относится к модульной системе Браво.",
            price: '',
            quantity: 1
          },
          {
            //slide
            id: "11",
            picture: "/img/comod/ms-2.png",
            name: "Пенал МС-2",
            type: "Комоды",
            size: "2220х450х450",
            description: "Этот пенал относится к модульной системе Лион.",
            price: '',
            quantity: 1
          },
          {
            //slide
            id: "12",
            picture: "/img/comod/ms-3.png",
            name: "Пенал МС-3",
            type: "Комоды",
            size: "2220х600х450",
            description: "Этот пенал относится к модульной системе Лион.",
            price: '',
            quantity: 1
          },
          {
            //slide
            id: "13",
            picture: "/img/comod/ms-4.png",
            name: "Пенал МС-4",
            type: "Комоды",
            size: "1675х450х450",
            description: "Этот пенал относится к модульной системе Лион.",
            price: '',
            quantity: 1
          },
          {
            //slide
            id: "14",
            picture: "/img/comod/ms-5.png",
            name: "Пенал МС-5",
            type: "Комоды",
            size: "1675х650х450",
            description: "Этот пенал относится к модульной системе Лион.",
            price: '',
            quantity: 1
          },
          {
            //slide
            id: "15",
            picture: "/img/comod/ms-6.png",
            name: "Комод МС-6",
            type: "Комоды",
            size: "1050х1255х4364",
            description: "Этот комод относится к модульной системе Лион.",
            price: '',
            quantity: 1
          },
          {
            //slide
            id: "16",
            picture: "/img/comod/ms-7.png",
            name: "Комод МС-7",
            type: "Комоды",
            size: "1255х1200х364",
            description: "Этот комод относится к модульной системе Лион.",
            price: '',
            quantity: 1
          },
          {
            //slide
            id: "17",
            picture: "/img/comod/ms-9.png",
            name: "МС-9",
            type: "Комоды",
            size: "1200х550х420",
            description: "МС-9 относится к модульной системе Лион.",
            price: '',
            quantity: 1
          },
          {
            //slide
            id: "18",
            picture: "/img/comod/ms-10.png",
            name: "МС-10",
            type: "Комоды",
            size: "1200х550х420",
            description: "МС-10 относится к модульной системе Лион.",
            price: '',
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
