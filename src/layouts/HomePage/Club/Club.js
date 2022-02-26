import React from "react";
import styles from "./Club.module.css";
import lightIcon from "assets/images/light.png";
import giftIcon from "assets/images/gift.png";
import timeIcon from "assets/images/time.png";
import collectiveIcon from "assets/images/collective.png";
import communityIcon from "assets/images/community.png";
import holderIcon from "assets/images/holder.png";
import useMediaQuery from "hooks/useMediaQuery";

const Card = ({ img, title, desc }) => {
  return (
    <div className={`${styles.card} text-center`}>
      <div className="mb-30px">
        <div
          className={`${styles.cardIcon} margin-center bg-gradient w-fit-content`}
        >
          <img src={img} alt="" />
        </div>
      </div>
      <p className="fs-24px white font-gilroy-bold mb-20px lh-1">{title}</p>
      <p className="fs-18px lh-1_7 white opacity-0_7 font-gilroy-light weight-3">
        {desc}
      </p>
    </div>
  );
};

function Club() {
  const isBellow600 = useMediaQuery("(max-width: 600px)");

  return (
    <div className="container-wrapper">
      <header className={`text-center ${isBellow600 ? "mb-40px" : "mb-70px"}`}>
        <h1 className="fs-40px font-gilroy-light weight-3 mb-5px lh-1 white">
        {/* EXCLUSIVE CLUB FOR AN EXCLUSIVE COMMUNITY */}

        </h1>
        <h2 className="text-gradient fs-70px font-gilroy-black">THE STALLIONS CLUB</h2>
      </header>

      <main className={`${styles.cards} mb-100px`}>
         <Card
          img={holderIcon}
          title="MONTHLY AND ANNUAL REWARDS"
          desc=" The 
          profit earned from thee Cryptostallions Club investments will be pooled together and Cryptostallions Club 
          will distribute a reflective/mirrored gift, to reward our holders which grow over Time.
          Being part of the Stallions Club will give you also the right to an 
          annual bonus based on the number of NFTs (from our collection) you possess."
        />
        <Card
          img={lightIcon}
          title="VALUE CLUB"
          desc="Once we sell out, all of our holders will have access to private business development circles in these 3 following fields: 
          Crypto - NFT and Entrepreneurship. Theses clubs will be led and hosted by moguls, 
          experienced speakers and well-known entrepreneurs."
        />
        <Card
          img={giftIcon}
          title="WORLDWIDE EVENTS"
          desc="Our NFT Holders will benefit from Hotel stays and Tickets for the most prestigious polo events and horse races worldwide. The US Open Polo Championship, 
          Paris Longchamp in France, Royal Ascot in England and The Dubai World Cup (Arabic: كأس دبي العالمي) at the Meydan Racecourse are 
          our Desinations."
        />
        
        {/* <Card
          img={collectiveIcon}
          title="EVOLUTION OF THE RANKS"
          desc="Make your voice heard. Being an active member of the community will allow 
          you to work your way up and have a bigger power of decision through votes and surveys."
        /> */}
        
        {/* <Card
          img={communityIcon}
          title="HUGE COLLABORATIONS"
          desc="We will set up partnerships with other projects, artists and key opinion leaders. 
          You will get the chance to be part of the creative process behind these future collaborations."
        /> */}
        
      </main>

      <footer>
        <button
          className={`${styles.footerBtn} fs-20px white font-gilroy-bold uppercase pointer margin-center block w-fit-content`}
        >
          Join us to register for presale
        </button>
      </footer>
    </div>
  );
}

export default Club;
