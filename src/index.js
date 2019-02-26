import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./containers/App";
import { store } from "./store";

const rootElement = document.getElementById("root");
const render = () => {
  fancyLog();
  return ReactDOM.render(<App />, rootElement);
};
render();
store.subscribe(render);

function fancyLog() {
  console.log("%c Rendered with 👉 👉👇", "background: purple; color: #fff");
  console.log(store.getState().contacts);
}
