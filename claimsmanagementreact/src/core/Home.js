import React from "react";
import "./styles.css"
import { Routes, Route, Link } from "react-router-dom";
import Navbar from "./Navbar";

function Home() {

const Login=()=>{

  <Link to='/login'></Link>

}


  return (
    <div>
      
  <div className="homepage">
  <section id="h-eader">
    <div className="h-eader c-ontainer">
      <div className="n-avbar">
        <div className="b-rand">
          <a href="#h-ero">
            <h1><span>C</span>ogzkart <span>C</span>laims</h1>
          </a>
        </div>
        <div className="n-avlist">
          <div className="h-amburger">
            <div className="b-ar"></div>
          </div>
          <ul>
            <li><a href="#h-ero" data-after="Home">Home</a></li>
            <li><a href="#contact" data-after="Contact">Contact</a></li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  </div>
  
  <div>
  <section id="h-ero">
    <div className="h-ero c-ontainer">
      <div>
        <div>
          <h1>Managing claims <span></span></h1>
          <h1>Made More<span></span></h1>
          <h1><b>EASY :)</b> <span></span></h1>
          <Link type="button" className="cta" to='/login'>Log-In here</Link>
      </div>
      </div>
    </div>
  </section>
  </div>

  <div>
  <section id="f-ooter">
    <div className="f-ooter c-ontainer">
      <div className="b-rand">
        <h1><span>C</span>ogzkart <span>C</span>laims</h1>
      </div>
      <h2>Your Complete Web Solution</h2>
      <p>Copyright © 2020 Arfan. All rights reserved</p>
    </div>
  </section>
</div>


    </div>
  );
}

export default Home;
