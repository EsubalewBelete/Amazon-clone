import React, { useContext } from "react";
import logo from "../../Assets/images/logo.png"
import { IoSearch } from "react-icons/io5";
import { TiLocationOutline } from "react-icons/ti";
import { Link } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";
import classes from "../Header/header.module.css"
import Lowerheader from "./LowerHeader.jsx";
import { DataContext } from "../DataProvider/DataProvider.jsx";
import { auth } from "../../Utility/firebase.js";

function Header() {

  const [{basket, user}, dispatch] = useContext(DataContext);
  
  // Safely get basket count
  
  const totalItems = basket.reduce((total, item) => total + (item.amount || 1), 0);
  

  
  return <section className={classes.fixed}>
    <div className={classes.header_container}>
      <div className={classes.logo_container}>
        {/* logo */}
        <Link to="/">
          <img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazone logo" />
        </Link>
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
        <IoSearch size={35}/>
      </div>
      {/* right side link */}
      <div className={classes.order_container}>
        <Link to="" className={classes.language}>
          <img src={logo} alt="" />
          <select>
            <option value="">EN</option>
          </select>
          </Link>
        {/* three components */}
        <Link to={!user &&"/auth"}>
          <div>
            {
              user?(<><p style={{fontSize:15}}>hello {user?.email?.split('@')[0]}</p> <span onClick={()=>auth.signOut()}>Sign Out</span> </>):(<><p>Sign In</p><span >Account & Lists</span></>)
            }
            
            
          </div>
          </Link>
        {/* orders */}
        <Link to="/orders" style={{marginLeft: '20px'}}>
          <p style={{fontSize: '15px'}}>returns</p>
          <span>& Orders</span>
        </Link>
        {/* cart */}
        <Link to="/cart" className={classes.cart} style={{ marginLeft: '30px' }}>
        {/* icon */}
        <BsCart3 size={35}/>
        <span>{totalItems}</span>
        </Link>
      </div>
      </div>
      <Lowerheader/>
    </section>
  
}

export default Header;
