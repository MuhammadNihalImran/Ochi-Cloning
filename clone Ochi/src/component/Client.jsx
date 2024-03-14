import React from "react";

const Client = () => {
  return (
    <div  data-scroll data-scroll-section data-scroll-speed="-.1" className="w-full py-10 ">
      <div className="w-full px-10 border-b-[1px] border-zinc-500 pb-20">
        <h1 className="text-6xl">Clients' reviews</h1>
      </div>

      <div className="client w-full flex flex-col items-center">
            <div className="w-full flex justify-between" >
        <div className="w-[75%] h-16  flex gap-[15vw] px-10 py-5 text-xl">
          {["Karman Ventures", "Service:", "William Barnes"].map(
              (item, index) => {
                  return (
                      <a key={index} className=" border-black" href="#">
                  {item}
                </a>
              );
            }
            )}
        </div>
         <div className=" w-[25%] h-16 flex justify-end px-10 py-5 text-xl">READ</div> 
          </div>
        <div className="w-[60vw] h-[50vh] flex  my-10 ">
            <div className=" w-[25vw] py-10 flex flex-col items-center">
            <div className=" w-[9vw] font-semibold text-center p-1 rounded-full border-[2px]  border-zinc-500">INVESTOR DECK</div>
            <div className="w-[7vw] mt-5 font-semibold text-center p-1 rounded-full border-[2px]  border-zinc-500">SALES DECK</div>
            </div>
            <div className="w-1/2  h-full px-5">
                <div className="bg-red-900 w-[8vw] h-[8vw] rounded-xl overflow-hidden">
                    
                <img  src="https://ochi.design/wp-content/uploads/2023/02/William-Barnes-1-300x300.png" alt="" />
                </div>
                <p className="text-lg py-5">They were transparent about the time and the stages of the project. The end product is high quality, and I feel confident about how they were handholding the client through the process. I feel like I can introduce them to someone who needs to put a sales deck together from scratch, and they would be able to handhold the client experience from 0 to 100 very effectively from story to design. 5/5

</p>
            </div>
        </div>
      </div>

      <div className="w-full h-screen ">
        {[0,1,2,3,4,5,6,7].map(()=>{
       return <div className="search w-full h-[10vh] border-b-2 border-zinc-200  flex items-center justify-between px-10">
        {["Planetly","Nina Walloch", "READ"].map(
              (item, index) => {
                  return (
                      <p key={index} className="text-lg font-semibold border-black" href="#">
                  {item}
                </p>
              );
            }
            )} </div>
        })}
                 
      </div>

      <div className="w-full h-[60vh] flex items-start justify-center gap-5">
        <div className="w-[45vw] h-[55vh] rounded-xl  bg-[#004D43] flex items-center justify-center">
            <img className="w-[10vw]" src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" /> </div>
        <div className="w-[23vw] h-[55vh] rounded-xl bg-[#212121] flex items-center justify-center"> 
        <img className="w-[10vw]" src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" /></div>
        <div className="w-[23vw] h-[55vh] rounded-xl bg-[#212121] flex items-center justify-center"> 
        <img className="w-[10vw]" src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Client;
