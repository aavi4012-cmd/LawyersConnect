import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-columns">
          <div className="column">
            <h3>MAMLAKARO</h3>
            <p>Legal assistance simplified.</p>
          </div>
          <div className="column">
            <h3>Resources</h3>
            <ul>
              <li>Help Center</li>
              <li>Pricing</li>
              <li>User Guides</li>
              <li>FAQs</li>
            </ul>
          </div>
          <div className="column">
            <h3>Company</h3>
            <ul>
              <li>About Us</li>
              <li>Careers</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="column">
            <h3>Follow Us</h3>
            <ul>
              <li>Facebook</li>
              <li>Twitter</li>
              <li>LinkedIn</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2025 MAMLAKARO. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
