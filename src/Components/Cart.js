import React, { useContext } from 'react'
import { CartContext } from '../Global/CartContext'
import { type } from '@testing-library/user-event/dist/type';
// import StripeCheckout from 'react-stripe-checkout';

const Cart = (props) => {
    const {dispatch, shoppingCart, totalPrice, qty}=useContext(CartContext)
    console.log("shopping Data :",shoppingCart);
  return (
    <div className='cart-container'>
      <div className="cart-details" >
       {
        shoppingCart.length > 0 ?
        shoppingCart.map((product)=>{
          return(
             <div className="cart" key={product.id}>
              <span className="cart-image">
                <img src={product.image} alt="" />
              </span>
              <span className="cart-product-name">{product.name}</span>
              <span className="cart-product-price">${product.price}.00</span>
              <span className="increment" 
              onClick={() => dispatch({type: 'INC', id:product.id})}>
                <i className="fa-solid fa-plus"></i> </span>
              <span className="product-quantity">{product.qty}</span>
              <span className="decrement" 
              onClick={() => dispatch({type: 'DEC', id:product.id})}>
                <i className="fa-solid fa-minus"></i></span>
              <span className="product-total-price">${product.price * product.qty}.00</span>
              <span className="delete-product" onClick={() =>dispatch({type:'DELETE_PRODUCT',id:product.id})}>
                <i className="fa-solid fa-trash"></i></span>
             </div>
        )})
        :'Sorry Your Cart is Empty'
       }
      </div>
      {
        shoppingCart.length > 0 ?<div className='cart-summary'>
          <div className='summary'>
            <h3>Cart summary</h3>
            <div className='total-items'>
              <div className='items'>Total Items</div>
              <div className='items-count'>{qty}</div>
            </div>
            <div className='total-price-section'>
            <div className='just-title'>Total Price</div>
            <div className='items-price'>${totalPrice}.00</div>
            </div>
            <div className='stripe-section'>
              {/* <StripeCheckout>
                
              </StripeCheckout> */}
            </div>

          </div>
        </div>:''
      }
    </div>
  )
}

export default Cart
