'use client';

import { getTypingText } from '@/lib/getTypingText';
import { create } from 'zustand';

type TypingStore = {
  text: string;
  raceCompleted: boolean;
  raceOver: () => void;
  startNewRace: () => void;
};

export const useTypingStore = create<TypingStore>()((set) => ({
  text: getTypingText(),

  raceCompleted: false,

  raceOver: () => set({ raceCompleted: true }),

  startNewRace: () => set({ text: getTypingText(), raceCompleted: false }),
}));
