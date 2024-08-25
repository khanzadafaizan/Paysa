import React from "react";
export default function CardsVisa() {
  const visaCards = [
    {
      id: 1,
      image: require("../images/visa-logo.png"),
      cardNumber: "3400 5678 9804 3002",
      cardText: "Card number",
      cardBalance: "$48.200,00",
      date: "06/23",
      cardBalanceText: "Card balance",
      status: "Vaild",
      class: "right-main p-2 rounded-3 visa-card-div",
      classNumber:"card-number", 
      classBalance:"card-number-balance",
      classText:"card-number-text"

    },
    {
      id: 2,
      image: require("../images/master-card-logo.png"),
      cardNumber: "5204 4800 1000 0005",
      cardText: "Card number",
      cardBalance: "$14.500,00",
      date: "09/24",
      cardBalanceText: "Card balance",
      status: "Vaild",
      class: "p-2 rounded-3 bg-light visa-card-div my-2",
      classNumber:"mastser-card-number", 
      classBalance:"master-card-number-balance",
      classText:"master-card-number-text"
    },
    {
      id: 3,
      image: require("../images/master-card-logo.png"),
      cardNumber: "3774 0016 1190 1150",
      cardText: "Card number",
      cardBalance: "$57.900,00",
      date: "03/27",
      cardBalanceText: "Card balance",
      status: "Vaild",
      class: "p-2 rounded-3 bg-light visa-card-div",
      classNumber:"mastser-card-number", 
      classBalance:"master-card-number-balance",
      classText:"master-card-number-text"
    },
  ];
  return (
    <>
      {" "}
      {visaCards.map((card, key) => (
        <div key={key} className={card.class}>
          <div className="text-end">
            <img src={card.image} className=""></img>
          </div>
          <div className="ms-2 mt-4">
            <h3 className={card.classNumber}>{card.cardNumber}</h3>
            <p className={card.classText}>{card.cardText}</p>
            <div className="mt-4 d-flex gap-5">
              <div>
                <h3 className={card.classBalance}>{card.cardBalance}</h3>
                <p className={card.classText}>{card.cardBalanceText}</p>
              </div>
              <div>
                <h3 className={card.classBalance}>{card.date}</h3>
                <p className={card.classText}>{card.status}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
