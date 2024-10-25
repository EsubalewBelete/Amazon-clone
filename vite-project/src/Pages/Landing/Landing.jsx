import React from 'react'
import CarouselEffect from '../../Component/Carousel/CarouselEffect.jsx'
import Catagory from '../../Component/Catagory/Catagory.jsx'
import Product from '../../Component/Product/product.jsx'
import LayOut from '../../Component/LayOut/LayOut.jsx'
function Landing() {
  return (
    <LayOut>
        <CarouselEffect/>
        <Catagory/>
        <Product/>
    </LayOut>
  )
}

export default Landing