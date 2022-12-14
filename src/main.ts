import Vue from "vue";
import App from "./App.vue";
import { store } from "./store/store";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import router from "./router";

// Import Bootstrap and BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.config.productionTip = false;

new Vue({
    store,
    router,
    render: h => h(App)
}).$mount("#app");
