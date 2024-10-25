import React, {useContext, useState} from 'react'
import LayOut from '../../Component/LayOut/LayOut.jsx'
import classes from './Payment.module.css'
import { DataContext } from '../../Component/DataProvider/DataProvider.jsx'
import ProductCard from "../../Component/Product/ProductCard.jsx"
import {useStripe, useElements, CardElement} from '@stripe/react-stripe-js';
import CurrencyFormat from '../../Component/CurrencyFormat/CurrencyFormat.jsx'
function Payment() {
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setcardError] = useState([])

  const handlechange=(e)=>{
   e?.error?.message? setcardError(e?.error?.message): setcardError("")
  }

  const [{basket, user}, dispatch] = useContext(DataContext)
     console.log(user)
  const totalItems = basket.reduce((total, item) => total + (item.amount || 1), 0);

  const total = basket.reduce((amount, item) => {
    return item.price * (item.amount || 1) + amount;
  }, 0);
  return (
    <LayOut>
      {/* header */}
      <div className={classes.payment__header}>Checkout ({totalItems}) items</div>
      {/* payment method */}
      <section className={classes.Payment}>
        {/* adress */}
        <div className={classes.flex}>
          <h3>Delivery Address</h3>
          <div>
        <div>{user?.email}</div>
        <div>123 react lane</div>
        <div>chicago, IL</div>
        </div>
        </div>
        <hr />
        {/* product */}
        <div className={classes.flex}>
          <h3>Review items and delivery</h3>
          <div>
            {
              basket?.map((item)=><ProductCard  product={item} flex={true}/>)
            }
          </div>
        </div>
        <hr />
        {/* card form */}
        <div className={classes.flex}>
          <h3>Payment method</h3>
          <div className={classes.payment__card__container}>
            <div className={classes.payment__details}>
              <form action="">
                {cardError&& <small style={{color: 'red'}}>{cardError}</small>}
                <CardElement onChange={handlechange}/>

                {/* price */}
                <div className={classes.payment__price}>
                  <div>
                    <span style={{display: 'flex', gap: '10px'}}>
                      Total Order | <CurrencyFormat amount={total}/>
                    </span>
                  </div>
                  <button>Pay now</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      </LayOut>
      
    
    
  )
}

export default Payment