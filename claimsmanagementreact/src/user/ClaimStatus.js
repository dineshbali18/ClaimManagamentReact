import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { Routes, Route, Link } from "react-router-dom";
import { getClaimIds, getclaimStatus } from "./helper/dashboardapicalls";
import '../App.css'
import Base from "./Base";
// import Routers from './Routes';

function ClaimStatus() {
  const [claim,setClaim]=useState('')
    const [claimIds,setClaimIds]=useState([]);
    const [cookies, setCookie, removeCookie] = useCookies(['cookie-name']);
    const [claimStatusData,setData]=useState({
        claimStatus:'',
        claimDes:''
    })


    const {claimDes,claimStatus}=claimStatusData;

    useEffect(()=>{
      getClaimIds(cookies.token,cookies.username).then((data)=>{
        console.log(data);
        setClaimIds(data.claimIdsList)
      })
      .catch((err)=>{
        console.log(err);
      })
    },[])

    const onSubmit=(event)=>{
      console.log(claim);
        event.preventDefault();
        getclaimStatus(cookies.token,claim).then((data)=>{
          console.log(data);
            setData({claimDes:data.claimDescription,claimStatus:data.claimStatus})
        }).catch((err)=>{
            console.log(err);
        })
    }
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

      const adminRightSide=()=>{
        return(
            <>
            <div className="card mb-4" style={{fontSize:'16px'}}>
        <h4 className="card-header"  style={{fontSize:'25px'}}>Bill Information</h4>
        <ul className="list-group">
        <li className="list-group-item">
            <span className="badge badge-success mr-2">Select Claim Id: </span>
            <select style={{fontSize:'15px'}} onChange={(e)=>{
            setClaim(e.target.value)}}
          className="form-control"
          placeholder="claim"
          value={claim}>
              <option>Select</option>
            {claimIds.map((cid, index) => {
              return(
              <option key={index} value={cid}>
                {cid}
              </option>
              )
      })}
                
            </select>
            <button style={{margin:'4px'}} onClick={(e)=>{onSubmit(e)}}>Get claim Data</button>
          </li>
          <li className="list-group-item">
            <span className="badge badge-success mr-2">Claim Status: </span> {claimStatus}
          </li>
          <li className="list-group-item">
            <span className="badge badge-success mr-2">Claim Description: </span> {claimDes}
          </li>
          </ul>
          </div>
            </>
        )
      }
  return (
    <div>
    {/* <Link to='/signout' onClick={()=>{removeCookie("token");removeCookie("username")}}>Sign out</Link> */}
    <Base
      title="Welcome to User Dashboard"
      description="Manage all of your claims here"
      className="container bg-info p-4"
    >
    <div className="row">
        <div className="col-3 ml-4">{adminLeftSide()}</div>
        <div className="col-8 ml-0">{adminRightSide()}</div>
      </div>
      </Base>
    </div>
  );
}

export default ClaimStatus;
