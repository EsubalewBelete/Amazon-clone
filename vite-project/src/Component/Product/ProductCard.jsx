// src/components/ProductCard.jsx

import React, { useContext } from 'react';
import Rating from "@mui/material/Rating";
import CurrencyFormat from '../CurrencyFormat/CurrencyFormat.jsx';
import classes from "./Product.module.css";
import { Link } from 'react-router-dom';
import { DataContext } from '../DataProvider/DataProvider.jsx';
import { Type } from '../../Utility/action.type.js';

function ProductCard({ product, flex, renderdesc, renderAdd }) {
  const { id, price, title, image, rating, description } = product;

  const  [state, dispatch]  = useContext(DataContext); // Adjusted destructuring

  const addToCart = () => {
    if (!product || !id) {
      console.error("Product is missing or does not have an id");
      return;
    }

    console.log("Dispatching ADD_TO_BASKET with item:", {
      id,
      price,
      title,
      image,
      rating,
      description
    });

    dispatch({
      type: Type.ADD_TO_BASKET,
      item: {
        id, price, title, image, rating, description
      }
    });
  };

  return (
    <div className={`${classes.card__container} ${flex ? classes.product__fixed : ''}`}>
      <Link to={`/products/${id}`}>
        <img src={image} alt={title} /> {/* Added alt text for accessibility */}
      </Link>
      <div className={classes.product__info}>
        <h3>{title}</h3>
        {renderdesc && <div style={{ maxWidth: '750px' }}>{description}</div>}
        <div className={classes.rating}>
          <Rating value={rating?.rate} precision={0.1} />
          <small>{rating?.count}</small>
        </div>
        <div className={classes.price}>
          <CurrencyFormat amount={price} />
        </div>
        {
          renderAdd && <button className={classes.button} onClick={addToCart}>add to cart</button>
        }
        
      </div>
    </div>
  );
  
}


export default ProductCard;
