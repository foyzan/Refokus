import image1 from "../assets/Refokus Tools-1.png";
import image2 from "../assets/Refokus Tools.png";
import image3 from "../assets/Yahoo.png";
import image4 from "../assets/Rainfall.png";
import image5 from "../assets/Summon.png";
import image6 from "../assets/Showcase Websites.png";


function Work(){
 
  var image = [
    {url : image1, top : "63%", left : "50%", isActive : true},
    {url : image2, top : "73%", left : "47%", isActive : false},
    {url : image3, top : "55%", left : "55%", isActive : false},
    {url : image4, top : "75%", left : "51%", isActive : false},
    {url : image5, top : "67%", left : "56%", isActive : false},
    {url : image6, top : "63%", left : "49%", isActive : false}
  ]
 
  return (

  

    <div className="w-full">
        <div className="max-w-screen-xl relative mx-auto text-center">
           <h1 className="text-[32vw] font-medium leading-snug tracking-tight select-none">work</h1>
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