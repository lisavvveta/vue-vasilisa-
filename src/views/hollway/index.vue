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
      <li v-for="item in hollway" class="product-item image-prod ">
        <h6 class="product-item__title">{{ item.name }}</h6>
        <img :src="item.picture" alt="" class="product-item__picture" />
        <span class="product-item__size">{{ item.size }}</span><br>
        <span class="product-item__description">{{ item.description }}</span><br>
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
      hollway: [
        {
          // Здесь должен быть слайдер
          //Сюда запихнуть все рамиры, так как это один рамир, а не несколько
          id: "01",
          picture: "/img/hallway/ramir.jpg",
          name: "Пpихожая со шкафом Рамир",
          type: "Прихожая",
          size: "1202х2100х504",
          description: "Шкаф может быть справа или слева",
          price: " от 13 500 ₽"
        },
        {
          id: "02",
          picture: "/img/hallway/nota-4.jpg",
          name: "Прихожая Нота 4",
          type: "Прихожая",
          size: "2115х1000х350",
          description: "Цвета: белый дуб",
          price: " от 8 400 ₽"
        },
        {
          // здесь будет слайдер
          id: "03",
          picture: "/img/hallway/nota-3-1.jpg",
          name: "Прихожая Нота 3",
          type: "Прихожая",
          size: "1823x400х2114",
          description: "Модульная. Цвета: шима, венге. Вешалка 1233х1480",
          price: "от 13 200 ₽"
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
