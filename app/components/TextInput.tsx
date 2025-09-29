'use client';

import { useEffect, useMemo, useState } from 'react';

export default function TextInput({ text }: { text: string }) {
  const [typed, setTyped] = useState('');
  const [index, setIndex] = useState(0);

  const { words, totalWords } = useMemo(() => {
    const words = text.split(' ');
    const totalWords = words.length;
    return { words, totalWords };
  }, [text]);

  useEffect(() => {
    const currentWord = words[index];

    if (typed === ' ') {
      setTyped('');
      return;
    }

    if (typed[currentWord.length] === ' ') {
      setTyped('');
      setIndex((prev) => prev + 1);
      return;
    }
  }, [typed]);

  return (
    <div>
      <input
        type="text"
        value={typed}
        onChange={(e) => setTyped(e.target.value)}
        autoFocus
        onPaste={(e) => e.preventDefault()}
        className="w-full rounded-lg border border-neutral-300 p-1 focus:border-black focus:outline-none"
      />
    </div>
  );
}
