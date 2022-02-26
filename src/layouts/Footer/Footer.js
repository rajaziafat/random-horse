import React from "react";
import styles from "./Footer.module.css";
import logo from "assets/images/logo.png";
import { FaInstagramSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";

function Footer() {
  return (
    <div className={styles.footerWrapper}>
      <div className="container-wrapper py-100px">
        <footer>
          <img className={styles.footerBrand} src={logo} alt="" />

          <div className={styles.socialIcons}>
            <a href="https://twitter.com/StallionsNft" target="_blank" className="black opacity-0_5">
              <FaTwitterSquare size={45} />
            </a>
            <a href="#" className="black opacity-0_5">
              <FaLinkedin size={45} />
            </a>
            <a href="https://www.instagram.com/thecryptostallions/" target="_blank"  className="black opacity-0_5">
              <FaInstagramSquare size={45} />
            </a>
          </div>

          <p className="text-center fs-20px font-gilroy-bold gray uppercase ">
            © Cryptostallions Club, 2022
          </p>
        </footer>
      </div>
    </div>
  );
}

export default Footer;
