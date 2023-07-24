import { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./App";

import "./assets/styles/bootstrap.css";
import "./assets/styles/index.css";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
