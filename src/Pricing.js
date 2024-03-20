import React from "react";
import Footer from "./components/Footer";
import SideBar from "./components/SideBar";
import DesktopFooter from "./components/DesktopFooter";
import MobileNav from "./components/MobileNav";
import DesktopNav from "./components/DesktopNav";

export default function Pricing() {
  const card = [
    {
      Id: 1,
      title: "Pro Level 1",
      dollor: "$",
      package: 16,
      year: "/year",
      text: "or $16 month-to-month",
      icone: "fa-solid fa-check me-2",
      textUnl: "Unlimited Calling Minutes",
      textPro: "Pro Level 1 Badge",
      textBe: "Be in Top Searches",
      textUp: "Upgrade to Pro Level 1",
      button: "Choose Plan ",
    },
    {
      Id: 2,
      title: "Master",
      dollor: "$",
      package: 50,
      year: "/year",
      text: "or $50 month-to-month",
      icone: "fa-solid fa-check me-2",
      textUnl: "Unlimited Calling Minutes",
      textPro: "Pro Level 1 Badge",
      textBe: "Be in Top Searches",
      textUp: "Upgrade to Pro Level 1",
      button: "Choose Plan ",
    },
    {
      Id: 3,
      title: "Pro Level 2",
      dollor: "$",
      package: 33,
      year: "/year",
      text: "or $33 month-to-month",
      icone: "fa-solid fa-check me-2",
      textUnl: "Unlimited Calling Minutes",
      textPro: "Pro Level 1 Badge",
      textBe: "Be in Top Searches",
      textUp: "Upgrade to Pro Level 1",
      button: "Choose Plan ",
    },
  ];
  return (
    <>
      <div className="container-fluid d-none d-md-block ">
        {/* Pricing Start */}
        <div className="row">
          {/* Pricing SideBar start */}
          <SideBar />
          {/* Pricing SideBar end */}
          {/* Pricing section start */}
          <div className="col-md-10 ps-5 pt-2">
            {/* Pricing navbar start */}
            <DesktopNav title={"Prices"} />

            {/* Pricing navbar end */}
            {/* Pricing section start */}
            {/* Cards sectins start */}

            <div className="row mt-5">
              <div className="col-md-12 gap-4 ms-0 ms-md-2 d-flex">
                {card.map((level, key) => (
                  <div key={key} className="card" style={{ width: "20rem" }}>
                    <div className="card-body pricing-card  text-center border-bottom">
                      <h5 className="card-title card-pro-level">
                        {level.title}
                      </h5>
                      <h1 className="card-title card-pro-heading">
                        <span className="card-pro-text">{level.dollor}</span>
                        {level.package}
                        <span className="card-pro-text">{level.year}</span>
                      </h1>
                      <p className="card-text card-pro-text">{level.text}</p>
                    </div>
                    <ul className="list-group list-group-flush border-0 my-3">
                      <li className="list-group-item border-0 pricing-card-text">
                        <i className={level.icone}></i>
                        {level.textUnl}
                      </li>
                      <li className="list-group-item border-0 pricing-card-text">
                        <i className="fa-solid fa-check me-2"></i>
                        {level.textPro}
                      </li>
                      <li className="list-group-item border-0 pricing-card-text">
                        <i className="fa-solid fa-check me-2"></i>
                        {level.textBe}
                      </li>
                      <li className="list-group-item border-0 pricing-card-text  ">
                        <i className="fa-solid fa-check me-2"></i>
                        {level.textUp}
                      </li>
                      <span className=""></span>
                    </ul>
                    <div className="card-body text-center my-2 ">
                      <button
                        type="button"
                        className="btn border-0 card-button px-5"
                      >
                        {level.button}
                        <i className="fa-solid fa-chevron-right ms-1"></i>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Cards sectins end */}

            {/* Pricing section end */}
          </div>
          {/* Pricing section end */}
          {/* Footer start */}
          <DesktopFooter />
          {/* Footer End */}
        </div>
        {/* Pricing End */}
      </div>
      {/* Pricing Mobile section Start */}
      <div className="container-fluid d-md-none d-block side-bar pb-4">
        {/* Pricing navbar start */}
        <MobileNav title={"Prices"} />
        {/* Cards sectins start */}

        <div className="row mt-5">
          <div className="col-md-12 gap-2 d-flex justify-content-center flex-wrap">
            {card.map((level, key) => (
              <div key={key} className="card" style={{ width: "20rem" }}>
                <div className="card-body pricing-card  text-center border-bottom">
                  <h5 className="card-title card-pro-level">{level.title}</h5>
                  <h1 className="card-title card-pro-heading">
                    <span className="card-pro-text">{level.dollor}</span>
                    {level.package}
                    <span className="card-pro-text">{level.year}</span>
                  </h1>
                  <p className="card-text card-pro-text">{level.text}</p>
                </div>
                <ul className="list-group list-group-flush border-0 my-3">
                  <li className="list-group-item border-0 pricing-card-text">
                    <i className={level.icone}></i>
                    {level.textUnl}
                  </li>
                  <li className="list-group-item border-0 pricing-card-text">
                    <i className="fa-solid fa-check me-2"></i>
                    {level.textPro}
                  </li>
                  <li className="list-group-item border-0 pricing-card-text">
                    <i className="fa-solid fa-check me-2"></i>
                    {level.textBe}
                  </li>
                  <li className="list-group-item border-0 pricing-card-text  ">
                    <i className="fa-solid fa-check me-2"></i>
                    {level.textUp}
                  </li>
                  <span className=""></span>
                </ul>
                <div className="card-body text-center my-2 ">
                  <button
                    type="button"
                    className="btn border-0 card-button px-5"
                  >
                    {level.button}
                    <i className="fa-solid fa-chevron-right ms-1"></i>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Cards sectins end */}

        {/* Pricing Mobile section end */}
      </div>
      <Footer />
    </>
  );
}
