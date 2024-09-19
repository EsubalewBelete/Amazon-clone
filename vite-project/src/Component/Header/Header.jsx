import React from "react";
import logo from "../../Assets/images/logo.png"
import { IoSearch } from "react-icons/io5";
import { TiLocationOutline } from "react-icons/ti";
import { BsCart3 } from "react-icons/bs";
import classes from "../Header/header.module.css"
import Lowerheader from "./LowerHeader.jsx";

function Header() {
  return <section>
    <div className={classes.header_container}>
      <div className={classes.logo_container}>
        {/* logo */}
        <a href="">
          <img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazone logo" />
        </a>
        <div className={classes.delivery}>
        <span>
          {/* icon */}
          <TiLocationOutline/>
        </span>
        <div>
          <p>delivered to</p>
          <span>Ethiopia</span>
          </div>
        </div>
      </div>
      <div className={classes.search}>
        {/* search */}
        <select name="" id="">
          <option value="">All</option>
        </select>
        <input type="text" />
        {/* icon */}
        <IoSearch size={25}/>
      </div>
      {/* right side link */}
      <div className={classes.order_container}>
        <a href="" className={classes.language}>
          <img src={logo} alt="" />
          <select>
            <option value="">EN</option>
          </select>
          </a>
        {/* three components */}
        <a href="">
          <div>
            <p>Sign In</p>
            <span>Account & Lists</span>
          </div>
          </a>
        {/* orders */}
        <a href="">
          <p>returns</p>
          <span>& Orders</span>
        </a>
        {/* cart */}
        <a href="" className={classes.cart}>
        {/* icon */}
        <BsCart3 size={35}/>
        <span>0</span>
        </a>
      </div>
      </div>
      <Lowerheader/>
    </section>
  
}

export default Header;
