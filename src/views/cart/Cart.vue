<template>
  <div class="cart">
    <table>
      <caption>Корзина</caption>
      <thead>
        <tr>
          <th>Наименование</th>
          <th>Кол-во</th>
          <th>Цена</th>
          <th>Сумма</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="product in order"
          :key="product.id">
          <td>{{ product.name }}</td>
          <td>{{ product.quantity }}</td>
          <td>{{ product.price }}</td>
          <td>{{ product.quantity * product.price }}</td>
        </tr>
      </tbody>
    </table>

    <p>Итого: <b>{{ summary }}</b></p>
    <button @click="toCheckOut" :disabled="summary < 1" type="button" >Заказать</button>

    <v-slide :active="showCheckOut">
      <form @submit.prevent="onCheckOut">
        <fieldset>
          <legend>Имя *</legend>
          <input
            id="form_name"
            v-model="form.name"
            name="name"
            type="text"
            placeholder="Имя"
            required
            />
        </fieldset>

        <fieldset>
          <legend>E-mail *</legend>
          <input
            v-model="form.email"
            name="email"
            type="email"
            placeholder="E-mail *"
            required
            />
        </fieldset>

        <fieldset>
          <legend>Телефон *</legend>
          <input
            v-model="form.phone"
            v-mask="'+7 (###) ###-##-##'"
            name="phone"
            type="tel"
            placeholder="Телефон *"
            required
            />
        </fieldset>

        <button type="submit">Оставить заявку</button>
      </form>
    </v-slide>
  </div>
</template>
