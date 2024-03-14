import React from 'react'
// import './about.css'
const About = () => {
  return (
    <div data-scroll data-scroll-section data-speed=".1" className='w-full bg-[#CDEA68]  rounded-3xl'>
        <div className='w-full h-[40vh] flex items-center px-14 semibold'> 
        <h1 className='text-[3.5vw] w-[75vw] tracking-tight leading-none'>Ochi is a strategic partner for fast-grow­ing tech businesses that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.</h1>
        </div>

        <div className=' flex justify-between px-14 py-5 w-full h-[50vh] border-y-2  border-zinc-900'>
          <h1 className='text-lg'>What you can expect:</h1>
          <div className='flex  gap-x-[5rem]'>
            <div className='w-[18vw] flex flex-col gap-y-[3rem] '>
              <h1 className='text-lg'>We create tailored presentations to help you persuade your colleagues, clients, or investors. Whether it’s live or digital, delivered for one or a hundred people</h1>
              <h1 className='text-lg'>We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating.</h1>
            </div>
            <div className='flex flex-col justify-center px-[10rem]'>
              <h1 className='text-lg'>S:</h1>
              {["Instagram","Bahance","Facebook","Linkedin"].map((item, index)=>{
                return  <a key={index} className="socilamedia relative after:absolute after:w-[80px] after:left-0 after:bottom-0 after:h-[1px] after:bg-zinc-950" href="#">{item}</a>
              })}
            </div>
          </div>
        </div>

        <div className='w-full h-[70vh] flex justify-between py-5 px-12'>
          <div><h1 className='text-[3.5vw]'>Our approach:</h1>
          <button className='text-white flex items-center justify-between gap-x-[2rem] p-5 bg-zinc-900  rounded-full after:content-[" "] after:bg-zinc-100 after:w-[10px] after:h-[10px] after:rounded-full'>READ MORE</button>
          </div>
          <div className='image bg-cover w-[40vw] h-[60vh] bg-zinc-900 rounded-xl overflow-hidden' >
            <img src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" alt="" />
          </div>
        </div>
    </div>
  )
}

export default About