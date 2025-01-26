import React, { forwardRef } from "react";
import "./Footer.css";

const Footer = forwardRef((props, ref) => {
  return (
    <footer ref={ref} className="footer-container">
      <div className="footer-content">
        <div className="footer-top">
          <h3 className="footer-logo">ShopEaseY</h3>
          <p className="footer-tagline">
            Your one-stop shop for shoes and trousers. Quality and style like
            never before!
          </p>
        </div>

        <div className="footer-middle">
          <div className="footer-links">
            <a href="#about">About Us</a>
            <a href="#products">Products</a>
            <a href="#contact">Contact Us</a>
            <a href="#faq">FAQ</a>
          </div>
          {/* <div className="social-icons">
            <a href="#" className="social-icon"></a>
            <a href="#" className="social-icon"></a>
            
          </div> */}
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 ShopEase. All Rights Reserved.</p>
      </div>
    </footer>
  );
});

export default Footer;
