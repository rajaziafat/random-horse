import React from "react";
import styles from "./KeyToUnlock.module.css";
import nftsData from "assets/data/nftsData";

const GridItem = ({ img, data, index }) => {
  return data.isHoverable ? (
    <a
      href="#"
      className={`flip-card pointer ${
        data.isHoverable ? styles.hoverable : ""
      }`}
    >
      <img src={img} className="w-full" alt="" />
      <div className="flip-card-inner">
        <div className={`flip-card-front`}>
          <div className={``}>
            <img src={img} className={`${styles.gridImg}  w-full`} alt="" />
          </div>
        </div>
        <div className="flip-card-back bg-gradient">
          <p className="black font-gilroy-extrabold fs-20px uppercase">{data.title}</p>
        </div>
      </div>
    </a>
  ) : (
    <img
      src={img}
      className={`${styles.gridImg} ${styles.notHoverable} opacity-0_2  w-full`}
      style={{ pointerEvents: "none", userSelect: "none" }}
      alt=""
    />
  );
};

function KeyToUnlock() {
  return (
    <div className={`${styles.wrapper} container-wrapper`}>
      <div className={`${styles.grid} `}>
        {nftsData.map((data, index) => (
          <GridItem img={data.img} data={data} index={index + 1} />
        ))}
      </div>
      <div className={`${styles.desc} bg-transparent `}>
        <h1 className="text-gradient fs-64px lh-1 font-gilroy-black uppercase mb-15px">
          The CRYPTOSTALLIONS NFT
        </h1>
        <h2 className="fs-30px white font-gilroy-light weight-3 uppercase mb-50px">
          The key that unlocks you into CSC’s world
        </h2>
      </div>

      <a
        href="#"
        className={`${styles.keyBtn} uppercase font-gilroy-black white fs-16px pointer text-center block margin-center w-fit-content pointer`}
        style={{
          background: "var(--orange)",
          padding: "1rem 1.5rem",
          borderRadius: "10px",
        }}
      >
        Join US to register for presale
      </a>
    </div>
  );
}

export default KeyToUnlock;

// <p className="fs-20px white font-gilroy-light weight-3  mb-20px opacit-0_7">
//   We are obsessed with making the CRYPTOSTALLIONS NFTs a valuable
//   outcome for the Investors. CSC NFTs are all about utility and access
//   in a way that The Inherent value of the STALLIONS smart contract
//   should dramatically outpace the original investment made by you.
// </p>
// <p className="fs-20px white font-gilroy-light weight-3  mb-20px opacit-0_7">
//   The Cryptostallions NFTs Holders will benefit from Club membership,
//   funds, investments, VIP Tickets to concerts, green rooms, worldwide
//   events, activities and much more other Surprises.
// </p>
// <p className="fs-20px white font-gilroy-light weight-3  mb-40px opacit-0_7">
//   Join the Party on February the 28th.
// </p>
