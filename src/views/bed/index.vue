<template>
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
      <Product-Item
      v-for="product in bed"
      :key="product.id"
      :product="product"/>
    </ul>
  </main>
</template>

<script>
import ProductItem from "../components/ProductItem.vue";

export default {
  name: "Bed",
  components: {
    ProductItem
  },
  data() {
    return {
      bed: [
        {
          id: "001",
          picture: null,
          pictures: ["/img/bed/bruno.jpg"],
          name: "Бруно 1,4",
          type: "Кровати",
          size: "1100х1652х2064",
          description: "C ортопедическим основанием",
          price: 15100,
          quantity: 1
        },
        {
          id: "002",
          picture: null,
          pictures: ["/img/bed/Venera.png"],
          name: "Бруно 1,6",
          type: "Кровати",
          size: "1100x1852x2064",
          description: "",
          price: 15850,
          quantity: 1
        },
        {
          id: "003",
          picture: null,
          pictures: ["/img/bed/bruno.jpg"],
          name: "Бруно 1,8",
          type: "Кровати",
          size: "1100х2052х2064",
          description: "C ортопедическим основанием",
          price: 16800,
          quantity: 1
        },
        {
          id: "004",
          picture: null,
          pictures: ["/img/bed/fortuna.jpg"],
          name: "Фортуна 1,4",
          type: "Кровати",
          size: "2000x1400",
          description:
            "Ортопедические основание. Спинка металл черный. Ножки на выбор: массивное дерево (шоколад махагон), или металлическими",
          price: 19500,
          quantity: 1
        },
        {
          id: "005",
          picture: null,
          pictures: ["/img/bed/fortuna.jpg"],
          name: "Фортуна 1,6",
          type: "Кровати",
          size: "2000x1600",
          description:
            "Ортопедические основание. Спинка металл черный. Ножки на выбор: массивное дерево (шоколад махагон), или металлическими",
          price: 19500,
          quantity: 1
        },
        {
          id: "006",
          picture: null,
          pictures: ["/img/bed/sicilia.jpg"],
          name: "Сицилия",
          type: "Кровати",
          size: "1820х2480х1210",
          description: "Ортопедическое основание или механизм подъема.",
          price: 48500,
          quantity: 1
        },
        {
          id: "007",
          picture: null,
          pictures: ["/img/bed/kapry.jpg"],
          name: "Капри",
          type: "Кровати",
          size: "1720х2120х1060",
          description:
            "Ортопедическое основание или механизм подъема. Может быть исполнено как в коже так и в ткани.",
          price: 28200,
          quantity: 1
        },
        {
          id: "008",
          picture: null,
          pictures: ["/img/bed/selena.jpg"],
          name: "Селена",
          type: "Кровати",
          size: "2000х900",
          description:
            "Ортопедическое основание. Спинка черный металл, ножки массив дерева (шоколад, махагон).",
          price: 13800,
          quantity: 1
        },
        {
          id: "009",
          picture: null,
          pictures: ["/img/bed/selena2.jpg"],
          name: "Селена",
          type: "Кровати",
          size: "2000х900",
          description:
            "Ортопедическое основание. Спинка черный металл, ножки металлические.",
          price: 12500,
          quantity: 1
        },
        {
          id: "010",
          picture: null,
          pictures: ["/img/bed/SP-121-124.jpg"],
          name: "СП-122",
          type: "Кровати",
          size: "2032х1435х750",
          description:
            "С реечным основанием. Цвет: венге-дуб белый, либо шима темная, шима светлая. Входит в спальный гарнитур.",
          price: 6600,
          quantity: 1
        },
        {
          id: "011",
          picture: null,
          pictures: ["/img/bed/venera.jpg"],
          name: "Венера",
          type: "Кровати",
          size: "1,4",
          description:
            "2000х1400. Ортопедическое основание, ножки массив дерева, спинки металлические",
          price: 20500,
          quantity: 1
        },
        {
          id: "012",
          picture: null,
          pictures: ["/img/bed/venera.jpg"],
          name: "Венера",
          type: "Кровати",
          size: "1,6",
          description:
            "2000х1600. Ортопедическое основание, ножки массив дерева, спинки металлические",
          price: 21500,
          quantity: 1
        },
        {
          id: "013",
          picture: null,
          pictures: ["/img/bed/muza.jpg"],
          name: "Муза",
          type: "Кровати",
          size: "1,4",
          description:
            "2000х1400. Ортопедическое основание, ножки массив дерева, спинки металлические",
          price: 22500,
          quantity: 1
        },
        {
          id: "014",
          picture: null,
          pictures: ["/img/bed/muza.jpg"],
          name: "Муза",
          type: "Кровати",
          size: "1,6",
          description:
            "2000х1600. Ортопедическое основание, ножки массив дерева, спинки металлические",
          price: 22800,
          quantity: 1
        },
        {
          id: "015",
          picture: null,
          pictures: ["/img/bed/lion.jpg"],
          name: "Лион",
          type: "Кровати",
          size: "1,4",
          description:
            "2000х1400. Ортопедическое основание, металлические ножки, спинки металлические.",
          price: 12900,
          quantity: 1
        },
        {
          id: "016",
          picture: null,
          pictures: ["/img/bed/lion.jpg"],
          name: "Лион",
          type: "Кровати",
          size: "1,6",
          description:
            "2000х1600. Ортопедическое основание, металлические ножки, спинки металлические.",
          price: 13400,
          quantity: 1
        },
        {
          id: "017",
          picture: null,
          pictures: ["/img/bed/lion.jpg"],
          name: "Лион",
          type: "Кровати",
          size: "0,9",
          description:
            "2000х900. Ортопедическое основание, металлические ножки, спинки металлические.",
          price: 10300,
          quantity: 1
        },
        {
          id: "018",
          picture: null,
          pictures: ["/img/bed/lion.jpg"],
          name: "Лион",
          type: "Кровати",
          size: "1,2",
          description:
            "2000х1200. Ортопедическое основание, металлические ножки, спинки металлические.",
          price: 12250,
          quantity: 1
        },
        {
          id: "019",
          picture: null,
          pictures: ["/img/bed/Avrora.png"],
          name: "Спальный гарнитур Аврора",
          type: "Кровати",
          size: "",
          description:
            "шкаф (800х2800)х2200х500. Трюмо 1200*1600*400. Прикроватная тумбочка 400х500х400. Кровать 1450х1900. Огромный выбор цветовых решений. Полностью гарнитур 88 400Р. Цена с матрасом.",
          price: 88400,
          quantity: 1
        },
        {
          id: "020",
          picture: null,
          pictures: ["/img/bed/helga.jpg"],
          name: "Спальный гарнитур Хельга",
          type: "Кровати",
          size: "",
          description:
            "шкаф  1200х2200х500. Комод 900х800х400. Тумбочка прикроватная 400х500х400. Кровать  1450х1900. Огромный выбор цветовых решений. Полностью гарнитур 48 100Р. Цена с матрасом.",
          price: 48100,
          quantity: 1
        },
        {
          id: "021",
          picture: null,
          pictures: [
            "/img/bed/s-podiomnim1.jpg",
            "/img/bed/s-podiomnim2.jpg",
            "/img/bed/s-podiomnim3.jpg",
            ],
          name: "Кровать с подъемным механизмом",
          type: "Кровати",
          size: "890x2058x1766",
          description: "",
          price: 18500,
          quantity: 1
        },
        {
          id: "022",
          picture: null,
          pictures: [
            "/img/bed/br-116.jpg",
            "/img/bed/br-116-2.jpg"
          ],
          name: "БР-116",
          type: "Кровати",
          size: "1932x880",
          description: "с реечным основанием, кровать с ящиками",
          price: 8000,
          quantity: 1
        }
      ]
    };
  }
};
</script>
