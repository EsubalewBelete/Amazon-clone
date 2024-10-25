import React from 'react'
import { cardInfo } from './Fullinfo'
import CatagoryCard from './CatagoryCard.jsx'
import classes from "./Catagory.module.css"
function Catagory() {
  return (
    <section className={classes.Catagory__container}>
        {
            cardInfo.map((Info)=>(
                <CatagoryCard  data={Info}/>
            ))
        }
    </section>
  )
}

export default Catagory