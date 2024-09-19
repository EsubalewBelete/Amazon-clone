import React from 'react'
import { IoIosMenu } from "react-icons/io";
import classes from "../Header/Header.module.css"
function Lowerheader() {
  return (
    <div className={classes.Lowerheader}>
        <ul>
            <li>
                <IoIosMenu/>
                All
            </li>
            <li>Today's deal</li>
            <li>Buy Again</li>
            <li>customer Service</li>
            <li>Registry</li>
            <li>Gift Cards</li>
            <li>Sell</li>
        </ul>
    </div>
  )
}

export default Lowerheader