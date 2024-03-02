import React, { useContext } from "react";
import { SlLocationPin } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
import classes from "./Header.module.css";
import Lowerheader from "./Lowerheader";
import { Link } from "react-router-dom";
import { DataContext } from "../DataProvider/DataProvider";

const Header = () => {

  const [{basket}, dispatch] = useContext(DataContext)
  const totalItem = basket?.reduce((amount, item)=>{
    return item.amount + amount
  },0)

  return (
    <>
    <section className={classes.fixed}>
      <section className={classes.header_container}>
        <div className={classes.logo_contener}>
          {/* logo */}
          <Link to="/">
            <img
              src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
              alt=""
              className="header__logo"
            />
          </Link>
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
          <Link to="" className={classes.language}>
            <div>
            <img
              src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg"
              alt=""
            />
            <select name="" id="">
              <option value="">EN</option>
            </select>
          </div>
          </Link>
          
          {/* three components */}
          <Link to="/auth">
            <div>
              <p>Sign In</p>
              <span>Account & List</span>
            </div>
          </Link>
          {/* Orders */}
          <Link to="/orders">
            <p>Return</p>
            <span>& Order</span>
          </Link>
          {/* Cart */}
          <Link to="/cart" className={classes.cart}>
            <BiCart size={35} />
            <span>{totalItem}</span>
          </Link>
        </div>
      </section>
      <Lowerheader/>
      </section>
    </>
  );
};

export default Header;
