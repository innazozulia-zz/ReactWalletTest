import React from "react";
import style from "./SendMoney.module.scss";

const SendMoney = ({ image, userName }) => {
  return (
    <div className={style.container}>
      <img className={style.user__cover} src={image} alt="friends" />
      <div className={style.user__name}>{userName}</div>
    </div>
  );
};

export default SendMoney;
