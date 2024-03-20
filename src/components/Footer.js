import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  const [show, setShow] = useState(true);
  const iconChange = () => {
    setShow(!show);
  };
  return (
    <>
      <div className="container-fluid pt-3 d-md-none d-block sticky-bottom bg-light">
        <div className="row">
          <div className="col-12 d-flex justify-content-around">
            <button type="button" className="btn footer-button ">
              <Link
                to={"/dashborad"}
                className={`${show ? "Link d-block" : "d-none"}`}
              >
                <i className="fa-solid fa-circle-half-stroke footer-icon"></i>
              </Link>
              <Link
                to={"/cards"}
                className={`${show ? "Link d-none" : " d-block"}`}
              >
                <i className="fa-regular fa-credit-card footer-icon"></i>
              </Link>
            </button>
            <button type="button" className=" btn footer-button  ">
              <Link
                to={"/accounts"}
                className={`${show ? "Link d-block" : "d-none"}`}
              >
                <i className="fa-solid fa-laptop footer-icon"></i>
              </Link>
              <Link
                to={"/transactions"}
                className={`${show ? "Link d-none" : "d-block"}`}
              >
                <i className="fa-solid fa-repeat footer-icon"></i>
              </Link>
            </button>
            <button type="button" className=" btn footer-button  ">
              <Link className="Link">
                <i className="fa-solid fa-arrow-trend-up footer-icon"></i>
              </Link>
            </button>
            <button type="button" className=" btn footer-button  ">
              <Link
                to={"/invoicing"}
                className={`${show ? "Link d-block" : "d-none"}`}
              >
                <i className="fa-solid fa-chart-line footer-icon"></i>
              </Link>
              <Link
                to={"/pricing"}
                className={`${show ? "Link d-none" : "d-block"}`}
              >
                <i className="fa-solid fa-chart-simple footer-icon"></i>
              </Link>
            </button>
            <button
              type="button"
              className=" btn footer-button  "
              onClick={iconChange}
            >
              <i className="fa-solid fa-ellipsis footer-icon"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
