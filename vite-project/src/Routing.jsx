import React from 'react'
import {BrowserRouter as Router,Routes, Route} from "react-router-dom"
import Auth from "./Pages/Auth/Auth.jsx"
import Landing from './Pages/Landing/Landing.jsx'
import Payment from "./Pages/Payment/Payment.jsx"
import Orders from './Pages/Orders/Orders.jsx'
import Cart from './Pages/Cart/Cart.jsx'
import Result from './Pages/Results/Results.jsx'
import ProductDetails from './Pages/ProductDetail/ProductDetail.jsx'
import { DataProvider } from './Component/DataProvider/DataProvider.jsx'
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
const stripePromise = loadStripe('pk_test_51QCNJVDHhSH157qJ0Mcwkb9mteVaYtxovfJEgVbcSB1MuJ4OTtId3VWpHGiV4dBIkVaQi0vrbcbrMYQcZWdu50Ql00ueRFUoyb');
function Routing() {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<Landing/>}/>
            <Route path='/auth' element={<Auth/>}/>
            <Route path='/payment' element={
              <Elements stripe={stripePromise}><Payment/></Elements>
              }/>
            <Route path='/orders' element={<Orders/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/category/:categoryName' element={<Result/>}/>
            <Route path='/products/:productID' element={<ProductDetails/>}/>
        </Routes>
    </Router>
  )
}

export default Routing