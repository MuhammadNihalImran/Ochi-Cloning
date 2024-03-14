import React from 'react'
import { motion } from "framer-motion"


const Marquee = () => {
  
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.1" className='w-full h-[50vh] rounded-tr-3xl rounded-tl-3xl bg-[#004D43] py-10'>
         <div className="text border-t-2 border-zinc-300 flex gap-10 whitespace-nowrap overflow-hidden">
          <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{repeat: Infinity, ease:"linear", duration: 5}} className='pr-16 text-[17vw] leading-none uppercase pt-10 -mb-10 font-semibold'>WE ARE OCHI</motion.h1>
          <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{repeat: Infinity, ease:"linear", duration: 5}} className='pr-16 text-[17vw] leading-none uppercase pt-10 -mb-10 font-semibold'>WE ARE OCHI</motion.h1> 
         </div>
    </div>
  )
}

export default Marquee