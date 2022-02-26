import React, { useRef } from "react";
import styles from "./NFTS.module.css";

import { HiOutlineArrowSmRight, HiOutlineArrowSmLeft } from "react-icons/hi";

import nft1 from "assets/images/nft-1.png";
import nft2 from "assets/images/nft-2.png";
import nft3 from "assets/images/nft-3.png";
import nft4 from "assets/images/nft-4.png";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

import SwiperCore, { Pagination, Navigation } from "swiper";
import useMediaQuery from "hooks/useMediaQuery";
SwiperCore.use([Navigation, Pagination]);

function NFTS() {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  const isBellow = useMediaQuery("(max-width: 1000px)");
  const isBellow600 = useMediaQuery("(max-width: 600px)");

  return (
    <div className={styles.wrapper}>
      <div className="container-wrapper py-100px">
        <h1
          className={`text-center text-gradient fs-70px font-gilroy-black ${
            isBellow ? "mb-40px" : "mb-70px"
          }`}
        >
          OUR NFT’s
        </h1>

        <div className={styles.nftSlider}>
          {isBellow600 ? (
            ""
          ) : (
            <button className="pointer lh-1" ref={navigationPrevRef}>
              <HiOutlineArrowSmLeft size={28} />
            </button>
          )}
          <Swiper
            spaceBetween={50}
            slidesPerView={4}
            pagination={{
              clickable: true,
            }}
            navigation={{
              prevEl: navigationPrevRef.current,
              nextEl: navigationNextRef.current,
            }}
            style={{ paddingBottom: isBellow ? "50px" : "100px" }}
            onSwiper={(swiper) => {
              setTimeout(() => {
                swiper.params.navigation.prevEl = navigationPrevRef.current;
                swiper.params.navigation.nextEl = navigationNextRef.current;
                swiper.navigation.init();
                swiper.navigation.update();
              });
            }}
            className="nftCollectionSwiper"
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
                slidesPerView: 2,
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
              <img src={nft1} className="w-full" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={nft2} className="w-full" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={nft3} className="w-full" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={nft4} className="w-full" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={nft1} className="w-full" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={nft2} className="w-full" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={nft3} className="w-full" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={nft4} className="w-full" alt="" />
            </SwiperSlide>
          </Swiper>
          {isBellow600 ? (
            ""
          ) : (
            <button className="pointer lh-1" ref={navigationNextRef}>
              <HiOutlineArrowSmRight size={28} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default NFTS;
