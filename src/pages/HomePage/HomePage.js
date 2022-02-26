import Footer from "layouts/Footer/Footer";
import ArtCollection from "layouts/HomePage/ArtCollection/ArtCollection";
import CountdownTimer from "layouts/HomePage/CountdownTimer/CountdownTimer";
import DevelopmentRoadmap from "layouts/HomePage/DevelopmentRoadmap/DevelopmentRoadmap";
import FAQ from "layouts/HomePage/FAQ/FAQ";
import Hero from "layouts/HomePage/Hero/Hero";
import KeyToUnlock from "layouts/HomePage/KeyToUnlock/KeyToUnlock";
import NFTS from "layouts/HomePage/NFTS/NFTS";
import OurBrain from "layouts/HomePage/OurBrain/OurBrain";
import Partners from "layouts/HomePage/Partners/Partners";
import PreSale from "layouts/HomePage/PreSale/PreSale";
import Section from "layouts/HomePage/Section/Section";
import Values from "layouts/HomePage/Values/Values";
import Club from "layouts/HomePage/Club/Club";
import Roadmap from "layouts/HomePage/Roadmap/Roadmap";
import React from "react";
import styles from "./HomePage.module.css";
import Navbar from "layouts/Navbar/Navbar";

function HomePage() {
  return (
    <div>
      <Navbar />
      <div id="home" className="mb-150px">
        <Hero />
      </div>
      {/* <div className="mb-50px">
        <CountdownTimer />
      </div> */}

      <div id="why">
        <div className="mb-100px">
          <Section />
        </div>

        <div className="mb-150px">
          <KeyToUnlock />
        </div>
      </div>
      <div id="exclusive-club">
        <div className="mb-150px">
          <ArtCollection />
        </div>
        <div className="mb-100px">
          <Club />
        </div>
        <div className="mb-150px">
          <PreSale />
        </div>
      </div>
      <div className="mb-150px" id="nfts">
        <NFTS />
      </div>
      <div className="mb-150px" id="roadmap">
        <Roadmap />
      </div>
      <div className="mb-150px" id="developmentRoadmap">
        <DevelopmentRoadmap />
      </div>
      <div className="mb-100px" id="facts">
        <Values />
      </div>
      <div className="mb-100px" id="team">
        <OurBrain />
      </div>
      <div className="mb-150px" id="partners">
        <Partners />
      </div>
      <div className="mb-150px" id="faq">
        <FAQ />
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
