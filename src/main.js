import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import VueSlideUpDown from "vue-slide-up-down";
// https://github.com/yangmingshan/vue-bus
import VueBus from "vue-bus";

Vue.component("v-slide", VueSlideUpDown);
Vue.use(VueBus);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
