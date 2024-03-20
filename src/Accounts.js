import React from "react";
import userimg from "./images/Img.png";
import Footer from "./components/Footer";
import SideBar from "./components/SideBar";
import DesktopFooter from "./components/DesktopFooter";
import MobileNav from "./components/MobileNav";
import DesktopNav from "./components/DesktopNav";
import AccountsCard from "./components/AccountsCard";
export default function Accounts() {
  const mobileAccountsCard = [
    {
      id: 1,
      title: "USD",
      image: require("./images/accounts/img.png"),
      cardNumber: "3210**** ****7890",
      transaction: 88.2,
      text: "Block amount $1,200.00",
      status: "Active",
    },
    {
      id: 2,
      title: "EUR",
      image: require("./images/accounts/eur.png"),
      cardNumber: "8210**** ****4340",
      transaction: 64.12,
      text: "Block amount $1,960.00",
      status: "Active",
    },
    {
      id: 3,
      title: "CHF",
      image: require("./images/accounts/lira.png"),
      cardNumber: "8210**** ****9490",
      transaction: 1.56,
      text: "Block amount $1,0.0000",
      status: "Active",
    },
    {
      id: 4,
      title: "GBP",
      image: require("./images/accounts/gbp.png"),
      cardNumber: "8310**** ****4990",
      transaction: 8.83,
      text: "Block amount $60.00.00",
      status: "on Hold",
    },
    {
      id: 5,
      title: "YUAN",
      image: require("./images/accounts/yuna.png"),
      cardNumber: "3280**** ****3556",
      transaction: 230.5,
      text: "Block amount $0.000.00",
      status: "closed",
    },
  ];
  return (
    <>
      <div className="container-fluid d-none d-md-block ">
        {/* Accounts Start */}
        <div className="row">
          {/* Accounts SideBar start */}
          <SideBar />
          {/* Accounts SideBar end */}
          {/* Accounts section start */}
          <div className="col-md-10 ps-5 pt-2">
            {/* Accounts navbar start */}
            <DesktopNav title={"Accounts"} />

            {/* Accounts navbar end */}
            {/* Accounts section start */}
            <div className="row ">
              <div className="col-md-12 d-flex flex-wrap gap-2 col-12 mt-2">
                <AccountsCard />
              </div>
            </div>
          </div>
          {/* Accounts section end */}
          {/* Footer start */}
          <DesktopFooter />
          {/* Footer End */}
        </div>
        {/* Accounts End */}
      </div>
      {/* Accounts Mobile section Start */}
      <div className="container-fluid d-md-none d-block side-bar pb-4">
        {/* Accounts navbar start */}
        <MobileNav title={"Accounts"} />
        {/* Accounts Hero section start */}
        <div className="row mt-4 pb-2">
          <div className="col-12">
            <h1 className="total-balance">Payment accounts</h1>
          </div>
        </div>
        {/* Accounts Hero section end */}
        <div className="row mt-2">
          <div className="col-md-12 mt-2">
            {mobileAccountsCard.map((card, key) => (
              <div
                key={key}
                className="border mb-2 bg-light rounded-3 py-4 px-3"
              >
                <div className="d-flex justify-content-between">
                  <div>
                    <h6 className="card-atm">{card.title}</h6>
                    <p className="accounts-balance-text">{card.cardNumber}</p>
                  </div>
                  <div>
                    <img
                      src={card.image}
                      alt="country-image"
                      className="country-image mt-2"
                    ></img>
                  </div>
                </div>
                <div className="d-flex mt-3 justify-content-between">
                  <div>
                    <h6 className="card-atm-accounts">${card.transaction}</h6>
                    <p className="accounts-block-text">{card.text}</p>
                  </div>
                  <div>
                    <p className="account-active mt-4">{card.status}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Accounts Mobile section end */}
      </div>
      <Footer />
    </>
  );
}
