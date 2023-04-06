import { createApp, nextTick } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./scss/index.scss";
import "zone.js/dist/zone"; // 在父应用引入 zone.js，需要在 import qiankun 之前引入。
import { registerMicroApps, start } from "qiankun";

const mainApp = createApp(App).use(store).use(router).mount("#app");

if (mainApp) {
  nextTick(() => {
    /**
     * name: 子应用名称 - 子应用之间必须确保唯一
     * entry: 子应用入口 - 通过该地址加载微应用
     * container: 子应用挂载节点 - 子应用加载完成后将挂载在该节点上
     * activeRule: 子应用触发的路由规则 - 触发路由规则后将加载该子应用
     */
    registerMicroApps([
      {
        name: "request-answer-web-entry",
        entry: "http://localhost:8081",
        container: "#micro-container-app",
        activeRule: "/web",
      },
      {
        name: "request-answer-mobile-entry",
        entry: "http://localhost:3000",
        container: "#micro-container-app",
        activeRule: "/mobile",
      },
    ]);
    // 启动子应用
    start();
  });
}
