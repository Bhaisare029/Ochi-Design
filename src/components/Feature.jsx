import { motion, useAnimation } from "framer-motion";
import React, { useState } from "react";
import { SiPanasonic } from "react-icons/si";

function Feature() {
  const cards = [useAnimation(), useAnimation()];

  const handleHover = (index) => {
    cards[index].start({ y: "0" });
  };

  const handleHoverEnd = (index) => {
    cards[index].start({ y: "100%" });
  };
  return (
    <div className="w-full py-20">
      <div className="w-full px-20 border-b-[1px] pb-10 border-black">
        <h1 className='text-6xl font-["Neue Montreal"] tracking-tight'>
          Featured projects:
        </h1>
      </div>
      <div className="px-20">
        <div className="cards w-full flex gap-10 mt-20 ">
          <motion.div
            onHoverStart={() => handleHover(0)}
            onHoverEnd={() => handleHoverEnd(0)}
            className="cardcontainer relative w-1/2 h-[80vh] "
          >
            <div className="card w-full h-full rounded-xl overflow-hidden">
              <h1 className="absolute flex overflow-hidden left-full -translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] text-8xl font-['Neue Montreal'] text-[#CDEA68] leading-none tracking-tighter">
                {"FYDE".split("").map((item, index) => (
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={cards[0]}
                    transition={{
                      ease: [0.22, 1, 0.36, 1],
                      delay: index * 0.05,
                    }}
                    className="inline-block"
                  >
                    {item}
                  </motion.span>
                ))}
              </h1>
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
                alt=""
              />
            </div>
            <div className="button font-['Neue Montreal'] uppercase block flex  gap-5 mt-5   ">
              <h1 className="rounded-full border-[1px] px-2 py-2 text-sm border-black text-[212121] ">
                Audit
              </h1>
              <h1 className="rounded-full border-[1px] px-2 py-2 text-sm border-black text-[212121] ">
                Copywriting
              </h1>
              <h1 className="rounded-full border-[1px] px-2 py-2 text-sm border-black text-[212121] ">
                Sales deck
              </h1>
              <h1 className="rounded-full border-[1px] px-2 py-2 text-sm border-black  text-[212121]">
                Slides design
              </h1>
            </div>
          </motion.div>
          <motion.div
            onHoverStart={() => handleHover(1)}
            onHoverEnd={() => handleHoverEnd(1)}
            className="cardcontainer relative  w-1/2 h-[80vh]"
          >
            <div className="card w-full h-full rounded-xl overflow-hidden">
              <h1 className="absolute flex overflow-hidden right-full translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] text-8xl font-['Neue Montreal'] text-[#CDEA68] leading-none tracking-tighter">
                {"VISE".split("").map((item, index) => (
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={cards[1]}
                    transition={{
                      ease: [0.22, 1, 0.36, 1],
                      delay: index * 0.05,
                    }}
                    className="inline-block"
                  >
                    {item}
                  </motion.span>
                ))}
              </h1>
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
                alt=""
              />
            </div>
            <div className="button font-['Neue Montreal'] uppercase block flex  gap-5 mt-5 ">
              <h1 className="rounded-full border-[1px] px-2 py-2 text-sm border-black text-[212121] ">
                agency
              </h1>
              <h1 className="rounded-full border-[1px] px-2 py-2 text-sm border-black text-[212121] ">
                company presentation
              </h1>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
export default Feature;
<div></div>;
