import React from "react";
import cardLine from "./images/card_line.png";
import { Link } from "react-router-dom";
import Footer from "./components/Footer";
import SideBar from "./components/SideBar";
import DesktopFooter from "./components/DesktopFooter";
import MobileNav from "./components/MobileNav";
import DesktopNav from "./components/DesktopNav";
import LatestTransaction from "./components/LatestTransaction";
import CardsVisa from "./components/CardsVisa";
export default function Cards() {
  const mobileTransactions = [
    { id: 1, image:require("./images/paypal.png"), title:"PayPal purchaes", transactions: "-$104.4800", dateTime: "28 Aug 3:00 PM" },
    { id: 2, image:require("./images/paisa.png"), title:"Cash Withdral", transactions: "-$201.5000", dateTime: "28 Aug 2:15 PM" },
    { id: 3, image:require("./images/amazon.png"), title:"Online purches on Amazone.com", transactions: "-$184.00", dateTime: "28 Aug 5:40 PM" },

  ];

  const mobiletransactionsTow = [
    { id: 1, image:require("./images/paisa.png"), title:"Cash withdrwal", transactions: "+$505.00", dateTime: "24 Aug 6:40 PM" },
  

  ]; 
  return (
    <>
      <div className="container-fluid d-none d-md-block ">
        {/* Cards Start */}
        <div className="row">
          {/* Cards SideBar start */}
          <SideBar />
          {/* Cards SideBar end */}
          {/* Cards section start */}
          <div className="col-md-10 ps-5 pt-2">
            {/* Cards navbar start */}
            <DesktopNav title={"Cards"} />

            {/* Cards navbar end */}
            {/* Cards Hero section start */}
            <div className="row mt-4 d-flex justify-content-between">
              <div className="col-md-4 bg-light d-flex justify-content-around rounded-3 py-2 ">
                <Link
                  to={"/cards"}
                  type="button"
                  className="Link btn btn-outline-dark border-0 accouts-btn"
                >
                  All
                </Link>
                <Link
                  to={"/physical"}
                  type="button"
                  className="Link btn btn-outline-dark Link border-0 accouts-btn"
                >
                  Physical
                </Link>
                <Link
                  to={"/virtual"}
                  type="button"
                  className="Link btn btn-outline-dark border-0 accouts-btn"
                >
                  Virtual
                </Link>
                <Link
                  to={""}
                  type="button"
                  className="Link btn btn-outline-dark border-0 accouts-btn"
                >
                  Debit
                </Link>
                <Link
                  to={""}
                  type="button"
                  className="Link btn btn-outline-dark border-0 accouts-btn"
                >
                  Credit
                </Link>
              </div>
              <div className="col-md-4"></div>
              <div className="col-md-4 mt-2 text-end">
                <span className="account-open ">
                  <i className="fa-solid fa-circle-plus me-2"></i>Add new card
                </span>
              </div>
            </div>

            {/* Cards Hero section end */}

            {/* Card section top start */}
            <div className="row my-4">
              <div className="col-md-12 d-flex gap-4 ">
                {/* Visa card start */}
                <CardsVisa/>
                {/* Visa card end */}
              </div>
            </div>

            {/* Card section top end */}

            {/* Cards section start */}
            <div className="row">
              {/* Dashborad section left start */}
              <div className="col-md-4 ">
                <div className="col-md-11  pb-5 mt-3 border rounded-3">
                  <div className="border-bottom py-3">
                    <h1 className=" income-assets ms-3  ">Card management</h1>
                  </div>
                  <div>
                    <button
                      type="button"
                      className="btn mt-3 ms-1 card-card-btn border-0"
                    >
                      <i className="fa-solid fa-circle-dot me-2 card-card-btn-icon"></i>
                      Card Detail
                    </button>
                  </div>
                  <div>
                    <button
                      type="button"
                      className="btn mt-4 ms-1 card-card-btn border-0"
                    >
                      <i className="fa-solid fa-download me-2 card-card-btn-icon"></i>
                      Download Statement
                    </button>
                  </div>
                  <div>
                    <button
                      type="button"
                      className="btn mt-4 ms-1 card-card-btn border-0"
                    >
                      <i className="fa-solid fa-pen me-2 card-card-btn-icon"></i>
                      Change Pin
                    </button>
                  </div>
                  <div>
                    <button
                      type="button"
                      className="btn mt-4 ms-1 card-card-btn border-0"
                    >
                      <i className="fa-solid fa-circle-half-stroke me-2 card-card-btn-icon"></i>
                      Block Card
                    </button>
                  </div>
                  {/* Border-div */}
                  <div className="border-bottom mt-4"></div>

                  {/* Border-div */}
                  <h6 className="nav mt-3 ms-3">ATM withdrawals</h6>
                  <h6 className="ms-3 mt-2 dashborad">$6,900.00</h6>
                  {/* Border-div */}
                  <div className="">
                    <img src={cardLine} alt="card-image" className="ms-3"></img>
                  </div>
                  <div className="d-flex pb-5 justify-content-between mt-3 mx-3">
                    <div>
                      <h6 className="card-atm-h6">$5,100.00</h6>
                      <p className="card-atm-text">Spent</p>
                    </div>
                    <div>
                      <h6 className="card-atm-h6">$5,100.00</h6>
                      <p className="text-end card-atm-text">left</p>
                    </div>
                  </div>

                  {/* Border-div */}
                </div>
              </div>
              {/* Dashborad section left end */}
              {/* Dashborad section right start */}
              <div className="col-md-8 pb-5 mt-3 border rounded-3">
                <div className="border-bottom py-3">
                  <div className="d-flex mx-2 justify-content-between   ">
                    <h1 className=" income-assets ms-1  ">
                      Latest Transactions
                    </h1>
                    <i className="fa-solid fa-arrow-trend-up "></i>
                  </div>
                </div>
                <p className=" ms-2 total-balance-text mt-4">28 August</p>
                <LatestTransaction/>
                
              </div>
              {/* Dashborad section right end */}
            </div>

            {/* Cards section end */}
          </div>
          {/* Cards section end */}
          {/* Footer start */}
          <DesktopFooter />
          {/* Footer End */}
        </div>
        {/* Cards End */}
      </div>
      {/* Cards Mobile section Start */}
      <div className="container-fluid d-md-none d-block side-bar pb-4">
        {/* Cards navbar start */}
        <MobileNav title={"Cards"} />
        <div className="row mt-4 ">
          <div className="col-md-4 col-12 bg-light d-flex justify-content-between rounded-3 py-2 ">
            <Link
              to={"/cards"}
              type="button"
              className="Link btn btn-outline-dark border-0 physical-btn"
            >
              All
            </Link>
            <Link
              to={"/physical"}
              type="button"
              className="Link btn btn-outline-dark border-0 physical-btn"
            >
              Physical
            </Link>
            <Link
              to={"/virtual"}
              type="button"
              className="Link btn btn-outline-dark border-0 physical-btn"
            >
              Virtual
            </Link>
            <Link
              to={""}
              type="button"
              className="Link btn btn-outline-dark border-0 physical-btn"
            >
              Debit
            </Link>
            <Link
              to={""}
              type="button"
              className="Link btn btn-outline-dark border-0 physical-btn"
            >
              Credit
            </Link>
            <span className="account-open ">
              <i className="fa-solid fa-circle-plus mt-2"></i>
            </span>
          </div>
        </div>
        <div className="row my-4">
          <div className="col-md-12 mx-3 d-flex flex-column gap-2 ">
            {/* Visa card start */}
            <CardsVisa/>
            {/* Visa card end */}
            {/* Master card start */}
            {/* <div className=" p-2 rounded-3 bg-light visa-card-div">
                    <div className="text-end">
                      <img src={masterCardLogo} className=""></img>
                    </div>
                    <div className="ms-2 mt-4">
                      <h3 className="mastser-card-number">
                        5204 4800 1000 0005
                      </h3>
                      <p className="master-card-number-text">Card number</p>
                      <div className="mt-4 d-flex gap-5">
                        <div>
                          <h3 className="master-card-number-balance">
                            $14.500,00
                          </h3>
                          <p className="master-card-number-text">
                            Card balance
                          </p>
                        </div>
                        <div>
                          <h3 className="master-card-number-balance">$09/24</h3>
                          <p className="master-card-number-text">Vaild</p>
                        </div>
                      </div>
                    </div>
                  </div> */}
            {/* Master card end */}
            {/* Master demo card start */}
            {/* <div className=" p-2 rounded-3 bg-light visa-card-div">
                    <div className="text-end">
                      <img src={masterCardLogo} className=""></img>
                    </div>
                    <div className="ms-2 mt-4">
                      <h3 className="mastser-card-number">
                        3774 0016 1190 1150
                      </h3>
                      <p className="master-card-number-text">Card number</p>
                      <div className="mt-4 d-flex gap-5">
                        <div>
                          <h3 className="master-card-number-balance">
                            $57.900,00
                          </h3>
                          <p className="master-card-number-text">
                            Card balance
                          </p>
                        </div>
                        <div>
                          <h3 className="master-card-number-balance">$03/27</h3>
                          <p className="master-card-number-text">Vaild</p>
                        </div>
                      </div>
                    </div>
                  </div> */}
            {/* Master demo card end */}
          </div>
        </div>
        <div className="col-12 text-center">
          <button
            type="button"
            className="btn border btn-outline-dark text-center btn-detail"
          >
            <i className="fa-solid fa-circle me-2"></i>See card detailed
          </button>
        </div>
        {/* Dashborad section start */}
        <div className="col-md-12 pb-2 mt-3 rounded-3">
          <div className="py-3">
            <div className="mx-2">
              <h1 className=" income-assets ms-1  ">Latest Transactions</h1>
            </div>
          </div>
          <p className=" ms-2 total-balance-text mt-4">28 August</p>
          {mobileTransactions.map((mobieT,key)=>(
                <div key={key} className="d-flex bg-light px-3 py-3 rounded-3 border-bottom  justify-content-between">
                <div className="d-flex justify-content-between">
                  <div className="me-3">
                    <img src={mobieT.image} className="rounded-circle latest-img"></img>
                  </div>
                  <div>
                    <h6 className="latest ">{mobieT.title}</h6>
                    <p className="latest-text">{mobieT.dateTime}</p>
                  </div>
                </div>
    
                <div>
                  <h6 className="card-atm text-end">{mobieT.transactions}</h6>
                </div>
              </div>
            ))}
                <p className="latest-text">28 Aug 5:40 PM</p>
                {mobiletransactionsTow.map((mobileTow,key)=>(
                <div key={key} className="d-flex bg-light px-3 py-3 rounded-3 border-bottom  justify-content-between">
                <div className="d-flex justify-content-between">
                  <div className="me-3">
                    <img src={mobileTow.image} className="rounded-circle latest-img"></img>
                  </div>
                  <div>
                    <h6 className="latest ">{mobileTow.title}</h6>
                    <p className="latest-text">{mobileTow.dateTime}</p>
                  </div>
                </div>
    
                <div>
                  <h6 className="card-atm text-end">{mobileTow.transactions}</h6>
                </div>
              </div>
            ))}

        </div>
        {/* Dashborad section end */}

        {/* Cards Mobile section end */}
      </div>
      <Footer />
    </>
  );
}
