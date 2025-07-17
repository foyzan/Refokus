import Button from "./Button"

function Product({val}){
    
   const {title, description, liveWebsite, caseStudy} = val


    return (
        <div className="w-full py-10 text-white] ">
            <div className="max-w-9/10 mx-auto flex items-center justify-between" >
                <h1 className="text-[50px] capitalize font-medium">{title}</h1>
                <div className="details w-1/3">
                <p className="w-7/10 text-lg mb-5">{description}</p>
                <div className="flex gap-4">
                    {liveWebsite && <Button title = "Live Website" />}
                    {caseStudy && <Button title = "Case Study" />}
                </div>
            </div>
            </div>

            
        </div>
    )
}


export default Product