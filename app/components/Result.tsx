import { useTypingStore } from '@/store/useTypingStore';

export default function Result() {
  return (
    <div>
      <button
        onClick={useTypingStore.getState().startNewRace}
        className="cursor-pointer rounded-lg bg-gradient-to-r from-pink-500 to-blue-500 px-[10px] py-[5px] font-semibold text-white hover:bg-gradient-to-l"
      >
        New Race
      </button>
    </div>
  );
}
