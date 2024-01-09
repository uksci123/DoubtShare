import React from "react";

const HeroSection = () => {
  return (
    <div className="bg-[#61777F] w-full h-[350px]">
      <div className="flex flex-col justify-center items-center h-full">
        <div className="flex items-center">
            <img src="doubtShareWhite.png" alt=""  className="w-[100px]"/>
            <p className="text-white text-4xl sm:text-7xl">DoubtShare</p>
        </div>
        <p className="text-white text-center text sm:text-2xl pl-1 w-1/2">India's no.1 doubt solving platform</p>
      </div>
    </div>
  );
};

export default HeroSection;
