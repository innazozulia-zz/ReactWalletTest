import React from "react";
import { Link } from "react-router-dom";
import style from "./Navigation.module.scss";

const Navigation = () => {
  return (
    <div className={style.navigation}>
      <Link className={style.link} to="/card">
        My Cards
      </Link>
      <Link className={style.link} to="/total">
        Total
      </Link>
      <Link className={style.link} to="/addcard">
        Add Card
      </Link>
      <Link className={style.link} to="/settings">
        Settings
      </Link>
      <Link className={style.link} to="/help">
        Help
      </Link>
    </div>
  );
};

export default Navigation;
