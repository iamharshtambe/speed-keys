import RaceOn from './components/RaceOn';
import RaceTrack from './components/RaceTrack';
import TypingArea from './components/TypingArea';

export default function Home() {
  return (
    <div className="flex items-center justify-center pt-20">
      <div className="w-[850px] rounded-lg bg-neutral-50 p-10">
        <RaceOn />
        <RaceTrack />
        <TypingArea />
      </div>
    </div>
  );
}
