import React, { useRef, useState } from "react";
import styles from "./Accordion.module.css";
import { BiChevronDown } from "react-icons/bi";

function Accordion({ question, answer }) {
  const [open, setOpen] = useState(false);
  const accordionBodyRef = useRef(null);

  const toggler = () => {
    if (accordionBodyRef.current.clientHeight === 0) {
      accordionBodyRef.current.style.height =
        accordionBodyRef.current.scrollHeight + "px";
      setOpen(true);
    } else {
      accordionBodyRef.current.style.height = 0 + "px";
      setOpen(false);
    }
  };

  return (
    <div
      className={`${styles.accordion} accordion___ ${open ? styles.open : ""}`}
    >
      <div className={styles.accordionBtn} onClick={toggler}>
        <p className="fs-20px white font-gilroy-bold uppercase">{question}</p>{" "}
        <span className="flex">
          <BiChevronDown size={35} color="white" />
        </span>
      </div>

      <div className={styles.acordionBodyWrapper} ref={accordionBodyRef}>
        <div className={styles.acordionBody}>
          <p className="fs-18px gray font-gilroy-light weight-3 lh-1_5">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Accordion;
