import React from "react";

import { FaRegMoneyBillAlt } from "react-icons/fa";
import { GiMoneyStack, GiElectric } from "react-icons/gi";
import { GoDeviceMobile } from "react-icons/go";
import { MdCached, MdOutlineLocalOffer, MdFlight } from "react-icons/md";
import { BiCameraMovie } from "react-icons/bi";

import style from "./Services.module.scss";
const Services = () => {
  return (
    <>
      <div className={style.services__item}>
        <FaRegMoneyBillAlt className={style.services__icon} />
        <span className={style.services__text}>Send money</span>
      </div>
      <div className={style.services__item}>
        <GiMoneyStack className={style.services__icon} />
        <span className={style.services__text}>Receive Money</span>
      </div>
      <div className={style.services__item}>
        <GoDeviceMobile className={style.services__icon} />
        <span className={style.services__text}>Mobile Prepaid</span>
      </div>
      <div className={style.services__item}>
        <GiElectric className={style.services__icon} />
        <span className={style.services__text}>Electricity Bill</span>
      </div>
      <div className={style.services__item}>
        <MdCached className={style.services__icon} />
        <span className={style.services__text}>Cashback</span>
      </div>
      <div className={style.services__item}>
        <MdOutlineLocalOffer className={style.services__icon} />
        <span className={style.services__text}>Offer</span>
      </div>
      <div className={style.services__item}>
        <BiCameraMovie className={style.services__icon} />
        <span className={style.services__text}>Movie tickets</span>
      </div>
      <div className={style.services__item}>
        <MdFlight className={style.services__icon} />
        <span className={style.services__text}>Flight tickets</span>
      </div>
    </>
  );
};

export default Services;
