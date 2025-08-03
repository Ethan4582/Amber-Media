import React from "react";
import CustomPointer from "./CustomPointer";

const Page3 = () => {
  return (
    
    <section className="relative w-full h-screen overflow-hidden">
       <CustomPointer/>
      <video
        className="absolute inset-0 w-full h-full object-cover z-0 filter brightness-80 contrast-100"
        src="https://framerusercontent.com/assets/z4Oilzyk8mFMgNgJGrjfmEBBNE.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="absolute inset-0 w-full h-ful z-10 pointer-events-none" />
      <div className="relative  flex flex-col items-center justify-center h-full text-center">
        <h1
          className="text-white text-[62px] font-bold tracking-tight "
          style={{
            fontFamily: '"Antonio", "Antonio Placeholder", sans-serif',
          }}
        >
         AFTER THE QUIET
        </h1>
        <div className="text-white text-base font-medium">
          2023 &nbsp;·&nbsp; Short Film
        </div>
      </div>

    </section>
  );
};

export default Page3;