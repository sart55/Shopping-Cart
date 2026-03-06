import React from "react";
import Header from "./components/Header";
import ProductList from "./components/ProductList";

function App() {
  return (
    <div>
      <Header />
      <div className="container mt-4">
        <ProductList />
      </div>
    </div>
  );
}

export default App;
