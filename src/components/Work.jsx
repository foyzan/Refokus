import image1 from "../assets/Refokus Tools-1.png";
import image2 from "../assets/Refokus Tools.png";
import image3 from "../assets/Yahoo.png";
import image4 from "../assets/Rainfall.png";
import image5 from "../assets/Summon.png";
import image6 from "../assets/Showcase Websites.png";
import { motion, useMotionValueEvent, useScroll } from "motion/react"
import { useState } from "react";
import { tr } from "motion/react-m";

function Work(){

  const [image, setImage] = useState([
    {url : image1, top : "55%", left : "50%", isActive : false},
    {url : image2, top : "63%", left : "47%", isActive : false},
    {url : image3, top : "55%", left : "55%", isActive : false},
    {url : image4, top : "65%", left : "51%", isActive : false},
    {url : image5, top : "67%", left : "56%", isActive : false},
    {url : image6, top : "55%", left : "40%", isActive : false}
  ])

  const {scrollYProgress} = useScroll();

  useMotionValueEvent(scrollYProgress, 'change', (latest)=>{
    // if(latest * 1000 > 2){
    //   setImage([...image, {url : image1, top : "63%", left : "50%", isActive : true}])
    // }

    function showImage(arr){
      setImage((preImage)=>(
        preImage.map((item, index) => (
          arr.indexOf(index) === -1 ? {...item, isActive : false} : {...item, isActive : true}
        ))
      ))
    }
    if(Math.floor(latest * 1000) == 0){
      showImage([])
    }
    else if(Math.floor(latest * 1000) === 5){
      showImage([0])
    }
    else if(Math.floor(latest * 1000) === 12){
     showImage([0, 1])
    }
    else if(Math.floor(latest * 1000) === 20){
     showImage([0, 1, 2])
    }
    else if(Math.floor(latest * 1000) === 28){
     showImage([0, 1, 2, 3])
    }
    else if(Math.floor(latest * 1000) === 36){
     showImage([0, 1, 2, 3, 4])
    }
    else if(Math.floor(latest * 1000) === 44){
     showImage([0, 1, 2, 3, 4, 5])
    }

    console.log(Math.floor(latest * 1000));
    
    
  })
 
 
  return (

    
    <div className="w-full">
        <div className="max-w-screen-xl relative mx-auto text-center">
           <h1 className="text-[35vw] font-medium leading-tight tracking-tight select-none">work</h1>
           <div className="w-full h-full absolute top-0">
            {
              image.map((elm, index) => (elm.isActive && ( <img key={index} className="absolute w-72 rounded-xl  -translate-x-1/2 -translate-y-1/2" style={{top : elm.top, left : elm.left}} src={elm.url} alt="" />)))
            }
           </div>
        </div>
        
    </div>
  )
}

export default Work