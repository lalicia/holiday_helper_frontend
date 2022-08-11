import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <Link to="/contact-us">Contact Us</Link>
      <span>Holiday Helper©</span>
    </div>
  );
}

export default Footer;
