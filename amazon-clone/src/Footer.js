import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function Footer() {
  return (
    <div className="footer">
      <div class="footer__row">
        <div class="footer__column">
          <h3>Get to Know Us</h3>
          <p>
            Careers
            <br />
            Blog
            <br />
            About Amazon
            <br />
            Amazon Devices
            <br />
          </p>
        </div>
        <div class="footer__column">
          <h3>Make Money with us</h3>
          <p>
            Sell on Amazon
            <br />
            Sell on Amazon Business
            <br />
            Sell Your Apps on Amazon
            <br />
            Becom an Affiliate
            <br />
            Advertise Your Products
            <br />
            Self-Publish with Us
            <br />
            Host an Amazon Hub
            <br />
          </p>
        </div>
        <div class="footer__column">
          <p>
            <h3>Amazon Payment Products</h3>
            Amazon Business Card
            <br />
            Shop with Points
            <br />
            Reload Your Balance
            <br />
            Amazon Currency Converter
            <br />
          </p>
        </div>
        <div class="footer__column">
          <p>
            <h3>Let Us Help You</h3>
            Your Orders
            <br />
            Shipping Rates & Policies
            <br />
            Returns & Replacement
            <br />
            Helps
            <br />
          </p>
        </div>
      </div>
      <hr className="footer__margin" />
      <p className="footer__name">
        <Link to="/">
          <img
            className="footer__logo"
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt="Amazon Logo"
          />
        </Link>
        Reeju's Amazon Clone
      </p>
    </div>
  );
}

export default Footer;
