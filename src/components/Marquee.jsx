

function Marquee({imageUrls}){

    return (
        <div className=" w-full flex py-8 gap-20 whitespace-nowrap overflow-hidden justify-center">
            {imageUrls.map((url => (<img src={url} alt=""  className="w-29 shrink-0"/>)))}
            {imageUrls.map((url => (<img src={url} alt=""  className="w-29 shrink-0"/>)))}
        </div>
        
    )
}


export default Marquee