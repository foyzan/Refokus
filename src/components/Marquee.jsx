import { motion } from 'motion/react'

function Marquee({ imageUrls, direction }) {

    return (
        <div className='w-full flex overflow-hidden'>
            
            <motion.div initial= {{x : direction === 'left' ? '0' : '-100%'}} animate = {{x : direction === 'left' ? '-100%' : '0'}} transition={{ease: "linear", duration : 15, repeat : Infinity}} className="flex shrink-0 py-8 gap-20 pr-20 ">
                {imageUrls.map(((url, index) => (<img src={url} key={index} alt="" className="w-29 shrink-0" />)))}
                {imageUrls.map(((url, index) => (<img src={url} key={index} alt="" className="w-29 shrink-0" />)))}
            </motion.div>
            <motion.div initial= {{x : direction === 'left' ? '0' : '-100%'}} animate = {{x : direction === 'left' ? '-100%' : '0'}} transition={{ease: "linear", duration : 15, repeat : Infinity}} className="flex shrink-0 py-8 gap-20 pr-20 ">
                {imageUrls.map(((url, index) => (<img src={url} key={index} alt="" className="w-29 shrink-0" />)))}
                {imageUrls.map(((url, index) => (<img src={url} key={index} alt="" className="w-29 shrink-0" />)))}
            </motion.div>

        </div>

    )
}


export default Marquee