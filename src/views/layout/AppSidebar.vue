<template>
  <aside class="catalog">
    <ul class="punct_catalog">
      <li class="catalog_li">
        <router-link to=""> Диваны </router-link>
        <ul class="catalog_li_elem">
          <li class="">
            <router-link to="sofa">Диваны</router-link></li>
          <li class=""><router-link to="sofaAngle">Диваны угловые</router-link></li>
        </ul>
      </li>
      <li class="catalog_li"><router-link to="modulSistem">Модульная система</router-link></li>
      <li class="catalog_li"><router-link to="bed">Кровати</router-link></li>
      <li class="catalog_li"><router-link to="commode"> Комод</router-link> </li>
      <li class="catalog_li"><router-link to="kids">Детская</router-link></li>
      <li class="catalog_li"><router-link to="kitchen">Кухни</router-link></li>
      <li class="catalog_li"><router-link to="print">Фотопечать </router-link></li>
      <li class="catalog_li"><router-link to="colouring">Цвета </router-link></li>

      <li class="catalog_li">
        <router-link to=""> Корпусная</router-link>
        <ul class="catalog_li_elem">
          <li class=""><router-link to="">Гостинная</router-link></li>
          <li class=""><router-link to="hollway">Прихожая</router-link></li>
        </ul>
      </li>
      <li class="catalog_li">
        <router-link to=""> Хромированная </router-link>
        <ul class="catalog_li_elem">
          <li class=""><router-link to="table">Столы</router-link></li>
          <li class=""><router-link to="chair">Стулья</router-link></li>
          <li class=""><router-link to="bench">Скамьи, банкетки</router-link></li>
        </ul>
      </li>
      <li class="catalog_li"><router-link to="mattress"> Матрасы</router-link></li>
      <li class="catalog_li">
        <router-link to="">Шкафы</router-link>
        <ul class="catalog_li_elem">
          <li class=""><router-link to="cupboard">Шкафы </router-link></li>
          <li class=""><router-link to="cupboardCoupe">Шкафы купе</router-link></li>
          <li class=""><router-link to="cupboardAngle">Шкафы угловые</router-link></li>
        </ul>
      </li>
      <li class="catalog_li"><router-link to=""> Акции</router-link></li>
    </ul>
  </aside>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "../../stylesheets/layout.scss";
@import "../../stylesheets/catalog.scss";
</style>
