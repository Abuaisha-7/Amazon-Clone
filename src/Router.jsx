import React from 'react'
import {BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Landing from './Pages/Landing/Landing';
import Singnup from './Pages/Auth/Singnup';
import Payment from './Pages/Payment/Payment';
import Order from './Pages/Order/Order';
import Cart from './Pages/Cart/Cart';
import Results from './Pages/Results/Results';
import ProductDetail from './Pages/ProductDetail/ProductDetail';

const Routing = () => {
  return (
   <Router>
    <Routes>
    <Route path="/" element={<Landing/>} />
    <Route path="/auth" element={<Singnup/>} />
    <Route path="/payment" element={<Payment/>} />
    <Route path="/orders" element={<Order />} />
    <Route path="/category/:catagoryName" element={<Results />} />
    <Route path="/products/:productId" element={<ProductDetail />} />
    <Route path="/cart" element={<Cart />} />
    </Routes>
   </Router>
  )
}

export default Routing