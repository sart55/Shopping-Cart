import React, {useContext} from "react";
import {CartContext} from "../contexts/CartContext";

function Header(){

  const {totalItems, subtotal, search, setSearch} = useContext(CartContext);

  return(

    <div className="bg-light p-3 border-bottom">

      <div className="container d-flex justify-content-between align-items-center">

        <h2 style={{color:"#2e7d32"}}>Veggy</h2>

        <div style={{width:"40%"}}>
          <input
            className="form-control"
            placeholder="Search for Vegetables and Fruits"
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
          />
        </div>

        <div>
          <p style={{margin:0}}>No. of items : {totalItems}</p>
          <p style={{margin:0}}>Sub Total : ₹ {subtotal}</p>
        </div>

      </div>

    </div>
  );
}

export default Header;
