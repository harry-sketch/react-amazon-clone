import React from "react";
import { Link } from "react-router-dom";
import "../header/Header.scss";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <Link to="">
          <img src="./logo/logo.svg" alt="logo" className="main__logo" />
        </Link>
        <span>.in</span>
      </div>
      <div className="head__address">
        <h6>Hello</h6>
        <div className="head__addressInside">
          <LocationOnOutlinedIcon />
          <h5>Select your address</h5>
        </div>
      </div>
      <div className="head__search">
        <input type="text" />
        <SearchOutlinedIcon />
      </div>
      <div className="head__sign">
        <h6>Hello,Sign in</h6>
        <h5>Accounts & Lists</h5>
      </div>
      <div className="head__order">
        <h6>Returns</h6>
        <h5> & Orders</h5>
      </div>
      <div className="head__cart">
        <ShoppingCartOutlinedIcon />
        <span>Cart</span>
        <div className="head__cartNumber">0</div>
      </div>
    </header>
  );
};

export default Header;
