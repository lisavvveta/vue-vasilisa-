<template>
  <main class="content">
    <section class="navigatiion">
      <ul class="navigation">
        <li class="ItemMenu">
          <router-link to="index"> Главная </router-link>
        </li>
        <li class="ItemMenu">
          <router-link to="order">Как заказать</router-link>
        </li>
        <li class="ItemMenu">
          <router-link to="comments">Отзывы </router-link>
        </li>
        <li class="ItemMenu">
          <router-link to="feedback">Контакты </router-link>
        </li>
      </ul>
    </section>
    <ul class="product">
      <Product-Item v-for="product in cupboard" :key="product.id" :product="product" />
    </ul>
  </main>
</template>

<script>
import ProductItem from "../components/ProductItem.vue";

export default {
  components: {
    ProductItem
  },
  data() {
    return {
      cupboard: [
        {
          id: "00000001",
          picture: null,
          pictures: ["/img/modul-sistem/bravo.jpg"],
          name: "БР-4",
          type: "Шкафы",
          size: "2215x800x560",
          description:
            "Этот шкаф относится к модульной системе Браво. В рамке дороже.",
          price: "8600",
          quantity: 1
        },
        {
          id: "00000002",
          picture: null,
          pictures: ["/img/modul-sistem/bravo.jpg"],
          name: "БР-5",
          type: "Шкафы",
          size: "2215x800x560",
          description:
            "Этот шкаф относится к модульной системе Браво. В рамке дороже.",
          price: "10000",
          quantity: 1
        }
      ]
    };
  }
};
</script>

<style lang="scss">
</style>
