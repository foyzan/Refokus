
import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Work from "./components/Work";
import Stripes from "./components/Stripes";
import Products from "./components/Products";
import Marquees from "./components/Marquees";
import Cards from "./components/Cards";
import Footer from "./components/Footer";

import LocomotiveScroll from "locomotive-scroll";




function App(){
  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();

    return () => {
      locomotiveScroll.destroy();
    }
  }, [])
  return (<div className="w-full min-h-screen bg-zinc-900 text-white font-[Satoshi Variable] ">
    <Navbar/>
    <Work/>
    <Stripes/>
    <Products/>
    <Marquees/>
    <Cards/>
    <Footer/>

  </div>)
}

export default App