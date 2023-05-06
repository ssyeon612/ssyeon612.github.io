import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import "@/assets/css/main.scss";

import "./common/fontawesome/Icon.js";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

const app = createApp(App);

app.component("font-awesome-icon", FontAwesomeIcon);

app.mount("#app").use(store);
