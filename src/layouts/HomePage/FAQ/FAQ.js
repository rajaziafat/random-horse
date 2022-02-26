import Accordion from "components/Accordion/Accordion";
import useMediaQuery from "hooks/useMediaQuery";
import React from "react";
import styles from "./FAQ.module.css";

function FAQ() {
  const isBellow600 = useMediaQuery("(max-width: 500px)");

  return (
    <div className={styles.faqWrapper}>
      <div className="container-wrapper">
        <header
          className={`text-center ${isBellow600 ? "mb-60px" : "mb-100px"}`}
        >
          <h1 className="white fs-40px font-gilroy-light weight-3 lh-1 mb-10px">
            FAQ
          </h1>
          <h1 className=" text-gradient font-gilroy-black fs-70px lh-1 uppercase">
            FREQUENTLY ASKED <br /> QUESTIONS
          </h1>
        </header>

        <main className={`${styles.faqs} mb-100px`}>
        <Accordion
            question="WHAT IS AN NFT?"
            answer="Non-fungible tokens, or NFTs, are digital assets that are provably unique. They can be used to represent both tangible and intangible items.
            Non-fungible tokens (NFTs) are cryptographically unique tokens that are linked to digital (and sometimes physical) content, providing proof of ownership. They have 
            many use cases, including artwork, digital collectibles, music, and items in video games."
          />
          <Accordion
            question="HOW DO I MINT/BUY A CRYPTOSTALLION NFT?"
            answer="First, you need to have an ETH wallet and transfer ETH into it. You can use various exchanges such as Binance and Coinbase to buy ETH. 
            And you can use Metamask to create an ETH wallet. 
            Then you can transfer ETH from exchange to your MetaMask address if you don’t already have ETH in it.
            Download the MetaMask extension to your computer:
            https://blog.wetrust.io/how-to-install-and-use-metamask-7210720ca047
            and then connect your wallet.
            On the day of minting, click ‘Mint’ on our website, connect to your MetaMask wallet and complete the transaction. 
            Reach out to us on Discord if you have questions!"
          />
           <Accordion
            question="OPEN => When and how can I sign up for the Cryptostallions NFT Presale?"
            answer="You can enter the raffle through our website between March 16 2022, 3pm EST to March 17 2022, 3pm EST. 
            Whitelist Raffle will be drawn on March 19 2022, 3pm EST. 1000 addresses will get a whitelist spot to mint 2 NFTs during presale."
          />


           <Accordion
            question="OPEN=> When can I get the Cryptostallions NFT?"
            answer="Presale: March 19 2022, 3PM EST - March 20 2022, 3PM EST.
            Once the presale is over, public minting will be open.
            
            Public minting: March 20 2021, 3PM EST
            Any unused whitelist spots and 500+ NFTs will be available for public minting."
          />
         
          <Accordion
            question="Where can i view my nfts?"
            answer="Once minted, simply connect to your OpenSea account to view your NFTs."
          />
          <Accordion
            question="How many STALLIONS are there in the collection"
            answer="Only 7676 Cryptostallions Worldwide"
          />

          <Accordion
            question="OPEN: What is the price to mint a Cryptostallions NFT?"
            answer="Dutch Auction or fix price 0.088 ETH.????"
          />

           <Accordion
            question="OPEN: What can I expect from the Alpha-Chat
            channel on the Cryptostallions Club Discord?"
            answer="On top of being a part of an amazing community, you’ll get curated crypto & NFT news, crypto & NFT analytics/analysis 
            from experts, and a curated multi-chain NFT drop calendar. This means you’ll be on top of the latest information in the NFT 
            and crypto space. It’s up to you to use the information wisely for your personal and portfolio development. :)"
          />
          <Accordion
            question="OPEN: How will you distribute
            the Cryptostallions NFTs?"
            answer="22% of the WL spaces will be distributed after a raffle draw.
            45% Whitelist Minting. There will be 2 different kinds of whitelists…
            There will be a total of 500 VIP Whitelists who will be able to mint 4 NFTs. 
            There will also be 2000 whitelist spots which will be able to mint 2 NFTs. 
            Whitelists can be combinable up to 20 NFTs / address.
            23% will raffle 1000 addresses and raffle which can be entered via connecting your MetaMask to our website. 
            Can be entered for 24 hours starting from November 18th 2021 at 3pm EST.
            6% + any unused whitelist reserves will be open for public minting. Each wallet address will be able to mint 20 including their whitelists. Whitelists can be combined to add up to 20 for each address.
            4% will be reserved for team and marketing."
          /> 
          <Accordion
            question="HOW CAN I USE MY NFT??"
            answer="You will be able to use your NFT as an avatar in the metaverse and our future Play to Earn game."
          />
         <Accordion
            question="What is metaverse?"
            answer="The Metaverse refers to a shared virtual experience where land, avatars and names can be bought and sold, often using cryptocurrency. The future phases in the Billionaire club's roadmap will allow you to join this Metaverse using the assets you own."
          />
          <Accordion
            question="What are the golden Mustangs?"
            answer="The Golden Mustangs are the rarest NFTs of the Cryptostallions Club. Holding one of them (by lucky mint or through secondary market) opens the doors to many advantages and rewards. They will also be considered as VIP members of the community."
          />
          <Accordion
            question="Why do we need royalties?"
            answer="The amount of royalties was fixed at 10% to finance the Cryptostallions Club. We have the ambition to organize multiple events around the world in order to strengthen the community and build a network of entrepreneurs and investors with the same mindset and common interests. 
            The funds collected will benefit the holders. This percentage can decrease over time."
          />
          <Accordion
            question="why did you choose Stallions?"
            answer="When we created the Billionaire Club, the team was looking for a realistic way to embody human features. After many discussions, we ended up agreeing on the fact that there was no better and smarter creature than the one pointed by Darwin's theory as being the human ancestor : the ape."
          />
            </main>

        <form action="" className={styles.form}>
          <h1 className="text-center fs-40px font-gilroy-light weight-3 uppercase white">
          Subscribe to our Newsletter
          </h1>

          <input
            type="text"
            placeholder="Name"
            className="block fs-20px gray font-gilroy-light weight-3"
          />
          <input
            type="text"
            placeholder="Email"
            className="block fs-20px gray font-gilroy-light weight-3"
          />
          <button className="block fs-20px font-gilroy-black white pointer uppercase">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default FAQ;
