import React from "react";
import styles from "./Hero.module.css";
import heroImg from "assets/images/hero-img.png";

function Hero() {
  return (
    <div className={styles.hero}>
      <h1
        className="white fs-40px font-gilroy-extrabold uppercase weight-9 text-center mb-50px lh-1"
        style={{ padding: "0 1rem", color: "#F3B32B " }}
      >
        STRIDE TOWARDS <br />
        <span
          style={{ color: "#FFE372" }}
          className="weight-9 font-gilroy-extrabold"
        >
          FINANCIAL
        </span>{" "}
        FREEDOM
      </h1>
      <img src={heroImg} className="w-full" alt="" />
    </div>
  );
}

export default Hero;
