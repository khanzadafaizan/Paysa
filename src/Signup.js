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
function Signup() {
  return (
    <>
      <div className="container-fluid d-none d-md-block">
        <div className="row">
          {/* Sign in section left start */}
          <div className="col-md-6 ">
            <div className="ms-5 mt-5 main">
              <Link to={"/"} className="Link">
                <div className="Logo-div-main">
                  <div className="Logo-div rounded-circle">
                    <img src={pLogo} alt={"P-Logo"} className="p-logo me-3" />
                  </div>
                  <div className="mt-2">
                    <a className="logo-heading">Paysa</a>
                  </div>
                </div>
              </Link>
              <h1 className="heading-sign mt-5 pt-4">Sign up</h1>
              <p className="text-sigin">
                Before we start, please enter your current location
              </p>
              <label
                for="exampleFormControlInput1 "
                className="form-label label-input"
              >
                Country/Area of Residence
              </label>
              <select
                className="form-select input-select-div select-text mb-2"
                aria-label="Default select example"
              >
                <option selected>United States</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
              <div>
                <label
                  for="exampleFormControlInput1 "
                  className="form-label label-input"
                >
                  Country/Area of Residence
                </label>
                <div className="input-div select-text mb-2">
                  <input
                    type="email"
                    className="border-0 input"
                    id="exampleFormControlInput1"
                    placeholder="catherine.shaw@gmail.com"
                  />
                  <i className="email-font fa-regular fa-envelope"></i>
                </div>

                <label
                  for="inputPassword"
                  className="col-sm-2 col-form-label label-input1"
                >
                  Password
                </label>
                <div className="input-div">
                  <input
                    type="password"
                    className="border-0 input select-text"
                    id="inputPassword"
                    placeholder="Enter your password"
                  />
                  <i className="password-font fa-regular fa-eye-slash"></i>
                </div>
              </div>
              <div className="agree-terms-div">
                <div className="check-box-div mb-2">
                  <input
                    className="form-check-input mt-0 check-box"
                    type="checkbox"
                    value=""
                    aria-label="Checkbox for following text input"
                  />
                  <span className="agree">
                    I agree to receive email updates
                  </span>
                </div>
                <div className="check-box-div">
                  <input
                    className="form-check-input mt-0 check-box"
                    type="checkbox"
                    value=""
                    aria-label="Checkbox for following text input"
                  />
                  <span className="terms">
                    I have read and agree to Terms of Service
                  </span>
                </div>
              </div>
              <button
                className="btn btn-primary d-flex text-center create-btn"
                type="button"
              >
                Create account
              </button>
              <p className="have-account mt-5 py-5">
                Already registered?
                <Link to={"/signin"} className="create-account ms-2">
                  Sign in
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
              Fintech is the technology and innovation that aims to compete with
              traditional financial methods.
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

            <Link to={"/"} className="Link">
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
        <div className="row rounded-top-3 sign-mobile-main">
          <div className="col-12   ">
            <div className=" mt-5 main">
              <h1 className="heading-sign-mobile text-center mt-5 pt-4">
                Sign up
              </h1>
              <p className="text-sigin text-center">
                Take the next step and sign up to your account
              </p>
              <label
                for="exampleFormControlInput1 "
                className="form-label ms-2 label-input"
              >
                Country/Area of Residence
              </label>
              <select
                className="form-select input-select-div-mobile ms-2 select-text-mobile mb-2"
                aria-label="Default select example"
              >
                <option selected>United States</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
              <div className="ms-2">
                <label
                  for="exampleFormControlInput1 "
                  className="form-label label-input"
                >
                  Country/Area of Residence
                </label>
                <div className="input-div-mobile select-text mb-2">
                  <input
                    type="email"
                    className="border-0 input-mobile"
                    id="exampleFormControlInput1"
                    placeholder="catherine.shaw@gmail.com"
                  />
                  <i className="email-font fa-regular fa-envelope"></i>
                </div>

                <label
                  for="inputPassword"
                  className="col-sm-2 col-form-label label-input1"
                >
                  Password
                </label>
                <div className="input-div-mobile">
                  <input
                    type="password"
                    className="border-0 input-mobile select-text"
                    id="inputPassword"
                    placeholder="Enter your password"
                  />
                  <i className="password-font fa-regular fa-eye-slash"></i>
                </div>
              </div>
              <div className="agree-terms-div ms-2">
                <div className="check-box-div mb-2">
                  <input
                    className="form-check-input mt-0 check-box"
                    type="checkbox"
                    value=""
                    aria-label="Checkbox for following text input"
                  />
                  <span className="agree">
                    I agree to receive email updates
                  </span>
                </div>
                <div className="check-box-div">
                  <input
                    className="form-check-input mt-0 check-box"
                    type="checkbox"
                    value=""
                    aria-label="Checkbox for following text input"
                  />
                  <span className="terms">
                    I have read and agree to Terms of Service
                  </span>
                </div>
              </div>
              <button
                className="btn btn-primary ms-2 d-flex text-center create-btn-mobile"
                type="button"
              >
                Create account
              </button>

              <img src={line2} alt="line2" className="line2"></img>
            </div>
          </div>
        </div>
      </div>

      {/* Sign in section mobie end */}
    </>
  );
}

export default Signup;
