import { motion } from "framer-motion";
import React from "react";
import { MdOutlineArrowOutward } from "react-icons/md";

function LandingPage() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.3"
      className="w-full h-screen bg-#f1f1f1-900 pt-1"
    >
      <div className="textstructure mt-32 px-20">
        {["we-create", "eye-opening", "presentations!"].map((item, index) => {
          return (
            <div className="masker">
              <div className="w-fit flex items-end overflow-hidden">
                {index === 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "9vw" }}
                    transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                    className="w-[9vw] h-[6vw] bg-green-500 rounded"
                  ></motion.div>
                )}
                <h1 className=" pt-[2vw] mb-[1vw] uppercase text-[8vw] leading-[.6] tracking-tighter font-['Founders Grotesk'] font-bold">
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border-t-[1px] border-black mt-[5vw] flex justify-between item-center py-5 px-20 ">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => (
          <p
            className="text-slate-600
            font-['Neue Montreal'] c-F1F1F1 tracking-tight leading-none "
          >
            {item}
          </p>
        ))}
        <div className="start flex items-center gap-3">
          <div className="px-5 py-2 border-[2px] border-zinc-600  uppercase font-['Neue Montreal'] text-sm rounded-full">
            start the project
          </div>
          <div className="w-9 h-9  flex items-center justify-center border-[2px] border-zinc-600 rounded-full ">
            <span className="rotate-[10deg]">
              <MdOutlineArrowOutward />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default LandingPage;

/* <div className='masker font-["Founders Grotesk"]'>
          <h1 className='uppercase text-8xl leading-[5.5vw] tracking-tighter font-bold '>We Create</h1>
        </div> */
/* <div className='masker font-["Founders Grotesk"]'>
          <h1 className='uppercase text-8xl leading-[5.5vw] tracking-tighter font-bold '>eye-opening</h1>
        </div>
        <div className='masker font-["Founders Grotesk"]'>
          <h1 className='uppercase text-8xl leading-[5.5vw] tracking-tighter font-bold '>presentations</h1>
        </div> */
