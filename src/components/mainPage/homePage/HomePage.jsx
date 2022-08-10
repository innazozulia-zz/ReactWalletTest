import React from "react";
import Navigation from "../navigation/Navigation";
import User from "../user/User";
import sendMoney from "../../../assets/sendMoney";
import SendMoney from "../sendMoney/SendMoney";
import Services from "../services/Services";
import axios from "axios";

import style from "./HomePage.module.scss";

const HomePage = () => {
  const [card, setCard] = React.useState([]);
  React.useEffect(() => {
    axios
      .get("https://62f2327f18493ca21f2e67ff.mockapi.io/card")
      .then(function (response) {
        setCard(response.data);
        console.log(response.data);
      });
  }, []);
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
          <h5 className={style.review__title}>Amound overview</h5>
          {card.map((item) => (
            <div key={item.id}>
              {item.name}: {item.balance}
              {item.currency}
            </div>
          ))}
          <div className={style.totalCardsUah}></div>
          <div className={style.totalCardsUsd}></div>
          <div className={style.myCards}>
            {/* <ul>
              <li> balance={item.balance}</li>
            </ul> */}
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
