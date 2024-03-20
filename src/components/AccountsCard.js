import React from "react";
// import accouts_img1 from "";
// import accouts_img2 from "./images/accounts/eur.png";
// import accouts_img3 from "./images/accounts/lira.png";
// import accouts_img4 from "";
// import accouts_img5 from "";
export default function AccountsCard() {
  const accountsCard = [
    {
      id: 1,
      title: "USD",
      image: require("../images/accounts/img.png"),
      cardNumber: "3210**** ****7890",
      transaction: 88.2,
      text: "Block amount $1,200.00",
      status: "Active",
    },
    {
      id: 2,
      title: "EUR",
      image: require("../images/accounts/eur.png"),
      cardNumber: "8210**** ****4340",
      transaction: 64.12,
      text: "Block amount $1,960.00",
      status: "Active",
    },
    {
      id: 3,
      title: "CHF",
      image: require("../images/accounts/lira.png"),
      cardNumber: "8210**** ****9490",
      transaction: 1.56,
      text: "Block amount $1,0.0000",
      status: "Active",
    },
    {
      id: 4,
      title: "GBP",
      image: require("../images/accounts/gbp.png"),
      cardNumber: "8310**** ****4990",
      transaction: 8.83,
      text: "Block amount $60.00.00",
      status: "on Hold",
    },
    {
      id: 5,
      title: "YUAN",
      image: require("../images/accounts/yuna.png"),
      cardNumber: "3280**** ****3556",
      transaction: 230.5,
      text: "Block amount $0.000.00",
      status: "closed",
    },
  ];

  return (
    <>
      {accountsCard.map((card, key) => (
        <div key={key} className="card" style={{ width: "500px" }}>
          <div className=" rounded-3 py-4 px-3">
            <div className="d-flex justify-content-between">
              <div>
                <h6 className="card-atm">{card.title}</h6>
                <p className="accounts-balance-text">{card.cardNumber}</p>
              </div>
              <div>
                <img
                  src={card.image}
                  alt="country-image"
                  className="country-image"
                ></img>
              </div>
            </div>
            <div className="d-flex mt-5 justify-content-between">
              <div>
                <h6 className="card-atm-accounts">${card.transaction}</h6>
                <p className="accounts-block-text">{card.text}</p>
              </div>
              <div>
                <p className="account-active mt-4">{card.status}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
