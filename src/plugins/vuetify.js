import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import "vuetify/styles";

const light = {
  dark: false,
  colors: {
    background: "#edf2ef",
    elementBg: "#fff",
  },
};
const dark = {
  dark: true,
  colors: {
    background: "hsl(207, 26%, 17%)",
    elementBg: "hsl(209, 23%, 22%)",
  },
};

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: "dark",
    themes: {
      light,
      dark,
    },
  },
});

export default vuetify;
