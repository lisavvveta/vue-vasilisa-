<template>
  <div class="cart">
    <h2>Корзина</h2>
    <table>
      <thead>
        <tr>
          <th>Наименование</th>
          <th>Кол-во</th>
          <th>Цена</th>
          <th>Сумма</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in order" :key="product.id">
          <td name="product_name" >{{ product.name }}</td>
          <td>{{ product.quantity }}</td>
          <td>{{ product.price }}</td>
          <td>{{ product.quantity * product.price }}</td>
          <td>
            <animated-number :value="product.quantity * product.price" :duration="450" easing="easeInOutQuad" :formatValue="formatToPrice" />
          </td>
        </tr>
      </tbody>
    </table>

    <p>Итого:
      <b name="price">{{ summary }}</b>
    </p>
    <button @click="show = !show" type="button">Заказать</button>
    <transition name="fade">
      <div class="hidden" id="hidden_content">
        <form class="hidden" v-if="show" action="mail.php" method="POST">
          <fieldset>
            <legend>Имя *</legend>
            <input
            @blur="$v.email.$touch()"
            id="name"
            name="name"
            type="text"
            pattern="[a-zA-Zа-яА-Я]{4,}"
            placeholder="Имя"
            v-model="name"
            required>
          </fieldset>

          <fieldset>
            <legend>E-mail *</legend>
            <input
            id="email"
            @blur="$v.email.$touch()"
            name="email"
            type="email"
            placeholder="E-mail *"
            v-model="email"
            required>
          </fieldset>

          <!-- <fieldset>
            <legend>Телефон *</legend>
            <input
            v-model="phone"
            name="phone"
            type="tel"
            placeholder="Телефон *"
            required>
          </fieldset> -->
          <br>
          <button class="bth" type="submit">Оставить заявку</button>
        </form>
      </div>
    </transition>
  </div>
</template>


<script>
import { mask } from "vue-the-mask";
import AnimatedNumber from "animated-number-vue";
import { required, email } from "vuelidate/lib/validators";

export default {
  name: "Cart",
  directives: {
    mask
  },
  components: {
    AnimatedNumber
  },
  props: {
    email: {
      // type: Object,
      // required: true
    },
    name: {
      // type: Object,
      // required: true
    }
  },

  data: () => ({
    show: false,
    order: [],
    return: {
      email: "",
      name: ""
    }
  }),
  validations: {
    email: {
      required,
      email
    }
  },
  computed: {
    summary() {
      const summs = this.order
        .map(product => product.price * product.quantity)
        .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
      return summs;
    }
  },

  methods: {
    addProduct(product) {
      const isExist = this.order.find(ord => ord.id === product.id);
      if (isExist) isExist.quantity += 1;
      else this.order.push(product);
    },

    formatToPrice(value) {
      return value.toFixed(2);
    }
  },

  created() {
    this.$bus.on("add-product", this.addProduct);
  }
};
</script>

<style lang="scss">
.cart {
  position: absolute;
  top: 50px;
  left: 65%;
  right: 0;
  width: 380px;
  background-color: #4682b4;
  padding: 15px;
  color: #fff;
  border-radius: 10%;
  z-index: 4;
  table {
    width: 100%;
  }
  form {
    margin-top: 5px;
    display: flex;
    flex-direction: column;
  }
}

.btn {
  touch-action: manipulation;
  outline: none;
  transition: all 0.15s ease;
}

.hidden {
  transition: opacity 1s;
}
</style>
