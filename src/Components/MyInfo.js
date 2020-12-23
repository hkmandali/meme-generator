import React from "react"

import Header from "./Header"
import MainComponent from "./MainComponent"
import Footer from "./Footer"

function MyInfo(){
    return (
      <div>
        {/* <h1>Hemanth Mandali</h1>
        <p> I would like to visit the below places </p>
        <li>Spain</li>
        <li>GreenLand</li>
        <li>Prague</li>
        <p>I am a noob in React</p> */}
        {/* <Header />  this is called parent child relationship where a component is embedding another component */}
        <Header />
        <MainComponent />
        <Footer />
      </div>
      
    );
  }

  export default MyInfo