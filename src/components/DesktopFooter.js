import React from "react";

export default function DesktopFooter() {
  return (
    <div className="row ">
      <div className=" pt-5 col-md-2 side-bar ">
        <div className="col-12 ms-2 mt-4 ">
          <span className="dashborad-side ">
            <i className="fa-solid fa-gear side-plus-icon me-3"></i>
            Profile Settings
          </span>
        </div>
      </div>
      <div className=" mt-5 col-md-10 border-top ">
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
  );
}
