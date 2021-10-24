import React, { Fragment } from 'react'
import './esc.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import serviceImg1 from '../../src/Images/veeterzy-UwBrS-qRMHo-unsplash.jpg'
import serviceImg2 from '../../src/Images/zq-lee-Q6H4SwjsAdI-unsplash.jpg'
import serviceImg3 from '../../src/Images/american-public-power-association-bv2pvCGMtzg-unsplash.jpg'

const Services = () => {
    return (
        
        <Fragment>
        <section id = "enviromentalServices">
        <div className = "container">
        <div className = "row">
        <div className = "col-sm-6">
        <h2>Enviromental Consulting</h2>
        <ul className = "list-unstyled">
         <li>Pollution Control Programs</li>
         <li>Environmental Impact Assessment</li>
         <li>Environmental Site Assessment</li>
         <li>Environmental Data Base</li>
         <li>Environmental Audit</li>
         <li>Environmental Impact Statement</li>
         <li>Environmental Monitoring and Control Program etc.,</li>
         <li>Environment Risk management</li>
         <li>Environment Value management</li>
         <li>Environmental Project Planning</li>
         <li>Sustainability Development Programs </li>
        </ul>
        </div>
         <div className = "col-sm-6">
         <img  className = "serviceImg" src = {serviceImg1}  alt='' /> 
         </div>
        </div>    
        </div>  
        </section>

        <section id = "marineServices">
        <div className = "container">
        <div className = "row">
        <div className = "col-sm-6">
        <h2>Marine Services</h2>
        <ul className = "list-unstyled">
         <li>Marine fauna and flora survey</li>
         <li>Repair underwater pipelines</li>
         <li>Marine Water and sediment sampling</li>
         <li>Oceanographic monitoring, Bathmetric survey</li>
         <li>Coastal beaches and water Waste Cleanup</li>
         <li>Cleanup of polluted landscapes</li>
         <li>Scientific Assessment for pollution</li>
         <li>Hydrographic and Recirculation Modeling</li>
        </ul>
        </div>
         <div className = "col-sm-6">
         <img  className = "serviceImg" src = {serviceImg2}  alt='' /> 
         </div>
        </div>    
        </div>  
        </section>
        
        <section id = "escServices">
        <div className = "container">
        <div className = "row">
        <div className = "col-sm-6">
        <h2>ESC Enviromental Services</h2>
        <ul className = "list-unstyled">
         <li>Enviromental and scientific consulting</li>
         <li>Preparation the enviromental impact</li>
         <li>Praparing Enviromental records</li>
         <li>Preparing a plan for Dangerous wastes</li>
         <li>Conducting Marine screening</li>
         <li>Quality solutions through the qualification of individuals</li>
        </ul>
        </div>
         <div className = "col-sm-6">
         <img  className = "serviceImg" src = {serviceImg3}  alt='' /> 
         </div>
        </div>    
        </div>  
        </section>
       </Fragment> 
    )
}

export default Services
