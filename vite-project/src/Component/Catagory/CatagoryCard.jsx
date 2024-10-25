import React from 'react'
import classes from "./Catagory.module.css"
import { Link } from "react-router-dom";
function CatagoryCard({data}) {
  
  return (
    <div className={classes.catagory}>
        <Link to={`/category/${data.category}`}>
            <span>
                <h2>{data.category}</h2>
            </span>
            <img src={data.image} alt="" />
            <p>shop now</p>
        </Link>
    </div>
  )
}

export default CatagoryCard