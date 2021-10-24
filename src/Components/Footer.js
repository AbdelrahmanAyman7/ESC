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
        <a href = "https://www.facebook.com/envsup"> <li id = "facebook"></li></a>
        <li id = "linkedin"></li>
      
        </ul>
        </div>

        <div className = "footerLinks">
        <ul className = "serviceLinks">
         <h5>Services</h5>
         <li className = "serviceOne">Enviromental consulting</li>
         <li className = "serviceTwo">Marine services</li>
         <li className = "serviceThree">ESC Enviromental Services</li>
        </ul>  
       </div>
      <div className = "contactUs">
      <div className = "downLogo"><FaEnvira size = "2.5em"/> </div>
    
      <a className = "phone" href = "tel:+966590031110">tel:+966590031110</a>
      <a className = "gmail" href = "https://mail.google.com/mail/u/0/#search/info%40envsup.com">info@envsup.com</a>
    
     
      </div>
        </section>
        </Fragment>
    )
}

export default Footer
