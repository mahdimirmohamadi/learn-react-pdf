import React from "react";
import ReactDOM from "react-dom";
// import "./index.css";
import App from "./App";
import ReactPDF from "@react-pdf/renderer";
import MyDocument from "./components/MyDocument";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
