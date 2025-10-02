'use client';

import { getTypingText } from '@/lib/getTypingText';
import { create } from 'zustand';

export type Mark = {
  correctlyTyped: number;
  totalCharTyped: number;
};

type TypingStore = {
  text: string;
  raceCompleted: boolean;
  mark: Mark;
  raceOver: () => void;
  startNewRace: () => void;
  updateCorrectMark: (totalCharTyped: number) => void;
  updateIncorrectMark: (totalCharTyped: number) => void;
};

export const useTypingStore = create<TypingStore>()((set) => ({
  text: getTypingText(),

  raceCompleted: false,

  mark: { correctlyTyped: 0, totalCharTyped: 0 },

  raceOver: () => set({ raceCompleted: true }),

  startNewRace: () => set({ text: getTypingText(), raceCompleted: false }),

  updateCorrectMark: (totalCharTyped) =>
    set({ mark: { correctlyTyped: totalCharTyped, totalCharTyped } }),

  updateIncorrectMark: (totalCharTyped) =>
    set((state) => ({ mark: { ...state.mark, totalCharTyped } })),
}));
