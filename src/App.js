import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Home from "./Components/Home/Home";
import Cart from "./Components/Cart/Cart";
import FormC from "./Components/Form/form.js";
import Details from "./Components/Details/Details.js";
import { useEffect, useState } from "react";
import axios from 'axios';
import { perfumes } from "./data.js";

function App() {

  const [cart, setCart] = useState([]);
  const [total, settotal] = useState(0);
  const [products, setproducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [perfumes, setPerfumes] = useState([]);
  

  const fetchCateg = async() => {
    try {
        const res = await axios.get("http://localhost:8000/api/category/categoryget");
        console.log(res.data.message);
        setCategories(res.data.message.map(categorie => categorie.category));
    } catch(err) {
        console.error("error cathced!", err);
    }
}
const fetchPerfumes = async() => {
    try {
        const res = await axios.get("http://localhost:8000/api/products/demo");
        console.log(res.data);
        setPerfumes(res.data.products);
    } catch (err){
        console.error("Error catched!", err);
      }
}


useEffect(() => {
    fetchCateg();
    fetchPerfumes();
},[]);





  const addtoCart = (prf) =>{
    if(prf.Quantity > 0){
      setCart(prev => {
        const exist = prev.some(item => item._id === prf._id);
        if(exist){
          return prev.map(item => 
            item.id === prf.id?
            {...item, quant: (item.quant || 1) + 1 , pricen: (Number(prf.price) * ((item.quant || 1) + 1))}:
            item
          )
        }else{
          return[...prev, {...prf, quant: 1, pricen : prf.price}];
        }
      })
    }else{
      alert("Sorry this product is out of stock try later!")
    }
  }



  const removeforCart = (itm) =>{
    setCart((prev) => prev.filter(item => item !== itm));
  }

  useEffect(()=>{
    console.log(cart);
  }, [cart])

  useEffect(() =>{
    settotal(
        cart.reduce((acemulater, item) => acemulater + Number(item.pricen), 0)
    )
},[cart])

useEffect(() =>{
  setproducts(cart.map(product => ({
    product_id : product._id,
    prodImgSrc : product.image,
    prodName: product.name,
    prodBrand: product.brand,
    prodPrice: product.price,
    Orderquantity : product.quant,
    Productquantity : product.Quantity
  })))
},[cart]);

  return (
    <BrowserRouter>
      <Routes >
        <Route path="/" element ={<Layout/>}>
            <Route index element={<Home addtoCart={addtoCart} categories={categories} perfumes={perfumes}/>}/>
            <Route path="/cart" element={<Cart cart = {cart} removeforCart ={removeforCart} total = {total}/>}/>
            <Route path="/form" element={<FormC total = {total} products = {products}/>}/>
            <Route path="/Details/:id" element={ perfumes.length>0 ?  <Details perfumes={perfumes}/>: <h1>loding...</h1> }/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
