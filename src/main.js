import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import "@/assets/css/main.scss";

import { modalAlertNames } from "./components/globalComponent";

import "./common/fontawesome/Icon.js";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

const app = createApp(App);

app.config.globalProperties.$modalAlertNames = modalAlertNames;

// add global component
for (let key in modalAlertNames) {
    app.component(modalAlertNames[key].name, modalAlertNames[key]);
}

app.component("font-awesome-icon", FontAwesomeIcon);

app.use(store).mount("#app");
