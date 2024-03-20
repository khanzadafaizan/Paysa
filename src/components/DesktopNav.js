import React from "react";
import userimg from "../images/Img.png";
import { Link } from "react-router-dom";

export default function DesktopNav(props) {
  return (
    <div className="row pb-2">
      <div className="col-md-12 ">
        <div className="d-flex justify-content-between">
          <h6 className="dashborad mt-3" href="#">
            {props.title}
          </h6>
          <form className="search-icon-div d-flex align-items-center">
            <div className="input-group  me-2 border rounded">
              <span className="input-group-text search-icon-span border-0 ">
                <i className="fa-solid  search-icon fa-magnifying-glass"></i>
              </span>
              <input
                className="form-control search-input border search-input"
                type="search"
                placeholder="Type to search …"
                aria-label="Search"
              />
            </div>

            <button
              type="submit"
              className="bell-icon-btn border rounded-2 bg-light btn-outline-secondary me-2"
            >
              <i className="fa-regular fa-bell"></i>
            </button>

            <Link to={"/profile"}>
              <img src={userimg} alt="userimg" className=""></img>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
