import React, {Fragment} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import aboutImg from '../../src/Images/damian-zaleski-RYyr-k3Ysqg-unsplash.jpg'

const About = () => {
    return (
        <Fragment>
        <section className = "About p5">
        <div className = "container">
        <div className = "row">
        <div className = "col-sm-5">
        <h2>About Us</h2>
        <ul className = "list-unstyled">
         <li>
          <h5>Welcome to ESC</h5>
          <p id = "paragraph" class="text-secondary">ESC is Saudi developed firm that was established in 2014 at Jedda-Saudi Arabia, it is an independent company offering high quality technical in the Environmental and Marine Environmental Protection services. Services are provided in the disciplines of environmental consulting, preparing and submitting the Environmental Impact Assessment Reports, Social Impact Assessment, and Management of solid and liquid wastes, field sampling and environmental testing. ESC also provides wide marine environmental services such as marine survey for EIA and Environmental monitoring purpose, biodiversity distribution and destruction assessment for Economic Value assessment. ESC team has a good experience in the marine fauna and flora restoration, and marine biological and chemical monitoring.
          </p>
         </li>
        </ul>
        </div>
         <div className = "col-sm-6">
          <img id = "aboutImg" src = {aboutImg} alt = "./"/>
         </div>
        </div>    
        </div>  
        </section>
      </Fragment> 
    )
}

export default About
