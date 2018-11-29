<template lang="html">
    <main>
      <!-- здесь нужно добавить header-->
      <!-- здесь нужно добавить aside (боковое меню)-->
	<li class="product-item image-prod ">
     <h6 class="product-item__title"> {{name}} </h6>
     <img v-lazy=" '/public/img/' + picture"
					:alt=" type + ' ' + name"
					class="product-item__image" />
      <p class></p>
      <span class="product-item__price"> {{price}} </span>
      <button @click=" toCart() " class="product-item__button">В корзину</button>
  </li>
      <!-- здесь нужно добавить footer-->
    </main>
</template>


<script>
export default {
		name: "item",
		props: {
			'item': {
				type: Object,
				required: true
			}
		},
		methods: {
			toCart() {
				const product = {
					id: this.item.id,
					name: this.item.name,
					price: this.item.price
				};
				this.$emit("addToCart", product);
			}
		}
	};
</script>


<style lang="scss">
 
 /* сюда импортировать файлы для слайдера а так же loyaut и для хедера и футера */ 

</style>

 