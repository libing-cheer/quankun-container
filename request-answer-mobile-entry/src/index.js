import "./public-path";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import router from "./router/index";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

const GetRoutes = () => {
  return useRoutes(router);
};
const SetRoutes = () => {
  return (
    <Router basename={window.__POWERED_BY_QIANKUN__ ? "/mobile" : "/"}>
      <GetRoutes />
    </Router>
  );
};

function render(props) {
  ReactDOM.createRoot(document.getElementById("mobile-app")).render(
    <SetRoutes />
  );
}

if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap() {
  // console.log("[react16] react app bootstraped");
}

export async function mount(props) {
  // console.log("[react16] props from main framework", props);
  render(props);
}

export async function unmount(props) {
  // console.log(props, "unmount");
  // const { container } = props;
  // const unmountElement = container
  //   ? container.querySelector("#mobile-app")
  //   : document.getElementById("mobile-app");
  // console.log(document.getElementById("mobile-app"), "90000");
  // ReactDOM.createRoot(unmountElement).unmount();
}

reportWebVitals();
