import React,{Fragment} from 'react'
import cardImg1 from '../../src/Images/thisisengineering-raeng-5Vb9SeLbiWw-unsplash.jpg'
import cardImg2 from '../../src/Images/american-public-power-association-Ibvf-7yMjRE-unsplash.jpg'
import cardImg3 from '../../src/Images/andreas-gucklhorn-7razCd-RUGs-unsplash.jpg'
import cardImg4 from '../../src/Images/markus-spiske-Yoi8R1nnBtA-unsplash.jpg'
const Issues = () => {

     const cards = [{
        img: cardImg1,
        id: 1,
        title: "Climate",
        description: "Building last ways to stabilize the climate"
     },
     { 
       img: cardImg2,
       id: 2,
       title: "Energy",
       description: "Making the shift toward clean energy faster",    
     },
     {
        img: cardImg3,
        id: 3,
        title: "Ecosystems",
        description: "Making the shift toward clean energy faster",    
      },
 
      {
        img: cardImg4,
        id: 4,
        title: "Health",
        description: "Tackling air pollution and toxic chemicals",    
      },
    ]

    return (
     <Fragment>  
     <h2 id = "issue">Issues we address</h2>
     <h3 id = "exploreIssue">Explore the full range of our work around the world.</h3>
        <div className="container col-12">
        <div className="row"> 
        {cards.map((card) => ( 
           
         <div className = "card col-sm-2" key = {card.id}>
         <img src = {card.img} className = "card-img-top" alt = {card.title} />
         <h5 className = "card-title">{card.title}</h5>
         <div className = "card-body">
          <p className ="card-description">{card.description}</p>
          </div>
         </div>
     ))}
     </div>
     </div>
     </Fragment>

      

    )}

export default Issues
