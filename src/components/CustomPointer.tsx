import React, { useEffect, useRef } from "react";

const CustomPointer: React.FC = () => {
  const pointerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const movePointer = (e: MouseEvent) => {
      if (pointerRef.current) {
        pointerRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
    };
    window.addEventListener("mousemove", movePointer);
    return () => window.removeEventListener("mousemove", movePointer);
  }, []);

  return (
    <div
      ref={pointerRef}
      className="fixed top-0 left-0 z-[9999] pointer-events-none"
      style={{
        transition: "transform 0.18s cubic-bezier(.4,0,.2,1)",
        willChange: "transform",
      }}
    >
      <div className="flex items-center justify-center">
        <div className="bg-black bg-opacity-80 text-white px-4 py-2  text-xs font-bold shadow-lg animate-pulse">
          VIEW
        </div>
      </div>
    </div>
  );
};

export default CustomPointer;