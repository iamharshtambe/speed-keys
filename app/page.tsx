'use client';

import { useTypingStore } from '@/store/useTypingStore';
import RaceOn from './components/RaceOn';
import RaceTrack from './components/RaceTrack';
import TypingArea from './components/TypingArea';
import Result from './components/Result';

export default function Home() {
  const raceCompleted = useTypingStore((state) => state.raceCompleted);

  return (
    <div className="flex items-center justify-center pt-20">
      <div className="w-[850px] rounded-lg bg-neutral-50 p-10">
        <RaceOn />
        <RaceTrack />

        {raceCompleted ? <Result /> : <TypingArea />}
      </div>
    </div>
  );
}
