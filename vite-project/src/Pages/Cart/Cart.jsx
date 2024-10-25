// src/components/Cart.jsx

import React, { useContext } from 'react';
import LayOut from '../../Component/LayOut/LayOut.jsx';
import ProductCard from '../../Component/Product/ProductCard.jsx';
import { DataContext } from '../../Component/DataProvider/DataProvider.jsx';
import { Link } from 'react-router-dom';
import CurrencyFormat from '../../Component/CurrencyFormat/CurrencyFormat.jsx';
import classes from "./Cart.module.css"
import { Type } from '../../Utility/action.type.js';
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

function Cart() {
  // Correct destructuring using array destructuring
  const [state, dispatch] = useContext(DataContext);
  const { basket, user } = state;

  const total = basket.reduce((amount, item) => {
    return item.price * (item.amount || 1) + amount;
  }, 0);

  // Calculate total number of items (including multiples)
  const totalItems = basket.reduce((total, item) => total + (item.amount || 1), 0);

  console.log(basket);
  const increment=(item)=>{
    dispatch({
      type:Type.ADD_TO_BASKET,
      item
    })
  }
  const decrement=(id)=>{
    dispatch({
      type:Type.REMOVE_FROM_BASKET,
      id
    })
  }

  return (
    <LayOut>
      <section className={classes.container}>
        <div className={classes.cart__container}>
          <h2>Hello</h2>
          <h3>Your Shopping Basket</h3>
          <hr />
          {
            basket?.length === 0 ? (
              <p>Oops! No items in your basket</p>
            ) : (
              basket.map((item) => (
                <section className={classes.cart_product}>
                <ProductCard
                  key={item.id} // Use unique id as key
                  product={item}
                  renderdesc={true} // Changed renderdesc to renderDesc
                  flex={true}
                  renderAdd={false}
                />
                <div className={classes.btn_container}>
                  <button className={classes.btn} onClick={()=>increment(item)}><IoIosArrowUp size={20} /></button>
                  <span className={classes.amountsize}>{item.amount}</span>
                  <button className={classes.btn} onClick={()=>decrement(item.id)}><IoIosArrowDown size={20}/></button>
                </div>
                </section>
              ))
            )
          }
        </div> 

        {basket.length !== 0 && (
          <div className={classes.subtotal}>
            <div>
              <p>Subtotal ({basket?.length} items)</p> {/* Display total items */}
              <CurrencyFormat amount={total} />
            </div>
            <span>
              <input type='checkbox' />
              <small>This order contains a gift</small>
            </span>
            <Link to="/payment">Continue to Checkout</Link> {/* Corrected link text */}
          </div>
        )}
      </section>
    </LayOut>
  );
}

export default Cart;
