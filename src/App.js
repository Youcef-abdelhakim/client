import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Home from "./Components/Home/Home";
import Cart from "./Components/Cart/Cart";
import { useEffect, useState } from "react";

function App() {

  const [cart, setCart] = useState([]);

  const addtoCart = (prf) =>{
    setCart(prev => [...prev, prf]);
  }

  useEffect(()=>{
    console.log(cart);
  }, [cart])

  return (
    <BrowserRouter>
      <Routes >
        <Route path="/" element ={<Layout/>}>
            <Route index element={<Home addtoCart={addtoCart}/>}/>
            <Route path="/cart" element={<Cart cart = {cart} />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
