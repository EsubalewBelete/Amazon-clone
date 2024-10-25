import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import { images } from './img/data';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import classes from "./Carousel.module.css"
function CarouselEffect() {
  return (
    <div>
       <Carousel
       autoPlay={true}
       infiniteLoop={true}
       showThumbs={false}
       showIndicators={false}
       >
         {
            images.map((ImagesItem)=>{
                return <img key={ImagesItem.id} src={ImagesItem}/>
            })
         }
       </Carousel>
       <div className={classes.hero__img}></div>
    </div>
  )
}

export default CarouselEffect