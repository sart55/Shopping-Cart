import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import {CartProvider} from "./contexts/CartContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <CartProvider>
    <App/>
  </CartProvider>
);
