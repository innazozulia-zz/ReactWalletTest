import React from "react";
import { Link } from "react-router-dom";
import style from "./User.module.scss";

const User = () => {
  return (
    <div className={style.user__container}>
      <Link className={style.link} to="/homepage">
        <img className={style.user} src="user.jpeg" alt="user" />
        <p className={style.user__name}>John Doe</p>
      </Link>
    </div>
  );
};

export default User;
