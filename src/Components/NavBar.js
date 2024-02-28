import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../Global/CartContext";

const NavBar = ({cartToggle}) => {
  const {qty}=useContext(CartContext);
  console.log(qty);

  return (
    <nav>
      <ul className="left">
        <li>
          <Link to="/">E-Commerce-app</Link>
        </li>
      </ul>

      <ul className="right">
        <li onClick={cartToggle}>
          <Link to="cart">
            <span className="shoppingCart">
              <i class="fa-solid fa-cart-shopping"></i>
              <span className="cartCount">{qty}</span>

            </span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
