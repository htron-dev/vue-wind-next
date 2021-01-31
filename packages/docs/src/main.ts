import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueWind from "./plugins/vue-wind";

createApp(App)
    .use(store)
    .use(router)
    .use(VueWind)
    .mount("#app");
