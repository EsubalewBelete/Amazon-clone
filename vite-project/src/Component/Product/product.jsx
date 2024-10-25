import React, { useState, useEffect } from 'react'
import ProductCard from './ProductCard'
import axios from 'axios'
import classes from "./Product.module.css"
import Loader from '../Loader/Loader'
function product() {
    const [products, setproducts] = useState([])
    const [isLoading, setisLoading] = useState(false)
    useEffect(() => {
      setisLoading(true)
      axios.get('https://fakestoreapi.com/products')
      .then((res)=>{
        
        setproducts(res.data)
        setisLoading(false)
      }).catch((err)=>{
        console.log(err)
        setisLoading(false)
      })
    }, [])
     
  return (
    <> 
    {
      isLoading?(<Loader/>): (<section className={classes.Products__container}>
        {
            products.map((singleproducts)=>(
                <ProductCard renderAdd={true} product={singleproducts} key={singleproducts.id}/>
            ))
        }
    </section>)
    }
    
    </>
   
  )
}

export default product