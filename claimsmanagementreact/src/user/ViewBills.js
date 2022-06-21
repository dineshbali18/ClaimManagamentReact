import React, { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import ClaimStatus from "./ClaimStatus";
import SubmitClaim from "./SubmitClaim";
import { useCookies } from "react-cookie";
import ViewBills from "./ViewBills";
import Base from "./Base";
import { getbills } from "./helper/dashboardapicalls";
// import Routers from './Routes';

function UserDashboard() {
    const [cookies, setCookie, removeCookie] = useCookies(['cookie-name']);
    const [bills,setBills]=useState([]);
  
    // const {policyId,dueAmount,lastPaidDate,lateCharge,dueDate}=bills;
    const getbillsData=()=>{
      getbills(cookies.token,cookies.username).then((data)=>{
          console.log(data);
          setBills(data)
  
      })
      .catch((err)=>{console.log(err)});
    }

    useEffect(()=>{
      getbillsData();
    },[])

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

  const adminRightSide = (bill) => {
    console.log("frontend",bill);
    const {policyId,dueAmount,lateCharge,lastPaidDate,dueDate}=bill;
    return (
      <div className="card mb-4 m-2">
        <h4 className="card-header">Bill Information</h4>
        <ul className="list-group">
          <li className="list-group-item" style={{fontSize:'21px'}}>
            <span className="badge badge-success mr-2">policyId:</span> {policyId}
          </li>
          <li className="list-group-item" style={{fontSize:'21px'}}>
            <span className="badge badge-success mr-2">dueAmount:</span> {dueAmount}
          </li>
          <li className="list-group-item" style={{fontSize:'21px'}}>
            <span className="badge badge-success mr-2">lateCharge:</span> {lateCharge}
          </li>
          <li className="list-group-item" style={{fontSize:'21px'}}>
            <span className="badge badge-success mr-2">lastPaidDate:</span> {lastPaidDate}
          </li>
          <li className="list-group-item"style={{fontSize:'21px'}}>
            <span className="badge badge-success mr-2">dueDate:</span> {dueDate}
          </li>

          <li className="list-group-item" style={{fontSize:'15px'}}>
            <span className="badge badge-danger">Open</span>
          </li>
        </ul>
      </div>
    );
  };

  return (
    <>
    <Base
      title="Welcome to Your Dashboard"
      description="Manage all of your claims here"
      className="container bg-success p-4"
    >
    <div className="row">
        <div className="col-3 ml-4">{adminLeftSide()}</div>
        {bills.map((bill,index)=>{
          return (
            <div  key={index}>{adminRightSide(bill)}</div>
          )
        })}
      </div>
      </Base>
    </>
  );
}

export default UserDashboard;

