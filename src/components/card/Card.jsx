import React from "react";
import axios from "axios";

import style from "./Card.module.scss";

const Card = ({
  itemId,
  number,
  date,
  securityCode,
  bank,
  type,
  keyValue,
  balance,
  currency,
  year,
  deleteCard,
}) => {
  //full  card number
  const [showCardNumber, setShowCardnumber] = React.useState(false);
  // copy number
  const [copySuccess, setCopySuccess] = React.useState("");
  const textAreaRef = React.useRef(null);

  // edit balance
  const [balanceCard, setBalanceCard] = React.useState("");
  const [showEditBalance, setShowEditBalance] = React.useState(false);

  //  clear balance
  const [deleteBalanceCard, setDeleteBalanceCard] = React.useState(false);

  const buttonHandler = () => {
    setShowCardnumber((current) => !current);
  };
  React.useEffect(() => {}, [showCardNumber]);

  const showBalance = () => {
    setShowEditBalance((current) => !current);
  };
  React.useEffect(() => {}, [showEditBalance]);

  const editBalance = async (itemId) => {
    if (window.confirm("Do you want to change the balance?")) {
      const data = {
        balance: balanceCard,
      };
      await axios
        .put(`https://62f2327f18493ca21f2e67ff.mockapi.io/card/${itemId}`, data)
        .then((res) => {
          setBalanceCard(res.data);
        })
        .catch((err) => {
          alert("Error!!");
        });
      if (axios) {
        setBalanceCard("");
      }
    }
  };

  const showButtonDeleteBalance = () => {
    setDeleteBalanceCard((current) => !current);
  };
  React.useEffect(() => {}, []);

  const deleteBalance = async (itemId) => {
    const data = {
      balance: "0",
    };
    await axios
      .put(`https://62f2327f18493ca21f2e67ff.mockapi.io/card/${itemId}`, data)
      .then((res) => {
        setBalanceCard(res.data);
      })
      .catch((err) => {
        alert("Error!!");
      });
  };

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
            <h3>{bank}</h3>
            <div className={style.number}> {newNumber}</div>
            <div className={style.date}>
              {date}/{year}
              <p>{type}</p>
              <h6>
                Your balance {balance} {currency}
              </h6>
              <img
                className={style.card__type}
                src={
                  { keyValue } === "Visa"
                    ? "img/types/item-1.svg"
                    : "img/types/item-2.svg"
                }
                alt="card type"
              />
            </div>
          </div>
          <div className={style.flip__card__back}>
            <div className={style.code}>
              <h5> security code {securityCode}</h5>
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

        <button onClick={showBalance} className={style.fullNumberBtn}>
          {!showEditBalance ? "Edit balance" : "Hide edit balance"}
        </button>
        {showEditBalance ? (
          <div className={style.edit__balance}>
            <input
              type="text"
              id="balanceCard"
              placeholder="Enter new balance"
              value={balanceCard}
              onChange={(e) => setBalanceCard(e.target.value)}
            />
            <button onClick={() => editBalance(itemId)}>Edit</button>
          </div>
        ) : null}
        <button
          onClick={() => deleteCard(itemId)}
          className={style.fullNumberBtn}
        >
          Delete card
        </button>
        <button
          onClick={showButtonDeleteBalance}
          className={style.fullNumberBtn}
        >
          Clear balance
        </button>
        {deleteBalanceCard ? (
          <button
            className={style.fullNumberBtn}
            onClick={() => deleteBalance(itemId)}
          >
            Are you sure?
          </button>
        ) : null}
      </div>
    </>
  );
};

export default Card;
