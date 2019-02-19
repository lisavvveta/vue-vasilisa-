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
      <Product-Item v-for="product in sofa" :key="product.id" :product="product"/>
    </ul>
  </main>
</template>

<script>
import ProductItem from "../components/ProductItem.vue";
import Slider from "../components/Slider.vue";

export default {
  name: "ProdItem",
  components: {
    ProductItem
  },
  data() {
    return {
      sofa: [
        {
          id: "01",
          picture: null,
          pictures: [
            "/img/sofa/veronica-1.jpg",
            "/img/sofa/veronica-2.jpg",
            "/img/sofa/veronica-3.jpg",
            "/img/sofa/veronica-4.jpg",
            "/img/sofa/veronica-5.jpg",
            "/img/sofa/veronica-6.jpg"
          ],
          name: "Вероника",
          type: "Диваны",
          size: "2220х1050х1010",
          description:
            "Спальное место 1500х2000. Механизм раскладывания тик-так. Подлокотники из МДФ, в комплекте 3 подушки",
          price: 36500,
          quantity: 1
        },
        {
          id: "02",
          picture: null,
          pictures: ["/img/sofa/melisa.jpg"],
          name: "Мелиса",
          type: "Диваны",
          size: "2320х1100х930",
          description:
            "Спальное место 1500х2000. Механизм раскладки тик-так. Пружинны  блок, деревянный каркас.",
          price: 34500,
          quantity: 1
        },
        {
          id: "03",
          picture: null,
          pictures: [
            "/img/sofa/brigantina-1.jpg",
            "/img/sofa/brigantina-2.jpg",
            "/img/sofa/brigantina-3.jpg"
          ],
          name: "Бригантина",
          type: "Диваны",
          size: "1970х850х920",
          description:
            "Спальное место 1450х1970. Механизм раскладки еврокнижка.",
          price: 23000,
          quantity: 1
        },
        {
          id: "04",
          picture: null,
          pictures: [
            "/img/sofa/tahta-1.jpg",
            "/img/sofa/tahta-2.jpg",
            "/img/sofa/tahta-3.jpg",
            "/img/sofa/tahta-4.jpg"
          ],
          name: "Тахта",
          type: "Диваны",
          size: "2010х950х1000",
          description:
            "Спальное место 1950х900. Подъемный механизм, внизу большой ящик.",
          price: 20500,
          quantity: 1
        },
        {
          id: "05",
          picture: null,
          pictures: [
            "/img/sofa/mango-1.jpg",
            "/img/sofa/mango-2.jpg"
          ],
          name: "Манго на металлокаркасе",
          type: "Диваны",
          size: "2020x1080x970",
          description:
            "Cпальное место 1400x2020. Cверху дивана идет съемный чехол, который очень удобно снять и постирать. Разработан на металлокаркасе с ортопедическим основанием.Имеет три положения. Наполнения дивана независимый пружинный блок",
          price: 33000,
          quantity: 1
        },
        {
          id: "06",
          picture: null,
          pictures: [
            "/img/sofa/kalipso-1.jpg",
            "/img/sofa/kalipsio-2.jpg"
          ],
          name: "Колипсио на металлокарксе",
          type: "Диваны",
          size: "1740х1120х940",
          description:
            " Спальное место 1400x2100. Диван разработан на металлокарксе с ортопедическим основанием, механизм раскладывания аккардион.Наполения может быть как зависимый пружинный блок, так и независимый пружинный блок. Внутри есть ящик.",
          price: 49000,
          quantity: 1
        },
        {
          id: "07",
          picture: null,
          pictures: [
            "/img/sofa/uyut.jpg",
            "/img/sofa/uyut-2.jpg",
            "/img/sofa/uyut-3.jpg",
            "/img/sofa/uyut-4.jpg",
            "/img/sofa/uyut-5.jpg"
          ],
          name: "Уют",
          type: "Диваны",
          size: "2300х800х900",
          description:
            "Спальное место 1300x1900. Механизм раскладки книжка. К нему могут быть кресла.",
          price: 21000,
          quantity: 1
        },
        {
          id: "08",
          picture: null,
          pictures: [
            "/img/sofa/2mdf.jpg",
            "/img/sofa/2mdf-2.jpg",
            "/img/sofa/2mdf-3.jpg",
            "/img/sofa/2mdf-4.jpg"
          ],
          name: "2МДФ",
          type: "Диваны",
          size: "2140х920х920",
          description:
            "Спальное место 1200x1900. Механизм раскладки книжка. К нему могут быть кресла.",
          price: 21000,
          quantity: 1
        },
        {
          id: "10",
          picture: null,
          pictures: ["/img/sofa/Kreslo-Veronika.jpg"],
          name: "Кресло Вероника",
          type: "Диваны",
          size: "2300х1600",
          description:
            "Спальное место 2000х1400. Деревянный каркас, зависимый пружинный блок, механизм трансформации венеция. Угол не меняется. Внутри очень болшой ящик для хранения белья.",
          price: 17000,
          quantity: 1
        }
      ]
    };
  }
};
</script>

