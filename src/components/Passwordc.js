import React from "react";

export default function Passwordc() {
  return (
    <div className="row">
      <div className="col-md-12">
        <p className="newyork mt-5">CHANGE PASSWORD</p>
        <div className="row pt-3">
          <div className="col-md-3 col-3">
            <h6 className="d-none d-md-block py-4 details">Old Password</h6>
            <h6 className="d-none d-md-block py-4  details">New Password</h6>
            <h6 className="d-none d-md-block py-4  details">Confirm</h6>
            <h6 className="d-block d-md-none py-4  details">Old</h6>
            <h6 className="d-block d-md-none py-4  details">New</h6>
            <h6 className="d-block d-md-none py-4  details">Confirm</h6>
          </div>
          <div className="col-md-9 col-9">
            <div className="input-group py-3 profile-edit-input">
              <input
                type="text"
                className="form-control"
                placeholder="ENTER YOUR OLD PASSWORD"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
            </div>
            <div className="input-group py-3 profile-edit-input">
              <input
                type="text"
                className="form-control"
                placeholder="ENTER YOUR NEW PASSWORD"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
            </div>
            <div className="input-group py-3 profile-edit-input">
              <input
                type="text"
                className="form-control"
                placeholder="ENTER YOUR NEW PASSWORD"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
            </div>
          </div>
          <div className="col-12 ps-0 ps-md-5 ms-0 ms-md-5 pt-3">
            <button
              type="button"
              className="btn border-0 ms-5 py-3 px-5 profile-button"
            >
              <i className="fa-solid fa-key me-1"></i>
              Change password
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
