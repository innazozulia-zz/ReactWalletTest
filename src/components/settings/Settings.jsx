import React from "react";
import User from "../mainPage/user/User";
import Navigation from "../mainPage/navigation/Navigation";

import style from "./Settings.module.scss";

const Settings = () => {
  return (
    <div className={style.settings__container}>
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
          <span className={style.settings__item}>Credit</span>
          <span className={style.settings__item}>Displaying cents</span>
          <span className={style.settings__item}>Installment plan</span>
          <span className={style.settings__item}>Limit management</span>
          <span className={style.settings__item}>Exchange Rates</span>
          <span className={style.settings__item}>Terms and Rates</span>
          <span className={style.settings__item}>Accumulation</span>
          <span className={style.settings__item}>Buy bonds</span>
        </div>
      </div>
    </div>
  );
};
export default Settings;
