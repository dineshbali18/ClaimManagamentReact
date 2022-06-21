import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import ClaimStatus from "./ClaimStatus";
import SubmitClaim from "./SubmitClaim";
import { useCookies } from "react-cookie";
import { postSubmitClaim } from "./helper/dashboardapicalls";
import ViewBills from "./ViewBills";
import Base from "./Base";
// import Routers from './Routes';

function UserDashboard() {
  const [cookies, setCookie, removeCookie] = useCookies(['cookie-name']);
  const [email,setEmail]=useState(cookies.username)

  const [claimData, setClaimData] = useState({
    description:"",
    remarks:"",
    claimAmount:"",
    memberId:cookies.username,
    hospitalId:"",
    benefitId:"",
    policyId:""
  });
  const [status,setStatus]=useState('not yet submitted')
  const [des,setDescription]=useState('')
  const [check,setCheck]=useState(0)

  const {description,remarks,claimAmount,memberId,hospitalId,benefitId,policyId}=claimData;

  const handleChange = name => event => {
    setClaimData({ ...claimData, error: false, [name]: event.target.value });
  };
  const onSubmit=event=>{
    event.preventDefault();
    postSubmitClaim(claimData,cookies.token).then(data=>{
        // console.log(data);
        setDescription(data.claimDescription)
        setStatus(data.claimStatus)
    }).catch(err=>{console.log(err)})
    // setCheck(1)
  }

  const Claimform=()=>{
    return(
    <>
        <form style={{fontSize:'20px'}}>
        <div className="form-group">
          <label className="badge badge-success mr-2" >Description</label>
          <input
            onChange={handleChange("description")}
            value={description}
            style={{fontSize:'18px'}}
            className="form-control"
            type="description"
          />
        </div>

        <div className="form-group">
          <label className="badge badge-success mr-2">Remarks</label>
          <input
            onChange={handleChange("remarks")}
            value={remarks}
            style={{fontSize:'18px'}}
            className="form-control"
            type="remarks"
          />
        </div>
        <div className="form-group">
          <label className="badge badge-success mr-2">ClaimAmount</label>
          <input
            onChange={handleChange("claimAmount")}
            value={claimAmount}
            style={{fontSize:'18px'}}
            className="form-control"
            type="claimAmount"
          />
        </div>
        <div className="form-group">
          <label className="badge badge-success mr-2">HospitalId</label>
          <input
            onChange={handleChange("hospitalId")}
            value={hospitalId}
            style={{fontSize:'18px'}}
            className="form-control"
            type="hospitalId"
          />
        </div>
        <div className="form-group">
          <label className="badge badge-success mr-2">BenefitId</label>
          <input
            onChange={handleChange("benefitId")}
            value={benefitId}
            style={{fontSize:'18px'}}
            className="form-control"
            type="benefitId"
          />
        </div>
        <div className="form-group">
          <label className="badge badge-success mr-2">PolicyId</label>
          <input
            onChange={handleChange("policyId")}
            value={policyId}
            style={{fontSize:'18px'}}
            className="form-control"
            type="policyId"
          />
        </div>

        <button onClick={onSubmit} className="btn btn-success btn-block mb-2" style={{fontSize:'20px'}}>
          Submit
        </button>
      </form>
    </>
    )
}

const successMessage = () => {
  return (
    <div className="row" style={{backgroundColor:'rgba(8, 142, 144, 0.7)'}}>
      <div className="col-md-6 offset-sm-3 text-left">
        <div
          className="alert alert-success"
          style={{fontWeight:'bold'}}
        >
          Status: {status} <br/>
          Description:  {des}
        </div>
      </div>
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
    <Link to="/user/dashboard" className="btn btn-md btn-dark mb-3" style={{fontSize:'20px'}}>
        User Home
      </Link>
      <div className="row bg-dark text-white rounded">
        <div className="col-md-8 offset-md-2">
        {successMessage()}
          {Claimform()}
        </div>
      </div>
      </Base>
    </>
  );
}

export default UserDashboard;

