import Header from "./Components/Header";
import CarouselContainer from './Components/CarouselContainer';
import Services from './Components/Services';
import Issues from "./Components/Issues";
import About from "./Components/About";
import { Fragment } from "react";
import Footer from "./Components/Footer";


function App() {
  return (
    <Fragment> 
       <div className="App">
        <Header/>
        <CarouselContainer/>
        <About/>
        <Issues/>
        <Services/>
        <Footer/>
       </div> 
    </Fragment>
  );
}

export default App;
