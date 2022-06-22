import React from "react";
import Navbar from "../core/Navbar";
// import Menu from "./Menu";

const Base = ({
  title = "My Title",
  description = "My desription",
  className = "text-white p-4",
  children
}) => (
  <div>
    <Navbar/>
    <div className="container-fluid">
      <div style={{color:'white'}}className="jumbotron text-black text-center">
        <h2 style={{color:'black'}} className="display-2">{title}</h2>
        <p style={{color:'black'}} className="lead display-4">{description}</p>
      </div>
      <div className={className}>{children}</div>
    </div>
    <div style={{margin:'80px'}}>

    </div>
    <footer className="footer bg-dark mt-auto py-3 fixed-bottom">
      <div className="container-fluid bg-info text-white text-center py-3">
        <h4>If you got any questions, feel free to reach out!</h4>
        <button className="btn btn-warning btn-lg">Contact Us</button>
      </div>
      
    </footer>
  </div>
);

export default Base;
