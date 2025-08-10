import React from "react";
import CustomPointer from "./CustomPointer";

const Page2 = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      <CustomPointer />
      <video
        className="absolute inset-0 w-full h-full object-cover z-0 filter brightness-80 contrast-100"
        src="https://framerusercontent.com/assets/dRHWzVptVvpgdXINm46ZLtoiwoY.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="absolute inset-0 w-full h-full z-10 pointer-events-none" />
      <div className="relative flex flex-col items-center justify-center h-full text-center">
        <h1
          className="
            text-white
            text-[36px]
            xs:text-[48px]
            sm:text-[62px]
            font-bold
            tracking-tight
          "
          style={{
            fontFamily: '"Antonio", "Antonio Placeholder", sans-serif',
          }}
        >
          OF EARTH
        </h1>
        <div className="text-white text-sm xs:text-base font-medium">
          2022 &nbsp;·&nbsp; Commercial
        </div>
      </div>
    </section>
  );
};

export default Page2;