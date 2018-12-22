
<template>
  <main>
    <!-- здесь нужно добавить header-->
    <!-- здесь нужно добавить aside (боковое меню)-->
    <section>
      <div class="slide">
        <input type="radio" name="slider2" id="slider2_1" checked="checked">
        <label for="slider2_1"></label>
        <div> <img class="img1" src="/public/img/slider/1.jpg"></div>
        <label for="slider2_2"></label>
        <input type="radio" name="slider2" id="slider2_2">
        <label for="slider2_2"></label>
        <div><img class="img1" src="/public/img/slider/2.jpg"></div>
        <label for="slider2_3"></label>
        <input type="radio" name="slider2" id="slider2_3">
        <label for="slider2_3"></label>
        <div> <img class="img1" src=""></div>
        <label for="slider2_4"></label>
      </div>
    </section>
    <!-- здесь нужно добавить footer-->
  </main>
</template>

<script>
export default {

}
</script>

<style lang="scss">

 @import "../../stylesheets/layout.scss";
 @import "../../stylesheets/product.scss";
 @import "../../stylesheets/slide_index.scss";

</style>
