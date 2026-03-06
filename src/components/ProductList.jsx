import React, {useContext} from "react";
import ProductCard from "./ProductCard";
import {CartContext} from "../contexts/CartContext";

import broccoli from "../assets/images/broccoli.jpg";
import cauliflower from "../assets/images/cauliflower.jpg";
import cucumber from "../assets/images/cucumber.jpg";
import beetroot from "../assets/images/beetroot.jpg";
import carrot from "../assets/images/carrot.jpg";
import tomato from "../assets/images/tomato.jpg";
import beans from "../assets/images/beans.jpg";
import brinjal from "../assets/images/brinjal.jpg";

const products = [
{id:1,name:"Broccoli - 1 Kg",price:120,image:broccoli},
{id:2,name:"Cauliflower - 1 Kg",price:60,image:cauliflower},
{id:3,name:"Cucumber - 1 Kg",price:48,image:cucumber},
{id:4,name:"Beetroot - 1 Kg",price:32,image:beetroot},
{id:5,name:"Carrot - 1 Kg",price:56,image:carrot},
{id:6,name:"Tomato - 1 Kg",price:16,image:tomato},
{id:7,name:"Beans - 1 Kg",price:82,image:beans},
{id:8,name:"Brinjal - 1 Kg",price:35,image:brinjal},
];

function ProductList(){

  const {search} = useContext(CartContext);

  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return(

    <div className="row">

      {filtered.map(item =>(
        <ProductCard key={item.id} product={item}/>
      ))}

    </div>

  );
}

export default ProductList;
