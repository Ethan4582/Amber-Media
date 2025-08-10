import React from "react";
import CustomPointer from "./CustomPointer";

const Page8 = () => {
  const servicesLeft = [
    "Brand Films",
    "Commercials & Ad Spots",
    "Event Cinematography",
    "Editorial & Fashion Films",
    "Wedding Films"
  ];
  
  const servicesRight = [
    "Product Films",
    "Music Videos",
    "Documentary Shorts",
    "Social Media Visuals",
    "Creative Direction"
  ];

  return (
    <section className="relative w-full min-h-screen bg-black text-white px-4 sm:px-8 py-20 sm:py-28 flex flex-col">
      <CustomPointer/>
      {/* Description Text */}
      <div className="w-full mb-10 sm:mb-16">
       <p className="text-2xl xs:text-3xl sm:text-5xl md:text-5xl lg:text-5xl font-bold leading-tight max-w-9xl">
  We&apos;re a videography studio driven by a love for cinematic storytelling 
  and intentional filmmaking. From brand films and commercials to 
  weddings and editorial pieces, we bring a crafted, artful approach to 
  every frame.
</p>
      </div>

      {/* Divider Line */}
      <hr className="border-t border-white opacity-30 mb-2" />

      {/* Services Section */}
      <div className="flex-1 flex flex-col md:flex-row justify-between items-start gap-8 mb-10 sm:mb-16 relative">
        {/* Services Header */}
        <div className="w-full md:w-auto md:flex-1">
          <h2 className="text-base xs:text-lg font-semibold tracking-wide uppercase mb-6 xs:mb-8 md:mb-0 border-b border-white pb-2 md:border-none md:pb-0">
            SERVICES
          </h2>
        </div>

        {/* Services Lists Container */}
        <div className="flex-1 flex flex-col md:flex-row justify-end gap-8 sm:gap-16 md:gap-8 w-full">
          {/* Left Column */}
          <div className="flex-1 space-y-2">
            {servicesLeft.map((service, index) => (
              <div key={index} className="text-xs xs:text-sm font-bold">
                {service}
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="flex-1 space-y-2 md:absolute md:right-0 md:top-0 mt-8 md:mt-0">
            {servicesRight.map((service, index) => (
              <div key={index} className="text-xs xs:text-sm font-bold">
                {service}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page8;