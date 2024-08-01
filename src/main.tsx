import React from "react";
import ReactDOM from "react-dom/client";
import App from "@views/App";
import "@assets/css/index.css";
import "@public/font/font.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
