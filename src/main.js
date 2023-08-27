import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router/index.ts";
import stores from "./stores/index.ts";
import VClickOutside from "./directives/VClickOutside.ts";
import i18n from "./services/translates/index";
import { VTooltip } from "floating-vue";

const app = createApp(App);

app.directive("tooltip", VTooltip);
app.directive("click-outside", VClickOutside);

app.use(router);
app.use(stores);
app.use(i18n);
app.mount("#app");
