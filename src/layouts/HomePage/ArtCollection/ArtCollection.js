import React from "react";
import styles from "./ArtCollection.module.css";
import artImg1 from "assets/images/art-img-1.png";
import artImg2 from "assets/images/art-img-2.png";
import artImg3 from "assets/images/art-img-3.png";
import artImg4 from "assets/images/art-img-4.png";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

import SwiperCore, { Pagination, Navigation } from "swiper";
import useMediaQuery from "hooks/useMediaQuery";
SwiperCore.use([Navigation, Pagination]);

const Card = ({ img, title }) => {
  return (
    <div className="flip-card">
      <img src={img} className="w-full" alt="" />
      <div className="flip-card-inner">
        <div className={`flip-card-front`}>
          <div className={`${styles.imgNftCard}`}>
            <p className="black font-gilroy-extrabold fs-20px uppercase">
              {title}
            </p>
            <img src={img} className="w-full" alt="" />
          </div>
        </div>
        <div className="flip-card-back bg-gradient">
          <p className="black font-gilroy-extrabold fs-24px uppercase">
            {title}
          </p>
        </div>
      </div>
    </div>
  );
};

function ArtCollection() {
  const isBellow = useMediaQuery("(max-width: 500px)");

  return (
    <div className="container-wrapper">
      <div className={styles.wrapper}>
        <div className="mb-60px">
          <div className={`${styles.header} text-center`}>
            <h1 className="font-gilroy-black uppercase text-center fs-70px text-gradient lh-1 mb-15px">
              Exclusive Club for an exclusive Community
            </h1>
            <h2 className="fs-40px font-gilroy-light weight-3 text-center white uppercase">
              The STALLIONS Club
            </h2>
          </div>
        </div>

        <div className={`mb-50px`}>
          <Swiper
            spaceBetween={50}
            slidesPerView={4}
            pagination={{
              clickable: true,
            }}
            className={isBellow ? "nftCollectionSwiper" : "nftArtCollection"}
            style={{ paddingBottom: isBellow ? "50px" : "" }}
            breakpoints={{
              1000: {
                spaceBetween: 50,
                slidesPerView: 4,
              },
              700: {
                spaceBetween: 20,
                slidesPerView: 4,
              },
              500: {
                spaceBetween: 20,
                slidesPerView: 3,
              },
              450: {
                spaceBetween: 20,
                slidesPerView: 2,
              },
              200: {
                spaceBetween: 20,
                slidesPerView: 1,
              },
            }}
          >
            <SwiperSlide>
              <Card title="Businessman" img={artImg4} />
            </SwiperSlide>
            <SwiperSlide>
              <Card title="Learner" img={artImg3} />
            </SwiperSlide>
            <SwiperSlide>
              <Card title="GAmer" img={artImg1} />
            </SwiperSlide>
            <SwiperSlide>
              <Card title="Party Hero" img={artImg2} />
            </SwiperSlide>
          </Swiper>
        </div>

        <footer>
          <p className="text-center fs-20px white  font-gilroy-light weight-3  opacit-0_5 lh-1_4">
            Our Goal is to create the leading global community of Crypto & NFT
            Investors.
            <p className="text-center fs-20px white  font-gilroy-light weight-3  opacit-0_5 lh-1_4"></p>
            The CRYPTOSTALLIONS Club is exclusively made for the most
            influential people of our planet, who dream big, believe and are
            passionate in/about the future of Crypto, collectables, NFTs, gaming
            and the Metaverse.
          </p>
          <p className="text-center fs-20px white  font-gilroy-light weight-3  opacit-0_5 lh-1_4">
            Join us to the CSC Party and be part of this amazing ambicious
            community!
          </p>
        </footer>
      </div>
    </div>
  );
}

export default ArtCollection;
