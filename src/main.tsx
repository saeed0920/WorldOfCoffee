import React from "react";
import ReactDOM from "react-dom/client";
import App from "@/Views/App";
import "@assets/css/index.css";
import "@public/font/font.css";
import { ChakraProvider } from "@chakra-ui/react";
import "./i18";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
);
