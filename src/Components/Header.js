import React, { Fragment, useState } from 'react'
import './esc.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.min.js";
import { FaEnvira } from 'react-icons/fa';
import { Link, animateScroll as scroll } from "react-scroll";

const Header = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const handleNav = () => {
    setIsNavCollapsed(!isNavCollapsed);
  }
    return (
      <Fragment>
      <nav class="navbar navbar-expand-lg navbar-light bg-light" id = "myNav">
      <a class="navbar-brand" href="./">ESC</a>
      <div className = "myLogo"><FaEnvira size = "1.5em"/></div>
      
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded= {!isNavCollapsed ? true: false} aria-label="Toggle navigation" onClick = {handleNav}>
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class= {`${isNavCollapsed ? 'collapse': ''} navbar-collapse`} id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active " >
            <a class="nav-link" href="./">Home</a>
          </li>
        
          <li class="nav-item active">
          <Link
           activeClass = "active"
           to = "About"
           spy = {true}
           smooth = {true}
           offset = {-70}
           duration = {300}
           >
            <a class="nav-link" href="./">About Us</a>
          </Link>
          </li>
    
          <li class="nav-item active">
          <Link
           activeClass = "active"
           to = "myServices"
           spy = {true}
           smooth = {true}
           offset = {-70}
           duration = {300}
           >
            <a class="nav-link" href="./">Services</a>
          </Link>
          </li>

          <li class="nav-item active">
          <Link
          activeClass = "active"
          to = "social"
          spy = {true}
          smooth = {true}
          offset = {-70}
          duration = {300}
          >
            <a class="nav-link" href="./">Contact Us</a>
          </Link>
          </li>
        </ul>
      </div>
    </nav>
    </Fragment>
       
    )
}

export default Header
