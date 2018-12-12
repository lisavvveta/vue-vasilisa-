import Vue from "vue";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");

const bascet = new Vue({
  el: '#bascet ',
  data: {
    counter: 0
  }
});

methods: {
  total = function () {
     const total = 0;
      this.item.forEach(function(){
        if (s.active){
          total+= s.price;
        }
      });
     return total;
    }
}
