"use client";

import { useEffect, useState } from "react";

export default function CursorFollower() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    function moveHandler(e: MouseEvent) {
      setPosition({ x: e.clientX, y: e.clientY });
    }

    window.addEventListener("mousemove", moveHandler);

    return () => window.removeEventListener("mousemove", moveHandler);
  });

  return (
    <div
      className="pointer-events-none fixed z-[9999] h-2 w-2 rounded-full bg-red-500 opacity-80 transition-transform ease-out"
      style={{
        transform: `translate(${position.x - 5}px, ${position.y - 5}px)`,
      }}
    />
  );
}
