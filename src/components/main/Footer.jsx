import React from "react";
import "../utils/styles/Footer.css";
import facebookLogo from "../utils/images/facebook.png";
import instagramLogo from "../utils/images/instagram.png";
import linkedinLogo from "../utils/images/linkedin.png";
import twitterLogo from "../utils/images/twitter.png";
import youtubeLogo from "../utils/images/youtube.png";
import dmlogo from "../utils/images/DM_logo.png";
import { Email, Phone } from "@mui/icons-material";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div className="footer-section">
            <a href="#">
              <img src={dmlogo} width="60" height="60" alt="Facebook" />
            </a>
          </div>
          <div className="footer-section">
            <h3>About Us</h3>
            <ul>
              <li>
                <a>Our Story</a>
              </li>
              <li>
                <a>Our Blogs</a>
              </li>
              <li>
                <a>Careers</a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Contact Us</h3>
            <ul>
              <li>
                <Email />
                <span>info@deedmate.com</span>
              </li>
              <li>
                <Phone />
                <span>123-456-789</span>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Follow Us</h3>
            <ul className="social-media-links">
              <li>
                <a href="#">
                  <img src={facebookLogo} alt="Facebook" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={instagramLogo} alt="Instagram" />
                </a>
              </li>
              <li>
              <a href="#">
                <img src={linkedinLogo} alt="LinkedIn" />
              </a>
            </li>
              <li>
                <a href="#">
                  <img src={twitterLogo} alt="Twitter" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={youtubeLogo} alt="Youtube" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <div className="footer-bottom1">
            <p>Terms and Conditions | Privacy Policy | Disclaimer</p>
          </div>
        </div>
      </footer>
      <div className="footer-bottom2">
        <p>Copyright © 2023 DeedMate. All Rights Reserved.</p>
      </div>
    </>
  );
};

export default Footer;
