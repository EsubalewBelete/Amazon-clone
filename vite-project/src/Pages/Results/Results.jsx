import React, { useState, useEffect } from 'react'
import LayOut from '../../Component/LayOut/LayOut.jsx'
import classes from './Results.module.css'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { productUrl } from '../../Api/endpoints.js'
import ProductCard from '../../Component/Product/ProductCard.jsx'
import Loader from '../../Component/Loader/Loader.jsx'
function Results() {
  const [results, setresults] = useState([])
  const [isLoading, setisLoading] = useState(false)
  const {categoryName}=useParams()
  useEffect(() => {
    setisLoading(true)
   axios.get(`${productUrl}/products/category/${categoryName}`)
   .then((res)=>{
    setresults(res.data)
    setisLoading(false)
    console.log(res.data)
   }).catch((err)=>{
    console.log(err)
    setisLoading(false)
   })
  }, [])
  
  return (

    
    <LayOut>
      <section className={classes.card}>
        <h1 style={{padding: '30px'}}>Results</h1>
        <p style={{padding: '30px'}}>Catagory/{categoryName}</p>
        <hr />
        {
          isLoading?(<Loader/>): (<div className={classes.products_container}>
            {results?.map((product)=>(
             <ProductCard
  
             key={product.id}
             product={product}
             renderAdd={true}
             />
            ))}
          </div>)
        }
        
      </section>
    </LayOut>
    
  )
}

export default Results