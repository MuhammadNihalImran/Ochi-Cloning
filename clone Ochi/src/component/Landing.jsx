import React from 'react'
import { GoArrowUpRight } from "react-icons/go";
import { motion } from "framer-motion"

const Landing = () => {
  
  return (
    <>
    <div className='absolute  top-[30%] -right-12 rotate-[270deg] w-[10vw] h-[50px] bg-red-500 font-semibold text-center text-white'>site of the day</div>
       <div data-scroll data-scroll-section data-scroll-speed="-.2" className='w-full h-screen pt-1'>
        <div className='textStructure mt-40 px-16 font-["Franklin Gothic Medium"] '>
            {["WE CREATE","EYE-OPENING","PRESENTATIONS"].map((item, index)=>{
                return  <div className='masker'>
                  <div className='fit flex'>

                  {index === 1 && (<motion.div initial={{width:0}} animate={{width:"9vw"}} transition={{ease:[0.76, 0, 0.24, 1],duration:1}} className='overflow-hidden rounded-md w-[9vw] h-[5vw] bg-red-500 relative top-[1vw]'>
 <img src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg" alt="" />
                  </motion.div>)}
                <h1 key={index} className='text-zinc-800 uppercase text-[7.5vw] leading-[5.5vw] tracking-[-.5vw] leading-[6vw] font-bold'>{item}</h1>
                  </div>
            </div>
            })}
           

        
        </div>
        <div className='border-t-[1px] border-zinc-700 mt-32 py-5 px-20 flex align-center justify-between '>
          {["For public an private companies", "From the first pitch of IPO"].map((item, index)=>
              <p key={index} className='text-xl font-md font-["Franklin Gothic Medium"]'>{item}</p>
          )}
          <div  className='group hover:text-white flex align-center justify-between  gap-1 cursor-pointer'>
            <div className='group-hover:bg-zinc-900  transition ease-linear duration-100 overflow-hidden border-[1px] px-4 py-1 rounded-full text-smbold capitalize border-zinc-900 text-lg font-md font-["Franklin Gothic Medium"]'>START THE PROJECT</div>
            <div className='group-hover:bg-zinc-900  transition ease-linear duration-100 icon border-[1px] rounded-full border-zinc-900 py-2 px-2 '><GoArrowUpRight /></div>
          </div>
        </div>
       </div>
    </>
  )
}

export default Landing

