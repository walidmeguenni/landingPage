import React from "react";
import{About,FAQ,Feature,Fotter,Pricing,Main,Testimonials,Works} from "./Layout";
import Nav from "./components/nav"
const App =()=>{
    return (
      <>
      <Nav/>
      <Main/>
      <About/>
      <Feature/>  
      <Works/>
      <Pricing/>
      <Testimonials/>
      <FAQ/>
      <Fotter/>
      </>
    );
}

export default App;
