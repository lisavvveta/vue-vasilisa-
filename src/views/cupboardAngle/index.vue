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
      <li v-for="item in cupboardAngle" class="product-item image-prod ">
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
      cupboardAngle: [
        {
          // slider
          id: "01",
          picture: "/img/cupboard-angle/br-6.png",
          name: "БР-6",
          type: "Шкафы",
          size: "2215x904x904",
          description: "Этот шкаф относится к модульной системе Браво.",
          priсe: " от ₽"
        },
        ,
        {
          // здесь должен быть слайлер
          id: "02",
          picture: "/img/comod/br-10.png",
          name: "Комод БР-10",
          type: "Комоды",
          size: "1182x1116x355",
          description:
            "Без стекла.В рамке. Этот комод относится к модульной системе Браво.",
          priсe: " от 9 300 ₽"
        },
        {
          id: "03",
          picture: "/img/bed/SP-121-124.jpg",
          name: "Комод СП-123",
          type: "Комоды",
          size: "1000х810х435",
          description: "Цвет венге-дуб белый, шима светлый, шима светлый",
          priсe: " от 6 600 ₽"
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
