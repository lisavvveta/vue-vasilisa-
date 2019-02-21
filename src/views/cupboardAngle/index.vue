<template lang="html">
  <main>
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
      <Product-Item v-for="product in cupboardAngle" :key="product.id" :product="product"/>
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
      cupboardAngle: [
        {
          id: "000000001",
          picture: null,
          pictures: [
            "/img/cupboard-angle/br-6.png",
            "/img/modul-sistem/bravo.jpg"
          ],
          name: "БР-6",
          type: "Шкафы",
          size: "2215x904x904",
          description:
            "Этот шкаф относится к модульной системе Браво. В рамке дороже.",
          price: "11700",
          quantity: 1
        },
        {
          id: "000000002",
          picture: null,
          pictures: ["/img/modul-sistem/bravo.jpg"],
          name: "БР-6 со стеклом",
          type: "Шкафы",
          size: "2215x904x904",
          description:
            "Этот шкаф относится к модульной системе Браво. В рамке дороже.",
          price: "15000",
          quantity: 1
        },
        {
          id: "00000003",
          picture: null,
          pictures: ["/img/comod/br-10.png", "/img/modul-sistem/bravo.jpg"],
          name: "Комод БР-10",
          type: "Шкафы",
          size: "1182x1116x355",
          description:
            "Без стекла.В рамке дороже. Этот комод относится к модульной системе Браво.",
          price: 7500,
          quantity: 1
        },
        {
          id: "000000004",
          picture: null,
          pictures: ["/img/bed/SP-121-124.jpg"],
          name: "Комод СП-123",
          type: "Шкафы",
          size: "1000х810х435",
          description: "Цвет венге-дуб белый, шима светлый, шима светлый",
          price: 6600,
          quantity: 1
        }
      ]
    };
  }
};
</script>

<style lang="scss">
</style>
