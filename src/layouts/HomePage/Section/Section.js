import React from "react";
import styles from "./Section.module.css";
import welcomeImg from "assets/images/welcome-img.png";
import Image from "components/ImageMirrorEffect/ImageMirrorEffect";
import useMediaQuery from "hooks/useMediaQuery";

function Section() {
  const isBellowThousand = useMediaQuery("(max-width: 1000px)");
  const isBellowSix100 = useMediaQuery("(max-width: 600px)");

  return (
    <div className="container-wrapper">
      <div className={`${styles.section} horse_section`}>
        {isBellowThousand ? (
          ""
        ) : (
          <div className={styles.section_left}>
            <Image img={welcomeImg} />
          </div>
        )}
        <div className={styles.section_right}>
          <h5 className="fs-40px white font-gilroy-light uppercase mb-15px">
            Welcome to the
          </h5>
          <h1 className="fs-60px white font-gilroy-bold uppercase mb-30px lh-1">
            <span className="text-gradient font-gilroy-bold uppercase">
              Cryptostallions
            </span>{" "}
            Club (CSC)
          </h1>

          {isBellowThousand ? (
            <Image
              img={welcomeImg}
              style={{
                width: "100%",
                maxWidth: "400px",
                margin: "0 auto",
                marginTop: isBellowSix100 ? "30px" : "50px",
                marginBottom: isBellowSix100 ? "30px" : "70px",
              }}
            />
          ) : (
            ""
          )}

          <p className="fs-20px font-gilroy-light mb-30px lh-1_4 gray">
            Cryptostallions is a delightful, private and scarce 2D art and
            collectibles with an initial drop of 7676 unique NFTs on the
            Ethereum network.
          </p>
          <p className="fs-20px font-gilroy-light mb-30px lh-1_4 gray">
            The project believes in using art and NFTs to help as many people to
            make their financial freedom dream come true.
          </p>
          <p className="fs-20px font-gilroy-light mb-30px lh-1_4 gray">
            How: Crypto/NFT technology, NFT Business and Education is our
            Mission. Cryptostallions team works on community driven Projects
            with profits being shared by the community. In our Club we make
            business, learn, play and celebrate together.
          </p>
          <p className="fs-20px font-gilroy-light mb-30px lh-1_4 gray">
            Created by Kastar and Naskalabs, a renowned artist based in
            Switzerland/Indonesia. The team behind Cryptostallions has more than
            a decade of experience working with clients like Mercedes Benz,
            Samsung, Nokia, etc… Which we would like to leverage now in our
            NFT/Crypto projects.
          </p>
          <p className="fs-20px font-gilroy-light mb-50px lh-1_4 gray">
            Join an ambitious ever-growing community of successful investors
            with NFTs having multiple utilities and benefits.
          </p>

          <button className="orange-button uppercase font-gilroy-black white fs-20px text-center w-fit-content pointer">
          <a href="https://discord.com/invite/CmGu4UcX" target="_blank">  Join Discord </a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Section;
