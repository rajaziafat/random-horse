import React from "react";
import styles from "./Roadmap.module.css";
import dollar from "assets/images/dollar.png";
import useMediaQuery from "hooks/useMediaQuery";

const Card = ({ title, desc }) => {
  return (
    <div className="white text-center">
      <h1 className="fs-44px white font-gilroy-black mb-10px lh-1">{title}</h1>
      <h2 className="fs-14px font-gilroy-light weight-3 white opacity-0_7 lh-1_4 ">
        {desc}
      </h2>
    </div>
  );
};

function Roadmap() {
  const isBellow600 = useMediaQuery("(max-width: 600px)");

  return (
    <div className={styles.wrapper}>
      <div className="container-wrapper">
        <header
          className={`text-center ${isBellow600 ? "mb-60px" : "mb-70px"}`}
        >
          <h1 className="fs-40px font-gilroy-light weight-3 mb-5px lh-1 white">
            Sales Roadmap
          </h1>
          <h2 className="text-gradient fs-70px font-gilroy-black">
            Sales and Rewards
          </h2>
        </header>

        <main className={styles.roadmap}>
          <Card
            title="0%"
            desc="RELEASE THE HORSES. You can now register and apply for our whitelist. Be one of the first to get your hands on a Stallion."
          />
          <Card
            title="20%"
            desc="We ramp up our Discord and social media 
          management, which will include a pack of community managers 
          and moderators to bring our Cryptostallions community to the moon."
          />
          <Card
            title="30%"
            desc="Cryptostallions holders will be considered in a Giveaway to get $10.000.// Club funds, Charity and utility are missing"
          />
          <Card
            title="40%"
            desc="Cryptostallions Club kickoff. A dedicated Fund of $50.000 to support our valued community and drive its entrepreneurial spirit."
          />
          <Card
            title="60%"
            desc="1% of the OpenSea fees will go into the community grant forever! Building out the longevity and community is our #1 priority."
          />
          <Card
            title="80%"
            desc="The Cryptostallions Club will purchase several pieces of land and other assets in 
          Decentraland, Sandbox and other growing metaverses that are to be used for secondary marketing purposes and to collect rent 
          or marketing fees."
          />
          <Card
            title="100%"
            desc="1 SUV (Mustang mach E GT) for 1 NFT Holder. We will surprise our NFT Holders with 3 Main Surprises. And We are ready to ride with YOU: Our Development Roadmaps kicks in with:  
            - 3D Collection, An exciting Funny Play to Earn Game (P2E) and Merchandise..."
          />
          <img src={dollar} alt="" />
        </main>
      </div>
    </div>
  );
}

export default Roadmap;
