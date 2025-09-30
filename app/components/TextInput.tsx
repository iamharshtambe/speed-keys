'use client';

import { useTypingLogic } from '../../hooks/useTypingLogic';

export default function TextInput({ text }: { text: string }) {
  const { typed, setTyped, raceOver } = useTypingLogic({ text });

  return (
    <div>
      <input
        type="text"
        value={typed}
        onChange={(e) => setTyped(e.target.value)}
        autoFocus
        onPaste={(e) => e.preventDefault()}
        disabled={raceOver}
        className="w-full rounded-lg border border-neutral-300 p-1 focus:border-black focus:outline-none"
      />
    </div>
  );
}
