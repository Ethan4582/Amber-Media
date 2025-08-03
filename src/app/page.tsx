'use client';


import Page1 from '@/components/page1';
import Header from '../components/Header';
import { useEffect, useState } from 'react';
import Page2 from '@/components/page2';
import Page3 from '@/components/page3';
import Page4 from '@/components/page4';
import Page5 from '@/components/page5';
import Page6 from '@/components/page6';
import Page7 from '@/components/page7';
import Page8 from '@/components/pagg8';


export default function Home() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true,
    });
  };

  return (
    <div className="relative h-screen w-full overflow-auto">
      {/* Header */}
      <Header />

      <Page1/>
      <Page2/>
      <Page3/>
      <Page4/>
      <Page5/>
      <Page6/>
      <Page7/>
      <Page8/>

    </div>
  );
}
