import { typingTexts } from '@/data/data';

export function getTypingText() {
  return typingTexts[Math.floor(Math.random() * typingTexts.length)]
    .split(' ')
    .slice(0, 5)
    .join(' ');
}
