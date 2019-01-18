<template>
  <footer>
    <div class="footer">
      <span> <router-link to="politick"> Политика конфиденциальности</router-link></span>
      <h5><router-link to="feedback">Связаться с нами </router-link></h5>
      <h5><router-link to="comments">Написать отзыв </router-link></h5>
      <h3>Василиса мебель 2018</h3>
    </div>
    <div class="contacts__block">
      <button class="contacts">
        <router-link to="feedback">Tелефон Директора</router-link>
      </button>
      <button class="contacts">
        <a
          class="email"
          href="https://e.mail.ru/compose/?to=korol_lev38@mail.ru"
          >korol_lev38@mail.ru</a
        >
      </button>
    </div>
    <div class="map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2393.1807666544096!2d103.07131621187881!3d53.14285028173694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1z0JjRgNC60YPRgtGB0LrQsNGPINC-0LHQuy4g0LMg0KfQtdGA0LXQvNGF0L7QstC-INGD0Lsg0JvQtdC90LjQvdCwINC00L7QvCA1INC_0LXRgNCy0YvQuSDRjdGC0LDQtg!5e0!3m2!1sru!2sru!4v1540561272540"
        width="500"
        height="400"
        frameborder="0"
        style="border:0"
        allowfullscreen
      ></iframe>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "../../stylesheets/layout.scss";
@import "../../stylesheets/tell.scss";

footer {
  margin-top: 2%;
  display: flex;
  justify-content: center;
  margin-left: 150px;
}

.map {
  margin-right: 150px;
}
</style>
