import React, {createContext, useState} from "react";

export const CartContext = createContext();

export const CartProvider = ({children}) => {

  const [cart,setCart] = useState([]);
  const [search,setSearch] = useState("");

  const addToCart = (product,qty) => {

    const existing = cart.find(item => item.id === product.id);

    if(existing){
      const updated = cart.map(item =>
        item.id === product.id
          ? {...item, qty: item.qty + qty}
          : item
      );
      setCart(updated);
    }
    else{
      setCart([...cart,{...product,qty}]);
    }
  };

  const totalItems = cart.reduce((sum,item)=>sum+item.qty,0);

  const subtotal = cart.reduce((sum,item)=>sum+(item.price*item.qty),0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        totalItems,
        subtotal,
        search,
        setSearch
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
