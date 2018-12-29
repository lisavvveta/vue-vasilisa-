<template lang="html">
  <main>
    <ul class="product">
      <li v-for="item in sofa" class="product-item image-prod">
        <h6 class="product-item__title">{{ item.name }}</h6>
        <img :src="item.picture" alt="" class="product-item__picture" />
        <span class="product-item__size">{{ item.size }}</span>
        <span class="product-item__description">{{ item.description }}</span>
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
      sofa: [
        {
          // здесь должен быть слайдер
          id: "01",
          picture: "/public/img/sofa/veronica-1.jpg",
          name: "Вероника",
          type: "Диваны",
          size: "2220х1050х1010 ",
          description:
            "Спальное место 1500х2000. Механизм раскладывания тик-так. Подлокотники из МДФ, в комплекте 3 подушки",
          prise: " от 34 300 ₽"
        },
        {
          // здесь должен быть слайдер
          id: "02",
          picture: "/public/img/sofa/kalipso-1.jpg",
          name: "Колипсио на металлокарксе",
          type: "Диваны",
          size: "1740х1120х940",
          description:
            " Спальное место 1400x2100. Диван разработан на металлокарксе с ортопедическим основанием, механизм раскладывания аккардион.Наполения может быть как зависимый пружинный блок, так и независимый пружинный блок. Внутри есть ящик.",
          prise: "от 46 000 ₽"
        },
        {
          // здесь должен быть слайдер
          id: "03",
          picture: "/public/img/sofa/brigantina-1.jpg",
          name: "Бригантина",
          type: "Диваны",
          size: "1970х850х920",
          description:
            "Спальное место 1450х1970. Механизм раскладки еврокнижка.",
          prise: " от 18 000 ₽"
        },
        {
          // здесь должен быть слайдер
          id: "04",
          picture: "/public/img/sofa/tahta-1.jpg",
          name: "Тахта",
          type: "Диваны",
          size: "2010х950х1000",
          description:
            "Спальное место 1950х900. Подъемный механизм, внизу большой ящик.",
          prise: " от 19 000 ₽"
        },
        {
          // здесь должен быть слайдер
          id: "05",
          picture: "/public/img/sofa/mango-1.jpg",
          name: "Манго на металлокаркасе",
          type: "Диваны",
          size: "2020x1080x970",
          description:
            "Cпальное место 1400x2020. Cверху дивана идет съемный чехол, который очень удобно снять и постирать. Разработан на металлокаркасе с ортопедическим основанием.Имеет три положения. Наполнения дивана независимый пружинный блок",
          prise: " от 31 000 ₽"
        },
        {
          id: "06",
          picture: "/public/img/sofa/melisa.jpg",
          name: "Мелиса",
          type: "Диваны",
          size: "2320х1100х930",
          description:
            "Спальное место 1500х2000. Механизм раскладки тик-так. ПРужинны  блок, деревянный каркас.",
          prise: " от 32 200 ₽"
        },
        {
          // здесь должен быть слайдер
          id: "07",
          picture: "/public/img/sofa/uyut.jpg",
          name: "Уют",
          type: "Диваны",
          size: "2300х800х900",
          description:
            "Спальное место 1300x1900. Механизм раскладки книжка. К нему могут быть кресла.",
          prise: " от 19 450 ₽"
        },
        {
          // здесь должен быть слайдер
          id: "08",
          picture: "/public/img/sofa/2mdf.jpg",
          name: "2МДФ",
          type: "Диваны",
          size: "2140х920х920",
          description:
            "Спальное место 1200x1900. Механизм раскладки книжка. К нему могут быть кресла.",
          prise: " от 19 450 ₽"
        },
        {
          id: "08",
          picture: "/public/img/sofa/elvira-1.jpg",
          name: "Эльвира 4",
          type: "Диваны",
          size: "2300х1600",
          description:
            "Спальное место 2000х1400. Деревянный каркас, зависимый пружинный блок, механизм трансформации венеция. Угол не меняется. Внутри очень болшой ящик для хранения белья.",
          prise: " от 32 200 ₽"
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
