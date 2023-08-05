import React from "react";
import "./footer.scss";
import stripe from "../../images/stripe.png"
import paypal from "../../images/paypal.png"
import visa from "../../images/visa.png"
import mastercard from "../../images/mastercard.png"
import americanexpress from "../../images/americanexpress.png"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="topfooter">
        <div className="topfooterleft">
          <ul className="topfooterleftul1">
            <li className="topfooterleftli1 b">Categories</li>
            <li className="topfooterleftli1">Women</li>
            <li className="topfooterleftli1">Men</li>
            <li className="topfooterleftli1">Shoes</li>
            <li className="topfooterleftli1">Accessories</li>
            <li className="topfooterleftli1">New Arrivals</li>
          </ul>

          <ul className="topfooterleftul1">
            <li className="topfooterleftli1 b">Links</li>
            <li className="topfooterleftli1">FAQ</li>
            <li className="topfooterleftli1">Pages</li>
            <li className="topfooterleftli1">Stores</li>
            <li className="topfooterleftli1">Compare</li>
            <li className="topfooterleftli1">Cookies</li>
          </ul>
        </div>

        <div className="topfooterright">
          <div className="topfooterrightpara">
            <h3>About</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore
              sequi itaque a odio possimus facere error voluptatibus? Ipsum ab
              sunt, et architecto dolorum optio aspernatur nulla quae itaque
              neque repellendus.
            </p>
          </div>

          <div className="topfooterrightpara">
            <h3>Contact</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore
              sequi itaque a odio possimus facere error voluptatibus? Ipsum ab
              sunt, et architecto dolorum optio aspernatur nulla quae itaque
              neque repellendus.
            </p>
          </div>
        </div>
      </div>
      <div className="bottomfooter">
        <div className="bottomfooterleft">
            <h2 className="h2">TEENZIE APPAREL</h2>
            <span className="span"> ⓒ All rights reserved.</span>
        </div>

        <div className="bottomfooterright">
           <ul className="bottomfooterrightul">
            <li className="bottomfooterrightli">
                <img src={stripe} className="icon iconfooter" />
            </li>
            <li className="bottomfooterrightli"><img src={paypal} className="icon iconfooter" /></li>
            <li className="bottomfooterrightli"><img src={visa} className="icon iconfooter" /></li>
            <li className="bottomfooterrightli"><img src={mastercard} className="icon iconfooter" /></li>
            <li className="bottomfooterrightli"><img src={americanexpress} className="icon iconfooter" /></li>
           </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
