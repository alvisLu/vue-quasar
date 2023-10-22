import { createApp } from "vue";
import App from "./App.vue";
import quasar from "./quasar";

const app = createApp(App);

app.use(quasar);

app.mount("#app");
