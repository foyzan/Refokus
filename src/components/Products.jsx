import {motion} from 'motion/react'

import Product from "./Product"

import arqitel_bg from "../assets/products/arqitel_bg.webp";
import cula_bg from "../assets/products/Cula_bg.png";
import ttr_bg from "../assets/products/TTR_bg.jpg";
import maniv_bg from "../assets/products/Maniv.png";
import yir_2021_bg from "../assets/products/YIR 2022_bg.png";
import yahoo_bg from "../assets/products/Yahoo bg.png";
import yir_2022_bg from "../assets/products/yir 2021 bg.png";
import rainfall_bg from "../assets/products/Rainfall bg.png";
import jungle_bg from "../assets/products/jungle_bg.jpg";
import silvr_bg from "../assets/products/Silvr_bg.jpg";
import remind_bg from "../assets/products/Remind bg.png";
import rocketchat_bg from "../assets/products/RocketChat bg.png";
import haufe_bg from "../assets/products/Haufe bg.png";
import yir_2021 from "../assets/products/yir 2021 bg.png";
import weglot_bg from "../assets/products/Weglot bg.png";
import candid_health_bg from "../assets/products/Candid Health bg.jpg";
import showcase_bg from "../assets/products/Showcase Website bg.png";
import { useState } from 'react';


function Products(){
    
    var productData = [
      {
        title: "Arqitel",
        description:
          "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
        liveWebsite: true,
        caseStudy: false,
        bgImage: arqitel_bg,
        movePosition : 1.7
      },
      {
        title: "Cula",
        description:
          "We immersed ourselves in a 3D world we created to explain how Cula's platform collects data from carbon removal processes and converts them into carbon credit certificates.",
        liveWebsite: true,
        caseStudy: false,
        bgImage : cula_bg,
        movePosition : 15.7
      },
      {
        title: "TTR",
        description:
          "We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.",
        liveWebsite: true,
        caseStudy: false,
        bgImage : ttr_bg,
        movePosition : 29.7
      },
      {
        title: "Maniv",
        description:
          "A global early-stage venture fund partnering with founders to advance cleaner, safer, and more sustainable movement of people and goods.",
        liveWebsite: true,
        caseStudy: false,
        bgImage: maniv_bg,
        movePosition : 42.7
      },
      {
        title: "YIR 2022",
        description:
          "Our second year was filled with great events, exciting projects, awards and amazing people - so we made another showcase to celebrate.",
        liveWebsite: true,
        caseStudy: false,
        bgImage:yir_2022_bg,
        movePosition : 55.7
      },
      {
        title: "Yahoo!",
        description:
          "We enhanced the New York Fashion Week, by creating a fully digital AR fashion experience for Yahoo and Maisie Wilen, featuring holographic 3D models and an integrated web shop.",
        liveWebsite: true,
        caseStudy: true,
        bgImage:yahoo_bg,
        movePosition : 69.5
      },
      {
        title: "Rainfall",
        description:
          "We crafted a website for Rainfall Ventures, developing prototypes and custom code that ultimately allows their team to update content regularly and with ease.",
        liveWebsite: true,
        caseStudy: true,
        bgImage:rainfall_bg,
        movePosition : 84.2
      },
      {
        title: "Jungle",
        description:
          "We crafted a timeless visual system for Jungle Ventures, covering all aspects of web design, and empowered their marketing team to scale organically using Webflow.",
        liveWebsite: true,
        caseStudy: true,
        bgImage:jungle_bg,
        movePosition : 99
      },
      {
        title: "Silvr",
        description:
          "We teamed up with financing solutions provider Silvr to audit, refine and evolve their brand.",
        liveWebsite: true,
        caseStudy: false,
        bgImage:silvr_bg,
        movePosition : 112
      },
      {
        title: "Remind",
        description:
          "Remind got a new website that is designed and developed to be easy to maintain and ready to learn, reflecting their mission to connect students and families.",
        liveWebsite: true,
        caseStudy: true,
        bgImage: remind_bg,
        movePosition : 125.1
      },
      {
        title: "RocketChat",
        description:
          "We built a beautiful, clean website in Webflow for RocketChat that is scalable, easy to maintain and built in a modular manner for future changes.",
        liveWebsite: true,
        caseStudy: false,
        bgImage: rocketchat_bg,
        movePosition : 139.1
      },
      {
        title: "Haufe",
        description:
          "Besides the continuous work we do with Haufe—shipping over 50 projects per year—we partnered with them to create a new website for their core brand.",
        liveWebsite: true,
        caseStudy: false,
        bgImage: haufe_bg,
        movePosition : 152.1
      },
      {
        title: "YIR 2021",
        description:
          "We celebrated our first year with a Showcase Website that reflects on a year of growth, building an awesome team & culture, defining our brand, and more.",
        liveWebsite: true,
        caseStudy: false,
        bgImage: yir_2021,
        movePosition : 165
      },
      {
        title: "Weglot",
        description:
          "We made a fun and engaging showcase website for our friends from Weglot to promote their no-code translation solution in Germany.",
        liveWebsite: true,
        caseStudy: false,
        bgImage: weglot_bg,
        movePosition : 178
      },
      {
        title: "Candid Health",
        description:
          "A complete redesign of a health-startup website, followed by cutting edge development.",
        liveWebsite: true,
        caseStudy: false,
        bgImage: candid_health_bg,
        movePosition : 190
      },
      {
        title: "Showcase",
        description:
          "Our OMR22 Masterclass teaches how to create a showcase website, and we made a showcase website about showcase websites to promote the art of showcasing.",
        liveWebsite: true,
        caseStudy: false,
        bgImage : showcase_bg,
        movePosition : 203
      },
    ];

    const [position, setPosition] = useState(203)
    const [pos, setPos] = useState(0)

    const mover = (val)=>{
      setPosition(val)
    }

    function moveMoverInsideDiv(count){
      setPos(count * 22.5)
    }

    return (
        <div className="py-20 relative">
            {productData.map((eml, index)=> (
                <Product key={index} val={eml} moveInside = {moveMoverInsideDiv} mover = {mover} count = {index} />
            ) )}

            <div className=" absolute top-0 w-full h-full pointer-events-none ">
              <motion.div initial = {{y : position}} animate = {{y : position + `rem`}} className=" absolute  w-126 h-90 left-2/7 z-30  rounded-2xl overflow-hidden ">
                <motion.div  animate = {{y: -pos + `rem`}} transition={{ease : [0.83, 0, 0.17, 1], duration : 0.5}} className=" w-full h-full "></motion.div>
                <motion.div  animate = {{y: -pos + `rem`}} transition={{ease : [0.83, 0, 0.17, 1], duration : 0.5}} className=" w-full h-full bg-sky-400 "></motion.div>
                <motion.div  animate = {{y: -pos + `rem`}} transition={{ease : [0.83, 0, 0.17, 1], duration : 0.5}} className=" w-full h-full bg-sky-500 "></motion.div>
                <motion.div  animate = {{y: -pos + `rem`}} transition={{ease : [0.83, 0, 0.17, 1], duration : 0.5}} className=" w-full h-full bg-sky-600 "></motion.div>
                <motion.div  animate = {{y: -pos + `rem`}} transition={{ease : [0.83, 0, 0.17, 1], duration : 0.5}} className=" w-full h-full bg-sky-700 "></motion.div>
                <motion.div  animate = {{y: -pos + `rem`}} transition={{ease : [0.83, 0, 0.17, 1], duration : 0.5}} className=" w-full h-full bg-sky-800 "></motion.div>
              </motion.div>
            </div>
        </div>
    )
}


export default Products