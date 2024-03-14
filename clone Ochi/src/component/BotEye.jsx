import React, { useEffect, useState } from 'react'

const BotEye = () => {
       
  const [rotate, setrotate] = useState(0)

  useEffect(()=>{
      window.addEventListener("mousemove",(e)=>{
          let mousex = e.clientX;
          let mousey = e.clientY;

          let deltax = mousex - window.innerWidth/2;
          let deltay= mousey - window.innerHeight/2

          let angle = Math.atan2(deltay,deltax) * (180/Math.PI)
          setrotate(angle - 180);

      })
  })
    
  return (
    <div  data-scroll data-scroll-section data-scroll-speed=".20" className='relative w-full h-screen bg-[#CDEA68] flex items-center justify-center rounded-xl'>
      <div className='text-center text-[11rem] leading-[10vw]  tracking-tighter font-bold text-[#212121]'>
        <h1>READY</h1>
        <h1>TO  START</h1>
        <h1>THE PROJECT?</h1>
        <div className='absolute flex gap-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] '>
                <div className='flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-zinc-100'>
                <div className='relative w-2/3 h-2/3 rounded-full bg-zinc-900'>
                    <div style={{transform:`translate(-50%,-50%) rotate(${rotate}deg)`}} className='line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10'>
                        <div className='w-10 h-10 rounded-full bg-zinc-100'></div>
                    </div>
                </div>
                </div>
                <div className='flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-zinc-100'>
                <div className='relative w-2/3 h-2/3 rounded-full bg-zinc-900'>
                    <div style={{transform:`translate(-50%,-50%) rotate(${rotate}deg)`}} className='line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10'>
                        <div className='w-10 h-10 rounded-full bg-zinc-100'></div>
                    </div>
                </div>
                </div>
          
            </div>
      </div>
    </div>
  )
}

export default BotEye