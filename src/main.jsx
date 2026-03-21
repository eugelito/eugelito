import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { initGoogleAnalytics } from "./analytics";
import "./index.css";

initGoogleAnalytics();

ReactDOM.render(
  React.createElement(React.StrictMode, null, React.createElement(App)),
  document.getElementById("root")
);
