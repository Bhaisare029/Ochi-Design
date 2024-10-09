import React from "react";

function About() {
  return (
    <div className="w-full px-16 py-20 bg-[#cdea68] rounded-tl-3xl rounded-tr-3xl text-rose-100 	">
      <h1 className='font-["Neue Montreal"] text-[4vw] leading-[3.8vw] tracking-tight'>
        Ochi is a strategic partner for fast-grow­ing tech <br />
        businesses that need to raise funds, sell prod­ucts, <br /> ex­plain
        com­plex ideas, and hire great peo­ple.
      </h1>

      <div className="w-full flex gap-5 pt-20 mt-20 border-t-[2px] border-[#a1b562] mt-20">
        <div className="w-1/2 ">
          <h1 className="text-5xl text-black">Our Approach:</h1>
          <button className=" flex gap-10 items-center  text-start uppercase font-['Neue Montreal'] font-sm tracking-tighter px-7 py-3 bg-[#212121] mt-5 rounded-full text-white  ">
            Read More
            <div className="w-2 h-2 bg-zinc-100 rounded-full"></div>
          </button>
        </div>
        <div className="w-1/2 h-[70vh] rounded-2xl bg-[#998c7a] overflow-hidden">
          <img
            className="w-full h-full bg-cover"
            src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default About;
