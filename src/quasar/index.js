// 引入 Quasar
import { Quasar } from "quasar";

// 引入 material icon
import "@quasar/extras/material-icons/material-icons.css";

// 引入 Quasar css
import "quasar/src/css/index.sass";

// 參考: https://vuejs.org/guide/reusability/plugins.html#plugins
export default {
  install(app) {
    app.use(Quasar, {
      plugins: {}, // Quasar plugins 需加在這
    });
  },
};
