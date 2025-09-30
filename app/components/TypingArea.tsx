'use client';

import { useTypingStore } from '@/store/useTypingStore';
import TextInput from './TextInput';

export default function TypingArea() {
  const text = useTypingStore((state) => state.text);

  return (
    <div className="w-full space-y-4 rounded-lg border border-neutral-300 bg-neutral-100 px-4 py-5 font-mono font-light">
      <div>
        <p>{text}</p>
      </div>

      <div>
        <TextInput text={text} />
      </div>
    </div>
  );
}
