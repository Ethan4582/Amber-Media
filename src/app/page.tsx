"use client";
import { useEffect } from "react";
import Header from "../components/Header";
import Page1 from "@/components/page1";
import Page2 from "@/components/page2";
import Page3 from "@/components/page3";
import Page4 from "@/components/page4";
import Page5 from "@/components/page5";
import Page6 from "@/components/page6";
import Page7 from "@/components/page7";
import Page8 from "@/components/page8";
import Lenis from "lenis";
import { useRevealer } from "@/hooks/useReveal";
import Banner from "@/components/banner";
import Footer from "@/components/footer2";
import FooterContact from "@/components/contact";

export default function Home() {
  useRevealer();
  
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  return (
    <main className="relative">
      <div className="revealer fixed inset-0 bg-black z-[9999] origin-top scale-y-100 pointer-events-none" />
      
      {/* Header - Fixed on top */}
      <Header />
      
      {/* Overlapping Pages Container */}
      <div className="relative">
        {/* Page 1 */}
        <div className="relative z-50 ">
          <Page1 />
        </div>
        
        {/* Banner */}
        <div className="relative z-40  ">
          <Banner />
        </div>
        
        {/* Page 2 - Overlaps Page 1 */}
        <div className="relative z-40  ">
          <Page2 />
        </div>
        
        {/* Page 3 - Overlaps Page 2 */}
        <div className="relative z-30  -mt-32">
          <Page3 />
        </div>
        
        {/* Page 4 - Overlaps Page 3 */}
        <div className="relative z-20 -mt-32">
          <Page4 />
        </div>
        
        {/* Page 5 - Overlaps Page 4 */}
        <div className="relative z-10 -mt-32">
          <Page5 />
        </div>
        
        {/* Page 6 - Overlaps Page 5 */}
        <div className="relative z-[9] -mt-32">
          <Page6 />
        </div>
        
        {/* Page 7 - Overlaps Page 6 */}
        <div className="relative z-[8]  -mt-32">
          <Page7 />
        </div>
        
        {/* Page 8 - Overlaps Page 7 */}
        <div className="relative z-[7]  -mt-32">
          <Page8 />
        </div>
        
        {/* Footer - Overlaps Page 8 */}
        <div className="relative z-[6]  mt-12">
          <Footer />
          <FooterContact />
        </div>
        
        {/* Footer Contact - Overlaps Footer */}
        <div className="relative z-[5]  mt-42">
        
        </div>
      </div>
    </main>
  );
}