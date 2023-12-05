import { createApp } from "vue";
import App from "./App.vue";
import "./style.css";

// Vuetify
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import "vuetify/styles";

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: "dark",
  },
});

const app = createApp(App).use(vuetify).mount("#app");

// const filters = {
//   truncate(text, length, clamp) {
//     clamp = clamp || "...";
//     var node = document.createElement("div");
//     node.innerHTML = text;
//     var content = node.textContent;
//     return content.length > length ? content.slice(0, length) + clamp : content;
//   },
// };

// app.config.globalProperties.$filters = filters;
