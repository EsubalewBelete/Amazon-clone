import React, { useState, useEffect } from 'react'
import LayOut from '../../Component/LayOut/LayOut.jsx'
import { productUrl } from '../../Api/endpoints.js'
import ProductCard from '../../Component/Product/ProductCard.jsx'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Loader from '../../Component/Loader/Loader.jsx'
function ProductDetail() {
  const {productID}=useParams()
  const [product, setproduct] = useState([])
  const [isLoading, setisLoading] = useState(false)
  useEffect(() => {
    setisLoading(true)
       axios.get(`${productUrl}/products/${productID}`)
       .then((res)=>{
        setproduct(res.data)
        setisLoading(false)
       }).catch((err)=>{
        console.log(err)
        setisLoading(false)
       })
  }, [])
  
  return (
    <LayOut>
      {
        isLoading?(<Loader/>):( <ProductCard
          product={product}
          flex={true}
          renderdesc={true}
          renderAdd={true}
          />)
      }
     
    </LayOut>
    
  )
}

export default ProductDetail