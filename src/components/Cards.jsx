import React from "react";

function Cards() {
  return (
    <div className="w-full h-screen flex items-center gap-5 px-32">
      <div className="cardcontainer w-1/2 h-[60vh]">
        <div className="card relative w-full rounded-xl h-full bg-[#004D43] flex items-center justify-center">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            alt=""
          />
          <button className='absolute px-3 py-1 border-[1px] border-[#CDEA68] font-["Neue Montreal"] font-medium rounded-full left-10 bottom-10 text-[#CDEA68]'>
            &copy;2019-2022
          </button>
        </div>
      </div>

      <div className="cardcontainer flex gap-5 w-1/2 h-[60vh]">
        <div className="card relative w-1/2 rounded-xl h-full bg-[#192826] flex items-center justify-center">
        <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
            alt=""
          />
          <button className='absolute px-3 py-1 border-[1px] font-["Neue Montreal"] font-medium rounded-full left-5 bottom-10 text-slate-50 uppercase'>
            rating 5.0 on clutch
          </button>
        </div>
        <div className="card relative w-1/2 rounded-xl h-full bg-[#192826] flex items-center justify-center ">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
            alt=""
          />
          <button className='absolute px-3 py-1 border-[1px] font-["Neue Montreal"] font-medium rounded-full left-5 bottom-10 text-slate-50 uppercase'>
            business bootcamp
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cards;
