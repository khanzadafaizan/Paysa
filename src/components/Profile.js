import React, { useState } from "react";
import userimg from "../images/Img.png";
import pLogo from "../images/P.png";
import profile from "../images/profile.jpg";
import profileMobile from "../images/profile-mobile.jpg";
import line from "../images/Line 2.png";
import line2 from "../images/line2.png";
import barcode from "../images/icon.png";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Overview from "./Overview";
import About from "./About";
import Edit from "./Edit";
import Passwordc from "./Passwordc";
import img1 from "../images/img1.png";
import img2 from "../images/img2.png";
import img3 from "../images/img3.png";
import SideBar from "./SideBar";
import DesktopFooter from "./DesktopFooter";

export default function Profile() {
  const [text, setText] = useState();
  function getText(e) {
    setText(e);
  }
  return (
    <>
      <div className="container-fluid d-none d-md-block">
        <div className="row side-bar py-4 px-5">
          <div className="col-md-12  rounded-5 bg-light ">
            {/* Navbar start */}
            <div className="row pt-2 pb-2">
              <div className="col-md-12 ">
                <div className="d-flex justify-content-between">
                  <div className="d-flex justify-content-between ">
                    <div className="Logo-div-side  ms-2 mt-2 rounded-circle">
                      <img
                        src={pLogo}
                        alt={"P-Logo"}
                        className="p-logo-side me-3"
                      />
                    </div>
                    <h6 className="dashborad mt-3 ms-3" href="#">
                      My Profile
                    </h6>
                  </div>
                  <form className="search-icon-div d-flex align-items-center">
                    <div className="input-group  me-2 border rounded">
                      <span className="input-group-text search-icon-span border-0 ">
                        <i className="fa-solid  search-icon fa-magnifying-glass"></i>
                      </span>
                      <input
                        className="form-control search-input border search-input"
                        type="search"
                        placeholder="Type to search …"
                        aria-label="Search"
                      />
                    </div>

                    <button
                      type="submit"
                      className="bell-icon-btn border rounded-2 bg-light btn-outline-secondary me-2"
                    >
                      <i className="fa-regular fa-bell"></i>
                    </button>

                    <div className="btn bordered-circle" type="submit">
                      <Link to={"/profile"}>
                        <img src={userimg} alt="userimg" className=""></img>
                      </Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            {/* Navbar end */}
            {/* Profile section start */}
            <div className="row mt-3 pt-3">
              {/* Profile section left start */}
              {/* Sidebar start */}
              <div className="col-md-2 pt-2">
                <div className="col-12 ms-2 mt-2">
                  <h6 className="nav">Navigation</h6>
                </div>
                <div className="col-12 ms-2 mt-4 ">
                  <Link to={"/dashborad"} className="dashborad-side Link ">
                    <i className="fa-solid fa-circle-half-stroke me-3"></i>
                    Dashborad
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
              {/* Sidebar end */}
              <div className=" col-md-4 mt-4">
                <img src={profileMobile} className="img-fluid"></img>
                <div className="row">
                  <div className="col-md-12 mt-2">
                    <p className="newyork mt-5">
                      Work
                      <img src={line} className="ms-2 mt-1"></img>
                    </p>
                    <div className="row">
                      <div className="col-md-12 mt-1">
                        <div className="d-flex gap-3">
                          <div>
                            <h5 className="mt-1">Spotify New York</h5>
                          </div>
                          <div>
                            <button
                              type="button"
                              className="btn border-0 profile-button"
                            >
                              Primary
                            </button>
                          </div>
                        </div>
                        <p className="newyork mt-2">170 William Street</p>
                        <p className="newyork">
                          New York, NY 10038 78 212-312-51{" "}
                        </p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12 mt-1">
                        <div className="d-flex gap-5">
                          <div>
                            <h5 className="mt-1">Metropolitan</h5>
                          </div>
                          <div>
                            <button
                              type="button"
                              className="btn border-0 profile-button"
                            >
                              secondary
                            </button>
                          </div>
                        </div>
                        <p className="newyork mt-2">170 William Street</p>
                        <p className="newyork">
                          New York, NY 10038 78 212-312-51{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Profile section left end */}
              {/* Profile section right start */}
              <div className="col-md-6 mt-4">
                <div className="col-md-12">
                  <div className="d-flex mt-1 justify-content-between">
                    <div className="d-flex gap-2">
                      <h3 className="name mt-1">Jeremy Rose</h3>
                      <i className="fa-solid fa-location-dot newyork mt-1"></i>
                      <p className="newyork mb-2 mt-1">New York, NY</p>
                    </div>
                    <div className="d-flex gap-2">
                      <i className="fa-solid fa-bookmark mt-1 newyork"></i>
                      <p className="newyork mt-1">Book mark</p>
                    </div>
                  </div>
                </div>
                <p className="designer">Product Designer</p>
                <p className="newyork mt-5">RANKINGS</p>
                <div className="d-flex pb-4 gap-2">
                  <h4 className="rank">8,6</h4>
                  <span className="mt-1 star-span">
                    <i className="fa-regular fa-star star"></i>
                    <i className="fa-regular fa-star star"></i>
                    <i className="fa-regular fa-star star"></i>
                    <i className="fa-regular fa-star star"></i>
                    <i className="fa-regular fa-star"></i>
                  </span>
                </div>
                {/* Button section start */}
                <div className="col-md-12 mt-5 border-bottom">
                  <button
                    type="button"
                    className="btn border-0 profile-button"
                    onClick={() => getText(1)}
                  >
                    <i className="fa-solid fa-eye me-1"></i>
                    Overview
                  </button>
                  <button
                    type="button"
                    className="btn border-0 profile-button"
                    onClick={() => getText(2)}
                  >
                    <i className="fa-solid fa-user me-1"></i>
                    About
                  </button>
                  <button
                    type="button"
                    className="btn border-0 profile-button"
                    onClick={() => getText(3)}
                  >
                    <i className="fa-solid fa-user-pen me-1"></i>
                    Edit
                  </button>
                  <button
                    type="button"
                    className="btn border-0 profile-button"
                    onClick={() => getText(4)}
                  >
                    <i className="fa-solid fa-key me-1"></i>
                    Change password
                  </button>
                </div>
                {/* Button section end */}
                {/* Overview start */}
                {text == 1 && <Overview />}
                {/* Overview end */}

                {/* About start */}
                {text == 2 && <About />}
                {/* About end */}

                {/* Edit start */}
                {text == 3 && <Edit />}
                {/* Edit end */}

                {/* Change password start */}
                {text == 4 && <Passwordc />}
                {/* Change password start */}
              </div>
              {/* Profile section right end */}
            </div>
            {/* Profile section end */}
            {/* Desktp footer start */}
            <div className="row ">
              <div className=" pt-5 col-md-2 ">
                <div className="col-12 ms-2 mt-4 ">
                  <span className="dashborad-side ">
                    <i className="fa-solid fa-gear side-plus-icon me-3"></i>
                    Profile Settings
                  </span>
                </div>
              </div>
              <div className=" mt-5 col-md-10 ">
                <div className="col-12 ps-5 my-4">
                  <div className="d-flex justify-content-between">
                    <div className="d-flex gap-2 justify-content-between">
                      <h6 className="help">Privacy Policy</h6>
                      <h6 className="help">License</h6>
                      <h6 className="help">API</h6>
                      <h6 className="help">Help Center</h6>
                      <h6 className="all-right">@ 2022 All rights reserved</h6>
                    </div>
                    <div className="d-flex justify-content-between">
                      <div>
                        <span className="language">
                          English
                          <i className="fa-solid fa-earth-americas ms-2"></i>
                        </span>
                      </div>
                      <button className="btn  ms-3 border rounded dark-mode">
                        <i className="fa-regular fa-moon language px-1"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Desktp footer end */}
          </div>
        </div>
      </div>
      {/* Profile in section mobie start */}
      <div className="container-fluid d-md-none">
        <div className="row">
          <div className="col-12 pb-5 mobile right-main">
            <div className="font-chevron">
              <Link
                to={"/"}
                className="fa-solid Link text-dark fa-chevron-left"
              ></Link>
            </div>
            <Link to={"/"}>
              <div className="Logo-div-mobile">
                <img
                  src={pLogo}
                  alt={"P-Logo-mobie"}
                  className="p-logo-mobile me-3"
                />
              </div>
            </Link>
          </div>
        </div>
        {/* Navbar start */}
        <div className="row pt-2 pb-2">
          <div className="col-md-12 ">
            <div className="d-flex justify-content-between">
              <form className="search-icon-div d-flex align-items-center">
                <div className="input-group  me-2 border rounded">
                  <span className="input-group-text search-icon-span border-0 ">
                    <i className="fa-solid  search-icon fa-magnifying-glass"></i>
                  </span>
                  <input
                    className="form-control search-input border search-input"
                    type="search"
                    placeholder="Type to search …"
                    aria-label="Search"
                  />
                </div>

                <button
                  type="submit"
                  className="bell-icon-btn border rounded-2 bg-light btn-outline-secondary me-2"
                >
                  <i className="fa-regular fa-bell"></i>
                </button>

                <div className="btn bordered-circle" type="submit">
                  <Link to={"/profile"}>
                    <img src={userimg} alt="userimg" className=""></img>
                  </Link>
                </div>
              </form>
            </div>
          </div>
          {/* Navbar end */}
          <div className="row mt-2">
            <div className="col-12 d-flex justify-content-center">
              <div className="w-50">
                <img
                  src={profileMobile}
                  className="img-fluid py-2 rounded-circle"
                ></img>
              </div>
            </div>
            <div className="col-12">
              <h3 className="name mt-2 text-center">Jeremy Rose</h3>
              <p className="designer mt-3 text-center">Product Designer</p>
            </div>
            <div className="row">
              <div className="col-md-12 mt-4">
                <div className="d-flex justify-content-center">
                  <div>
                    <h5 className="">Spotify New York</h5>
                  </div>
                  <div>
                    <button
                      type="button"
                      className="btn border-0 profile-button"
                    >
                      Primary
                    </button>
                  </div>
                </div>
                <p className="newyork mt-2 text-center">170 William Street</p>
                <p className="newyork text-center">
                  New York, NY 10038 78 212-312-51{" "}
                </p>
              </div>
            </div>
            {/* Button section start */}
            <div className="col-md-12 mt-5 d-flex justify-content-center">
              <button
                type="button"
                className="btn border-0 profile-button"
                onClick={() => getText(2)}
              >
                <i className="fa-solid fa-user me-1"></i>
                About
              </button>
              <button
                type="button"
                className="btn border-0 profile-button"
                onClick={() => getText(1)}
              >
                <i className="fa-solid fa-eye me-1"></i>
                Overview
              </button>
            </div>
            <div className="col-12 mt-3 border-bottom d-flex justify-content-center">
              <button
                type="button"
                className="btn border-0 profile-button"
                onClick={() => getText(3)}
              >
                <i className="fa-solid fa-user-pen me-1"></i>
                Edit
              </button>
              <button
                type="button"
                className="btn border-0 profile-button"
                onClick={() => getText(4)}
              >
                <i className="fa-solid fa-key me-1"></i>
                Change password
              </button>
            </div>
            {/* Button section end */}
            {/* Overview start */}
            {text == 1 && <Overview />}
            {/* Overview end */}

            {/* About start */}
            {text == 2 && <About />}
            {/* About end */}

            {/* Edit start */}
            {text == 3 && <Edit />}
            {/* Edit end */}

            {/* Change password start */}
            {text == 4 && <Passwordc />}
            {/* Change password start */}
          </div>
        </div>
      </div>

      {/* Profile in section mobie end */}
      <Footer />
    </>
  );
}
