<template lang="html">
  <main>
    <ul class="product">
      <li v-for="item in commode" class="product-item image-prod ">
        <h6 class="product-item__title">{{ item.name }}</h6>
        <img :src="item.picture" alt="" class="product-item__picture" />
        <span class="product-item__size">{{ item.size }}</span>
        <span class="product-item__description">{{ item.description }}</span>
        <span class="product-item__price">{{ item.price }}</span>
        <button v-on:click="increase" class="product-item__button">
          В корзину
        </button>
      </li>
    </ul>
  </main>
</template>

<script>
export default {
  data() {
    return {
      commode: [
        {
          //slide
          id: "01",
          picture: "/public/img/comod/comod-height.jpeg",
          name: "Комод высокий",
          type: "Комоды",
          size: "1336x500x370",
          description:
            "Корпус-венге, фасад глянец. Цвет уточнить у консультанта",
          priсe: " от 6 500 ₽"
        },
        {
          //slide
          id: "02",
          picture: "/public/img/comod/br-10.png",
          name: "Комод БР-10",
          type: "Комоды",
          size: "1182x1116x355",
          description:
            "Без стекла.В рамке. Этот комод относится к модульной системе Браво.",
          priсe: " от 9 300 ₽"
        },
        {
          //slide
          id: "03",
          picture: "/public/img/bed/SP-121-124.jpg",
          name: "Комод СП-123",
          type: "Комоды",
          size: "1000х810х435",
          description: "Цвет венге-дуб белый, шима светлый, шима светлый",
          priсe: " от 6 600 ₽"
        },
        {
          //slide
          id: "04",
          picture: "/public/img/bed/SP-121-124.jpg",
          name: "Тумба прикроватная СП-124",
          type: "Комоды",
          size: "500х435х445",
          description: "Цвет венге-дуб беленый, шима светлый, шима светлый ",
          priсe: " от 2 600 ₽"
        },
        {
          //slide
          id: "05",
          picture: "/public/img/comod/penal-br-1.png",
          picture: "/public/img/modul-sistem/bravo.jpg",
          name: "Пенал БР-1",
          type: "Комоды",
          size: "2215x500x351",
          description: "Этот пенал относится к модульной системе Браво.",
          priсe: " от  ₽"
        },
        {
          //slide
          id: "06",
          picture: "/public/img/comod/penal-br-2.png",
          picture: "/public/img/modul-sistem/bravo.jpg",
          name: "Пенал БР-2",
          type: "Комоды",
          size: "2215x500x351",
          description: "Этот пенал относится к модульной системе Браво.",
          priсe: " от  ₽"
        },
        {
          //slide
          id: "07",
          picture: "/public/img/comod/penal-br-3.png",
          picture: "/public/img/modul-sistem/bravo.jpg",
          name: "Пенал БР-3",
          type: "Комоды",
          size: "2215x500x351",
          description: "Этот пенал относится к модульной системе Браво.",
          priсe: " от  ₽"
        },
        {
          //slide
          id: "08",
          picture: "/public/img/comod/br-7.png",
          picture: "/public/img/modul-sistem/bravo.jpg",
          name: "Стеллаж БР-7",
          type: "Комоды",
          size: "2215x351x351",
          description: "Этот стеллаж относится к модульной системе Браво.",
          priсe: " от  ₽"
        },
        {
          //slide
          id: "09",
          picture: "/public/img/comod/penal-br-8.png",
          picture: "/public/img/modul-sistem/bravo.jpg",
          name: "Пенал БР-8",
          type: "Комоды",
          size: "2215x500x351",
          description: "Этот пенал относится к модульной системе Браво.",
          priсe: " от  ₽"
        },
        {
          //slide
          id: "10",
          picture: "/public/img/comod/penal-br-9.png",
          picture: "/public/img/modul-sistem/bravo.jpg",
          name: "Пенал БР-9",
          type: "Комоды",
          size: "2215x560x400",
          description: "Этот пенал относится к модульной системе Браво.",
          priсe: " от  ₽"
        },
        {
          //slide
          id: "11",
          picture: "/public/img/comod/ms-2.png",
          picture: "/public/img/modul-sistem/lion.png",
          name: "Пенал МС-2",
          type: "Комоды",
          size: "2220х450х450",
          description: "Этот пенал относится к модульной системе Лион.",
          priсe: " от  ₽"
        },
        {
          //slide
          id: "12",
          picture: "/public/img/comod/ms-3.png",
          picture: "/public/img/modul-sistem/lion.png",
          name: "Пенал МС-3",
          type: "Комоды",
          size: "2220х600х450",
          description: "Этот пенал относится к модульной системе Лион.",
          priсe: " от  ₽"
        },
        {
          //slide
          id: "13",
          picture: "/public/img/comod/ms-4.png",
          picture: "/public/img/modul-sistem/lion.png",
          name: "Пенал МС-4",
          type: "Комоды",
          size: "1675х450х450",
          description: "Этот пенал относится к модульной системе Лион.",
          priсe: " от  ₽"
        },
        {
          //slide
          id: "14",
          picture: "/public/img/comod/ms-5.png",
          picture: "/public/img/modul-sistem/lion.png",
          name: "Пенал МС-5",
          type: "Комоды",
          size: "1675х650х450",
          description: "Этот пенал относится к модульной системе Лион.",
          priсe: " от  ₽"
        },
        {
          //slide
          id: "15",
          picture: "/public/img/comod/ms-6.png",
          picture: "/public/img/modul-sistem/lion.png",
          name: "Комод МС-6",
          type: "Комоды",
          size: "1050х1255х4364",
          description: "Этот комод относится к модульной системе Лион.",
          priсe: " от  ₽"
        },
        {
          //slide
          id: "16",
          picture: "/public/img/comod/ms-7.png",
          picture: "/public/img/modul-sistem/lion.png",
          name: "Комод МС-7",
          type: "Комоды",
          size: "1255х1200х364",
          description: "Этот комод относится к модульной системе Лион.",
          priсe: " от  ₽"
        },
        {
          //slide
          id: "17",
          picture: "/public/img/comod/ms-9.png",
          picture: "/public/img/modul-sistem/lion.png",
          name: "МС-9",
          type: "Комоды",
          size: "1200х550х420",
          description: "МС-9 относится к модульной системе Лион.",
          priсe: " от  ₽"
        },
        {
          //slide
          id: "18",
          picture: "/public/img/comod/ms-10.png",
          picture: "/public/img/modul-sistem/lion.png",
          name: "МС-10",
          type: "Комоды",
          size: "1200х550х420",
          description: "МС-10 относится к модульной системе Лион.",
          priсe: " от  ₽"
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
