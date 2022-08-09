import React from "react";
import Navigation from "../mainPage/navigation/Navigation";
import User from "../mainPage/user/User";

import style from "./Help.module.scss";

const Help = () => {
  return (
    <div className={style.help__container}>
      <div className={style.side}>
        <User />
        <Navigation />
      </div>
      <div className={style.main}>
        <div className={style.logo__container}>
          <img className={style.logo} src="logo.png" alt="logo" />
          <p>Your Wallet</p>
        </div>
        <div className={style.main__content}>
          <span className={style.help__item}>Replenishment points</span>
          <span className={style.help__item}>To invite a friend</span>
          <span className={style.help__item}>Promotions</span>
          <span className={style.help__item}>Insurance</span>
          <span className={style.help__item}>Support</span>
          <span className={style.help__item}>Extracts</span>
          <span className={style.help__item}>References</span>
          <span className={style.help__item}>FAQ</span>
        </div>
      </div>
    </div>
  );
};

export default Help;
