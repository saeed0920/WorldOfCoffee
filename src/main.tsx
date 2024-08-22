import React from "react";
import ReactDOM from "react-dom/client";
import App from "@/Views/App";
import "@assets/css/index.css";
import "@public/font/font.css";
import "./i18";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
