import { useTypingStore } from '@/store/useTypingStore';
import { useEffect, useMemo, useState } from 'react';

type TypingError = { state: false } | { state: true; at: number };

export function useTypingLogic({ text }: { text: string }) {
  const [typed, setTyped] = useState('');
  const [index, setIndex] = useState(0);
  const [mismatch, setMismatch] = useState<TypingError>({ state: false });
  const updateCorrectMark = useTypingStore.getState().updateCorrectMark;
  const updateInorrectMark = useTypingStore.getState().updateIncorrectMark;

  const { words, totalWords } = useMemo(() => {
    const words = text.split(' ');
    return { words, totalWords: words.length };
  }, [text]);

  const raceOver = index >= totalWords;

  useEffect(() => {
    if (index >= totalWords) return; // stop if already past last word

    const currentWord = words[index];
    const typedLength = typed.length;
    const totalCharTyped =
      words.slice(0, index).join('').length + index + typedLength; // total typed characters

    // prevent leading space
    if (typed === ' ') {
      setTyped('');
      return;
    }

    // mismatch reset
    if (mismatch.state) {
      if (mismatch.at >= typedLength) {
        setMismatch({ state: false });
        updateCorrectMark(totalCharTyped);
        return;
      }

      updateInorrectMark(totalCharTyped);

      return;
    }

    // check if the last word is completely typed
    if (index === totalWords - 1) {
      if (typed === currentWord) {
        useTypingStore.getState().raceOver();
        return;
      }
    }

    // move to next word when space typed correctly
    if (typed[currentWord.length] === ' ') {
      if (typed.slice(0, -1) === currentWord) {
        setTyped('');
        setIndex((prev) => prev + 1);
      }
      return;
    }

    // mismatch detection
    if (typed[typedLength - 1] !== currentWord[typedLength - 1]) {
      setMismatch({ state: true, at: typedLength - 1 });
      updateInorrectMark(totalCharTyped);
      return;
    }

    updateCorrectMark(totalCharTyped);
  }, [typed, index, words, totalWords, mismatch]);

  return { typed, setTyped, raceOver };
}
