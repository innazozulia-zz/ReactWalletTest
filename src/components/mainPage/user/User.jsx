import React from "react";
import style from "./User.module.scss";

const User = () => {
  return (
    <div className={style.user__container}>
      <img className={style.user} src="user.jpeg" alt="user" />
      <p>John Doe</p>
    </div>
  );
};

export default User;
