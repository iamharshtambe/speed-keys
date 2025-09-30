'use client';

import { typingTexts } from '@/data/data';
import { create } from 'zustand';

type TypingStore = {
  text: string;
};

export const useTypingStore = create<TypingStore>()((set) => ({
  text: typingTexts[Math.floor(Math.random() * typingTexts.length)]
    .split(' ')
    .slice(0, 5)
    .join(' '),
}));
