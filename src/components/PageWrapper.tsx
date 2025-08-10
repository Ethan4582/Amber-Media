// components/PageWrapper.tsx
'use client';

import { useRef, ReactNode } from 'react';
import gsap from 'gsap';

interface PageWrapperProps {
  children: ReactNode;
  id: string;
}

export default function PageWrapper({ children, id }: PageWrapperProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div 
      id={id}
      ref={containerRef}
      className="page-section relative w-full h-screen"
    >
      {children}
    </div>
  );
}