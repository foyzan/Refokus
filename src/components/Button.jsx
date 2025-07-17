import React from "react";
import { RiCornerDownRightLine } from "react-icons/ri";

import { BiSubdirectoryRight } from "react-icons/bi";

function Button({title = "Start a Project"}){
  return (
    <div className=" text-base text-zinc-800 px-4.5 py-1.5 bg-[#F1ECFF] rounded-full flex items-center justify-between gap-3">{title}
        <RiCornerDownRightLine className="w-4 h-4 pt-1"/>
    </div>
  )
}

export default Button