import React, { Fragment } from 'react'
import './esc.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import serviceImg1 from '../../src/Images/noah-buscher-x8ZStukS2PM-unsplash.jpg'

const Services = () => {
    return (
        
        <Fragment>
        <section className = "myServices">
        <div className = "container">
        <div className = "row">
        <div className = "col-sm-6">
        <h2>Services</h2>
        <ul className = "list-unstyled">
         <li>Pollution Control Programs</li>
         <li>Environmental Impact Assessment</li>
         <li>Environmental Site Assessment</li>
         <li>Environmental Data Base</li>
         <li>Environmental Audit</li>
         <li>Environmental Impact Statement</li>
         <li>Environmental Monitoring and Control Program etc.,</li>
        </ul>
        </div>
         <div className = "col-sm-6">
         <img  id = "service1Img" src = {serviceImg1}  alt='' /> 
         </div>
        </div>    
        </div>  
        </section>
       </Fragment> 
    )
}

export default Services
