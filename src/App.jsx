import React from "react";
import NavBar from "./components/nav/NavBar";
import { Route, Routes } from "react-router-dom";
import Single from "./pages/Single";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setCartNumbers } from "./features/cart/cartSlice";
function App() {
  const dispatch  = useDispatch();
  const cartItems = useSelector((state)=>state.cart.cartItems);
  useEffect(()=>{
    dispatch(setCartNumbers())
  },[cartItems])
  return (
    <div className="wrapper bg-dark text-white">
      <NavBar title="Ezee-Cart-Blitz" />
      <div className="container mt-5 py-5 px-3 px-md-5">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/single/:id" element={<Single/>} />
          <Route path="/cart" element={<Cart/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
