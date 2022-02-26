import React, { useEffect, useRef, useState } from "react";
import styles from "./DevelopmentRoadmap.module.css";
import roadmapRoad from "assets/images/roadmap-road.png";
import roadmapRoad2 from "assets/images/roadmap-road-2.png";

import roadmapbar from "assets/images/roadmap-bar.png";
import roadmapbarcircle from "assets/images/roadmap-bar-circle.png";

const RoadmapCard = ({ title, desc }) => {
  return (
    <div className={`${styles.roadmapCard} text-center`}>
      <div className={styles.roadmapBar}>
        <img src={roadmapbar} alt="" />
        <img src={roadmapbarcircle} alt="" />
      </div>
      <h1
        className={`${styles.cardTitle} fs-30px font-gilroy-black white lh-1 mb-20px`}
      >
        {title}
      </h1>
      <p className="fs-18px font-gilroy-light weight-3 lh-1_6 white opacity-0_7">
        {desc}
      </p>
    </div>
  );
};

function DevelopmentRoadmap() {
  const roadmap = useRef(null);
  const roadmapLine = useRef(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const handler = () => {
      let a = window.scrollY - roadmap.current.offsetTop;
      let value = a + window.innerHeight / 2;
      setValue(value);
    };

    window.addEventListener("scroll", handler);

    return () => {
      window.removeEventListener("scroll", handler);
    };
  });

  return (
    <div className="container-wrapper">
      <header className="text-center mb-70px">
        <h1 className="fs-40px font-gilroy-light weight-3 mb-5px lh-1 white">
        Our Development Growth Plan
        </h1>
        <h2 className="text-gradient fs-70px font-gilroy-black">
          Development Roadmap
        </h2>
      </header>

      {/* <main className={styles.cards}>
        <img src={roadmapRoad} className={styles.road} alt="" />
        <RoadmapCard
          title="June 2017"
          desc="Pacific argentine. Lined sole masu salmon wolffish cutthroat trout mustard eel huchen, sea toad grenadier madtom yellow moray Shingle Fish wrymouth giant"
        />
        <RoadmapCard
          title="June 2017"
          desc="Pacific argentine. Lined sole masu salmon wolffish cutthroat trout mustard eel huchen, sea toad grenadier madtom yellow moray Shingle Fish wrymouth giant"
        />
        <RoadmapCard
          title="June 2017"
          desc="Pacific argentine. Lined sole masu salmon wolffish cutthroat trout mustard eel huchen, sea toad grenadier madtom yellow moray Shingle Fish wrymouth giant"
        />
        <RoadmapCard
          title="June 2017"
          desc="Pacific argentine. Lined sole masu salmon wolffish cutthroat trout mustard eel huchen, sea toad grenadier madtom yellow moray Shingle Fish wrymouth giant"
        />
        <RoadmapCard
          title="June 2017"
          desc="Pacific argentine. Lined sole masu salmon wolffish cutthroat trout mustard eel huchen, sea toad grenadier madtom yellow moray Shingle Fish wrymouth giant"
        />
        <RoadmapCard
          title="June 2017"
          desc="Pacific argentine. Lined sole masu salmon wolffish cutthroat trout mustard eel huchen, sea toad grenadier madtom yellow moray Shingle Fish wrymouth giant"
        />
      </main> */}

      <main className={styles.cards_2} ref={roadmap}>
      <RoadmapCard
      /* title="100 % Soldout"
          desc="Staking Pool will be launched 2-3 weeks after 100% Soldout. You will be able to 
          stake your NFT and in return you will gain our utility token $CRYST.
          Companion NFT will be dropped. 
          (Every Cryptostallions lover that is holding a Cryptostallion down 
            the road will get a companion NFT for free)*/
          title="100 % Soldout"
          desc="Planning and Pre_Production of Cryptostallions Play To Earn (P2E) Game 🚀🚀."
        />
         <RoadmapCard
          title="2022 Q2"
          desc="Launch of Cryptostallions 3D collection. Every Cryptostallions lover that is holding a Cryptostallion down 
          the road for 4 Months will get a Cryptostallion 3D NFT for free."
          
        />

        <RoadmapCard
          title="2022 Q3"
          desc=" Production and Testing of the Cryptostallions P2E Game."
        />
        
        <RoadmapCard
          title="2022 Q4"
          desc=" Pre_Launch (Alpha and Beta Versions) of the Cryptostallions P2E Game. Leaderboard contests will open 2 weeks after 
          the game launches with a starting prize pool of $25.000 getting distributed over the top 3 players."
        />
       
         <RoadmapCard
          title="2023 Q1"
          desc="Launch of the Cryptostallions P2E Game. The rest of the fate of this project will be determined by YOU, the community! Together, we plan to make this 
          an ultra strong, fun loving, community! Let’s kick some butt! Finally, there is a lot being discussed about potential partnerships and future developments of the project."
        />
       
        
        <div className={styles.road_2}>
          <div
            className={styles.road_line}
            style={{ height: value + "px" }}
            ref={roadmapLine}
          ></div>
        </div>
      </main>
    </div>
  );
}

export default DevelopmentRoadmap;
