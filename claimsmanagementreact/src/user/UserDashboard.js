import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import ClaimStatus from "./ClaimStatus";
import SubmitClaim from "./SubmitClaim";
import { useCookies } from "react-cookie";
import ViewBills from "./ViewBills";
import Base from "./Base";
// import Menu from "./Menu";
// import Routers from './Routes';

function UserDashboard() {
  const [cookies, setCookie, removeCookie] = useCookies(['cookie-name']);
  const [email,setEmail]=useState(cookies.username)

  const adminLeftSide = () => {
    return (
      <div className="card">
        <h4 className="card-header bg-dark text-white display-4">User Navigation</h4>
        <ul className="list-group">
          <li className="list-group-item">
            <Link to="/user/viewbills" className="nav-link text-success" style={{fontSize:'21px'}}>
              View Bills
            </Link>
          </li>
          <li className="list-group-item">
            <Link to="/user/submitclaim" className="nav-link text-success" style={{fontSize:'21px'}}>
              Submit Claim
            </Link>
          </li>
          <li className="list-group-item">
            <Link to="/user/getclaimstatus" className="nav-link text-success" style={{fontSize:'21px'}}>
              Claim Status
            </Link>
          </li>
        </ul>
      </div>
    );
  };

  const adminRightSide = () => {
    return (
      <div className="card mb-4">
        <h4 className="card-header display-4">User Information</h4>
        <ul className="list-group">
          <li className="list-group-item"  style={{fontSize:'21px'}}>
            <span className="badge badge-success mr-2">Email:</span> {email}
          </li>

          <li className="list-group-item" style={{fontSize:'21px'}}>
            <span className="badge badge-danger">User Area</span>
          </li>
        </ul>
      </div>
    );
  };

  return (
    <>
    <Base
      title="Welcome to User Dashboard"
      description="Manage all of your claims here"
      className="container bg-success p-4"
    >
    <div className="row" style={{marginBottom:'44px',marginTop:'30px'}}>
        <div className="col-3 ml-4">{adminLeftSide()}</div>
        <div className="col-8 ml-0">{adminRightSide()}</div>
      </div>
      </Base>
    </>
  );
}

export default UserDashboard;

