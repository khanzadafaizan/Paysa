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

function Forgot() {
  return (
    <>
      <div className="container-fluid d-none d-md-block">
        <div className="row">
          {/* Sign in section left start */}
          <div className="col-md-6 ">
            <div className="ms-5 mt-5 main">
              <Link to={"/"} className="Link">
                <div className="Logo-div-main ">
                  <div className="Logo-div rounded-circle">
                    <img src={pLogo} alt={"P-Logo"} className="p-logo me-3" />
                  </div>
                  <div className="mt-2">
                    <a className="logo-heading">Paysa</a>
                  </div>
                </div>
              </Link>
              <h1 className="heading-sign mt-5 pt-5">Forgot password?</h1>
              <p className="text-sigin w-75 pb-4">
                Enter your email below, you will receive an email with
                instructions on how to reset your password in a few minutes. You
                can also set a new password if you’ve never set one before.
              </p>
              <div>
                <label
                  for="exampleFormControlInput1 "
                  className="form-label label-input"
                >
                  Email
                </label>
                <div className="input-div">
                  <input
                    type="email"
                    className="border-0 input select-text"
                    id="exampleFormControlInput1"
                    placeholder="catherine.shaw@gmail.com"
                  />
                  <i className="email-font fa-regular fa-envelope"></i>
                </div>
              </div>
              <button
                className="btn btn-primary d-flex text-center recovery-btn"
                type="button"
              >
                Start recovery
              </button>
              <p className="have-account mt-5 py-5">
                You don’t have an account?
                <Link to={"/signup"} className="create-account ms-2">
                  Create an account
                </Link>
              </p>
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
              The technology innovation in financial services is one such
              example, accelerating rapidly.
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
        <div className="row sign-mobile-main">
          <div className="col-12   ">
            <div className=" mt-5 main">
              <h1 className="heading-sign-mobile text-center mt-5 pt-4">
                Forgot password?
              </h1>
              <p className="text-sigin text-center">
                Enter your email below, you will receive an email instructions.
              </p>
              <div>
                <label
                  for="exampleFormControlInput1 "
                  className="form-label label-input ms-2"
                >
                  Email
                </label>
                <div className="input-div-mobile ms-2">
                  <input
                    type="email"
                    className="border-0 input-mobile"
                    id="exampleFormControlInput1"
                    placeholder="catherine.shaw@gmail.com"
                  />
                  <i className="email-font-mobile fa-regular fa-envelope"></i>
                </div>
              </div>
              <button
                className="btn btn-primary ms-2 d-flex text-center recovery-btn-mobile"
                type="button"
              >
                Start recovery
              </button>
              <div className="key-paid"></div>
            </div>
            <img src={line2} alt="line2" className="line2"></img>
          </div>
        </div>
      </div>

      {/* Sign in section mobie end */}
    </>
  );
}

export default Forgot;
