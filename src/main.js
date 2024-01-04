import { createApp } from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import "./styles.css";

const app = createApp(App).use(vuetify).mount("#app");
