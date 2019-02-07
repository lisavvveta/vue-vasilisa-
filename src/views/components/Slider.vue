<template>
  <swiper
    :options="swiperOption"
    class="">
    <swiper-slide
      v-for="( slide , index ) in slides"
      :key="index">
      <img
        :key="index"
        :src="slide"
        :alt="title"
        style="object-fit:contain" />
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
  </swiper>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ""
    },
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
