import React from "react";
import Navigation from "../navigation/Navigation";
import User from "../user/User";
import sendMoney from "../../../assets/sendMoney";
import SendMoney from "../sendMoney/SendMoney";
import Services from "../services/Services";

import style from "./HomePage.module.scss";

const HomePage = () => {
  return (
    <div className={style.main__container}>
      <div className={style.side}>
        <User />
        <Navigation />
      </div>
      <div className={style.main}>
        <div className={style.logo__container}>
          <img className={style.logo} src="logo.png" alt="logo" />
          <p>Your Wallet</p>
        </div>
        <div className={style.review}>
          <h5>Amound overview</h5>
          <div className={style.totalCardsUah}></div>
          <div className={style.totalCardsUsd}></div>
          <div className={style.myCards}>
            <ul>
              <li>vard one</li>
            </ul>
          </div>
        </div>
        <div className={style.sendMoney}>
          <div className={style.senMoneyItem}>
            {sendMoney.map((user) => (
              <SendMoney
                key={user.id}
                image={user.image}
                userName={user.name}
              />
            ))}
          </div>
        </div>
        <div className={style.services}>
          <Services />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
