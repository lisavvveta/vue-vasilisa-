<template lang="html">
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
    <section class="order">
      <form action="mail.php" method="POST">
      			<legend><h2>Оставьте свой номер телефона.<br> В скором времени с вами свяжется наш консультант. </h2></legend>

      			<div class="form-group">
      				<label for="">Введите ваше имя:</label><br><br>
      				<input type="text" class="form-control" id="" name="user_name" placeholder="Например, Иван">
      			</div>

      			<div class="form-group">
      				<label for="">Введите номер телефона:</label><br><br>
      				<input type="text" class="form-control" id="" name="user_phone" placeholder="+7 (999) 99 99 999">
      			</div>

      			<div class="form-group">
      				<label for="">Введите email:</label><br><br>
      				<input type="text" class="form-control" id="" name="user_email" placeholder="mail@mail.ru">
      			</div>

      			<button type="submit" class="btn btn-primary">Отправить форму</button>
      		</form>
    </section>
  </main>
</template>

<script>
export default {

}
</script>


<style lang="scss">
@import "../../stylesheets/layout.scss";

.order {
  max-width: 450px;
  margin-left: 550px;
  margin-top: 30px;
  margin-bottom: 30px;
  background-color: #4682B4;
  padding: 20px;
  color: #fff;
  border-radius: 10%;
}

.btn {
  touch-action: manipulation;
  outline: none;
  transition: all 0.15s ease;
}

</style>
