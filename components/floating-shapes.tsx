"use client";

import useParallax from "@/hooks/useParallax";

type Shape = {
  id: number;
  size: string;
  position: string;
  gradient: string;
}[];

const shapes: Shape = [
  {
    id: 1,
    size: "w-72 h-72",
    position: "top-16 left-12",
    gradient: "from-indigo-500 via-violet-500 to-purple-600",
  },
  {
    id: 2,
    size: "w-96 h-96",
    position: "top-1/8 right-12",
    gradient: "from-cyan-400 via-sky-500 to-blue-500",
  },
  {
    id: 3,
    size: "w-64 h-64",
    position: "bottom-16 left-1/5",
    gradient: "from-pink-500 via-fuchsia-500 to-rose-500",
  },
  {
    id: 4,
    size: "w-80 h-80",
    position: "bottom-1/4 right-1/5",
    gradient: "from-emerald-400 via-teal-500 to-green-500",
  },
];

export default function FloatingShapes() {
  const scrollY = useParallax();

  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden">
      {shapes.map((shape) => (
        <div
          key={shape.id}
          className={`absolute animate-pulse rounded-full bg-gradient-to-r opacity-25 blur-3xl ${shape.size} ${shape.position} ${shape.gradient}`}
          style={{
            transform: `translateY(${scrollY * 0.5}px) rotate(${scrollY * 0.1}deg)`,
          }}
        />
      ))}
    </div>
  );
}
