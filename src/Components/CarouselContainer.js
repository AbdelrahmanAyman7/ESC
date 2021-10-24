import React, { Fragment } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Carousel from 'react-bootstrap/Carousel'
import './esc.css'
import heroImg1 from '../../src/Images/imat-bagja-gumilar-jwTvCQQJXh0-unsplash.jpg'
import heroImg2 from '../../src/Images/noaa-AQx2VH2731k-unsplash.jpg'
import heroImg3 from '../../src/Images/alexander-popov-b8vCfi9UsTU-unsplash.jpg'
import { Link, animateScroll as scroll } from "react-scroll";

const CarouselContainer = () => {
    return (
   <Fragment>  
    <Carousel fade>
    <Carousel.Item>
    <img
      className = "d-block w-100"
      src= {heroImg1}
      alt="" 
    />
    <Carousel.Caption>
      <h2>
      We team up with a wide variety of partners on environmental projects where we can make the most impact.
     </h2>
     <Link
           activeClass = "active"
           to = "enviromentalServices"
           spy = {true}
           smooth = {true}
           offset = {-70}
           duration = {300}
           >
           <a className = "Donate" href = "./">Donate</a>
          </Link>
      <div class="d-grid gap-2">
    </div>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className = "d-block w-100"
      src= {heroImg2}
      alt=""
    />

    <Carousel.Caption>
      <h2>
      The science says there’s no time to waste. EDF and our partners are launching big solutions for us.
      </h2>
      <Link
           activeClass = "active"
           to = "marineServices"
           spy = {true}
           smooth = {true}
           offset = {-70}
           duration = {300}
           >
           <a className = "Donate" href = "./">Donate</a>
          </Link>
     
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className = "d-block w-100"
      src= {heroImg3}
      alt=""
    />
    
    <Carousel.Caption>
      <h2>We take on climate change and other grave threats by identifying what’s most urgent and where we can make the most difference.</h2>
      <Link
      activeClass = "active"
      to = "social"
      spy = {true}
      smooth = {true}
      offset = {-70}
      duration = {300}
      >
      <a className = "Donate" href = "./">Donate</a>
     </Link>
    </Carousel.Caption>
  </Carousel.Item>
  </Carousel>
  <p id = "esc">ESC is Saudi developed firm that was established in 2014 at Jedda-Saudi Arabia, it is an independent company offering high quality technical in the Environmental and Marine Environmental Protection services.</p> 
  </Fragment> 
    )
}

export default CarouselContainer
