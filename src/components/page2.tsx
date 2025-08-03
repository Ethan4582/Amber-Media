
import React from "react";

const Page2 = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="https://framerusercontent.com/assets/dRHWzVptVvpgdXINm46ZLtoiwoY.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="absolute inset-0 w-full h-full bg-black bg-opacity-40 z-10 pointer-events-none" />
      <div className="relative z-20 flex flex-col items-end justify-center min-h-screen pr-24">
        <h1
          className="text-white text-[32px] font-bold text-right tracking-tight mb-6"
          style={{
            fontFamily: '"Antonio", "Antonio Placeholder", sans-serif',
          }}
        >
          OF EARTH
        </h1>
        <div className="text-white text-base font-medium text-right mb-8">
          2022 &nbsp;·&nbsp; Commercial
        </div>
        <button className="bg-black bg-opacity-70 text-white font-bold px-6 py-2 rounded text-base">
          VIEW
        </button>
      </div>
    </div>
  );
};

export default Page2;