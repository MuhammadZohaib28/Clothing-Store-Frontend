import React from "react";
import "./contact.scss";

const Contact = () => {
  return (
    <div className="contact">
      <div className="messageContainer">
        <span className="message">Be in touch with us!</span>
      </div>
      <div className="emailContainer">
        <input type="email" placeholder="Enter your email" className="email" />
        <button className="emailbtn">Join Us</button>
      </div>
    </div>
  );
};

export default Contact;
