import React from 'react'
import {motion,useAnimation} from 'framer-motion'
import {Power4} from 'gsap/all'

const Feature = () => {
  const cards = [useAnimation(),useAnimation(),useAnimation(),useAnimation()]
  const handleHover = (index) =>{
    cards[index].start({y:"0"})
  }
  const handleHoverEnd = (index) =>{
    cards[index].start({y:"100%"})
  }
  return (
    <div className='w-full py-10'>
        <div className='w-full px-10 border-b-[1px] border-zinc-500 pb-20'>
            <h1 className='text-6xl'>Featured projects</h1>
        </div>
          <div className='px-20'>
            <div className='cards w-full flex gap-10 mt-10'>
              <motion.div onHoverStart={()=>handleHover(0)}
              onHoverEnd={()=>handleHoverEnd(0)} className='cardcantainer relative w-1/2 h-[75vh] '>
                <h1 className='absolute flex overflow-hidden text-[#CDEA68] left-full -translate-x-1/2 top-1/2 -translate-y-1/2 leading-none tracking-tighter z-[9] text-8xl '>

                  {"FYDE".split('').map((item, index)=>(
                    <motion.span
                    initial={{ y:"100%"}} 
                    animate={cards[0]}
                    translation={{ease:[0.22,1,0.36,1],delay:index*0.5}}
                    className="inline-block">{item}</motion.span>
                    ))} 

                    </h1>
                <div className='card rounded-xl w-full h-full bg-green-600  overflow-hidden'>
                  <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="" />
                </div>
              </motion.div>
              <motion.div onHoverStart={()=>handleHover(1)}
              onHoverEnd={()=>handleHoverEnd(1)} className='cardcantainer relative w-1/2 h-[75vh] '>
                <h1 className='absolute flex overflow-hidden text-[#CDEA68] right-full translate-x-1/2 top-1/2 -translate-y-1/2 leading-none tracking-tighter z-[9] text-8xl '>

                {"WISE".split('').map((item, index)=>(
                  <motion.span
                  initial={{ y:"100%"}} 
                  animate={cards[1]}
                  translation={{ease:[0.22,1,0.36,1],delay:index*0.5}}
                  className="inline-block">{item}</motion.span>
                  ))} 
                  </h1>
                <div className='card rounded-xl w-full h-full bg-green-600  overflow-hidden'>
                  <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" alt="" />
                </div>
              </motion.div>
            </div>
          </div>
          <div className='px-20'>
            <div className='cards w-full flex gap-10 mt-10'>
              <motion.div onHoverStart={()=>handleHover(2)}
              onHoverEnd={()=>handleHoverEnd(2)} className='cardcantainer relative w-1/2 h-[75vh] '>
                <h1 className='absolute flex overflow-hidden text-[#CDEA68] left-full -translate-x-1/2 top-1/2 -translate-y-1/2 leading-none tracking-tighter z-[9] text-8xl '>

                  {"TRAWA".split('').map((item, index)=>(
                    <motion.span
                    initial={{ y:"100%"}} 
                    animate={cards[2]}
                    translation={{ease:[0.22,1,0.36,1],delay:index*0.5}}
                    className="inline-block">{item}</motion.span>
                    ))} 

                    </h1>
                <div className='card rounded-xl w-full h-full bg-green-600  overflow-hidden'>
                  <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg" alt="" />
                </div>
              </motion.div>
              <motion.div onHoverStart={()=>handleHover(3)}
              onHoverEnd={()=>handleHoverEnd(3)} className='cardcantainer relative w-1/2 h-[75vh] '>
                <h1 className='absolute flex overflow-hidden text-[#CDEA68] right-full translate-x-1/2 top-1/2 -translate-y-1/2 leading-none tracking-tighter z-[9] text-8xl '>

                {"PREMIUM BLEND".split('').map((item, index)=>(
                  <motion.span
                  initial={{ y:"100%"}} 
                  animate={cards[3]}
                  translation={{ease:[0.22,1,0.36,1],delay:index*0.5}}
                  className="inline-block">{item}</motion.span>
                  ))} 
                  </h1>
                <div className='card rounded-xl w-full h-full bg-green-600  overflow-hidden'>
                  <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png" alt="" />
                </div>
              </motion.div>
            </div>
          </div>
    </div>
  )
}

export default Feature