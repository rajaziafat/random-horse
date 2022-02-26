import ImageMirrorEffect from "components/ImageMirrorEffect/ImageMirrorEffect";
import React, { useState } from "react";
import styles from "./PreSale.module.css";
import guestImg from "assets/images/guest-img.png";
import guestImg2 from "assets/images/guest-img-2.png";
import guestImg3 from "assets/images/guest-img-3.png";
import guestImg4 from "assets/images/guest-img-4.png";
import useMediaQuery from "hooks/useMediaQuery";

import img1 from "assets/images/beinghuman/1.png";
import img2 from "assets/images/beinghuman/2.png";
import img3 from "assets/images/beinghuman/3.png";

function PreSale() {
  const isBellow = useMediaQuery("(max-width: 1000px)");
  const isBellow600 = useMediaQuery("(max-width: 600px)");
  const [image, setImage] = useState(guestImg);

  return (
    <div className="container-wrapper">
      <div className={styles.section}>
        <div className={styles.section_left}>
          <div className={isBellow ? "mb-50px" : "mb-70px"}>
            <h1 className="text-gradient text-center fs-70px font-gilroy-black mb-25px lh-1">
              Golden Mustangs
            </h1>

            <p className="fs-20px font-gilroy-light weight-3 text-center white opacity-0_7 lh-1_4">
              The Golden Mustangs edition by the Cryptostallions Club are the
              rarest scarce NFTs. There are only 27 of them worldwide; 20 Of
              them are rare and 7 are super rare. They are all hand drawn and
              have no element in common with the regular collection.
            </p>
          </div>
          {isBellow ? (
            <div className="mb-50px">
              <div className={styles.gallery}>
                <div className={isBellow600 ? "mb-30px" : "mb-70px"}>
                  <ImageMirrorEffect
                    img={image}
                    style={{ marginRight: 0 }}
                    imgStyles={{ borderRadius: "2vw" }}
                  />
                </div>

                <div className={styles.galleryCards}>
                  <img
                    src={img3}
                    onClick={() => setImage(img3)}
                    className="w-full pointer"
                    alt=""
                  />
                  <img
                    src={img1}
                    onClick={() => setImage(img1)}
                    className="w-full pointer"
                    alt=""
                  />
                  <img
                    src={img2}
                    onClick={() => setImage(img2)}
                    className="w-full pointer"
                    alt=""
                  />
                </div>
              </div>
            </div>
          ) : (
            ""
          )}

          {/* <p className="text-center uppercase font-gilroy-light weight-3 fs-40px white mb-20px">
            Time For Presale
          </p>

          <div className="mb-30px">
            <input
              type="text"
              placeholder="Enter your email or code"
              className="fs-20px font-gilroy-light weight-3 gray"
            />
          </div> */}

          <button className="uppercase font-gilroy-black white fs-20px text-center block margin-center w-fit-content pointer">
           <a href="https://discord.com/invite/CmGu4UcX" target="_blank">  Join Discord </a>
          </button>
        </div>

        {isBellow ? (
          ""
        ) : (
          <div className={styles.section_right}>
            <div className={styles.gallery}>
              <div className="mb-70px">
                <ImageMirrorEffect
                  img={image}
                  style={{ marginRight: 0 }}
                  imgStyles={{ borderRadius: "2vw" }}
                />
              </div>

              <div className={styles.galleryCards}>
                <img
                  src={img3}
                  onClick={() => setImage(img3)}
                  className="w-full pointer"
                  alt=""
                />
                <img
                  src={img1}
                  onClick={() => setImage(img1)}
                  className="w-full pointer"
                  alt=""
                />
                <img
                  src={img2}
                  onClick={() => setImage(img2)}
                  className="w-full pointer"
                  alt=""
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default PreSale;
