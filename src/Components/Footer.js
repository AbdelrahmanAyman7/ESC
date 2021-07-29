import React, { Fragment } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { FaEnvira } from 'react-icons/fa';

const Footer = () => {
    return (
        <Fragment>
        <section className = "social">
        <div className = "socialContainer">
        <ul className = "socialList">
        <a href = "https://twitter.com/envsup?s=20"> <li id = "twitter"></li></a>
        <li id = "facebook"></li>
        <li id = "linkedin"></li>
      
        </ul>
        </div>

        <div className = "footerLinks">
        <ul className = "serviceLinks">
         <li className = "serviceOne">serviceOne</li>
         <li className = "serviceTwo">serviceOne</li>
         <li className = "serviceThree">serviceOne</li>
         <li className = "serviceFour">serviceOne</li>
        </ul>  
       </div>
      <div className = "contactUs">
      <div className = "downLogo"><FaEnvira size = "3.5em"/> </div>
      <div className = "info">
      <a className = "phone" href = "tel:+966590031110">tel:+966590031110</a>
      <a className = "gmail" href = "info@envsup.com">info@envsup.com</a>
      </div>
     
      </div>
        </section>
        </Fragment>
    )
}

export default Footer
