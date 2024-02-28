import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
// import Header from "./Components/Header";
import NavBar from "./Components/NavBar";
import Products from "./Components/Products";
import ProductContextProvider from "./Global/ProductContext";
import Cart from "./Components/Cart";
import CartContext from "./Global/CartContext";

function App() {
  return (
    <div>
      <ProductContextProvider>
        <CartContext>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/cart" element={<Cart />} />

          </Routes>
        </BrowserRouter>
        </CartContext>
      </ProductContextProvider>
    </div>
  );
}

export default App;
