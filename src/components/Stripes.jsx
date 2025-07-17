import Stripe from "./Stripe"

import awwardsLogo from '../assets/Awwards.svg'
import noCodeConfLogo from '../assets/no-code-conf-2021.svg'
import cssDesignAwardsLogo from '../assets/css-design-awards-logos.svg'
function Stripes(){

    var data = [
        {url : awwardsLogo, number : 12},
        {url : noCodeConfLogo, number : 2},
        {url : cssDesignAwardsLogo, number : 52},
        {url : awwardsLogo, number : 12},
        {url : noCodeConfLogo, number : 2},
        
    ]

    return (
        <div className="flex mb-20">
            {data.map((elm, index) => (
                <Stripe index= {data.length-1 == index && true} key={index} val={elm}/>
            ))}
        </div>
    )
}

export default Stripes
