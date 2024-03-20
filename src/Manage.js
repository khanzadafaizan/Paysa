import React from "react";
import pLogo from "./images/P.png";
import rectangle from "./images/Rectangle.png";
import onlight1 from "./images/onLight_Copy.png";
import onlight2 from "./images/onLight.png";
import linkCard from "./images/linked_card.png";
import item from "./images/item_v.1.png";
import slider from "./images/Slider.png";
import line2 from "./images/line2.png";
import { Link } from "react-router-dom";

function Manage() {
  return (
    <>
      <div className="container-fluid d-none d-md-block">
        <div className="row">
          {/* Sign in section left start */}
          <div className="col-md-6 ">
            <div className="ms-5 mt-5 main">
              <Link to={"/"} className="Link">
                <div className="Logo-div-main pb-5">
                  <div className="Logo-div rounded-circle">
                    <img src={pLogo} alt={"P-Logo"} className="p-logo me-3" />
                  </div>
                  <div className="mt-2">
                    <a className="logo-heading">Paysa</a>
                  </div>
                </div>
              </Link>
              <h1 className="heading-sign ms-2 mt-5 pt-5">
                Manage your account
              </h1>
              <p className="text-sigin ms-2">
                Enter your details to proceed further
              </p>
              <div className="manage-main-div">
                <div className="manage-div ">
                  <p className="have-account mt-5 ">
                    You don’t have an account?
                  </p>
                  <Link to={"/signup"} className="create-account mt-5">
                    Sign Up
                  </Link>
                </div>
                <div className="manage-div ">
                  <p className="have-account mt-5 ">Already have an account</p>
                  <Link to={"/signin"} className="Link already-account mt-5">
                    Sign in
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* Sign in section left end */}

          {/* Sign in section right start flex-column */}
          <div className="col-md-6 right-main ">
            <div className="right d-flex align-items-sm-center ">
              <div className="right-section">
                <img
                  src={rectangle}
                  alt="rectangle"
                  className="rectangle-img"
                ></img>
                <div className="week-high-div">
                  <img
                    src={onlight1}
                    alt="onlight1"
                    className="mt-2 ms-2 me-5"
                  ></img>
                  <img src={onlight2} alt="onlight2" className="mt-2"></img>
                </div>
                <div className="linkCard-div">
                  <img
                    src={linkCard}
                    alt="onlight1"
                    className="linkCard mt-2 ms-2 me-5"
                  ></img>
                </div>
                <div className="item-div">
                  <img
                    src={item}
                    alt="onlight1"
                    className="item mt-2 ms-2 me-5"
                  ></img>
                </div>
              </div>
            </div>
            <h1 className="text-latest">
              “Enjoy the world’s largest cryptocurrency exchange at your
              fingertips”
            </h1>
            <img src={slider} alt="slider" className="slider"></img>
            <h1 className="text-latest-waiapi">Waiapi Karaka</h1>
            <p className="text-latest-p">Financial Officer</p>
          </div>
          {/* Sign in section right end  */}
        </div>
      </div>

      {/* Sign in section mobie start */}
      <div className="container-fluid d-md-none">
        <div className="row">
          <div className="col-12 pb-5 mobile right-main">
            <Link to={"/"} className="Link">
              <div className="Logo-div-mobile">
                <img
                  src={pLogo}
                  alt={"P-Logo-mobie"}
                  className="p-logo-mobile me-3"
                />
              </div>
            </Link>
            <h1 className="text-latest-mobile">
              “Enjoy the world’s largest cryptocurrency exchange at your
              fingertips”
            </h1>
            <img src={slider} alt="slider" className="slider"></img>
            <h1 className="text-latest-waiapi-mobile">Waiapi Karaka</h1>
            <p className="text-latest-p-mobile">Financial Officer</p>
          </div>
        </div>
        <div className="row rounded-top-3 sign-mobile-main">
          <div className="col-12   ">
            <div className=" mt-5 main">
              <h1 className="heading-sign-mobile text-center mt-5 pt-4">
                Manage your own financial assets
              </h1>
              <p className="text-sigin mt-4 text-center">
                Enter your details to proceed further
              </p>

              <div className="manage-main-div-mobile">
                <div className="manage-div ">
                  <p className="have-account mt-5 ">
                    You don’t have an account?
                  </p>
                  <Link to={"/signup"} className="create-account mt-5">
                    Sign Up
                  </Link>
                </div>
                <div className="manage-div ">
                  <p className="have-account mt-5 ">Already have an account</p>
                  <Link to={"/signin"} className="Link already-account mt-5">
                    Sign in
                  </Link>
                </div>
              </div>

              <img src={line2} alt="line2" className="line2"></img>
            </div>
          </div>
        </div>
      </div>

      {/* Sign in section mobie end */}
    </>
  );
}

export default Manage;
