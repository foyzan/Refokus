import React from "react";
import logo from '../assets/logo.svg'
import Button from "./Button";

function Navbar() {
  return (<div className=" max-w-9/10 flex border-b-1 border-b-zinc-700 py-5 mx-auto justify-between items-center">
    <div className="navLeft flex items-center justify-center">
      <img src={logo} alt="" />
      <div className="link flex gap-16 ml-20">

        {['Home', 'Work', 'Culture', '', 'News'].map((elm, index) => (
          <a key={index} className="text-sm flex items-center" href="#">
            {elm.length === 0 && <span className=" w-[1px] h-5 bg-zinc-600"></span>}
            {index === 1 && <span className="inline-block h-1 w-1 mr-1 bg-[#00FF19] rounded-full shadow-[0_0_0.25em_#00FF19]"></span>}
            {elm}
          </a>))}
      </div>
    </div>
    <Button />
  </div>)
}

export default Navbar