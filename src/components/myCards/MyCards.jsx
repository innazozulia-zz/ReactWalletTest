import React from "react";
import User from "../mainPage/user/User";
import axios from "axios";
import Navigation from "../mainPage/navigation/Navigation";
import Card from "../card/Card";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import style from "./MyCards.module.scss";

const MyCards = () => {
  const [card, setCard] = React.useState([]);

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  React.useEffect(() => {
    axios
      .get("https://62f2327f18493ca21f2e67ff.mockapi.io/card")
      .then(function (response) {
        setCard(response.data);
        console.log(response.data);
      });
  }, []);

  //   setCard(
  //   card.filter((card) => {
  //     return card.id !== id;
  //   })

  const deleteCard = (id) => {
    if (window.confirm("Are you sure?")) {
      axios.delete(`https://62f2327f18493ca21f2e67ff.mockapi.io/card/${id}`);
      // axios.delete(`${id}`);
      setCard(
        card.filter((card) => {
          return card.id !== id;
        })
      );
    }
  };
  return (
    <div className={style.myCards__container}>
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
          <h4 className={style.myCards__title}>My Cards</h4>
          <Slider {...settings}>
            {card.map((item) => (
              <Card
                key={item.id}
                number={item.number}
                date={item.date}
                year={item.year}
                securityCode={item.security}
                type={item.type}
                aspect={item.aspect}
                balance={item.balance}
                currency={item.currency}
                name={item.name}
                img={item.img}
                itemId={item.id}
                deleteCard={deleteCard}
              />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default MyCards;
