import { motion } from "framer-motion";
import React from "react";

function Marquee() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".1" className=" w-full py-10 rounded-tl-3xl rounded-tr-3xl bg-[#004d43]">
      <div className=" text-slate-300 border-t-[1px] border-b-[1px] border-fuchsia-50 flex whitespace-nowrap overflow-hidden">
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
          className='text-[17vw] leading-none font-["Founders Grotesk"] font-bold uppercase tracking-tighter -mb-[.2vw] pt-10 pr-10'
        >
          We are ochi !
        </motion.h1>
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
          className='text-[17vw] leading-none font-["Founders Grotesk"] font-bold uppercase tracking-tighter -mb-[.2vw] pt-10 pr-10'
        >
          We are ochi !
        </motion.h1>
      </div>
    </div>
  );
}

export default Marquee;
