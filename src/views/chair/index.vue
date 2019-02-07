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
      <Product-Item v-for="product in chair" :key="product.id" :product="product" />
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
        chair: [{
            id: "01",
            picture: "/img/chair/solo-ru.jpg",
            name: "Соло Ру",
            type: "Стулья",
            size: "",
            description: "",
            price: 2100,
            quantity: 1
          },
          {
            id: "02",
            picture: "/img/chair/sonata-t.jpg",
            name: "Соната Т",
            type: "Стулья",
            size: "",
            description: "",
            price: 2150,
            quantity: 1
           },
          {
            id: "03",
            picture: "/img/chair/trilogiya-ru.jpg",
            name: "Трилогия Ру",
            type: "Стулья",
            size: "",
            description: "",
            price: 2250,
            quantity: 1
          },
          {
            id: "04",
            picture: "/img/chair/unison.jpg",
            name: "Унисон Ру",
            type: "Стулья",
            size: "",
            description: "",
            price: 2300,
            quantity: 1
          },
          {
            id: "05",
            picture: "/img/chair/fagot-mru.jpg",
            name: "Фагот МРу",
            type: "Стулья",
            size: "",
            description: "",
            price: 2750,
            quantity: 1
          },
          {
            id: "06",
            picture: "/img/chair/fagot-mt.jpg",
            name: "Фагот МТ",
            type: "Стулья",
            size: "",
            description: "",
            price: 2600,
            quantity: 1
          },
          {
            id: "07",
            picture: "/img/chair/furiant-ru.jpg",
            name: "Фуриант Ру",
            type: "Стулья",
            size: "",
            description: "",
            price: 2500,
            quantity: 1
          },
          {
            id: "08",
            picture: "/img/chair/centurion-mru.jpg",
            name: "Центурион МРУ",
            type: "Стулья",
            size: "",
            description: "",
            price: 3000,
            quantity: 1
          },
          {
            id: "09",
            picture: "/img/chair/alfa-mru.jpg",
            name: "Альфа МРУ",
            type: "Стулья",
            size: "",
            description: "",
            price: 2600,
            quantity: 1
          },
          {
            id: "10",
            picture: "/img/chair/arietta-ru.jpg",
            name: "Ариетта РУ",
            type: "Стулья",
            size: "",
            description: "",
            price: 2700,
            quantity: 1
          },
          {
            id: "11",
            picture: "/img/chair/arfa-ru.jpg",
            name: "Арфа Ру",
            type: "Стулья",
            size: "",
            description: "",
            price: 2900,
            quantity: 1
          },
          {
            id: "12",
            picture: "/img/chair/bar-vr.jpg",
            name: "Барный врощающийся стул",
            type: "Стулья",
            size: "",
            description: "",
            price: 4000,
            quantity: 1
          },
          {
            id: "13",
            picture: "/img/chair/volna.jpg",
            name: "Волна ",
            type: "Стулья",
            size: "",
            description: "",
            price: 4200,
            quantity: 1
         },
          {
            id: "14",
            picture: "/img/chair/volna2.jpg",
            name: "Волна 2",
            type: "Стулья",
            size: "",
            description: "",
            price: 4400,
            quantity: 1
          },
          {
            id: "15",
            picture: "/img/chair/volna4.jpg",
            name: "Волна 4",
            type: "Стулья",
            size: "",
            description: "",
            price: 5000,
            quantity: 1
          },
          {
            id: "16",
            picture: "/img/chair/gamma-ru.jpg",
            name: "Гамма Ру",
            type: "Стулья",
            size: "",
            description: "",
            price: 2250,
            quantity: 1
          },
          {
            id: "17",
            picture: "/img/chair/gamma-t.jpg",
            name: "Гамма Т",
            type: "Стулья",
            size: "",
            description: "",
            price: 2200,
            quantity: 1
          },
          {
            id: "18",
            picture: "/img/chair/grazia-2t.jpg",
            name: "Грация 2Т",
            type: "Стулья",
            size: "",
            description: "",
            price: 2400,
            quantity: 1
          },
          {
            id: "19",
            picture: "/img/chair/gracia-ru.jpg",
            name: "Грация Ру ",
            type: "Стулья",
            size: "",
            description: "",
            price: 2250,
            quantity: 1
          },
          {
            id: "20",
            picture: "/img/chair/gracia-t.jpg",
            name: "Грация Т ",
            type: "Стулья",
            size: "",
            description: "",
            price: 2150,
            quantity: 1
          },
          {
            id: "21",
            picture: "/img/chair/damask.jpg",
            name: "Дамаск ",
            type: "Стулья",
            size: "",
            description: "",
            price: 7000,
            quantity: 1
          },
          {
            id: "22",
            picture: "/img/chair/jacozo-mt.jpg",
            name: "Джакозо МТ",
            type: "Стулья",
            size: "",
            description: "",
            price: 2700,
            quantity: 1
          },
          {
            id: "23",
            picture: "/img/chair/diva-mt.jpg",
            name: "Дива МТ ",
            type: "Стулья",
            size: "",
            description: "",
            price: 2700,
            quantity: 1
          },
          {
            id: "24",
            picture: "/img/chair/diez-ru.jpg",
            name: "Диез РУ",
            type: "Стулья",
            size: "",
            description: "",
            price: 2200,
            quantity: 1
          },
          {
            id: "25",
            picture: "/img/chair/diez-t.jpg",
            name: "Диез Т",
            type: "Стулья",
            size: "",
            description: "",
            price: 2200,
            quantity: 1
          },
          {
            id: "26",
            picture: "/img/chair/dolche-mru.jpg",
            name: "Дольче МРУ",
            type: "Стулья",
            size: "",
            description: "",
            price: 2800,
            quantity: 1
          },
          {
            id: "27",
            picture: "/img/chair/kvartet-mt.jpg",
            name: "Квартет МТ",
            type: "Стулья",
            size: "",
            description: "",
            price: 2700,
            quantity: 1
          },
          {
            id: "28",
            picture: "/img/chair/kvartet-ru.jpg",
            name: "Квартет РУ",
            type: "Стулья",
            size: "",
            description: "",
            price: 2150,
            quantity: 1
          },
          {
            id: "29",
            picture: "/img/chair/kvintet-2t.jpg",
            name: "Квинтет 2Т",
            type: "Стулья",
            size: "",
            description: "",
            price: 2700,
            quantity: 1
          },
          {
            id: "30",
            picture: "/img/chair/kvintet-t.jpg",
            name: "Квинтет Т",
            type: "Стулья",
            size: "",
            description: "",
            price: 2150,
            quantity: 1
          },
          {
            id: "31",
            picture: "/img/chair/libretto-ru.jpg",
            name: "Либретто РУ",
            type: "Стулья",
            size: "",
            description: "",
            price: 2800,
            quantity: 1
          },
          {
            id: "32",
            picture: "/img/chair/lotos-t.jpg",
            name: "Лотос Т",
            type: "Стулья",
            size: "",
            description: "",
            price: 2300,
            quantity: 1
          },
          {
            id: "33",
            picture: "/img/chair/luch-t.jpg",
            name: "Луч Т",
            type: "Стулья",
            size: "",
            description: "",
            price: 2200,
            quantity: 1
          },
          {
            id: "34",
            picture: "/img/chair/mayamy.jpg",
            name: "Маями",
            type: "Стулья",
            size: "",
            description: "",
            price: 5800,
            quantity: 1
          },
          {
            id: "35",
            picture: "/img/chair/marsel.jpg",
            name: "Марсель",
            type: "Стулья",
            size: "",
            description: "",
            price: 6800,
            quantity: 1
          },
          {
            id: "36",
            picture: "/img/chair/octava-t.jpg",
            name: "Октава Т",
            type: "Стулья",
            size: "",
            description: "",
            price: 2500,
            quantity: 1
          },
          {
            id: "37",
            picture: "/img/chair/onda-ru.jpg",
            name: "Онда РУ",
            type: "Стулья",
            size: "",
            description: "",
            price: 2250,
            quantity: 1
          },
          {
            id: "38",
            picture: "/img/chair/pavlin-t.jpg",
            name: "Павлин Т",
            type: "Стулья",
            size: "",
            description: "",
            price: 2250,
            quantity: 1
          },
          {
            id: "39",
            picture: "/img/chair/silver1.jpg",
            name: "Сильвер 1",
            type: "Стулья",
            size: "",
            description: "",
            price: 5650,
            quantity: 1
          },
          {
            id: "40",
            picture: "/img/chair/silver2.jpg",
            name: "Сильвер 2",
            type: "Стулья",
            size: "",
            description: "",
            price: 6900,
            quantity: 1
          },
          {
            id: "41",
            picture: "/img/chair/sclad-toburet.jpg",
            name: "Складной табурет",
            type: "Стулья",
            size: "",
            description: "может быть с квадратной сидушкой и с круглой сидушкой",
            price: 1950,
            quantity: 1
          },
          {
            id: "42",
            picture: "/img/chair/soprano-ru.jpg",
            name: "Сопрано РУ",
            type: "Стулья",
            size: "",
            description: "",
            price: 1450,
            quantity: 1
          },
          {
            id: "43",
            picture: "/img/chair/tenor-ru.jpg",
            name: "Тенор РУ",
            type: "Стулья",
            size: "",
            description: "",
            price: 2100,
            quantity: 1
          },
          {
            id: "44",
            picture: "/img/chair/tetris.jpg",
            name: "Тетрис",
            type: "Стулья",
            size: "",
            description: "",
            price: 2750,
            quantity: 1
          },
          {
            id: "45",
            picture: "/img/chair/triol-k.jpg",
            name: "Триоль К",
            type: "Стулья",
            size: "",
            description: "",
            price: 1400,
            quantity: 1
          },
          {
            id: "46",
            picture: "/img/chair/falcet-k.jpg",
            name: "Фальцет К",
            type: "Стулья",
            size: "",
            description: "",
            price: 1550,
            quantity: 1
          },
          {
            id: "47",
            picture: "/img/chair/fuga-k.jpg",
            name: "Фуга К",
            type: "Стулья",
            size: "",
            description: "",
            price: 1300,
            quantity: 1
          },
          {
            id: "48",
            picture: "/img/chair/canon-ru.jpg",
            name: "Канон РУ",
            type: "Стулья",
            size: "",
            description: "",
            price: 1950,
            quantity: 1
          },
          {
            id: "49",
            picture: "/img/chair/kvatrol.jpg",
            name: "Кватроль",
            type: "Стулья",
            size: "",
            description: "",
            price: 2200,
            quantity: 1
          },
          {
            id: "50",
            picture: "/img/chair/cobra-ru.jpg",
            name: "Кобра РУ",
            type: "Стулья",
            size: "",
            description: "",
            price: 1900,
            quantity: 1
          },
          {
            id: "51",
            picture: "/img/chair/krest-k.jpg",
            name: "Крест К",
            type: "Стулья",
            size: "",
            description: "",
            price: 1250,
            quantity: 1
          },
          {
            id: "52",
            picture: "/img/chair/Lira-n-ru.jpg",
            name: "Лира Н РУ",
            type: "Стулья",
            size: "",
            description: "",
            price: 1450,
            quantity: 1
          },
          {
            id: "53",
            picture: "/img/chair/lira-ru.jpg",
            name: "Лира РУ",
            type: "Стулья",
            size: "",
            description: "",
            price: 1450,
            quantity: 1
          },
          {
            id: "54",
            picture: "/img/chair/pauk-ru.jpg",
            name: "Паук Ру",
            type: "Стулья",
            size: "",
            description: "",
            price: 2150,
            quantity: 1
          },
          {
            id: "55",
            picture: "/img/chair/rondo-ru.jpg",
            name: "Рондо РУ",
            type: "Стулья",
            size: "",
            description: "",
            price: 1500,
            quantity: 1
          },
          {
            id: "56",
            picture: "/img/chair/boston.jpg",
            name: "Бостон",
            type: "Стулья",
            size: "",
            description: "",
            price: 6900,
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
