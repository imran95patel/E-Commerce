import React, { useContext } from "react";
import "./Products.css"
import { ProductContext } from "../Global/ProductContext";
import {CartContext} from "../Global/CartContext";
import Header from "./Header";


const Products = () => {
  const { products } = useContext(ProductContext);
  console.log(products);
  const {dispatch}=useContext(CartContext);
  // console.log("Data :",data);
  return (
    <div className="container">
          <Header />

    <div className="py-4 container">
    <div className="row justify-content-center">
    {
      products.map((product,i)=>{
        return(
          <div class="col-11 col-md-6 col-lg-4 mx-0 mb-4" style={{"width": "18rem"}}>
            <div class="card p-0 overflow-hidden h-60 shadow">
            <img src={product.image} class="card-img-top img-fluid" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{product.name}</h5>
      <p class="card-text">Shopping</p>
      <h5 class="card-title">${product.price} .00</h5>
      <a href="#" class="btn btn-primary"  
      onClick={()=>dispatch({type:'ADD_TO_CART',product:product.id,product})}>Add to Cart</a>
      {product.status === 'hot' ? <div className="hot">Hot</div>:""}
      {product.status === 'new' ? <div className="new">New</div>:""}

    </div>
    </div>
  </div>

  
        )
      })
    }
  </div>
  </div>
  </div>

  );
};

export default Products;
