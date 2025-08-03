import React from "react";

const Page4 = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-cover z-0 filter brightness-80 contrast-100"
        src="https://framerusercontent.com/assets/Qd3Ic7sGavLSLs8uRt69vDA9tTc.mp4"
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
         ECHOES OF US
        </h1>
        <div className="text-white text-base font-medium">
          2023 &nbsp;·&nbsp; Wedding Film
        </div>
      </div>
    </section>
  );
};

export default Page4;