import React from "react";
import { Link } from "react-router-dom";
import "../footer/Footer.scss";
import LanguageOutlinedIcon from "@material-ui/icons/LanguageOutlined";
import ImportExportIcon from "@material-ui/icons/ImportExport";

const Footer = () => {
  return (
    <footer>
      <div className="first__footer">
        <div className="common__footer">
          <h3>Get to know us</h3>
          <ul className="footer__list">
            <li className="footer__items">
              <Link to="">About Us</Link>
            </li>
            <li className="footer__items">
              <Link to="">Careers</Link>
            </li>
            <li className="footer__items">
              <Link to="">Press Releases</Link>
            </li>
            <li className="footer__items">
              <Link to="">Amazon Cares</Link>
            </li>
            <li className="footer__items">
              <Link to="">Gift a Smile</Link>
            </li>
          </ul>
        </div>
        <div className="common__footer">
          <h3>Connect with Us</h3>
          <ul className="footer__list">
            <li className="footer__items">
              <Link to="">Facebook</Link>
            </li>
            <li className="footer__items">
              <Link to="">Twitter</Link>
            </li>
            <li className="footer__items">
              <Link to="">Instagram</Link>
            </li>
          </ul>
        </div>
        <div className="common__footer">
          <h3>Make Money With Us</h3>
          <ul className="footer__list">
            <li className="footer__items">
              <Link to="">Sell on Amazon</Link>
            </li>
            <li className="footer__items">
              <Link to="">Sell under Amazon Accelerator</Link>
            </li>
            <li className="footer__items">
              <Link to="">Amazon global Selling</Link>
            </li>
            <li className="footer__items">
              <Link to="">Become an Affiliate</Link>
            </li>
            <li className="footer__items">
              <Link to="">Fulfilment by Amazon</Link>
            </li>
            <li className="footer__items">
              <Link to="">Advertise Your Products</Link>
            </li>
            <li className="footer__items">
              <Link to="">Amazon Pay on Merchants</Link>
            </li>
          </ul>
        </div>
        <div className="common__footer">
          <h3>Let Us Help You</h3>
          <ul className="footer__list">
            <li className="footer__items">
              <Link to="">COVID-19 & Amazon</Link>
            </li>
            <li className="footer__items">
              <Link to="">Your Account</Link>
            </li>
            <li className="footer__items">
              <Link to="">Returns Centre</Link>
            </li>
            <li className="footer__items">
              <Link to="">100% Purchase Protection</Link>
            </li>
            <li className="footer__items">
              <Link to="">Amazon App Download</Link>
            </li>
            <li className="footer__items">
              <Link to="">Amazon Assistant Download</Link>
            </li>
            <li className="footer__items">
              <Link to="">Help</Link>
            </li>
          </ul>
        </div>
      </div>
      <hr className="footer__row" />
      <div className="second__footer">
        <div className="second__firstFooter">
          <img src="./logo/logo.svg" alt="logo" className="footer__img" />
          <div className="language__footer">
            <LanguageOutlinedIcon />
            <p>English</p>
            <ImportExportIcon />
          </div>
        </div>
        <ul className="second__footerLinks">
          <li className="second__footerItems">
            <Link to="">Australia</Link>
          </li>
          <li className="second__footerItems">
            <Link to="">Brazil</Link>
          </li>
          <li className="second__footerItems">
            <Link to="">Canada</Link>
          </li>
          <li className="second__footerItems">
            <Link to="">China</Link>
          </li>
          <li className="second__footerItems">
            <Link to="">France</Link>
          </li>
          <li className="second__footerItems">
            <Link to="">Germany</Link>
          </li>
          <li className="second__footerItems">
            <Link to="">Singapore</Link>
          </li>
          <li className="second__footerItems">
            <Link to="">Italy</Link>
          </li>
          <li className="second__footerItems">
            <Link to="">Japan</Link>
          </li>
          <li className="second__footerItems">
            <Link to="">Germany</Link>
          </li>
          <li className="second__footerItems">
            <Link to="">Turkey</Link>
          </li>
          <li className="second__footerItems">
            <Link to="">Spain</Link>
          </li>
          <li className="second__footerItems">
            <Link to="">United States</Link>
          </li>
          <li className="second__footerItems">
            <Link to="">United Kingdom</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
