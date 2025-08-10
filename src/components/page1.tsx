import React from "react";
import Footer1 from "./Footer1";
import CustomPointer from "./CustomPointer";
import Header from "./Header";

const Page1 = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <Header />
      <video
        className="absolute inset-0 w-full h-full object-cover z-0 filter brightness-80 contrast-100"
        src="https://framerusercontent.com/assets/QvLulg0pZq1vK3tRI9hxALTpuw.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          pointerEvents: "none",
          background: "transparent",
          zIndex: 1000,
        }}
      >
        <CustomPointer />
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full">
        <h1
          className="
            text-white
            text-[60px]
            xs:text-[80px]
            sm:text-[120px]
            md:text-[185px]
            font-medium
            text-center
            tracking-[-0.06em]
            leading-[1.1em]
            uppercase
            px-2
            sm:px-4
          "
          style={{
            fontFamily: '"Antonio", "Antonio Placeholder", sans-serif',
          }}
        >
          Amber Studio
        </h1>
      </div>
      <Footer1 />
      <div className="absolute bottom-0 left-0 right-0 z-50"></div>
    </div>
  );
};

export default Page1;