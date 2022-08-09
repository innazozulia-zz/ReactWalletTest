import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import style from "./SignIn.module.scss";

const SignIn = () => {
  let date = new Date();
  let dayWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ][date.getDay()];

  return (
    <div className={style.container}>
      <div className={style.side}>
        <div className={style.signIn__cover}>
          <img
            className={style.signIn__cover}
            src="img/signIn/item-2.jpg"
            alt="background"
          />
        </div>
      </div>
      <div className={style.main}>
        <div className={style.date}>
          <h2 className={style.date__string}>
            {moment().format("DD.MM.YYYY hh:mm")}
          </h2>
          <h2 className={style.dayWeek}>{dayWeek}</h2>
        </div>
        <div className={style.description}>
          <img src="logo.png" alt="logo" className={style.logo} />
          <p>Your Wallet</p>
          <p>Digital Solutions Instant Payouts</p>
        </div>
        <div className={style.signIn__btn}>
          <Link className={style.link} to="/homepage">
            <button className={style.btn}>
              Sign in
              <BsArrowRight className={style.icon} />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
