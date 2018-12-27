<template lang="html">
  <main>
    <!-- здесь нужно добавить header-->
    <!-- здесь нужно добавить aside (боковое меню)-->
    <ul class="product">
      <li v-for="item in chair" class="product-item image-prod ">
        <h6 class="product-item__title">{{ item.name }}</h6>
        <img :src="item.picture" alt="" class="product-item__picture" />
        <span class="product-item__size">{{ item.size }}</span>
        <span class="product-item__description">{{ item.description }}</span>
        <span class="product-item__price">{{ item.price }}</span>
        <button v-on:click="counter += 1" class="product-item__button">
          В корзину
        </button>
      </li>
    </ul>
    <!-- здесь нужно добавить footer-->
  </main>
</template>

<script>
export default {
  data() {
    return {
      chair: [
        {
          id: "01",
          picture: "/img/chair/solo-ru.jpg",
          name: "Соло Ру",
          type: "Стулья",
          size: "",
          description: " с ортопедическим основанием",
          price: "2 100 ₽"
        },
        {
          id: "02",
          picture: "/img/chair/sonata-t.jpg",
          name: "Соната Т",
          type: "Стулья",
          size: "",
          description: "",
          price: "2 150 ₽"
        },
        {
          id: "03",
          picture: "/img/chair/trilogiya-ru.jpg",
          name: "Трилогия Ру",
          type: "Стулья",
          size: "",
          description: "",
          price: "2 250 ₽"
        },
        {
          id: "04",
          picture: "/img/chair/unison.jpg",
          name: "Унисон Ру",
          type: "Стулья",
          size: "",
          description: "",
          price: "2 300 ₽"
        },
        {
          id: "05",
          picture: "/img/chair/fagot-mru.jpg",
          name: "Фагот МРу",
          type: "Стулья",
          size: "",
          description: "",
          price: "2 750 ₽"
        },
        {
          id: "06",
          picture: "/img/chair/fagot-mt.jpg",
          name: "Фагот МТ",
          type: "Стулья",
          size: "",
          description: "",
          price: "2 600 ₽"
        },
        {
          id: "07",
          picture: "/img/chair/furiant-ru.jpg",
          name: "Фуриант Ру",
          type: "Стулья",
          size: "",
          description: "",
          price: " 2 500 ₽"
        },
        {
          id: "08",
          picture: "/img/chair/centurion-mru.jpg",
          name: "Центурион МРУ",
          type: "Стулья",
          size: "",
          description: "",
          price: " 3 000 ₽"
        },
        {
          id: "09",
          picture: "/img/chair/alfa-mru.jpg",
          name: "Альфа МРУ",
          type: "Стулья",
          size: "",
          description: "",
          price: " 2 600 ₽"
        },
        {
          id: "10",
          picture: "/img/chair/arietta-ru.jpg",
          name: "Ариетта РУ",
          type: "Стулья",
          size: "",
          description: "",
          price: " 2 700 ₽"
        },
        {
          id: "11",
          picture: "/img/chair/arfa-ru.jpg",
          name: "Арфа Ру",
          type: "Стулья",
          size: "",
          description: "",
          price: " 2 900 ₽"
        },
        {
          id: "12",
          picture: "/img/chair/bar-vr.jpg",
          name: "Барный врощающийся стул",
          type: "Стулья",
          size: "",
          description: "",
          price: "4 000 ₽"
        },
        {
          id: "13",
          picture: "/img/chair/volna.jpg",
          name: "Волна ",
          type: "Стулья",
          size: "",
          description: "",
          price: "4 200 ₽"
        },
        {
          id: "14",
          picture: "/img/chair/volna2.jpg",
          name: "Волна 2",
          type: "Стулья",
          size: "",
          description: "",
          price: "4 400 ₽"
        },
        {
          id: "15",
          picture: "/img/chair/volna4.jpg",
          name: "Волна 4",
          type: "Стулья",
          size: "",
          description: "",
          price: " 5 000 ₽"
        },
        {
          id: "16",
          picture: "/img/chair/gamma-ru.jpg",
          name: "Гамма Ру",
          type: "Стулья",
          size: "",
          description: "",
          price: "2 250 ₽"
        },
        {
          id: "17",
          picture: "/img/chair/gamma-t.jpg",
          name: "Гамма Т",
          type: "Стулья",
          size: "",
          description: "",
          price: "2 200 ₽"
        },
        {
          id: "18",
          picture: "/img/chair/grazia-2t.jpg",
          name: "Грация 2Т",
          type: "Стулья",
          size: "",
          description: "",
          price: "2 400 ₽"
        },
        {
          id: "19",
          picture: "/img/chair/gracia-ru.jpg",
          name: "Грация Ру ",
          type: "Стулья",
          size: "",
          description: "",
          price: "2 250 ₽"
        },
        {
          id: "20",
          picture: "/img/chair/gracia-t.jpg",
          name: "Грация Т ",
          type: "Стулья",
          size: "",
          description: "",
          price: "2 150 ₽"
        },
        {
          id: "21",
          picture: "/img/chair/damask.jpg",
          name: "Дамаск ",
          type: "Стулья",
          size: "",
          description: "",
          price: "7 000 ₽"
        },
        {
          id: "22",
          picture: "/img/chair/jacozo-mt.jpg",
          name: "Джакозо МТ",
          type: "Стулья",
          size: "",
          description: "",
          price: "2 700 ₽"
        },
        {
          id: "23",
          picture: "/img/chair/diva-mt.jpg",
          name: "Дива МТ ",
          type: "Стулья",
          size: "",
          description: "",
          price: "2 700 ₽"
        },
        {
          id: "24",
          picture: "/img/chair/diez-ru.jpg",
          name: "Диез РУ",
          type: "Стулья",
          size: "",
          description: "",
          price: "2 200 ₽"
        },
        {
          id: "25",
          picture: "/img/chair/diez-t.jpg",
          name: "Диез Т",
          type: "Стулья",
          size: "",
          description: "",
          price: "2 200 ₽"
        },
        {
          id: "26",
          picture: "/img/chair/dolche-mru.jpg",
          name: "Дольче МРУ",
          type: "Стулья",
          size: "",
          description: "",
          price: "2 800 ₽"
        },
        {
          id: "27",
          picture: "/img/chair/kvartet-mt.jpg",
          name: "Квартет МТ",
          type: "Стулья",
          size: "",
          description: "",
          price: "2 700 ₽"
        },
        {
          id: "28",
          picture: "/img/chair/kvartet-ru.jpg",
          name: "Квартет РУ",
          type: "Стулья",
          size: "",
          description: "",
          price: "2 150 ₽"
        },
        {
          id: "29",
          picture: "/img/chair/kvintet-2t.jpg",
          name: "Квинтет 2Т",
          type: "Стулья",
          size: "",
          description: "",
          price: "2 700 ₽"
        },
        {
          id: "30",
          picture: "/img/chair/kvintet-t.jpg",
          name: "Квинтет Т",
          type: "Стулья",
          size: "",
          description: "",
          price: "2 150 ₽"
        },
        {
          id: "31",
          picture: "/img/chair/libretto-ru.jpg",
          name: "Либретто РУ",
          type: "Стулья",
          size: "",
          description: "",
          price: "2 800 ₽"
        },
        {
          id: "32",
          picture: "/img/chair/lotos-t.jpg",
          name: "Лотос Т",
          type: "Стулья",
          size: "",
          description: "",
          price: "2 300 ₽"
        },
        {
          id: "33",
          picture: "/img/chair/luch-t.jpg",
          name: "Луч Т",
          type: "Стулья",
          size: "",
          description: "",
          price: "2 200 ₽"
        },
        {
          id: "34",
          picture: "/img/chair/mayamy.jpg",
          name: "Маями",
          type: "Стулья",
          size: "",
          description: "",
          price: "5 800 ₽"
        },
        {
          id: "35",
          picture: "/img/chair/marsel.jpg",
          name: "Марсель",
          type: "Стулья",
          size: "",
          description: "",
          price: "6 800 ₽"
        },
        {
          id: "36",
          picture: "/img/chair/octava-t.jpg",
          name: "Октава Т",
          type: "Стулья",
          size: "",
          description: "",
          price: "2 500 ₽"
        },
        {
          id: "37",
          picture: "/img/chair/onda-ru.jpg",
          name: "Онда РУ",
          type: "Стулья",
          size: "",
          description: "",
          price: "2 250 ₽"
        },
        {
          id: "38",
          picture: "/img/chair/pavlin-t.jpg",
          name: "Павлин Т",
          type: "Стулья",
          size: "",
          description: "",
          price: "2 250 ₽"
        },
        {
          id: "39",
          picture: "/img/chair/silver1.jpg",
          name: "Сильвер 1",
          type: "Стулья",
          size: "",
          description: "",
          price: "5 650 ₽"
        },
        {
          id: "40",
          picture: "/img/chair/silver2.jpg",
          name: "Сильвер 2",
          type: "Стулья",
          size: "",
          description: "",
          price: "6 900 ₽"
        },
        {
          id: "41",
          picture: "/img/chair/sclad-toburet.jpg",
          name: "Складной табурет",
          type: "Стулья",
          size: "",
          description: "может быть с квадратной сидушкой и с круглой сидушкой",
          price: "1 950 ₽"
        },
        {
          id: "42",
          picture: "/img/chair/soprano-ru.jpg",
          name: "Сопрано РУ",
          type: "Стулья",
          size: "",
          description: "",
          price: "1 450 ₽"
        },
        {
          id: "43",
          picture: "/img/chair/tenor-ru.jpg",
          name: "Тенор РУ",
          type: "Стулья",
          size: "",
          description: "",
          price: "2 100 ₽"
        },
        {
          id: "44",
          picture: "/img/chair/tetris.jpg",
          name: "Тетрис",
          type: "Стулья",
          size: "",
          description: "",
          price: "2 750 ₽"
        },
        {
          id: "45",
          picture: "/img/chair/triol-k.jpg",
          name: "Триоль К",
          type: "Стулья",
          size: "",
          description: "",
          price: "1 400 ₽"
        },
        {
          id: "46",
          picture: "/img/chair/falcet-k.jpg",
          name: "Фальцет К",
          type: "Стулья",
          size: "",
          description: "",
          price: "1 550 ₽"
        },
        {
          id: "47",
          picture: "/img/chair/fuga-k.jpg",
          name: "Фуга К",
          type: "Стулья",
          size: "",
          description: "",
          price: "1 300 ₽"
        },
        {
          id: "48",
          picture: "/img/chair/canon-ru.jpg",
          name: "Канон РУ",
          type: "Стулья",
          size: "",
          description: "",
          price: "1 950 ₽"
        },
        {
          id: "49",
          picture: "/img/chair/kvatrol.jpg",
          name: "Кватроль",
          type: "Стулья",
          size: "",
          description: "",
          price: "2 200 ₽"
        },
        {
          id: "50",
          picture: "/img/chair/cobra-ru.jpg",
          name: "Кобра РУ",
          type: "Стулья",
          size: "",
          description: "",
          price: "1 900 ₽"
        },
        {
          id: "51",
          picture: "/img/chair/krest-k.jpg",
          name: "Крест К",
          type: "Стулья",
          size: "",
          description: "",
          price: "1 250 ₽"
        },
        {
          id: "52",
          picture: "/img/chair/Lira-n-ru.jpg",
          name: "Лира Н РУ",
          type: "Стулья",
          size: "",
          description: "",
          price: "1 450 ₽"
        },
        {
          id: "53",
          picture: "/img/chair/lira-ru.jpg",
          name: "Лира РУ",
          type: "Стулья",
          size: "",
          description: "",
          price: "1 450 ₽"
        },
        {
          id: "54",
          picture: "/img/chair/pauk-ru.jpg",
          name: "Паук Ру",
          type: "Стулья",
          size: "",
          description: "",
          price: "2 150 ₽"
        },
        {
          id: "55",
          picture: "/img/chair/rondo-ru.jpg",
          name: "Рондо РУ",
          type: "Стулья",
          size: "",
          description: "",
          price: "1 500 ₽"
        },
        {
          id: "56",
          picture: "/img/chair/boston.jpg",
          name: "Бостон",
          type: "Стулья",
          size: "",
          description: "",
          price: "6 900 ₽"
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
