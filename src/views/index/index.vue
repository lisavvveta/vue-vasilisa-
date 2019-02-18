<template>
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
      </div>
    </section>
  </main>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "../../stylesheets/layout.scss";
@import "../../stylesheets/slide_index.scss";
</style>
