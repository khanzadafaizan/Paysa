import React from "react";
import { Link } from "react-router-dom";
import Footer from "./components/Footer";
import SideBar from "./components/SideBar";
import DesktopFooter from "./components/DesktopFooter";
import MobileNav from "./components/MobileNav";
import DesktopNav from "./components/DesktopNav";
import CardsVisa from "./components/CardsVisa";

function Physical() {
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
            <DesktopNav title={"Physical"} />
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
                  className="Link btn btn-outline-dark border-0 accouts-btn"
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
                {/* Master card start */}
                
                {/* Master card end */}
                {/* Master demo card start */}
                
                {/* Master demo card end */}
              </div>
            </div>

            {/* Card section top end */}

            {/* Cards section start */}

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
        <MobileNav title={"Physical"} />
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

        {/* Cards navbar end */}

        <div className="row my-4">
          <div className="col-md-12 mx-3 d-flex flex-column gap-2">
            {/* Visa card start */}
          <CardsVisa/>
            {/* Visa card end */}
          </div>
          
            {/* Master demo card end */}
          </div>

        </div>

        {/* Dashborad section start */}

        {/* Dashborad section end */}

        {/* Cards Mobile section end */}
      <Footer />
    </>
  );
}

export default Physical;
