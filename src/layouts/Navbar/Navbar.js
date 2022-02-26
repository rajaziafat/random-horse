import React, { useState } from "react";
import styles from "./Navbar.module.css";
import brandLogo from "assets/images/brand-logo.png";
import { Link as ScrollLink } from "react-scroll";
import activeIndicator from "assets/images/active-indicator.png";
import hamburger from "assets/images/hamburger.png";
import crossIcon from "assets/images/crossIcon.png";
import OutsideClickDetector from "hooks/OutsideClickDetector";
import useMediaQuery from "hooks/useMediaQuery";
import { FaDiscord } from "react-icons/fa";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const isBellow1800px = useMediaQuery("(max-width : 1800px)");
  const isBellow1600px = useMediaQuery("(max-width : 1600px)");
  const isBellow1365px = useMediaQuery("(max-width : 1365px)");

  React.useEffect(() => {
    const handler = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    document.addEventListener("scroll", handler);

    return () => {
      document.removeEventListener("scroll", handler);
    };
  });

  const menuRef = OutsideClickDetector(() => {
    setIsOpen(false);
  });

  return (
    <div className={`${styles.wrapper} ${isScrolled ? styles.scrolled : ""}`}>
      <div className="container-wrapper">
        <div className={styles.navbar}>
          <img src={brandLogo} className={styles.navbarBrand} alt="" />

          <button onClick={() => setIsOpen(!isOpen)}>
            <img src={hamburger} className={styles.hamburger} alt="" />
          </button>

          <div
            className={`${styles.navbarRight} ${isOpen ? styles.open : ""}`}
            ref={menuRef}
          >
            <div className={styles.mobileBar}>
              <img src={brandLogo} alt="" />
              <img
                src={crossIcon}
                onClick={() => setIsOpen(!isOpen)}
                className={styles.crossIcon}
                alt=""
              />
            </div>
            <div className={styles.navbar_link}>
              <ScrollLink
                activeClass={`${styles.navbarScrollActive}`}
                onClick={() => setIsOpen(false)}
                spy={true}
                to="home"
                className={`${styles.navbarScrollLink}  gray uppercase font-gilroy-light weight-3 pointer`}
                style={{
                  fontSize: isBellow1800px ? "14px" : "20px",
                }}
              >
                Home
                <img src={activeIndicator} alt="" />
              </ScrollLink>
              <ScrollLink
                activeClass={`${styles.navbarScrollActive}`}
                onClick={() => setIsOpen(false)}
                spy={true}
                to="why"
                offset={-200}
                className={`${styles.navbarScrollLink} gray uppercase font-gilroy-light weight-3 pointer`}
                style={{
                  fontSize: isBellow1800px ? "14px" : "20px",
                }}
              >
                About
                <img src={activeIndicator} alt="" />
              </ScrollLink>
              <ScrollLink
                activeClass={`${styles.navbarScrollActive}`}
                onClick={() => setIsOpen(false)}
                spy={true}
                offset={-200}
                to="exclusive-club"
                className={`${styles.navbarScrollLink} gray uppercase font-gilroy-light weight-3 pointer`}
                style={{
                  fontSize: isBellow1800px ? "14px" : "20px",
                }}
              >
                Exclusive Club
                <img src={activeIndicator} alt="" />
              </ScrollLink>
              <ScrollLink
                activeClass={`${styles.navbarScrollActive}`}
                onClick={() => setIsOpen(false)}
                spy={true}
                to="nfts"
                offset={-50}
                className={`${styles.navbarScrollLink} gray uppercase font-gilroy-light weight-3 pointer`}
                style={{
                  fontSize: isBellow1800px ? "14px" : "20px",
                }}
              >
                our NFTs
                <img src={activeIndicator} alt="" />
              </ScrollLink>
              <ScrollLink
                activeClass={`${styles.navbarScrollActive}`}
                onClick={() => setIsOpen(false)}
                spy={true}
                to="roadmap"
                offset={-200}
                className={`${styles.navbarScrollLink} gray uppercase font-gilroy-light weight-3 pointer`}
                style={{
                  fontSize: isBellow1800px ? "14px" : "20px",
                }}
              >
                sales & Rewards
                {/* <img src={activeIndicator} alt="" />
              </ScrollLink>
              <ScrollLink
                activeClass={`${styles.navbarScrollActive}`}
                onClick={() => setIsOpen(false)}
                spy={true}
                to="whitepaper"
                className={`${styles.navbarScrollLink} gray uppercase font-gilroy-light weight-3 pointer`}
                style={{border : isBellow1800px ? "2px solid red" : "2px solid blue"}}
              >
                whitepaper */}
                <img src={activeIndicator} alt="" />
              </ScrollLink>
              <ScrollLink
                activeClass={`${styles.navbarScrollActive}`}
                onClick={() => setIsOpen(false)}
                spy={true}
                to="developmentRoadmap"
                className={`${styles.navbarScrollLink} gray uppercase font-gilroy-light weight-3 pointer`}
                style={{
                  fontSize: isBellow1800px ? "14px" : "20px",
                }}
                offset={-180}
              >
                Roadmap
                <img src={activeIndicator} alt="" />
              </ScrollLink>
              <ScrollLink
                activeClass={`${styles.navbarScrollActive}`}
                onClick={() => setIsOpen(false)}
                spy={true}
                to="facts"
                className={`${styles.navbarScrollLink} gray uppercase font-gilroy-light weight-3 pointer`}
                style={{
                  fontSize: isBellow1800px ? "14px" : "20px",
                }}
                offset={-180}
              >
                Facts
                <img src={activeIndicator} alt="" />
              </ScrollLink>
              <ScrollLink
                activeClass={`${styles.navbarScrollActive}`}
                onClick={() => setIsOpen(false)}
                spy={true}
                to="team"
                className={`${styles.navbarScrollLink} gray uppercase font-gilroy-light weight-3 pointer`}
                style={{
                  fontSize: isBellow1800px ? "14px" : "20px",
                }}
                offset={-100}
              >
                team
                <img src={activeIndicator} alt="" />
              </ScrollLink>
              <ScrollLink
                activeClass={`${styles.navbarScrollActive}`}
                onClick={() => setIsOpen(false)}
                spy={true}
                to="partners"
                offset={-200}
                className={`${styles.navbarScrollLink} gray uppercase font-gilroy-light weight-3 pointer`}
                style={{
                  fontSize: isBellow1800px ? "14px" : "20px",
                }}
              >
                partners
                <img src={activeIndicator} alt="" />
              </ScrollLink>
              <ScrollLink
                activeClass={`${styles.navbarScrollActive}`}
                onClick={() => setIsOpen(false)}
                spy={true}
                offset={-200}
                to="faq"
                className={`${styles.navbarScrollLink} gray uppercase font-gilroy-light weight-3 pointer`}
                style={{
                  fontSize: isBellow1800px ? "14px" : "20px",
                }}
              >
                FAQ
                <img src={activeIndicator} alt="" />
              </ScrollLink>
            </div>
            <div className={styles.navBtns}>
              <button
                className="white pointer font-gilroy-light uppercase weight-3"
                style={{
                  padding: isBellow1600px
                    ? isBellow1365px
                      ? "0.7rem 1rem"
                      : "0.3rem .6rem"
                    : "0.7rem 1rem",
                  
                }}
              >
                {isBellow1600px ? (
                  isBellow1365px ? (
                    <> Join Discord</>
                  ) : (

                    <a
                href="https://discord.com/invite/CmGu4UcX"
                rel="noreferrer"
                color="white"
                target="_blank"
              >
                   <FaDiscord size={30}  />

                   </a>
                  )
                ) : (
                  
                  "Join Discord"
                )}
              </button>
              <button className="white relative minButton cursor-not-allowed font-gilroy-bold uppercase">
                <div className="onHoverState fs-12px font-gilroy-medium">
                  COMING SOON
                </div>
                Mint
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
