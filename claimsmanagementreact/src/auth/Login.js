import { useEffect, useRef, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import {useCookies} from 'react-cookie'
import { signin } from "./helper/loginapicalls";
import UserDashboard from "../user/UserDashboard";
import "./styles.css"

function Login() {
  const [values, setValues] = useState({
    username: "Dinesh",
    password: "Bali",
    error: "",
    didRedirect:false
  });

  const [token,setToken]=useState('')
  const [cookies, setCookie, removeCookie] = useCookies(['cookie-name']);

  const { username, password, error,didRedirect } = values;
  // const { user } = isAutheticated();

  const handleChange = name => event => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };


  // const performRedirect = () => {
  //   if (didRedirect) {
  //       return <Redirect to="/user/dashboard" />;
  //   }
  //   // if (isAutheticated()) {
  //   //   return <Redirect to="/" />;
  //   // }
  // };


  const onSubmit = event => {
    event.preventDefault();
    setValues({ ...values, error: false});
    signin({ username, password })
      .then(data => {
        // console.log("front...............",data);
        // token.current=data.jwtAuthToken;
        setToken(data.jwtAuthToken);
        setValues({...values,didRedirect:true})
        setCookie('token',data.jwtAuthToken)
        setCookie('username',data.username)
        window.location.reload();
         
        // if (data.error) {
        //   setValues({ ...values, error: data.error, loading: false });
        // } else {

          // authenticate(data, () => {
          //   setValues({
          //     ...values,
          //     didRedirect: true
          //   });
          // });
        // }
      })
      .catch(()=>{console.log("signin request failed")});
  };


  const errorMessage = () => {
    return (
      <div className="row" style={{backgroundColor:'rgba(8, 142, 144, 0.7)'}}>
        <div className="col-md-6 offset-sm-3 text-left">
          <div
            className="alert alert-danger"
            style={{fontWeight:'bold'}}
          >
            Username or Password is Incorrect
          </div>
        </div>
      </div>
    );
  };

  const signInForm = () => {
    return (
      <>
      {cookies.token=="undefined"?
      <>{errorMessage()}</>:<></>}
        <div className="wrap"> 
        <div className="contain"> 
         <div className="head"><h1>_LOGIN_</h1></div>
         <div>
         <form className="form"> 
            <div>
            {/* <input type="text" placeholder="user_name"/>username{token.current} */}
              <input
                onChange={handleChange("username")}
                value={username}
                type="username"/>
              </div>

          <div>     
           {/* <input type="password" placeholder="password" />  */}
              <input
                onChange={handleChange("password")}
                value={password}
                type="password" /></div>
                
            <div>
              <br></br>
            <button onClick={(e)=>{onSubmit(e)}}>
              LOG IN
            </button>
            </div>
            </form> 
            </div>
   </div> 
   <div></div>
   <ul className="bg-bubbles"> 
    <li></li> 
    <li></li> 
    <li></li> 
    <li></li> 
    <li></li> 
    <li></li> 
    <li></li> 
    <li></li> 
    <li></li> 
    <li></li> 
   </ul> 
  </div> 
</>
    );
  };
  return (
    <div>
    {/* {loadingMessage()} */}
      {/* {errorMessage()} */}
      {/* {username} */}
      {cookies.token!=null&&cookies.token!="undefined"?<>
      
      <UserDashboard/></>:signInForm()}
      {/* {performRedirect()} */}
    </div>
  );
}

export default Login;