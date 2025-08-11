import React from "react";
import CustomPointer from "./CustomPointer";

const Page5 = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      <CustomPointer />
      <video
        className="absolute inset-0 w-full h-full object-cover z-0 filter brightness-80 contrast-100"
        src="https://framerusercontent.com/assets/rujes19qnH473SeNzCgMuihBfOs.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="absolute inset-0 w-full h-ful z-10 pointer-events-none" />
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
          STILL BREATHING
        </h1>
        <div className="text-white text-sm xs:text-base font-medium">
          2025 &nbsp;·&nbsp; Brand Film
        </div>
      </div>
    </section>
  );
};

export default Page5;