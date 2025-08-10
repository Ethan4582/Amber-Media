import React from "react";
import CustomPointer from "./CustomPointer";

const Page6 = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      <CustomPointer />
      <video
        className="absolute inset-0 w-full h-full object-cover z-0 filter brightness-80 contrast-100"
        src="https://framerusercontent.com/assets/8s2BBmflDJt5OXnAkNfeLkErqw.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="absolute inset-0 w-full h-ful z-10 pointer-events-none" />
      <div className="relative flex flex-col items-center justify-center h-full text-center px-2 sm:px-0">
        <h1
          className="text-white text-[32px] xs:text-[48px] sm:text-[62px] font-bold tracking-tight"
          style={{
            fontFamily: '"Antonio", "Antonio Placeholder", sans-serif',
          }}
        >
          SCENT & SILENCE
        </h1>
        <div className="text-white text-sm xs:text-base font-medium mt-2">
          2022 &nbsp;·&nbsp; Comercial
        </div>
      </div>
    </section>
  );
};

export default Page6;