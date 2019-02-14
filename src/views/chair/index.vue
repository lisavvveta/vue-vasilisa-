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
      <Product-Item v-for="product in chair" :key="product.id" :product="product" :Line="chair"/>
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
            id: "00001",
            picture: "/img/chair/solo-ru.jpg",
            name: "Соло Ру",
            type: "Стулья",
            size: "",
            description: "",
            price: 2100,
            quantity: 1
          },
          {
            id: "00002",
            picture: "/img/chair/sonata-t.jpg",
            name: "Соната Т",
            type: "Стулья",
            size: "",
            description: "",
            price: 2150,
            quantity: 1
          },
          {
            id: "00003",
            picture: "/img/chair/trilogiya-ru.jpg",
            name: "Трилогия Ру",
            type: "Стулья",
            size: "",
            description: "",
            price: 2250,
            quantity: 1
          },
          {
            id: "00004",
            picture: "/img/chair/unison.jpg",
            name: "Унисон Ру",
            type: "Стулья",
            size: "",
            description: "",
            price: 2300,
            quantity: 1
          },
          {
            id: "00005",
            picture: "/img/chair/fagot-mru.jpg",
            name: "Фагот МРу",
            type: "Стулья",
            size: "",
            description: "",
            price: 2750,
            quantity: 1
          },
          {
            id: "00006",
            picture: "/img/chair/fagot-mt.jpg",
            name: "Фагот МТ",
            type: "Стулья",
            size: "",
            description: "",
            price: 2600,
            quantity: 1
          },
          {
            id: "00007",
            picture: "/img/chair/furiant-ru.jpg",
            name: "Фуриант Ру",
            type: "Стулья",
            size: "",
            description: "",
            price: 2500,
            quantity: 1
          },
          {
            id: "00008",
            picture: "/img/chair/centurion-mru.jpg",
            name: "Центурион МРУ",
            type: "Стулья",
            size: "",
            description: "",
            price: 3000,
            quantity: 1
          },
          {
            id: "00009",
            picture: "/img/chair/alfa-mru.jpg",
            name: "Альфа МРУ",
            type: "Стулья",
            size: "",
            description: "",
            price: 2600,
            quantity: 1
          },
          {
            id: "00010",
            picture: "/img/chair/arietta-ru.jpg",
            name: "Ариетта РУ",
            type: "Стулья",
            size: "",
            description: "",
            price: 2700,
            quantity: 1
          },
          {
            id: "00011",
            picture: "/img/chair/arfa-ru.jpg",
            name: "Арфа Ру",
            type: "Стулья",
            size: "",
            description: "",
            price: 2900,
            quantity: 1
          },
          {
            id: "00012",
            picture: "/img/chair/bar-vr.jpg",
            name: "Барный врощающийся стул",
            type: "Стулья",
            size: "",
            description: "",
            price: 4000,
            quantity: 1
          },
          {
            id: "00013",
            picture: "/img/chair/volna.jpg",
            name: "Волна ",
            type: "Стулья",
            size: "",
            description: "",
            price: 4200,
            quantity: 1
          },
          {
            id: "00014",
            picture: "/img/chair/volna2.jpg",
            name: "Волна 2",
            type: "Стулья",
            size: "",
            description: "",
            price: 4400,
            quantity: 1
          },
          {
            id: "00015",
            picture: "/img/chair/volna4.jpg",
            name: "Волна 4",
            type: "Стулья",
            size: "",
            description: "",
            price: 5000,
            quantity: 1
          },
          {
            id: "00016",
            picture: "/img/chair/gamma-ru.jpg",
            name: "Гамма Ру",
            type: "Стулья",
            size: "",
            description: "",
            price: 2250,
            quantity: 1
          },
          {
            id: "00017",
            picture: "/img/chair/gamma-t.jpg",
            name: "Гамма Т",
            type: "Стулья",
            size: "",
            description: "",
            price: 2200,
            quantity: 1
          },
          {
            id: "00018",
            picture: "/img/chair/grazia-2t.jpg",
            name: "Грация 2Т",
            type: "Стулья",
            size: "",
            description: "",
            price: 2400,
            quantity: 1
          },
          {
            id: "00019",
            picture: "/img/chair/gracia-ru.jpg",
            name: "Грация Ру ",
            type: "Стулья",
            size: "",
            description: "",
            price: 2250,
            quantity: 1
          },
          {
            id: "00020",
            picture: "/img/chair/gracia-t.jpg",
            name: "Грация Т ",
            type: "Стулья",
            size: "",
            description: "",
            price: 2150,
            quantity: 1
          },
          {
            id: "00021",
            picture: "/img/chair/damask.jpg",
            name: "Дамаск ",
            type: "Стулья",
            size: "",
            description: "",
            price: 7000,
            quantity: 1
          },
          {
            id: "00022",
            picture: "/img/chair/jacozo-mt.jpg",
            name: "Джакозо МТ",
            type: "Стулья",
            size: "",
            description: "",
            price: 2700,
            quantity: 1
          },
          {
            id: "00023",
            picture: "/img/chair/diva-mt.jpg",
            name: "Дива МТ ",
            type: "Стулья",
            size: "",
            description: "",
            price: 2700,
            quantity: 1
          },
          {
            id: "00024",
            picture: "/img/chair/diez-ru.jpg",
            name: "Диез РУ",
            type: "Стулья",
            size: "",
            description: "",
            price: 2200,
            quantity: 1
          },
          {
            id: "00025",
            picture: "/img/chair/diez-t.jpg",
            name: "Диез Т",
            type: "Стулья",
            size: "",
            description: "",
            price: 2200,
            quantity: 1
          },
          {
            id: "00026",
            picture: "/img/chair/dolche-mru.jpg",
            name: "Дольче МРУ",
            type: "Стулья",
            size: "",
            description: "",
            price: 2800,
            quantity: 1
          },
          {
            id: "00027",
            picture: "/img/chair/kvartet-mt.jpg",
            name: "Квартет МТ",
            type: "Стулья",
            size: "",
            description: "",
            price: 2700,
            quantity: 1
          },
          {
            id: "00028",
            picture: "/img/chair/kvartet-ru.jpg",
            name: "Квартет РУ",
            type: "Стулья",
            size: "",
            description: "",
            price: 2150,
            quantity: 1
          },
          {
            id: "00029",
            picture: "/img/chair/kvintet-2t.jpg",
            name: "Квинтет 2Т",
            type: "Стулья",
            size: "",
            description: "",
            price: 2700,
            quantity: 1
          },
          {
            id: "00030",
            picture: "/img/chair/kvintet-t.jpg",
            name: "Квинтет Т",
            type: "Стулья",
            size: "",
            description: "",
            price: 2150,
            quantity: 1
          },
          {
            id: "00031",
            picture: "/img/chair/libretto-ru.jpg",
            name: "Либретто РУ",
            type: "Стулья",
            size: "",
            description: "",
            price: 2800,
            quantity: 1
          },
          {
            id: "00032",
            picture: "/img/chair/lotos-t.jpg",
            name: "Лотос Т",
            type: "Стулья",
            size: "",
            description: "",
            price: 2300,
            quantity: 1
          },
          {
            id: "00033",
            picture: "/img/chair/luch-t.jpg",
            name: "Луч Т",
            type: "Стулья",
            size: "",
            description: "",
            price: 2200,
            quantity: 1
          },
          {
            id: "00034",
            picture: "/img/chair/mayamy.jpg",
            name: "Маями",
            type: "Стулья",
            size: "",
            description: "",
            price: 5800,
            quantity: 1
          },
          {
            id: "00035",
            picture: "/img/chair/marsel.jpg",
            name: "Марсель",
            type: "Стулья",
            size: "",
            description: "",
            price: 6800,
            quantity: 1
          },
          {
            id: "00036",
            picture: "/img/chair/octava-t.jpg",
            name: "Октава Т",
            type: "Стулья",
            size: "",
            description: "",
            price: 2500,
            quantity: 1
          },
          {
            id: "00037",
            picture: "/img/chair/onda-ru.jpg",
            name: "Онда РУ",
            type: "Стулья",
            size: "",
            description: "",
            price: 2250,
            quantity: 1
          },
          {
            id: "00038",
            picture: "/img/chair/pavlin-t.jpg",
            name: "Павлин Т",
            type: "Стулья",
            size: "",
            description: "",
            price: 2250,
            quantity: 1
          },
          {
            id: "00039",
            picture: "/img/chair/silver1.jpg",
            name: "Сильвер 1",
            type: "Стулья",
            size: "",
            description: "",
            price: 5650,
            quantity: 1
          },
          {
            id: "00040",
            picture: "/img/chair/silver2.jpg",
            name: "Сильвер 2",
            type: "Стулья",
            size: "",
            description: "",
            price: 6900,
            quantity: 1
          },
          {
            id: "00041",
            picture: "/img/chair/sclad-toburet.jpg",
            name: "Складной табурет",
            type: "Стулья",
            size: "",
            description: "может быть с квадратной сидушкой и с круглой сидушкой",
            price: 1950,
            quantity: 1
          },
          {
            id: "00042",
            picture: "/img/chair/soprano-ru.jpg",
            name: "Сопрано РУ",
            type: "Стулья",
            size: "",
            description: "",
            price: 1450,
            quantity: 1
          },
          {
            id: "00043",
            picture: "/img/chair/tenor-ru.jpg",
            name: "Тенор РУ",
            type: "Стулья",
            size: "",
            description: "",
            price: 2100,
            quantity: 1
          },
          {
            id: "00044",
            picture: "/img/chair/tetris.jpg",
            name: "Тетрис",
            type: "Стулья",
            size: "",
            description: "",
            price: 2750,
            quantity: 1
          },
          {
            id: "00045",
            picture: "/img/chair/triol-k.jpg",
            name: "Триоль К",
            type: "Стулья",
            size: "",
            description: "",
            price: 1400,
            quantity: 1
          },
          {
            id: "00046",
            picture: "/img/chair/falcet-k.jpg",
            name: "Фальцет К",
            type: "Стулья",
            size: "",
            description: "",
            price: 1550,
            quantity: 1
          },
          {
            id: "00047",
            picture: "/img/chair/fuga-k.jpg",
            name: "Фуга К",
            type: "Стулья",
            size: "",
            description: "",
            price: 1300,
            quantity: 1
          },
          {
            id: "00048",
            picture: "/img/chair/canon-ru.jpg",
            name: "Канон РУ",
            type: "Стулья",
            size: "",
            description: "",
            price: 1950,
            quantity: 1
          },
          {
            id: "00049",
            picture: "/img/chair/kvatrol.jpg",
            name: "Кватроль",
            type: "Стулья",
            size: "",
            description: "",
            price: 2200,
            quantity: 1
          },
          {
            id: "00050",
            picture: "/img/chair/cobra-ru.jpg",
            name: "Кобра РУ",
            type: "Стулья",
            size: "",
            description: "",
            price: 1900,
            quantity: 1
          },
          {
            id: "00051",
            picture: "/img/chair/krest-k.jpg",
            name: "Крест К",
            type: "Стулья",
            size: "",
            description: "",
            price: 1250,
            quantity: 1
          },
          {
            id: "00052",
            picture: "/img/chair/Lira-n-ru.jpg",
            name: "Лира Н РУ",
            type: "Стулья",
            size: "",
            description: "",
            price: 1450,
            quantity: 1
          },
          {
            id: "00053",
            picture: "/img/chair/lira-ru.jpg",
            name: "Лира РУ",
            type: "Стулья",
            size: "",
            description: "",
            price: 1450,
            quantity: 1
          },
          {
            id: "00054",
            picture: "/img/chair/pauk-ru.jpg",
            name: "Паук Ру",
            type: "Стулья",
            size: "",
            description: "",
            price: 2150,
            quantity: 1
          },
          {
            id: "00055",
            picture: "/img/chair/rondo-ru.jpg",
            name: "Рондо РУ",
            type: "Стулья",
            size: "",
            description: "",
            price: 1500,
            quantity: 1
          },
          {
            id: "00056",
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
