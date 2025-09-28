import RaceOn from "./components/RaceOn";
import RaceTrack from "./components/RaceTrack";
import TypingArea from "./components/TypingArea";

export default function Home() {
  return (
    <div className="flex items-center justify-center pt-20">
      <div className="w-[800px] rounded-md bg-white p-10">
        <RaceOn />
        <RaceTrack />
        <TypingArea />
      </div>
    </div>
  );
}
