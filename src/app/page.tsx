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
    <main>
      <div className="revealer fixed inset-0 bg-black z-[9999] origin-top scale-y-100 pointer-events-none" />
      <Header />
      <Page1 />
      {/* Banner between Page1 and Page2 */}
      <Banner />
      <Page2 />
      <Page3 />
      <Page4 />
      <Page5 />
      <Page6 />
      <Page7 />
      <Page8 />
     
      <Footer />
      <FooterContact/>
    </main>
  );
}
