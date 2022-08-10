import React from "react";

import style from "./Card.module.scss";

const Card = ({
  itemId,
  number,
  date,
  securityCode,
  type,
  aspect,
  balance,
  currency,
  name,
  img,
  year,
  deleteCard,
}) => {
  //full  card number
  const [showCardNumber, setShowCardnumber] = React.useState(false);
  // copy number
  const [copySuccess, setCopySuccess] = React.useState("");
  const textAreaRef = React.useRef(null);

  const buttonHandler = () => {
    setShowCardnumber((current) => !current);
  };
  React.useEffect(() => {}, [showCardNumber]);

  // mask card number
  const newNumber =
    number.substring(0, 4) +
    " **** **** " +
    number.substring(number.length - 4, number.length);

  // copy number
  function copyToClipboard(e) {
    textAreaRef.current.select();
    document.execCommand("copy");
    e.target.focus();
    setCopySuccess("Copied!");
  }

  return (
    <>
      <div className={style.flip__card}>
        <div className={style.flip__card__inner}>
          <div className={style.flip__card__front}>
            <h3>{name}</h3>
            <div className={style.number}> {newNumber}</div>
            <div className={style.date}>
              {date}/{year}
              <p>{type}</p>
              <h6>
                Your balance {balance} {currency}
              </h6>
              <img className={style.card__type} src={img} alt="card type" />
            </div>
          </div>
          <div className={style.flip__card__back}>
            <div className={style.code}>
              <h5> security code {securityCode}</h5>
              <p>{aspect}</p>
            </div>
          </div>
        </div>
      </div>
      <div className={style.copy}>
        {showCardNumber ? (
          <div>
            <div className={style.fullNumber}>
              {copySuccess}
              <input
                className={style.copy__value}
                value={number}
                ref={textAreaRef}
                readOnly
              />
              <button onClick={copyToClipboard}>Copy</button>
            </div>
          </div>
        ) : null}
        <button onClick={buttonHandler} className={style.fullNumberBtn}>
          {!showCardNumber ? "Show card number" : "Close card number"}
        </button>
        <button onClick={() => deleteCard(itemId)}>delete</button>
      </div>
    </>
  );
};

export default Card;
