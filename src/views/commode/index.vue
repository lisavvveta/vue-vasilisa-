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
      commode: [
        {
          id: "0000001",
          picture: null,
          pictures: ["/img/comod/comod-height.jpeg"],
          name: "Комод высокий",
          type: "Комоды",
          size: "1336x500x370",
          description:
            "Корпус-венге, фасад глянец. Цвет уточнить у консультанта",
          price: 6500,
          quantity: 1
        },
        {
          id: "0000002",
          picture: null,
          pictures: ["/img/modul-sistem/bravo.jpg"],
          name: "Комод БР-10",
          type: "Комоды",
          size: "1182x1116x355",
          description:
            "Без стекла.В рамке. Этот комод относится к модульной системе Браво.",
          price: 9300,
          quantity: 1
        },
        {
          id: "0000003",
          picture: null,
          pictures: ["/img/bed/SP-121-124.jpg"],
          name: "Комод СП-123",
          type: "Комоды",
          size: "1000х810х435",
          description: "Цвет венге-дуб белый, шима светлый, шима светлый",
          price: 6600,
          quantity: 1
        },
        {
          id: "0000004",
          picture: null,
          pictures: ["/img/bed/SP-121-124.jpg"],
          name: "Тумба прикроватная СП-124",
          type: "Комоды",
          size: "500х435х445",
          description: "Цвет венге-дуб беленый, шима светлый, шима светлый ",
          price: 2600,
          quantity: 1
        },
        {
          id: "0000005",
          picture: null,
          pictures: ["/img/modul-sistem/bravo.jpg"],
          name: "Пенал БР-1",
          type: "Комоды",
          size: "2215x500x351",
          description:
            "Этот пенал относится к модульной системе Браво. Рамка дороже.",
          price: "5700",
          quantity: 1
        },
        {
          id: "0000006",
          picture: null,
          pictures: ["/img/modul-sistem/bravo.jpg"],
          name: "Пенал БР-2",
          type: "Комоды",
          size: "2215x500x351",
          description: "Этот пенал относится к модульной системе Браво.",
          price: "7200",
          quantity: 1
        },
        {
          id: "0000007",
          picture: null,
          pictures: ["/img/modul-sistem/bravo.jpg"],
          name: "Пенал БР-3",
          type: "Комоды",
          size: "2215x500x351",
          description:
            "Этот пенал относится к модульной системе Браво. С двумя ящиками.",
          price: "8000",
          quantity: 1
        },
        {
          id: "0000008",
          picture: null,
          pictures: ["/img/modul-sistem/bravo.jpg"],
          name: "Стеллаж БР-7",
          type: "Комоды",
          size: "2215x351x351",
          description: "Этот стеллаж относится к модульной системе Браво.",
          price: "3400",
          quantity: 1
        },
        {
          id: "0000009",
          picture: null,
          pictures: ["/img/modul-sistem/bravo.jpg"],
          name: "Сервант БР-8",
          type: "Комоды",
          size: "2230x500x350",
          description: "Этот сервант относится к модульной системе Браво.",
          price: "5700",
          quantity: 1
        },
        {
          id: "0000010",
          picture: null,
          pictures: ["/img/modul-sistem/bravo.jpg"],
          name: "Пенал БР-9",
          type: "Комоды",
          size: "2215x560x400",
          description: "Этот пенал относится к модульной системе Браво.",
          price: "5500",
          quantity: 1
        },
        {
          id: "0000011",
          picture: null,
          pictures: ["/img/modul-sistem/lion.png"],
          name: "Пенал МС-2",
          type: "Комоды",
          size: "2220х450х450",
          description:
            "Этот пенал относится к модульной системе Лион. Со стеклом дороже.",
          price: "10100",
          quantity: 1
        },
        {
          id: "0000012",
          picture: null,
          pictures: ["/img/modul-sistem/lion.png"],
          name: "Пенал МС-3",
          type: "Комоды",
          size: "2220х600х450",
          description:
            "Этот пенал относится к модульной системе Лион. Со стеклом дороже.",
          price: "11500",
          quantity: 1
        },
        {
          id: "0000013",
          picture: null,
          pictures: ["/img/modul-sistem/lion.png"],
          name: "Пенал МС-4",
          type: "Комоды",
          size: "1675х450х450",
          description:
            "Этот пенал относится к модульной системе Лион. Со стеклом дороже.",
          price: "9000",
          quantity: 1
        },
        {
          id: "0000014",
          picture: null,
          pictures: ["/img/modul-sistem/lion.png"],
          name: "Пенал МС-5",
          type: "Комоды",
          size: "1675х650х450",
          description:
            "Этот пенал относится к модульной системе Лион. Со стеклом дороже.",
          price: "10500",
          quantity: 1
        },
        {
          id: "0000015",
          picture: null,
          pictures: ["/img/modul-sistem/lion.png"],
          name: "Комод МС-6",
          type: "Комоды",
          size: "1050х1255х4364",
          description:
            "Этот комод относится к модульной системе Лион. Со стеклом дороже.",
          price: "11000",
          quantity: 1
        },
        {
          id: "0000016",
          picture: null,
          pictures: ["/img/modul-sistem/lion.png"],
          name: "Комод МС-7",
          type: "Комоды",
          size: "1255х1200х364",
          description:
            "Этот комод относится к модульной системе Лион. Со стеклом дороже.",
          price: "12300",
          quantity: 1
        },
        {
          id: "0000017",
          picture: null,
          pictures: ["/img/modul-sistem/lion.png"],
          name: "МС-9",
          type: "Комоды",
          size: "1200х550х420",
          description:
            "МС-9 относится к модульной системе Лион. Со стеклом дороже.",
          price: "6000",
          quantity: 1
        },
        {
          id: "0000018",
          picture: null,
          pictures: ["/img/modul-sistem/lion.png"],
          name: "МС-10",
          type: "Комоды",
          size: "1200х550х420",
          description:
            "МС-10 относится к модульной системе Лион. Со стеклом дороже.",
          price: "5700",
          quantity: 1
        }
      ]
    };
  }
};
</script>

<style lang="scss">
@import "../../stylesheets/layout.scss";
</style>
