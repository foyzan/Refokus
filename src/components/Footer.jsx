
import image from '../assets/Enterprise Partner.svg'

function Footer(){

    return (
        <div className="w-full">
            <div className="max-w-9/10 mx-auto flex py-10 gap-40 items-center">
                <div className=" basis-1/2 text-right">
                    <h1 className="text-[12rem] font-medium leading-none tracking-tight -ml-3">refokus.</h1>
                    <div className=" pt-2 flex gap-x-20">
                        <span className="text-sm text-zinc-600">Hamburg, Germany</span> 
                        <span className="text-sm text-zinc-600">New York, US</span>
                    </div>
                </div>
                <div className=" basis-1/2 flex">
                    <div className="basis-1/3">
                        <h4 className=" capitalize mb-10">socials</h4>
                        {['facebook', 'Twitter (x)', 'LinkedIn'].map((item, index)=> <a key={index} className=" block mt-3 text-zinc-600">{item}</a>)}
                    </div>
                    <div className="basis-1/3">
                        <h4 className=" capitalize mb-10 text-zinc-600">Sitemap</h4>
                        {['Home', 'Work', 'Culture', 'News'].map((item, index)=> <a key={index} className=" block mt-3 ">{item}</a>)}
                    </div>
                    <div className="basis-1/2 flex flex-col items-end gap-10 pt-16">
                        <h4 className=" text-right leading-tight">Refokus is a full-service Webflow agency designing and building brands and websites that empower growth.</h4>
                        <img src={image} alt="" />
                    </div>

                </div>
                
            </div>
            <div className='max-w-9/10 mx-auto pb-7 flex gap-10'>
                {['Privacy Policy', 'Cookie Policy', 'Impressum', 'Terms'].map((item, index)=>(
                    <h3 key={index} className=' text-zinc-400 text-sm font-medium'>{item}</h3>
                ))}
                
            </div>
        </div>
    )
}

export default Footer