import { LuMoveRight } from "react-icons/lu";
import { BsArrowRight } from "react-icons/bs";

function Card({props}) {
  return (
    <div className={`group ${props.width} bg-zinc-800 p-5 rounded-2xl transition-all duration-300  ${props.downRight ? 'hover:bg-[#7443FF]' : ' hover:bg-zinc-700'} `}>
      <div className="w-full flex justify-between items-center transition-all duration-300 group-hover:px-1">
        <h3 className="text-sm ">{props.text1}</h3>
        <BsArrowRight className="w-7" />
      </div>
       <h1 className="w-68  text-3xl mt-6 transition-all duration-300 group-hover:px-1 leading-tight">{props.text2}</h1>
      {props.downRight && (<div className="downRight w-full mt-30">
        <h1 style={{wordSpacing : '8px'}} className="text-[100px] font-semibold leading-none tracking-tight">Start a Project</h1>
        <button className="text-base px-6 py-2.5 border-1 rounded-full mt-6">Contact us</button>
      </div >)}

      {
        props.downLeft && (<div className="downLeft w-full mt-67">
        <p className="text-sm">Explore what drives our team</p>
      </div>)
      }
    </div>
  );
}

export default Card;
