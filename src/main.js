import { createApp } from "vue";
import App from "./App.vue";

// 引入 Quasar
import { Quasar } from "quasar";

// 引入 material icon
import "@quasar/extras/material-icons/material-icons.css";

// 引入 Quasar css
import "quasar/src/css/index.sass";

const app = createApp(App);

app.use(Quasar, {
  plugins: {}, // Quasar plugins 需加在這
});

app.mount("#app");
