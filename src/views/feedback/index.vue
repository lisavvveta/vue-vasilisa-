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
      <div class="contact">
        <h3>Общество с ограниченной ответственностью «Король Лев» </h3>
        <h3>Иркутская обл. г Черемхово ул Ленина дом 5 первый этаж</h3>
        <h3>Тел 8(395) 2 .744-208</h3>

        <h3>Ген Директор 8 (904)150-41-41 Александр Геннадьевич ,</h3>

        <h3>Директор по сбыту и развитию 8 (964)800-56-45 Александра Семеновна ,</h3>

        <h3>Mенеджер по работе с клиентами 8(952)614-15-15 Анна , Елена</h3>

        <h3>Время работы с 10:00 до 19:00 по Иркутской обл .</h3>
        <img class="contact_img" src="/img/adress.jpg" alt="">
      </div>
    </section>
  </main>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "../../stylesheets/layout.scss";

.contact {
  width: 90%;
  width: 800px;
  position: relative;
  text-align: center;
  margin-left: 80px;
  z-index: 1;
}
</style>
