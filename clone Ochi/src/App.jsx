import React from 'react'
import Navbar from './component/navbar/Navbar'
import Landing from './component/Landing'
import Marquee from './component/marquee'
import About from './component/About'
import Eye from './component/Eye'
import Feature from './component/Feature'
import LocomotiveScroll from 'locomotive-scroll';
import Client from './component/Client'
import BotEye from './component/BotEye'
import Footer from './component/Footer'




const App = () => {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    
    <>
    <main className='w-full h-screen bg-[#F1F1F1]'>
     <Navbar/>
     <Landing/>
     <Marquee/>
     <About/>
     <Eye/>
     <Feature/>
     <Client/>
     <BotEye/>
     <Footer/>
    </main>
    
    </>
    
  )
}

export default App