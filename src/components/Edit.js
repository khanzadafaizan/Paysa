import React from "react";

export default function Edit() {
  return (
    <div className="row">
      <div className="col-md-12">
        <p className="newyork mt-5">EDIT</p>
        <div className="row">
          <div className="col-md-2 col-3">
            <h6 className="py-3 details">Image:</h6>
            <h6 className="py-3 details">Name:</h6>
            <h6 className="py-3 details">E-mail:</h6>
            <h6 className="py-4 details">Site:</h6>
          </div>
          <div className="col-md-10 col-9">
            <div className="input-group py-2 profile-edit-input ">
              <input
                type="file"
                className="form-control"
                id="inputGroupFile02"
              />
            </div>
            <div className="input-group py-2 profile-edit-input">
              <input
                type="text"
                className="form-control"
                placeholder="ENTER YOUR NAME"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>
            <div className="input-group py-3 profile-edit-input">
              <input
                type="email"
                className="form-control"
                placeholder="ENTER YOUR EMAIL"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <span className="input-group-text" id="basic-addon2">
                <i className="email-font fa-regular fa-envelope"></i>
              </span>
            </div>
            <div className="input-group py-2 profile-edit-input">
              <input
                type="text"
                className="form-control"
                placeholder="ENTER YOUR SITE"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <span className="input-group-text" id="basic-addon2">
                @example.com
              </span>
            </div>
          </div>
        </div>
        <div className="col-12 ps-5 ms-0 ms-md-5 pt-3">
          <button
            type="button"
            className="btn border-0 ms-5 py-3 px-5 profile-button"
          >
            <i className="fa-solid fa-check me-1"></i>
            submitted
          </button>
        </div>
      </div>
    </div>
  );
}
