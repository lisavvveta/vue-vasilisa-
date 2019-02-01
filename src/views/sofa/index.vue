<template lang="html">
  <main>
    <section class="navigatiion">
      <ul class="navigation">
      <li class="punct_menu"><router-link to="index"> Главная </router-link></li>
      <li class="punct_menu"><router-link to="order">Как заказать</router-link></li>
      <li class="punct_menu"><router-link to="comments">Отзывы </router-link></li>
      <li class="punct_menu"><router-link to="feedback">Контакты </router-link></li>
    </ul>
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
      <li v-for="item in sofa" class="product-item image-prod">
        <h6 class="product-item__title">{{ product.name }}</h6>
        <img :src="product.picture" alt="" class="product-item__picture" />
        <p class="product-item__size">{{ product.size }}</p><br>
        <p class="product-item__description">{{ product.description }}</p><br>
        <p class="product-item__price">{{ product.price }} ₽ </p>
        <button @click="addToCart" type="button" class="product-item__button">В корзину</button>
      </li>
    </ul>
  </main>
</template>

<script>
export default {
   methods: {
    addToCart () {
      const { product } = this;
      this.$bus.emit('add-product' , product);
    }
  },
  data() {
    return {
      sofa: [
        {
          // здесь должен быть слайдер
          id: "01",
          picture: "/img/sofa/veronica-1.jpg",
          name: "Вероника",
          type: "Диваны",
          size: "2220х1050х1010 ",
          description:
            "Спальное место 1500х2000. Механизм раскладывания тик-так. Подлокотники из МДФ, в комплекте 3 подушки",
          price: " от 34 300",
          quantity: 1,
        },
        {
          id: "02",
          picture: "/img/sofa/melisa.jpg",
          name: "Мелиса",
          type: "Диваны",
          size: "2320х1100х930",
          description:
            "Спальное место 1500х2000. Механизм раскладки тик-так. ПРужинны  блок, деревянный каркас.",
          price: " от 32 200",
          quantity: 1,
        },
        {
          // здесь должен быть слайдер
          id: "03",
          picture: "/img/sofa/brigantina-1.jpg",
          name: "Бригантина",
          type: "Диваны",
          size: "1970х850х920",
          description:
            "Спальное место 1450х1970. Механизм раскладки еврокнижка.",
          price: " от 18 000",
          quantity: 1,
        },
        {
          // здесь должен быть слайдер
          id: "04",
          picture: "/img/sofa/tahta-1.jpg",
          name: "Тахта",
          type: "Диваны",
          size: "2010х950х1000",
          description:
            "Спальное место 1950х900. Подъемный механизм, внизу большой ящик.",
          price: " от 19 000",
          quantity: 1,
        },
        {
          // здесь должен быть слайдер
          id: "05",
          picture: "/img/sofa/mango-1.jpg",
          name: "Манго на металлокаркасе",
          type: "Диваны",
          size: "2020x1080x970",
          description:
            "Cпальное место 1400x2020. Cверху дивана идет съемный чехол, который очень удобно снять и постирать. Разработан на металлокаркасе с ортопедическим основанием.Имеет три положения. Наполнения дивана независимый пружинный блок",
          price: " от 31 000",
          quantity: 1,
        },
        {
          // здесь должен быть слайдер
          id: "06",
          picture: "/img/sofa/kalipso-1.jpg",
          name: "Колипсио на металлокарксе",
          type: "Диваны",
          size: "1740х1120х940",
          description:
            " Спальное место 1400x2100. Диван разработан на металлокарксе с ортопедическим основанием, механизм раскладывания аккардион.Наполения может быть как зависимый пружинный блок, так и независимый пружинный блок. Внутри есть ящик.",
          price: "от 46 000",
          quantity: 1,
        },
        {
          // здесь должен быть слайдер
          id: "07",
          picture: "/img/sofa/uyut.jpg",
          name: "Уют",
          type: "Диваны",
          size: "2300х800х900",
          description:
            "Спальное место 1300x1900. Механизм раскладки книжка. К нему могут быть кресла.",
          price: " от 19 450",
          quantity: 1,
        },
        {
          // здесь должен быть слайдер
          id: "08",
          picture: "/img/sofa/2mdf.jpg",
          name: "2МДФ",
          type: "Диваны",
          size: "2140х920х920",
          description:
            "Спальное место 1200x1900. Механизм раскладки книжка. К нему могут быть кресла.",
          price: " от 19 450",
          quantity: 1,
        },
        {
          id: "09",
          picture: "/img/sofa/elvira-1.jpg",
          name: "Эльвира 4",
          type: "Диваны",
          size: "2300х1600",
          description:
            "Спальное место 2000х1400. Деревянный каркас, зависимый пружинный блок, механизм трансформации венеция. Угол не меняется. Внутри очень болшой ящик для хранения белья.",
          price: " от 32 200",
          quantity: 1,
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
