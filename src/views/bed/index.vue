<template lang="html">
  <main>
    <section class="navigatiion">
      <nav class="navigation">
        <a class="punct_menu" href="/src/views/index/index.vue"> Главная </a>
        <a class="punct_menu" href="order.html"> Как заказать</a>
        <a class="punct_menu" href="comments.html">Отзывы</a>
        <a class="punct_menu" href="feedback.html">Контакты</a>
      </nav>
      <form>
        <p>
          <input
            class="search"
            type="search"
            name="q"
            placeholder="Поиск по сайту"
          />
          <input class="search" type="submit" value="Найти" />
        </p>
      </form>
    </section>
    <ul class="product">
      <li v-for="item in bed" class="product-item image-prod ">
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
      bed: [
        {
          id: "01",
          picture: "/img/bed/bruno.jpg",
          name: "Бруно 1,4",
          type: "Кровати",
          size: "1100х1652х2064",
          description: "C ортопедическим основанием",
          price: " от 15 100 ₽"
        },
        {
          id: "02",
          picture: "/img/bed/Venera.png",
          name: "Бруно 1,6",
          type: "Кровати",
          size: "1100x1852x2064",
          description: "",
          price: " от 15 850 ₽"
        },
        {
          id: "03",
          picture: "/img/bed/bruno.jpg",
          name: "Бруно 1,8",
          type: "Кровати",
          size: "1100х2052х2064",
          description: "C ортопедическим основанием",
          price: " от 16 800 ₽"
        },
        {
          // слайдер
          id: "04",
          picture: "/img/bed/fortuna.jpg",
          name: "Фортуна 1,4",
          type: "Кровати",
          size: "2000x1400",
          description:
            "Ортопедические основание. Спинка металл черный. Ножки на выбор: массивное дерево (шоколад махагон), или металлическими",
          price: "от 19 500 ₽"
        },
        {
          // слайдер
          id: "05",
          picture: "/img/bed/fortuna.jpg",
          name: "Фортуна 1,6",
          type: "Кровати",
          size: "2000x1600",
          description:
            "Ортопедические основание. Спинка металл черный. Ножки на выбор: массивное дерево (шоколад махагон), или металлическими",
          price: "от 19 500 ₽"
        },
        {
          id: "06",
          picture: "/img/bed/sicilia.jpg",
          name: "Сицилия",
          type: "Кровати",
          size: "1820х2480х1210",
          description: "Ортопедическое основание или механизм подъема.",
          price: "от 48 500 ₽"
        },
        {
          id: "07",
          picture: "/img/bed/kapry.jpg",
          name: "Капри",
          type: "Кровати",
          size: "1720х2120х1060",
          description:
            "Ортопедическое основание или механизм подъема. Может быть исполнено как в коже так и в ткани.",
          price: " от 28 200 ₽"
        },
        {
          id: "08",
          picture: "/img/bed/selena.jpg",
          name: "Селена",
          type: "Кровати",
          size: "2000х900",
          description:
            "Ортопедическое основание. Спинка черный металл, ножки массив дерева (шоколад, махагон).",
          price: "от 13 800 ₽"
        },
        {
          id: "09",
          picture: "/img/bed/selena2.jpg",
          name: "Селена",
          type: "Кровати",
          size: "2000х900",
          description:
            "Ортопедическое основание. Спинка черный металл, ножки металлические.",
          price: "от 12 500 ₽"
        },
        {
          id: "18",
          picture: "/img/bed/SP-121-124.jpg",
          name: "СП-122",
          type: "Кровати",
          size: "2032х1435х750",
          description:
            "С реечным основанием. Цвет: венге-дуб белый, либо шима темная, шима светлая. Входит в спальный гарнитур.",
          price: "от 6 600 ₽"
        },
        {
          id: "10",
          picture: "/img/bed/venera.jpg",
          name: "Венера",
          type: "Кровати",
          size: "1,4",
          description:
            "2000х1400. Ортопедическое основание, ножки массив дерева, спинки металлические",
          price: "от 20 500 ₽"
        },
        {
          id: "11",
          picture: "/img/bed/venera.jpg",
          name: "Венера",
          type: "Кровати",
          size: "1,6",
          description:
            "2000х1600. Ортопедическое основание, ножки массив дерева, спинки металлические",
          price: "от 21 500 ₽"
        },
        {
          id: "12",
          picture: "/img/bed/muza.jpg",
          name: "Муза",
          type: "Кровати",
          size: "1,4",
          description:
            "2000х1400. Ортопедическое основание, ножки массив дерева, спинки металлические",
          price: "от 22 500 ₽"
        },
        {
          id: "13",
          picture: "/img/bed/muza.jpg",
          name: "Муза",
          type: "Кровати",
          size: "1,6",
          description:
            "2000х1600. Ортопедическое основание, ножки массив дерева, спинки металлические",
          price: "от 22 800 ₽"
        },
        {
          id: "14",
          picture: "/img/bed/lion.jpg",
          name: "Лион",
          type: "Кровати",
          size: "1,4",
          description:
            "2000х1400. Ортопедическое основание, металлические ножки, спинки металлические.",
          price: "от 12 900 ₽"
        },
        {
          id: "15",
          picture: "/img/bed/lion.jpg",
          name: "Лион",
          type: "Кровати",
          size: "1,6",
          description:
            "2000х1600. Ортопедическое основание, металлические ножки, спинки металлические.",
          price: "от 13 400 ₽"
        },
        {
          id: "16",
          picture: "/img/bed/lion.jpg",
          name: "Лион",
          type: "Кровати",
          size: "0,9",
          description:
            "2000х900. Ортопедическое основание, металлические ножки, спинки металлические.",
          price: "от 10 300 ₽"
        },
        {
          id: "17",
          picture: "/img/bed/lion.jpg",
          name: "Лион",
          type: "Кровати",
          size: "1,2",
          description:
            "2000х1200. Ортопедическое основание, металлические ножки, спинки металлические.",
          price: "от 12 250 ₽"
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
