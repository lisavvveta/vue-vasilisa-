import Vue from "vue";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");

var bascet = new Vue({
  el: '#bascet ',
  data: {
    counter: 0
  }
})