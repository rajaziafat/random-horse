import React from "react";
import styles from "./Partners.module.css";
import partner1 from "assets/images/partner-1.png";
import partner2 from "assets/images/partner-2.png";
import partner3 from "assets/images/partner-3.png";
import partner4 from "assets/images/partner-4.png";
import partner5 from "assets/images/partner-5.png";
import useMediaQuery from "hooks/useMediaQuery";

function Partners() {
  const isBellow600 = useMediaQuery("(max-width: 500px)");

  return (
    <div className="container-wrapper ">
      <header className={`text-center ${isBellow600 ? "mb-60px" : "mb-70px"}`}>
        <h1 className="white fs-40px font-gilroy-light weight-3 lh-1 mb-10px">
          OUR FRIENDS
        </h1>
        <h1 className=" text-gradient font-gilroy-black fs-70px lh-1 uppercase">
          Partners
        </h1>
      </header>

      <main className={styles.partners}>
        <img src={partner1} alt="" />
        <img src={partner2} alt="" />
        <img src={partner3} alt="" />
        <img src={partner4} alt="" />
        <img src={partner5} alt="" />
      </main>
    </div>
  );
}

export default Partners;
