import React, { useEffect, useRef, useState } from "react";
import styles from "./CountdownTimer.module.css";
import { FaPlus } from "react-icons/fa";
import { TiMinus } from "react-icons/ti";
import useMediaQuery from "hooks/useMediaQuery";

const Counter = ({ count, title }) => {
  return (
    <div className={styles.counterParent}>
      <div className={`${styles.counter} `}>
        <div
          className={`${styles.counter_count} bg-gradient fs-46px black text-center font-gilroy-black mb-10px`}
        >
          {count}
        </div>
        <p className="fs-24px white font-gilroy-light text-center">{title}</p>
      </div>
      <p className="white fs-50px weight-8">:</p>
    </div>
  );
};

function CountdownTimer() {
  const isBellow = useMediaQuery("(max-width: 500px)");

  const [counter, setCounter] = useState(1);
  const [deadline, setDeadline] = useState("Feb 28, 2022 00:00:00");

  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");
  let interval = useRef();

  const startTimer = () => {
    const countdownDate = new Date(deadline).getTime();
    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      if (distance < 0) {
        // stop our timer
        clearInterval(interval.current);
      } else {
        // update timer
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    });
  };
  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  });

  return (
    <div className="container-wrapper py-100px">
      <div className={styles.wrapper}>
        <button
          className={`${styles.connectWalletBtn} mb-30px fs-20px white font-gilroy-bold pointer text-center uppercase bg-gradient`}
        >
          Connect Wallet (Soon)
        </button>

        <p className="fs-50px font-gilroy-bold uppercase mb-50px white">
          FEBRUARY 28ST, 3PM EST
        </p>

        <div className={`${styles.counterWrapper} mb-50px`}>
          <Counter count={timerDays} title="Days" />
          <Counter count={timerHours} title={isBellow ? "Hrs" : "Hours"} />
          <Counter count={timerMinutes} title={isBellow ? "Min" : "Minutes"} />
          <Counter count={timerSeconds} title={isBellow ? "Sec" : `Seconds`} />
        </div>

        <div className={`${styles.btns} mb-50px`}>
          <div
            className={`${styles.itemsAvailable} fs-30px font-gilroy-bold text-center white mb-15px `}
          >
            {counter}/10000
          </div>

          <button className="fs-20px font-gilroy-bold white text-center bg-orange block pointer w-full uppercase mb-15px">
            whitelist mint (max1)
          </button>
          <button className="fs-20px font-gilroy-bold white text-center bg-orange block pointer w-full uppercase">
            mint
          </button>
        </div>

        <div className={styles.counterTimer}>
          <button
            className="white pointer"
            onClick={() => setCounter(counter <= 1 ? counter : counter - 1)}
          >
            <TiMinus size={30} />
          </button>
          <div className="fs-30px font-gilroy-bold text-center white">
            {counter}
          </div>
          <button
            className="white pointer"
            onClick={() => setCounter(counter + 1)}
          >
            <FaPlus size={30} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default CountdownTimer;
