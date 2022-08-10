import React from "react";
import User from "../mainPage/user/User";
import Navigation from "../mainPage/navigation/Navigation";
import { MdWarningAmber } from "react-icons/md";
import { useForm } from "react-hook-form";
import axios from "axios";
import style from "./AddCard.module.scss";
const AddCard = () => {
  const [inputValue, setInputValue] = React.useState("");
  const [inputValueCardNumber, setInputValueCardNumber] = React.useState("");
  const [inputValueCardDate, setInputValueCardDate] = React.useState("");
  const [inputValueCardYear, setInputValueCardYear] = React.useState("");
  const [inputValueCVV, setInputValueCVV] = React.useState("");
  const [inputValueCardAmound, setInputValueCardAmound] = React.useState("");
  const [inputValueCurrency, setInputValueCurrency] = React.useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  let newData;
  const onSubmit = (data) => {
    newData = JSON.stringify(data);
    console.log(newData);
  };

  const addNewCard = () => {
    if (
      inputValueCardNumber.length === 16 &&
      inputValueCardDate.length === 2 &&
      inputValueCVV.length === 3 &&
      inputValueCardYear.length === 4 &&
      inputValueCardAmound
    ) {
      axios
        .post("https://62f2327f18493ca21f2e67ff.mockapi.io/card", {
          name: inputValue,
          number: inputValueCardNumber,
          date: inputValueCardDate,
          year: inputValueCardYear,
          security: inputValueCVV,
          balance: inputValueCardAmound,
          currency: inputValueCurrency,
        })
        .catch(() => {
          alert("Error!!");
        });
    }
    if (axios) {
      setInputValueCardNumber("");
      setInputValueCardDate("");
      setInputValueCardYear("");
      setInputValueCVV("");
      setInputValueCardAmound("");
    }
  };

  return (
    <div className={style.addCard__container}>
      <div className={style.side}>
        <User />
        <Navigation />
      </div>
      <div className={style.main}>
        <div className={style.logo__container}>
          <img className={style.logo} src="logo.png" alt="logo" />
          <p>Your Wallet</p>
        </div>
        <div className={style.main__content}>
          <h4 className={style.addCard__title}>Add new card</h4>
          <div className={style.form__component}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className={style.form__item}>
                <input
                  id="name"
                  value={inputValue}
                  placeholder="Card holder"
                  aria-invalid={errors.name ? "true" : "false"}
                  {...register("name", {
                    onChange: (e) => setInputValue(e.target.value),
                  })}
                />
              </div>
              <div className={style.form__item}>
                <input
                  id="cardNumber"
                  value={inputValueCardNumber}
                  placeholder="Card number"
                  type="number"
                  aria-invalid={errors.cardNumber ? "true" : "false"}
                  {...register("cardNumber", {
                    required: true,
                    maxLength: 16,
                    minLength: 16,
                  })}
                  onChange={(e) => {
                    setInputValueCardNumber(e.target.value);
                  }}
                />
                {errors.cardNumber && errors.cardNumber.type === "required" && (
                  <span role="alert">
                    <MdWarningAmber className={style.icon} />
                    This is required
                  </span>
                )}
                {errors.cardNumber && errors.cardNumber.type === "maxLength" && (
                  <span role="alert">
                    <MdWarningAmber className={style.icon} />
                    Max length exceeded
                  </span>
                )}
                {errors.cardNumber && errors.cardNumber.type === "minLength" && (
                  <span role="alert">
                    <MdWarningAmber className={style.icon} />
                    Enter 16 numbers
                  </span>
                )}
              </div>

              <div className={style.form__item}>
                <input
                  id="carDate"
                  value={inputValueCardDate}
                  placeholder="Card Date"
                  type="number"
                  aria-invalid={errors.carDate ? "true" : "false"}
                  {...register("carDate", {
                    required: true,
                    maxLength: 2,
                    minLength: 2,
                  })}
                  onChange={(e) => {
                    setInputValueCardDate(e.target.value);
                  }}
                />
                {errors.carDate && errors.carDate.type === "required" && (
                  <span role="alert">
                    <MdWarningAmber className={style.icon} />
                    This is required
                  </span>
                )}
                {errors.carDate && errors.carDate.type === "maxLength" && (
                  <span role="alert">
                    <MdWarningAmber className={style.icon} />
                    Max length exceeded
                  </span>
                )}
                {errors.carDate && errors.carDate.type === "minLength" && (
                  <span role="alert">
                    <MdWarningAmber className={style.icon} />
                    Enter 2 numbers
                  </span>
                )}
              </div>

              <div className={style.form__item}>
                <input
                  id="cardYear"
                  value={inputValueCardYear}
                  placeholder="Card Year"
                  type="number"
                  aria-invalid={errors.carDate ? "true" : "false"}
                  {...register("cardYear", {
                    required: true,
                    maxLength: 4,
                    minLength: 4,
                  })}
                  onChange={(e) => {
                    setInputValueCardYear(e.target.value);
                  }}
                />
                {errors.carDate && errors.carDate.type === "required" && (
                  <span role="alert">
                    <MdWarningAmber className={style.icon} />
                    This is required
                  </span>
                )}
                {errors.carDate && errors.carDate.type === "maxLength" && (
                  <span role="alert">
                    <MdWarningAmber className={style.icon} />
                    Max length exceeded
                  </span>
                )}
                {errors.carDate && errors.carDate.type === "minLength" && (
                  <span role="alert">
                    <MdWarningAmber className={style.icon} />
                    Enter 4 numbers
                  </span>
                )}
              </div>

              <div className={style.form__item}>
                <input
                  id="cardCVV"
                  value={inputValueCVV}
                  placeholder="Card CVV"
                  type="number"
                  aria-invalid={errors.cardCVV ? "true" : "false"}
                  {...register("cardCVV", {
                    required: true,
                    maxLength: 3,
                    minLength: 3,
                  })}
                  onChange={(e) => {
                    setInputValueCVV(e.target.value);
                  }}
                />
                {errors.cardCVV && errors.cardCVV.type === "required" && (
                  <span role="alert">
                    <MdWarningAmber className={style.icon} />
                    This is required
                  </span>
                )}
                {errors.cardCVV && errors.cardCVV.type === "maxLength" && (
                  <span role="alert">
                    <MdWarningAmber className={style.icon} />
                    Max length exceeded
                  </span>
                )}
                {errors.cardCVV && errors.cardCVV.type === "minLength" && (
                  <span role="alert">
                    <MdWarningAmber className={style.icon} />
                    Enter 3 numbers
                  </span>
                )}
              </div>

              <div className={style.form__item}>
                <input
                  id="cardAmound"
                  value={inputValueCardAmound}
                  placeholder="Amound"
                  type="number"
                  aria-invalid={errors.cardAmound ? "true" : "false"}
                  {...register("cardAmound", {
                    required: true,
                  })}
                  onChange={(e) => {
                    setInputValueCardAmound(e.target.value);
                  }}
                />
                {errors.cardAmound && errors.cardAmound.type === "required" && (
                  <span role="alert">
                    <MdWarningAmber className={style.icon} />
                    This is required
                  </span>
                )}
              </div>

              <div className={style.form__item}>
                <label> Currency </label>
                <select
                  {...register("currency")}
                  value={inputValueCurrency}
                  onChange={(e) => setInputValueCurrency(e.target.value)}
                >
                  <option value="uah">uah</option>
                  <option value="usd">usd</option>
                </select>
              </div>

              <input
                onClick={addNewCard}
                className={style.addCard__submit}
                type="submit"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AddCard;
