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

export default function Home() {
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
      <Header />
      <Page1 />
      <Page2 />
      <Page3 />
      <Page4 />
      <Page5 />
      <Page6 />
      <Page7 />
      <Page8 />
    </main>
  );
}
