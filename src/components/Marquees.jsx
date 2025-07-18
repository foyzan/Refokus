import Marquee from "./Marquee"
import image1 from "../assets/marquees/basf.svg"
import image2 from "../assets/marquees/bcgp.svg"
import image3 from "../assets/marquees/flowcode.svg"
import image4 from "../assets/marquees/intenseeye.svg"
import image5 from "../assets/marquees/lavender.svg"
import image6 from "../assets/marquees/remind.svg"
import image7 from "../assets/marquees/singularity.svg"


function Marquees(){

    const data = [
       [image1, image2, image3, image4, image5, image6, image7],
       [image1, image2, image3, image4, image5, image6, image7]
    ]
    return (
        <div className="py-50">
            {data.map((item, index) => <Marquee key={index} imageUrls={item}/>)}
        </div>
    )
}

export default Marquees