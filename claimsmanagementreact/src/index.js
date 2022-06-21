import React from 'react';
import ReactDOM from 'react-dom/client';
// import SwitchRoute from "./SwitchRoute"
import Home from "./core/Home"
import UserDashboard from './user/UserDashboard';
import { BrowserRouter as Router,Routes,Route, Navigate } from 'react-router-dom';
import Login from './auth/Login';
import ViewBills from './user/ViewBills';
import ClaimStatus from './user/ClaimStatus';
import SubmitClaim from './user/SubmitClaim';

// ReactDOM.render(<SwitchRoute />, document.getElementById("root"));

// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signout' element={<Navigate replace to="/login"/>}/>
      <Route path="/user/dashboard" element={<UserDashboard/>}/>
      <Route path='/user/viewbills' element={<ViewBills/>}/>
      <Route path='/user/getclaimstatus' element={<ClaimStatus/>}/>
      <Route path='/user/submitclaim' element={<SubmitClaim/>}/>
    </Routes>
  </Router>
);