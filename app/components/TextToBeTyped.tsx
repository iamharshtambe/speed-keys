'use client';

import { Mark, useTypingStore } from '@/store/useTypingStore';

function addMark(i: number, marked: Mark): string {
  const textColor = i < marked.correctlyTyped ? 'text-green-500' : '';
  const bgColor =
    i >= marked.correctlyTyped && i < marked.totalCharTyped ? 'bg-red-300' : '';
  return `${textColor} ${bgColor}`;
}

export default function TextToBeTyped({ text }: { text: string }) {
  const marked = useTypingStore((state) => state.mark);

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
