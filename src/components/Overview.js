import React from "react";

export default function Overview() {
  return (
    <div className="row">
      <div className="col-md-12">
        <p className="newyork mt-5">CONTACT INFORMATION</p>
        <div className="row">
          <div className="col-md-2 col-4">
            <h6 className="py-2 details">Phone:</h6>
            <h6 className="py-2 details">E-mail:</h6>
            <h6 className="py-2 details">Site:</h6>
            <h6 className="py-2 details">Address:</h6>
          </div>
          <div className="col-md-10 col-8">
            <h6 className="details-info py-2">+1 123 456 789</h6>
            <h6 className="details-info py-2">hello@jeremyrose.com</h6>
            <h6 className="details-info py-2">www.jeremyrose.com</h6>
            <h6 className="details py-2">
              525 E 68th Street New York, NY 10651-78 156-187-60
            </h6>
          </div>
        </div>
      </div>
      <div className="col-md-12">
        <p className="newyork mt-5">BASSIC INFORMATION</p>
        <div className="row">
          <div className="col-md-2 col-4">
            <h6 className="py-2 details">Birthday:</h6>
            <h6 className="py-2 details">Gender:</h6>
          </div>
          <div className="col-md-10 col-8">
            <h6 className="details py-2">june 5, 1992</h6>
            <h6 className="details py-2">Male</h6>
          </div>
        </div>
      </div>
    </div>
  );
}
