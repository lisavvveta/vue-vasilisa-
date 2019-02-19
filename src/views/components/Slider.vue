<template>
  <swiper
    :options="swiperOption"
    class="product-item__picture">
    <swiper-slide
      v-for="( slide , index ) in slides"
      :key="index">
      <img
        :key="index"
        :src="slide"
        :alt="title"
        class="picture_slide" />
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
  </swiper>
</template>

<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";

export default {
  components: {
    swiper,
    swiperSlide
  },
  name: "SliderProps",
  props: {
    slides: {
      type: Array,
      required: true
    }
  },
  data: () => ({
    swiperOption: {
      grabCursor: true,
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      }
    }
  })
};
</script>

<style lang="scss">
.picture_slide{
  margin-left: -150px;
  object-fit: contain;
  padding: 0;
  width: 100%;
  // min-height: 400px;
  height: auto;
}

</style>

