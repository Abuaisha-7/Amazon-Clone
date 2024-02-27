import React from "react";
import { SlLocationPin } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
import classes from "./Header.module.css";
import Lowerheader from "./Lowerheader";

const Header = () => {
  return (
    <>
      <section className={classes.header_container}>
        <div className={classes.logo_contener}>
          {/* logo */}
          <a href="/">
            <img
              src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
              alt=""
              className="header__logo"
            />
          </a>
          {/* Delivery */}
          <div className={classes.delivery}>
            <span>
              <SlLocationPin />
            </span>
            <div>
              <p>Delivery to</p>
              <span>Ethiopia</span>
            </div>
          </div>
        </div> 
        {/* search */}
        <div className={classes.search}>
          <select name="" id="">
            <option value="">All</option>
          </select>
          <input type="text" name="" id="" placeholder="search products" />
          <BsSearch size={25} />
        </div>
        {/* Rigth side link */}
        <div className={classes.order_contener}>
          <a href="" className={classes.language}>
            <div>
            <img
              src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg"
              alt=""
            />
            <select name="" id="">
              <option value="">EN</option>
            </select>
          </div>
          </a>
          
          {/* three components */}
          <a href="">
            <div>
              <p>Sign In</p>
              <span>Account & List</span>
            </div>
          </a>
          {/* Orders */}
          <a href="">
            <p>Return</p>
            <span>& Order</span>
          </a>
          {/* Cart */}
          <a href="" className={classes.cart}>
            <BiCart size={35} />
            <span>0</span>
          </a>
        </div>
      </section>
      <Lowerheader/>
    </>
  );
};

export default Header;
