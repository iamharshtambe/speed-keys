'use client';

import { useState } from 'react';

function addMark(
  i: number,
  marked: { correctlyTyped: number; totalCharTyped: number },
): string {
  const textColor = i < marked.correctlyTyped ? 'text-green-500' : '';
  const bgColor =
    i >= marked.correctlyTyped && i < marked.totalCharTyped ? 'bg-red-300' : '';
  return `${textColor} ${bgColor}`;
}

export default function TextToBeTyped({ text }: { text: string }) {
  const [marked, setMarked] = useState({
    correctlyTyped: 0,
    totalCharTyped: 0,
  });

  return (
    <p>
      {text.split('').map((char, i) => {
        return (
          <span className={addMark(i, marked)} key={char + i}>
            {char}
          </span>
        );
      })}
    </p>
  );
}
