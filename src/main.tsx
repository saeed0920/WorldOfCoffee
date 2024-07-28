/* eslint-disable prettier/prettier */
// TODO I have no idea why prettier error with last line of this file!
import React from "react";
import ReactDOM from "react-dom/client";
import App from "@/views/App";
import "@/assets/css/index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
