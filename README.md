# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Quasar

- 安裝 quasar
  ref: [https://quasar.dev/start/vite-plugin#installation](https://quasar.dev/start/vite-plugin#installation)

```bash
$ yarn add quasar @quasar/extras
$ yarn add -D @quasar/vite-plugin sass@1.32.12
```

- 加入 quasar style
  ref: [https://quasar.dev/start/vite-plugin#installation](https://quasar.dev/start/vite-plugin#installation)

  - 加入 `styles/quasar-variables.sass`

    ```css
    $primary   : #1976D2
    $secondary : #26A69A
    $accent    : #9C27B0

    $dark      : #1D1D1D

    $positive  : #21BA45
    $negative  : #C10015
    $info      : #31CCEC
    $warning   : #F2C037

    ```

  - 在 `vite.config` 中加入 `quasar-variables.sass `

    ```javascript
    import { defineConfig } from "vite";
    import vue from "@vitejs/plugin-vue";
    import { quasar, transformAssetUrls } from "@quasar/vite-plugin";

    // vite.config ref: https://vitejs.dev/config/
    export default defineConfig({
      plugins: [
        vue({
          template: { transformAssetUrls },
        }),

        // @quasar/plugin-vite options list:
        // https://github.com/quasarframework/quasar/blob/dev/vite-plugin/index.d.ts
        quasar({
          // 引入 quasar 的 sass or scss 變數檔案
          sassVariables: "src/styles/quasar-variables.sass",
        }),
      ],
    });
    ```

  - 在 `main.js` 引入 Quasar

    ```javascript
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
    ```

- 使用 vue plugin
  ref: [https://vuejs.org/guide/reusability/plugins.html](https://vuejs.org/guide/reusability/plugins.html)
