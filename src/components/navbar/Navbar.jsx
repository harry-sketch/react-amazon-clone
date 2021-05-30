import React from "react";
import { Link } from "react-router-dom";
import "../navbar/Navbar.scss";

const Navbar = () => {
  
  return (
    <nav>
      
      <ul
        className="nav__links"
      >
        <li className="nav__items">
          <Link to="">Best Sellers</Link>
        </li>
        <li className="nav__items">
          <Link to="">Fashion</Link>
        </li>
        <li className="nav__items">
          <Link to="">New Releases</Link>
        </li>
        <li className="nav__items">
          <Link to="">Customer Service</Link>
        </li>
        <li className="nav__items">
          <Link to="">Today's Deal</Link>
        </li>
        <li className="nav__items">
          <Link to="">Amazon Pay</Link>
        </li>
      </ul>
      <div className="nav__prime">
        <img src="./images/prime.jpg" alt="amazon_prime" />
      </div>
    </nav>
  );
};

export default Navbar;
