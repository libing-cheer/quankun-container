import "./public-path";
import { createApp } from "vue";
import router from "./router";
import store from "./store";
import App from "./App.vue";

let instance = null;

function render(props = {}) {
  const { container } = props;
  instance = createApp(App)
    .use(router)
    .use(store)
    .mount(container ? container.querySelector("#web-app") : "#web-app");
}
// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
  render();
}
// bootstrap 只会在微应用初始化的时候调用一次，下次微应用重新进入时会直接调用 mount 钩子，不会再重复触发 bootstrap。
export async function bootstrap() {
  console.log("进入vue app 子应用的bootstrap周期");
}
// 应用每次进入都会调用 mount 方法，通常我们在这里触发应用的渲染方法
export async function mount(props) {
  console.log("进入vue app 子应用的mount周期", props);
  render(props);
}
// 应用每次 切出/卸载 会调用的方法，通常在这里我们会卸载微应用的应用实例
export async function unmount() {
  console.log("进入vue app 子应用的unmount周期");
  //   instance.$destroy();
  instance.$el.innerHTML = "";
  instance = null;
}
