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
      <li v-for="item in sofaAngle" class="product-item image-prod ">
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
      sofaAngle: [
        {
          id: "01",
          picture: "/img/sofa-angle/brigantina.jpg",
          name: "Диван угловой Бригантина",
          type: "Диваны угловые",
          size: "3180x176x910",
          description: "Cпальное место 2700x1300",
          prise: " от 55 500 ₽"
        },
        {
          // здесь должен быть слайдер
          id: "02",
          picture: "/img/sofa-angle/elvira4-1.jpg",
          name: "Диван угловой Эльвира",
          type: "Диваны угловые",
          size: "1740х1120х940",
          description:
            "Спальное место 1950х1400см. Механизм пантограф. Преимущество этого дивана в огромном ящике под постельное белье и механизме пантограф. Угол дивана не меняется.",
          prise: "от 54 650 ₽"
        },
        {
          // здесь должен быть слайдер
          id: "03",
          picture: "/img/sofa-angle/melisa.jpg",
          name: "Диван угловой Мелиса",
          type: "Диваны угловые",
          size: "1970х850х920",
          description:
            "Cпальное место 1500x2000. Механизм раскралыдывания пантограф",
          prise: " от 39 100 ₽"
        },
        {
          // здесь должен быть слайдер
          id: "04",
          picture: "/img/sofa-angle/veronica.jpg",
          name: "Диван угловой Вероника",
          type: "Диваны угловые",
          size: "2900х1050х1500",
          description:
            "Четырехместная. Механизм тик-так, пружинный блок, угол меняется, у подушек съемные чехлы, подлокотники МДФ. При транспортировке легко расскладывается и складывается. У него может быть крeсло.",
          prise: " от 48 000 ₽"
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
