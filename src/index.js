import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Apps from "./App";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Apps />
  </BrowserRouter>
);
