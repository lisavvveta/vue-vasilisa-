<template>
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
    <section>
      <div class="slide">
        <input type="radio" name="slider2" id="slider2_1" checked="checked" />
        <label for="slider2_1"></label>
        <div><img class="img1" src="/img/slider/1.jpg" /></div>
        <label for="slider2_2"></label>
        <input type="radio" name="slider2" id="slider2_2" />
        <label for="slider2_2"></label>
        <div><img class="img1" src="/img/slider/2.jpg" /></div>
        <label for="slider2_3"></label>
        <input type="radio" name="slider2" id="slider2_3" />
        <label for="slider2_3"></label>
        <div><img class="img1" src="" /></div>
        <label for="slider2_4"></label>
      </div>
    </section>
  </main>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "../../stylesheets/layout.scss";
@import "../../stylesheets/product.scss";
@import "../../stylesheets/slide_index.scss";
</style>
