import React from "react";
import pLogo from "../images/P.png";
import img1 from "../images/img1.png";
import img2 from "../images/img2.png";
import img3 from "../images/img3.png";
import { Link } from "react-router-dom";

export default function SideBar() {
  return (
    <>
      <div className="col-md-2 pt-2 side-bar">
        <div className="col-12 ">
          <div className="Logo-div-side ms-2 mt-2 rounded-circle">
            <img src={pLogo} alt={"P-Logo"} className="p-logo-side me-3" />
          </div>
        </div>
        <div className="col-12 ms-2 mt-5">
          <h6 className="nav">Navigation</h6>
        </div>
        <div className="col-12 ms-2 mt-4 ">
          <Link to={"/dashborad"} className="dashborad-side Link ">
            <i className="fa-solid fa-circle-half-stroke me-3"></i>Dashborad
          </Link>
        </div>
        <div className="col-12 ms-2 mt-4 ">
          <Link to={"/accounts"} className="dashborad-side Link">
            <i className="fa-solid fa-laptop me-3"></i>Accounts
          </Link>
        </div>
        <div className="col-12 ms-2 mt-4 ">
          <Link to={"/cards"} className="dashborad-side Link">
            <i className="fa-regular fa-credit-card me-3"></i>Cards
          </Link>
        </div>
        <div className="col-12 ms-2 mt-4 ">
          <Link to={"/transactions"} className="dashborad-side Link">
            <i className="fa-solid fa-repeat me-3"></i>Transactions
          </Link>
        </div>
        <div className="col-12 ms-2 mt-4 ">
          <Link to={"/invoicing"} className="dashborad-side Link ">
            <i className="fa-solid fa-chart-line me-3"></i>Invoicing
          </Link>
        </div>
        <div className="col-12 ms-2 mt-4 ">
          <Link to={"/pricing"} className="dashborad-side Link">
            <i className="fa-solid fa-chart-simple me-3"></i>Pricing
          </Link>
        </div>
        <div className="col-12 ms-2 mt-4 ">
          <h6 className="nav ">Balances</h6>
        </div>
        <div className="col-12 ms-2 mt-4 ">
          <span className="dashborad-side ">
            <img src={img1} className="me-3"></img>100,050.75 USD
          </span>
        </div>
        <div className="col-12 ms-2 mt-4 ">
          <span className="dashborad-side ">
            <img src={img2} className="me-3"></img>2310.40 EUR
          </span>
        </div>
        <div className="col-12 ms-2 mt-4 ">
          <span className="dashborad-side ">
            <img src={img3} className="me-3"></img>9455.50 GBP
          </span>
        </div>
        <div className="col-12 ms-2 mt-4 ">
          <span className="dashborad-side ">
            <i className="fa-solid fa-circle-plus me-3 side-plus-icon"></i>
            Open a balance
          </span>
        </div>
      </div>
    </>
  );
}
