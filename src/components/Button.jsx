import React from "react";
import { RiCornerDownRightLine } from "react-icons/ri";

function Button({ title = "Start a Project" }) {
  return (
    <div className="group text-base text-zinc-800 px-4.5 py-1.5 bg-[#F1ECFF] rounded-full ">
      <div className=" overflow-hidden relative">
        <div className="flex items-center justify-between gap-3  group-hover:translate-y-[-24.5px] duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]">
          {title}
          <RiCornerDownRightLine className="w-4 h-4 pt-1 group-hover:translate-y-[-24.5px] duration-[0.5s] ease-in" />
        </div>
        <div className="flex items-center justify-between gap-3 absolute left-0 top-5  group-hover:top-0 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]">
          {title}
          <RiCornerDownRightLine className="w-4 h-4 pt-1  duration-[0.5s] ease-in" />
        </div>
      </div>
    </div>
  );
}

export default Button;
