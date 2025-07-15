import React from "react";
import { BsArrowReturnRight } from "react-icons/bs";


function Button(){
  return (
    <div className="w-39 text-sm font-normal px-5 py-2 bg-[#F1ECFF] text-black rounded-full flex items-center justify-between">Start a Project
        <BsArrowReturnRight/>
    </div>
  )
}

export default Button