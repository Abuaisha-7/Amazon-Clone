import React from 'react'
import {BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Landing from './Pages/Landing/Landing';
import Auth from './Pages/Auth/Auth';
import Payment from './Pages/Payment/Payment';
import Order from './Pages/Order/Order';
import Cart from './Pages/Cart/Cart';
import Results from './Pages/Results/Results';
import ProductDetail from './Pages/ProductDetail/ProductDetail';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
const stripePromise = loadStripe('pk_test_51OptKjB0HvFybrJ01fMLBPNvnte9q9BfvvUNDY1GmcMRP2GStVmxubJmsbIONvaaZCv9HYWj5xlAai8kPda1d98j00QiE9641B');

const Routing = () => {
  return (
   <Router>
    <Routes>
    <Route path="/" element={<Landing/>} />
    <Route path="/auth" element={<Auth/>} />
    <Route path="/payments" element={
    
    <Elements stripe={stripePromise}>
      <Payment/>
    </Elements>
    
    } />
    <Route path="/orders" element={<Order />} />
    <Route path="/category/:catagoryName" element={<Results />} />
    <Route path="/products/:productId" element={<ProductDetail />} />
    <Route path="/cart" element={<Cart />} />
    </Routes>
   </Router>
  )
}

export default Routing