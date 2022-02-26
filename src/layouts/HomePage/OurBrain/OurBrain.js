import React from "react";
import { FaInstagramSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import styles from "./OurBrain.module.css";

import teamImg1 from "assets/images/team-img-1.png";
import teamImg2 from "assets/images/team-img-2.png";
import teamImg3 from "assets/images/team-img-3.png";
import teamImg4 from "assets/images/team-img-4.png";
import teamImg5 from "assets/images/team-img-5.png";
import teamImg6 from "assets/images/team-img-6.png";
import teamImg7 from "assets/images/team-img-7.png";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

import SwiperCore, { Pagination, Navigation } from "swiper";
import useMediaQuery from "hooks/useMediaQuery";
SwiperCore.use([Navigation, Pagination]);

const TeamCard = ({ img, title, desc }) => {
  return (
    <div className={`${styles.teamCard} text-center`}>
      <img src={img} className="mb-20px" alt="" />

      <h1 className="fs-24px black font-gilroy-black lh-1 mb-5px uppercase">
        {title}
      </h1>
      <h2 className="fs-18px black opacity-0_5 mb-10px font-gilroy-light weight-3">
        {desc}
      </h2>

      <div className={styles.socialIcons}>
        <a href="#" className="black opacity-0_5">
          <FaTwitterSquare size={22} />
        </a>
        <a href="#" className="black opacity-0_5">
          <FaLinkedin size={22} />
        </a>
        <a href="#" className="black opacity-0_5">
          <FaInstagramSquare size={22} />
        </a>
      </div>
    </div>
  );
};

function OurBrain() {
  const isBellow = useMediaQuery("(max-width: 1200px)");
  const isBellow600 = useMediaQuery("(max-width: 600px)");

  return (
    <div className={styles.ourBrainWrapper}>
      <div className="container-wrapper py-100px">
        <section className="mb-100px">
          <header
            className={`text-center ${isBellow600 ? "mb-60px" : "mb-100px"}`}
          >
            <h1 className="black fs-40px font-gilroy-light weight-3 lh-1 mb-10px">
              OUR BRAIN
            </h1>
            <h1 className="black text-gradient font-gilroy-black fs-70px lh-1 uppercase">
              Awesome Team
            </h1>
               <p className="fs-20px font-gilroy-light mb-30px lh-1_4 gray">
            Learn more about our dedicated team. Please join our discord to get involved with the community and receive exclusive updates.
            
               </p>
          </header>

          <main className={styles.teamCards}>
            <TeamCard img={teamImg1} title="David Drake" desc="UI Designer" />
            <TeamCard img={teamImg2} title="David Drake" desc="UI Designer" />
            <TeamCard img={teamImg3} title="David Drake" desc="UI Designer" />
            <TeamCard img={teamImg4} title="David Drake" desc="UI Designer" />
            <TeamCard img={teamImg5} title="David Drake" desc="UI Designer" />
            <TeamCard img={teamImg6} title="David Drake" desc="UI Designer" />
            <TeamCard img={teamImg7} title="David Drake" desc="UI Designer" />
          </main>
        </section>

        <section>
          <header className="text-center mb-70px">
            <h1 className="black fs-40px font-gilroy-light weight-3 lh-1 mb-10px">
              FAMILY
            </h1>
            <h1 className="black text-gradient font-gilroy-black fs-70px lh-1 uppercase">
              Advisors
            </h1>
          </header>

          <Swiper
            spaceBetween={50}
            slidesPerView={4}
            pagination={isBellow ? true : false}
            className={isBellow ? "nftCollectionSwiper ghore" : ""}
            style={{ paddingBottom: isBellow ? "50px" : "" }}
            breakpoints={{
              1200: {
                spaceBetween: 50,
                slidesPerView: 4,
              },
              1000: {
                spaceBetween: 20,
                slidesPerView: 3,
              },
              700: {
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
              <div className={styles.advisorCard}>
                <TeamCard
                  img={teamImg1}
                  title="David Drake"
                  desc="UI Designer"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.advisorCard}>
                <TeamCard
                  img={teamImg1}
                  title="David Drake"
                  desc="UI Designer"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.advisorCard}>
                <TeamCard
                  img={teamImg1}
                  title="David Drake"
                  desc="UI Designer"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.advisorCard}>
                <TeamCard
                  img={teamImg1}
                  title="David Drake"
                  desc="UI Designer"
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </section>
      </div>
    </div>
  );
}

export default OurBrain;
