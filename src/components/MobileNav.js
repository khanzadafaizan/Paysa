import React from 'react'
import userimg from "../images/Img.png";
import { Link } from "react-router-dom";


export default function MobileNav(props) {
  return (
    <div className="row border-bottom py-2 ">
    <div className="col-md-12 ">
      <div className="d-flex justify-content-between">
        <div className="d-flex align-items-center justify-content-between">
          <h6 className="dashborad mt-3" href="#">
            {props.title}
          </h6>
        </div>
        <div className="d-flex align-items-center justify-content-between">
          <button
            type="submit"
            className="bell-icon-btn border rounded-2 bg-light btn-outline-secondary me-2"
          >
            <i className="fa-regular fa-bell"></i>
          </button>

          <Link to={"/profile"}>
            <img src={userimg} alt="userimg" className=""></img>
          </Link>
        </div>
      </div>
    </div>
  </div>
  )
}
