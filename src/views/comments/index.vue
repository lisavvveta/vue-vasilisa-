<template>
  <section>
    <div>
        <fieldset>
            <legend> Отзыв</legend>
            <form>
                <p>Напишите ваш отзыв о магазине.</p>
                <textarea name="comments" cols="120" rows="30"> Введите свой комментарий</textarea>
                <input type="submit" name="send" value="отправить">
            </form>
        </fieldset>
    </div>
  </section>
</template>

<script>
export default {

}
</script>


<style lang="scss">

 @import "../../stylesheets/layout.scss";
 @import "../../stylesheets/product.scss";

fieldset {
  display: flex;
  align-items: center;
}

</style>


